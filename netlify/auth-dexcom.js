// netlify/functions/auth-dexcom.js
exports.handler = async () => {
  const redirectUri = encodeURIComponent(
    'https://<YOUR-SITE>.netlify.app/.netlify/functions/dexcom-callback'
  );
  const url =
    `https://sandbox-api.dexcom.com/v2/oauth2/login?` +
    `client_id=${process.env.DEXCOM_CLIENT_ID}` +
    `&response_type=code` +
    `&scope=offline_access` +
    `&redirect_uri=${redirectUri}`;
  return { statusCode: 302, headers: { Location: url } };
};
