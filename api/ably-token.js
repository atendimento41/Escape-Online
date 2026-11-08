// Gera um token temporário do Ably para os jogos (segunda via de conexão).
// A chave fica só no Vercel (variável de ambiente ABLY_API_KEY), nunca no HTML público.
// Cada navegador manda um identificador fixo (cid), exigido pelo Ably para aparelhos.
const crypto = require('crypto');

module.exports = (req, res) => {
  const key = process.env.ABLY_API_KEY || '';
  const i = key.indexOf(':');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json');
  if (i < 1) { res.statusCode = 503; res.end(JSON.stringify({ error: 'ABLY_API_KEY não configurada' })); return; }
  const q = new URL(req.url, 'http://x').searchParams;
  const clientId = String(q.get('cid') || '').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40) || ('mz-' + crypto.randomBytes(6).toString('hex'));
  const keyName = key.slice(0, i), secret = key.slice(i + 1);
  const ttl = 8 * 3600 * 1000;                                   // 8 horas
  const capability = JSON.stringify({ 'mz:*': ['publish', 'subscribe'] });
  const timestamp = Date.now();
  const nonce = crypto.randomBytes(16).toString('hex');
  const text = [keyName, ttl, capability, clientId, timestamp, nonce].join('\n') + '\n';
  const mac = crypto.createHmac('sha256', secret).update(text).digest('base64');
  res.end(JSON.stringify({ keyName, ttl, capability, clientId, timestamp, nonce, mac }));
};
