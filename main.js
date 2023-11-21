document.addEventListener("click", (e) => {
  const isActive = e.target
    .closest("[data-dropdown]")
    ?.classList.contains("active");

  //   Make sure if there are any active menu items to deactivate them all
  document.querySelectorAll("[data-dropdown]").forEach((drop) => {
    drop.classList.remove("active");
    drop.querySelector("img").src = "images/icon-arrow-down.svg";
  });

  const DD = e.target.closest("[data-dropdown-button]");
  // If there was a dropdown clicked make the dropdown menu active in order to see it
  if (!isActive && DD != null) {
    e.target.closest("[data-dropdown]").classList.add("active");
    DD.querySelector("img").src = "images/icon-arrow-up.svg";
  }
});
