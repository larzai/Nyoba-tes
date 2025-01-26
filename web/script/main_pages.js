document.addEventListener("DOMContentLoaded", function() {
  const pages1 = document.getElementById("pages-1");
  const pages2 = document.getElementById("pages-2");
  const pages3 = document.getElementById("pages-3");
  const pages4 = document.getElementById("pages-4");
  const pages5 = document.getElementById("pages-5");

  const navigationBottomApp = document.getElementById("navBottomApps");
  navigationBottomApp.innerHTML = `
    <ul>
      <li id="home-btn" class="active">
        <i class="fi fi-rr-house-chimney"></i>
        <span>Home</span>
      </li>
      <li id="search-btn">
        <i class="fi fi-rr-search"></i>
        <span>Search</span>
      </li>
      <li id="rules-btn">
        <i class="fi fi-rr-rules"></i>
        <span>Rules</span>
      </li>
      <li id="galery-btn">
        <i class="fi fi-rr-picture"></i>
        <span>Gallery</span>
      </li>
      <li id="login-btn">
        <i class="fi fi-rr-sign-in-alt"></i>
        <span>Login</span>
      </li>
    </ul>
    <div id="indicator"></div>
  `;

  const indicator = document.getElementById("indicator");
  const homeBtn = document.getElementById("home-btn");
  const searchBtn = document.getElementById("search-btn");
  const rulesBtn = document.getElementById("rules-btn");
  const galeryBtn = document.getElementById("galery-btn");
  const loginBtn = document.getElementById("login-btn");

  function moveIndicator(btn) {
    const btnRect = btn.getBoundingClientRect();
    const navRect = navigationBottomApp.getBoundingClientRect();
    indicator.style.left = `${btnRect.left - navRect.left + btnRect.width / 2 - indicator.clientWidth / 2}px`;
  }

  function hideAllPages() {
    pages1.style.display = "none";
    pages2.style.display = "none";
    pages3.style.display = "none";
    pages4.style.display = "none";
    pages5.style.display = "none";
  }

  function removeActiveClass() {
    homeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
    rulesBtn.classList.remove("active");
    galeryBtn.classList.remove("active");
    loginBtn.classList.remove("active");
  }

  homeBtn.addEventListener("click", function() {
    hideAllPages();
    pages1.style.display = "block";
    removeActiveClass();
    homeBtn.classList.add("active");
    moveIndicator(homeBtn);
  });

  searchBtn.addEventListener("click", function() {
    hideAllPages();
    pages2.style.display = "block";
    removeActiveClass();
    searchBtn.classList.add("active");
    moveIndicator(searchBtn);
  });

  rulesBtn.addEventListener("click", function() {
    hideAllPages();
    pages3.style.display = "block";
    removeActiveClass();
    rulesBtn.classList.add("active");
    moveIndicator(rulesBtn);
  });

  galeryBtn.addEventListener("click", function() {
    hideAllPages();
    pages4.style.display = "block";
    removeActiveClass();
    galeryBtn.classList.add("active");
    moveIndicator(galeryBtn);
  });

  loginBtn.addEventListener("click", function() {
    hideAllPages();
    pages5.style.display = "block";
    removeActiveClass();
    loginBtn.classList.add("active");
    moveIndicator(loginBtn);
  });

  moveIndicator(homeBtn);
  pages1.style.display = "block"; 
  homeBtn.classList.add("active");
});
