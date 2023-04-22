const username = localStorage.getItem('username');
if (!username) {
  let usernamePrompt;
  do {
    usernamePrompt = prompt('Please enter your username:');
  } while (usernamePrompt === '' || usernamePrompt === null);
  localStorage.setItem('username', usernamePrompt);
}
if (username) {
  document.querySelector('.john1').textContent = username;
}