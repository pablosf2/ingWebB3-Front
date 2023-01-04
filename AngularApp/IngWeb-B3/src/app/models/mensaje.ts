export interface Mensaje{
    id: string;
    remitente?: string;
    nombreRemitente: string;
    destinatario: string;
    mensaje: string;
    timestamp: Date;
}