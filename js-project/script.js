const button = document.getElementById('clickBtn');
const message = document.getElementById('message');
const count = document.getElementById('count');

let clicks = 0;

button.addEventListener('click', () => {
  clicks += 1;
  count.textContent = clicks;
  message.textContent = `You clicked the button ${clicks} time(s)!`;
});
