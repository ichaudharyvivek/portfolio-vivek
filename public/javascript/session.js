document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("doNotShow")) {
    sessionStorage.setItem("doNotShow", true);
    document.querySelector(".splash").style.display = "flex";
  } else {
    document.querySelector(".splash").style.display = "none";
  }
});
