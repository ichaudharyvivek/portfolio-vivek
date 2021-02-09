// Get tabheader, indicator, contents and innerWidth
let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-content")[0];

// Get all the options inside tabheader
let tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener("click", function () {
    console.log();
    // Remove current active from tabHeader
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");

    // Add current active to tabHeader
    tabsPane[i].classList.add("active");

    // Change body accordingly
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    setTimeout(() => {
      tabBody.getElementsByTagName("div")[i].classList.add("active");
    }, 100);

    // Change the active indicator accordingly for desktop screens only
    if (window.innerWidth > 650 && window.innerWidth > window.innerHeight) {
      tabIndicator.style.top = `${i * 43}px`;
    }
  });
}
