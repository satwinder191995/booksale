async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    window.location.replace("/login");
  } else {
    window.location.replace("/login");
  }
}

document.querySelector('#logout').addEventListener('click', logout);
