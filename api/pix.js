export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const payload = req.body;
    const sk = process.env.FASTSOFT_SECRET_KEY || "sk_46a275b9254bc7e7eb392a2f5d9852dd120f8ce6";
    const authHeader = 'Basic ' + Buffer.from(sk + ':').toString('base64');

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
            return res.status(response.status).json(data);
        }
        
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno ao comunicar com o Gateway', error: error.message });
    }
}
