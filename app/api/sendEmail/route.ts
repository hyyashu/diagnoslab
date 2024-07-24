import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

interface EmailRequestBody {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        const { email, subject, message }: EmailRequestBody = await request.json();
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST!,
            port: parseInt(process.env.SMTP_PORT || '587', 10),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER!,
                pass: process.env.SMTP_PASS!,
            },
        });

        await transporter.sendMail({
            from: email || `"Diagnos Lab" <${process.env.SMTP_USER}>`,
            to: 'care@diagnoslab.in',
            subject: subject || 'No Subject',
            text: message || 'No Text',
            html: message,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error as Error);
        return NextResponse.json({ success: false, error: `Failed to send email: ${Error}` });
    }
}
