function toggle() {
  const html = document.documentElement;

  html.classList.toggle("dark");

  const img = document.querySelector(".profile img");

  if (html.classList.contains("dark")) {
    img.setAttribute("src", "./img/avatar.png");
  } else {
    img.setAttribute("src", "./img/avatar-light.png");
  }
}
