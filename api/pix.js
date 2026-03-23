export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const payload = req.body;
    const sk = process.env.FASTSOFT_SECRET_KEY;
    if (!sk) {
        return res.status(500).json({
            message: 'FASTSOFT_SECRET_KEY nao configurada no ambiente'
        });
    }
    const authHeader = 'Basic ' + Buffer.from('x:' + sk).toString('base64');

    try {
        const response = await fetch('https://api.fastsoftbrasil.com/api/user/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': authHeader
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json().catch(() => ({}));
        
        if (!response.ok) {
            console.error('FastSoft PIX error', {
                status: response.status,
                data
            });
            return res.status(response.status).json(data);
        }

        const transaction = data.transaction || data.data || data.result || data;
        const pix = transaction.pix || data.pix || {};

        return res.status(200).json({
            ...data,
            transaction,
            id: transaction.id || data.id || null,
            status: transaction.status || data.status || null,
            qrCode: pix.qrCode || transaction.qrCode || data.qrCode || pix.code || transaction.pixCode || data.pixCode || "",
            qrCodeBase64: pix.qrCodeBase64 || transaction.qrCodeBase64 || data.qrCodeBase64 || pix.qrImage || transaction.qrImage || data.qrImage || ""
        });
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno ao comunicar com o Gateway', error: error.message });
    }
}
