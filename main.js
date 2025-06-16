document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app-root');
  root.innerHTML = `
    <h1>Beetus Buddy</h1>
    <p>Glucose Level: <span id="glucose-level">100</span> mg/dL</p>
    <button id="inc-btn">Increase 💉</button>
    <button id="dec-btn">Decrease 🍭</button>
  `;

  const glucoseSpan = document.getElementById('glucose-level');
  let glucose = 100;

  document.getElementById('inc-btn').addEventListener('click', () => {
    glucose += 5;
    glucoseSpan.textContent = glucose;
  });

  document.getElementById('dec-btn').addEventListener('click', () => {
    glucose = Math.max(0, glucose - 5);
    glucoseSpan.textContent = glucose;
  });
});