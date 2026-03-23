export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { id } = req.query;
    if (!id) return res.status(400).json({ message: 'Transaction ID is required' });

    const sk = "sk_46a275b9254bc7e7eb392a2f5d9852dd120f8ce6";
    const authHeader = 'Basic ' + Buffer.from(sk + ':').toString('base64');

    try {
        const response = await fetch(`https://api.fastsoftbrasil.com/api/user/transactions/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': authHeader
            }
        });

        const data = await response.json().catch(() => ({}));
        return res.status(response.status).json(data);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno ao checar status', error: error.message });
    }
}
