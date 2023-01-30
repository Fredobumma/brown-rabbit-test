window.onload = function () {
  // IMPLEMENTING NAVBAR MENU
  // variables
  const menus = document.querySelectorAll(".menu");
  const current = document.getElementsByClassName("is_visible");
  const navList = document.getElementsByClassName("nav-list");

  // event listeners
  menus.forEach((menu) => menu.addEventListener("click", toggleMenu));
  navList[0].addEventListener("click", closeMenu);

  //logic and functions
  function toggleMenu() {
    current[0].classList.remove("is_visible");
    this.classList.add("is_visible");

    if (this.classList.contains("close_icon"))
      navList[0].classList.add("hide_nav-list");
    else navList[0].classList.remove("hide_nav-list");
  }

  function closeMenu() {
    if (window.innerWidth < 992) {
      menus.forEach((menu) => {
        menu !== current[0]
          ? menu.classList.add("is_visible")
          : current[0].classList.remove("is_visible");
      });
      navList[0].classList.add("hide_nav-list");
    }
  }

  // IMPLEMENTING SEARCH
  // variables
  const searchBox = document.querySelectorAll(".search");
  const searchSm = document.getElementsByClassName("search-sm");
  const searchTab = document.getElementsByClassName("search-tab");
  const tabWrapper = document.getElementById("tab-wrapper");
  const searchInput = document.getElementById("search-input");
  let timer;

  //event listeners
  searchBox.forEach((el) => el.addEventListener("click", toggleSearch));
  tabWrapper.addEventListener("click", closeSearch);
  searchInput.addEventListener("input", search);
  searchInput.addEventListener("keyup", timing);

  //logic and functions
  function toggleSearch() {
    if (searchTab[0].classList.contains("open-search-tab")) {
      searchSm[0].classList.remove("open-search");
      searchTab[0].classList.remove("open-search-tab");
    } else {
      searchSm[0].classList.add("open-search");
      searchTab[0].classList.add("open-search-tab");
    }
  }

  function closeSearch() {
    searchSm[0].classList.remove("open-search");
    searchTab[0].classList.remove("open-search-tab");
  }

  function search() {
    const articles = document.querySelectorAll(".article");
    const searchQuery = searchInput.value;
    articles.forEach((article) => {
      if (article.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
        article.classList.remove("is_hidden");
      } else {
        article.classList.add("is_hidden");
      }
    });
  }

  function timing() {
    clearTimeout(timer);
    timer = setTimeout(search, 500);
  }
};
