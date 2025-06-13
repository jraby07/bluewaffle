// netlify/functions/dexcom-callback.js
const fetch = require('node-fetch');

exports.handler = async ({ queryStringParameters }) => {
  const code = queryStringParameters.code;
  const body = new URLSearchParams({
    client_id: process.env.DEXCOM_CLIENT_ID,
    client_secret: process.env.DEXCOM_CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri:
      'https://<YOUR-SITE>.netlify.app/.netlify/functions/dexcom-callback'
  });

  const tokenRes = await fetch(
    'https://sandbox-api.dexcom.com/v2/oauth2/token',
    { method: 'POST', body }
  );
  const { access_token, refresh_token } = await tokenRes.json();
  // TODO: securely persist tokens
  return {
    statusCode: 302,
    headers: { Location: '/index.html?connected=1' }
  };
};
