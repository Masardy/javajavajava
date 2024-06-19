document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const title = document.createElement('h1');
  title.textContent = 'Website dengan JavaScript';
  app.appendChild(title);

  const description = document.createElement('p');
  description.textContent = 'Ini adalah contoh website yang dibuat dengan 75% JavaScript.';
  app.appendChild(description);

  const button = document.createElement('button');
  button.textContent = 'Klik Saya!';
  app.appendChild(button);

  const message = document.createElement('p');
  message.style.display = 'none';
  message.textContent = 'Terima kasih telah mengklik!';
  app.appendChild(message);

  button.addEventListener('click', () => {
    message.style.display = 'block';
  });
});