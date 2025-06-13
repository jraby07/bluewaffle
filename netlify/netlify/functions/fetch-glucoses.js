// netlify/functions/fetch-glucose.js
const fetch = require('node-fetch');

exports.handler = async () => {
  const access_token = /* load your stored access_token here */;
  const res = await fetch(
    'https://sandbox-api.dexcom.com/v2/users/self/egvs?count=1',
    { headers: { Authorization: `Bearer ${access_token}` } }
  );
  const [{ value, displayTime }] = (await res.json()).egvs;
  return { statusCode: 200, body: JSON.stringify({ value, displayTime }) };
};
