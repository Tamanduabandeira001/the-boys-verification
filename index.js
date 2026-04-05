const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota de verificação
app.get('/api/verificar', async (req, res) => {
    try {
        await fetch(
            'https://discord.com/api/webhooks/1490428478720577536/Y3bu9MPg1ytfocmmLAz-ZX7B1uhyvs17cFiMCud4Xmzqwz7AIrMJ6jlJtn8lfJEf99Jf',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: '📢 Verificação feita! Alguém clicou no botão!',
                }),
            }
        );
        res.send('✅ Verificação enviada!');
    } catch (err) {
        console.error(err);
        res.send('❌ Ocorreu um erro.');
    }
});

// Servir index.html
app.use(express.static('.'));

// Start do servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
// Serve o index.html na raiz
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
