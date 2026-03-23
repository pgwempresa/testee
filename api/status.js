export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { id } = req.query;
    if (!id) return res.status(400).json({ message: 'Transaction ID is required' });

    const sk = process.env.FASTSOFT_SECRET_KEY;
    if (!sk) {
        return res.status(500).json({
            message: 'FASTSOFT_SECRET_KEY nao configurada no ambiente'
        });
    }
    const authHeader = 'Basic ' + Buffer.from('x:' + sk).toString('base64');

    try {
        const response = await fetch(`https://api.fastsoftbrasil.com/api/user/transactions/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': authHeader
            }
        });

        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
            console.error('FastSoft status error', {
                status: response.status,
                transactionId: id,
                data
            });
        }
        const transaction = data.transaction || data.data || data.result || data;
        const pix = transaction.pix || data.pix || {};
        const qrCode =
            pix.qrCode ||
            transaction.qrCode ||
            data.qrCode ||
            pix.code ||
            transaction.pixCode ||
            data.pixCode ||
            pix.copyPaste ||
            transaction.copyPaste ||
            data.copyPaste ||
            "";
        const qrCodeBase64 =
            pix.qrCodeBase64 ||
            transaction.qrCodeBase64 ||
            data.qrCodeBase64 ||
            pix.qrImage ||
            transaction.qrImage ||
            data.qrImage ||
            pix.encodedImage ||
            transaction.encodedImage ||
            data.encodedImage ||
            "";

        return res.status(response.status).json({
            ...data,
            transaction,
            id: transaction.id || data.id || null,
            status: transaction.status || data.status || null,
            qrCode,
            qrCodeBase64
        });
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno ao checar status', error: error.message });
    }
}
