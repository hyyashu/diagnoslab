import { NextRequest, NextResponse } from 'next/server';
import { getClient, isClientReady } from '@/utils/whatsappClient';

export async function POST(req: NextRequest) {
    const { to, type, message } = await req.json();
    const client = await  getClient();

    if (!isClientReady()) {
        return NextResponse.json({ success: false, message: 'WhatsApp client is not ready. Please try again later.' }, { status: 503 });
    }

    try {
        let recipientId;

        if (type === 'individual') {
            recipientId = `${to}@c.us`;
        } else if (type === 'group') {
            recipientId = `${to}`;
        } else {
            return NextResponse.json({ success: false, message: 'Invalid type. Must be "individual" or "group".' }, { status: 400 });
        }

        await client.sendMessage(recipientId, message);

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending message:', error);
        return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
    }
}
