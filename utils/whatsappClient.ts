import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let clientInstance: Client | null = null;
let clientReady = false;
const sessionPath = path.join(__dirname, 'session');

export const getClient = async () => {
    if (!clientInstance) {
        clientInstance = new Client({
            authStrategy: new LocalAuth({
                dataPath: sessionPath
            })
        });

        clientInstance.on('qr', (qr) => {
            console.log('QR RECEIVED', qr);
            console.log(sessionPath)
            qrcode.generate(qr, {small: true});
        });

        clientInstance.on('authenticated', () => {
            console.log('Client Authenticated');
        });

        clientInstance.on('auth_failure', (msg) => {
            console.error('AUTHENTICATION FAILURE', msg);
            clientReady = false;
        });

        clientInstance.on('ready', () => {
            console.log('Client is ready!');
            clientReady = true;
        });

        try {
            await clientInstance.initialize();
        } catch (error) {
            console.error('Error initializing client:', error);
        }
    }

    return clientInstance;
};

export const isClientReady = () => clientReady;
