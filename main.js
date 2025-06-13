document.getElementById('connect-dexcom').onclick = () => {
  window.location.href = '/.netlify/functions/auth-dexcom';
};

document.getElementById('refresh-glucose').onclick = async () => {
  const resp = await fetch('/.netlify/functions/fetch-glucose');
  const { value, displayTime } = await resp.json();
  document.getElementById('glucose').textContent =
    `Current: ${value} mg/dL @ ${displayTime}`;
};
