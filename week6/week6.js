const time = new Date();

sessionStorage.setItem("hours", time.getHours());
sessionStorage.setItem("minutes", time.getMinutes());
sessionStorage.setItem("seconds", time.getSeconds());

document.getElementById("hours").textContent =
  sessionStorage.getItem("hours");

document.getElementById("minutes").textContent =
  sessionStorage.getItem("minutes");

document.getElementById("seconds").textContent =
  sessionStorage.getItem("seconds");

