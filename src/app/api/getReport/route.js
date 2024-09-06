import axios from "axios";
import xml2js from "xml2js";

async function sendSoapRequest(endpoint, requestBody, soapAction) {
  try {
    const response = await axios.post(endpoint, requestBody, {
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        SOAPAction: soapAction,
      },
      auth: {
        username: "VayamInfotech",
        password: "D#$%^&*()o",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error sending SOAP request to ${endpoint}:`, error.message);
    throw new Error("Error sending SOAP request");
  }
}

// Utility function to extract data from XML response
async function extractDataFromResponse(responseData, type) {
  const parser = new xml2js.Parser();

  try {
    const result = await parser.parseStringPromise(responseData);
    let extractedData;

    switch (type) {
      case "clientCode":
        extractedData =
          result["s:Envelope"]["s:Body"][0]["GetDataSetResponse"][0][
            "GetDataSetResult"
          ][0]["diffgr:diffgram"][0]["NewDataSet"][0]["Table"][0]["CD"][0];
        break;
      case "accessionId":
        extractedData =
          result["s:Envelope"]["s:Body"][0]["ExecuteScalarResponse"][0][
            "ExecuteScalarResult"
          ][0]["_"];
        break;
      default:
        throw new Error("Invalid type specified");
    }

    console.log(`Extracted ${type}:`, extractedData);
    return extractedData;
  } catch (error) {
    console.error(`Error parsing XML response for ${type}:`, error);
    throw new Error(`Failed to parse ${type} from response`);
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  let accid = searchParams.get("accid")?.trim();
  let clientid = searchParams.get("clientid")?.trim();
  const logo = searchParams.get("logo")?.trim() || "Y";
  const lrno = searchParams.get("lrno")?.trim();

  if (!accid && !lrno) {
    return new Response(
      JSON.stringify({ error: "Either accid or Lrno is required" }),
      { status: 400 }
    );
  }

  if (!accid && lrno) {
    try {
      const accessionRequest = `
        <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
          <s:Body>
            <ExecuteScalar xmlns="http://tempuri.org/">
              <sAppId>HYYASHU-G14_40040~fe80::a279:7405:f3c0:1258%9|2405:201:a411:f097:7435:2519:55a4:d995|2405:201:a411:f097:dd33:f001:af12:7f02|192.168.29.139~hyyashu</sAppId>
              <SQL>SELECT ACC_ID FROM ACC WHERE TRF_ID='${lrno}'</SQL>
            </ExecuteScalar>
          </s:Body>
        </s:Envelope>`;

      const accessionResponse = await sendSoapRequest(
        "http://94.130.133.131:809/LIMSSERVC.svc",
        accessionRequest,
        "http://tempuri.org/ILIMSSERVC/ExecuteScalar"
      );

      accid = await extractDataFromResponse(accessionResponse, "accessionId");

      if (!accid) {
        return new Response(
          JSON.stringify({ error: "Accession ID not found" }),
          { status: 404 }
        );
      }
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: "Error fetching Accession ID",
          details: error.message,
        }),
        { status: 500 }
      );
    }
  }

  if (!accid) {
    return new Response(JSON.stringify({ error: "accid is required" }), {
      status: 400,
    });
  }

  if (!clientid) {
    try {
      const clientRequest = `
        <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
          <s:Body>
            <GetDataSet xmlns="http://tempuri.org/">
              <sAppId>HYYASHU-G14_40040~fe80::a279:7405:f3c0:1258%9|2405:201:a411:f097:7435:2519:55a4:d995|2405:201:a411:f097:dd33:f001:af12:7f02|192.168.29.139~hyyashu</sAppId>
              <str1>SELECT CD, NAME FROM PARTY WHERE ID IN (SELECT PARTY_ID FROM ACC WHERE ACC_ID='${accid}' UNION SELECT CC_ID FROM ACC WHERE ACC_ID='${accid}' AND SND_RPT_TO_CC='Y')</str1>
              <str2/>
            </GetDataSet>
          </s:Body>
        </s:Envelope>`;

      const clientResponse = await sendSoapRequest(
        "http://94.130.133.131:809/LIMSSERVC.svc",
        clientRequest,
        "http://tempuri.org/ILIMSSERVC/GetDataSet"
      );

      clientid = await extractDataFromResponse(clientResponse, "clientCode");
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: "Error fetching client code",
          details: error.message,
        }),
        { status: 500 }
      );
    }
  }

  const fetchReportRequest = `
    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
      <s:Body>
        <GetAccReportD xmlns="http://tempuri.org/">
          <StrACC_Id>${accid}</StrACC_Id>
          <Acc_Lctnid>5</Acc_Lctnid>
          <Report_Destn>${logo}</Report_Destn>
          <ClntCd>${clientid}</ClntCd>
          <UserID>5000002522</UserID>
          <strAppId>HYYASHU-G14_28460~fe80::a279:7405:f3c0:1258%9|2405:201:a411:f097:4ed:6795:8c48:5fb7|2405:201:a411:f097:dd33:f001:af12:7f02|192.168.29.31~hyyashu</strAppId>
          <StrPathNonPath/>
          <StrDept/>
        </GetAccReportD>
      </s:Body>
    </s:Envelope>`;

  try {
    const reportResponse = await sendSoapRequest(
      "http://94.130.133.131:809/LIMSSERVC.svc",
      fetchReportRequest,
      "http://tempuri.org/ILIMSSERVC/GetAccReportD"
    );

    return new Response(JSON.stringify({ data: reportResponse }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error fetching report",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
