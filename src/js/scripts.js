import { searchFound, noSearchFound } from "./search.js";
import { modalContent } from "./modalContent.js";

window.onload = function () {
  // <------------ IMPLEMENTING NAVBAR MENU ------------>
  function handleMenuClick() {
    // variables
    const menus = document.querySelectorAll(".menu");
    const current = document.getElementsByClassName("is_visible");
    const navList = document.getElementsByClassName("nav-list")[0];

    //logic and functions
    function toggleMenu() {
      current[0].classList.remove("is_visible");
      this.classList.add("is_visible");

      if (this.classList.contains("close_icon")) {
        closeNav();
      } else {
        navList.classList.remove("hide_nav-list");
        window.innerWidth < 992 && document.body.classList.add("fixed-scroll");
      }
    }

    const closeMenu = () => {
      if (window.innerWidth < 992) {
        menus.forEach((menu) => {
          menu !== current[0]
            ? menu.classList.add("is_visible")
            : current[0].classList.remove("is_visible");
        });
        closeNav();
      }
    };

    const closeNav = () => {
      navList.classList.add("hide_nav-list");
      document.body.classList.remove("fixed-scroll");
    };

    // event listeners
    menus.forEach((menu) => menu.addEventListener("click", toggleMenu));
    navList.addEventListener("click", closeMenu);
  }
  handleMenuClick();

  // <---------- IMPLEMENTING SEARCH ------------>
  function handleSearch() {
    // variables
    const navList = document.getElementsByClassName("nav-list")[0];
    const searchBox = document.querySelectorAll(".search");
    const searchSm = document.getElementsByClassName("search-sm")[0];
    const searchTab = document.getElementsByClassName("search-tab")[0];
    const tabWrapper = document.getElementById("tab-wrapper");
    const searchInput = document.querySelectorAll(".search-input");
    let timer;

    //logic and functions
    const toggleSearch = () => {
      if (searchTab.classList.contains("open-search-tab")) {
        closeSearch();
      } else {
        searchSm.classList.add("open-search");
        searchTab.classList.add("open-search-tab");
        window.innerWidth < 992 && document.body.classList.add("fixed-scroll");
      }
    };

    const closeSearch = () => {
      searchSm.classList.remove("open-search");
      searchTab.classList.remove("open-search-tab");
      navList.classList.contains("hide_nav-list") &&
        document.body.classList.remove("fixed-scroll");
    };

    const searching = (e) => {
      const articles = document.querySelectorAll(".article");
      const searchedArticles = document.getElementById("searched-articles");
      const allInputs = [...searchInput];
      const currentInput = allInputs.filter((s) => s.value);
      const searchQuery = currentInput[0] ? currentInput[0].value : "";
      const searchArray = [];
      allInputs.forEach((input) => (input.value = e.target.value));

      articles.forEach((article) => {
        if (
          article.innerText.toLowerCase().includes(searchQuery.toLowerCase()) &&
          searchQuery !== ""
        ) {
          searchArray.push({
            title: article.innerText,
            body: searchFound(article),
          });
        }
      });

      searchedArticles.innerHTML =
        searchArray.length === 0
          ? noSearchFound()
          : searchArray.map((arr) => arr.body).join(" ");
    };

    const timing = (e) => {
      clearTimeout(timer);
      timer = setTimeout(searching, 500, e);
    };

    //event listeners
    searchBox.forEach((el) => el.addEventListener("click", toggleSearch));
    tabWrapper.addEventListener("click", closeSearch);
    searchInput.forEach((input) => {
      input.addEventListener("input", timing);
      input.addEventListener("keyup", timing);
    });
  }
  handleSearch();

  // <---------- IMPLEMENTING ARTICLE MODAL ------------>
  function handleArticleClick() {
    // variables
    const articleModal = document.querySelectorAll(".article-modal");
    const modalContainer =
      document.getElementsByClassName("modal-container")[0];

    // logic and function
    articleModal.forEach((article) => {
      const {
        firstElementChild: { children: picture },
        lastElementChild: { children: content },
      } = article;
      const {
        firstElementChild: { src },
      } = picture[0];
      const id = article.getAttribute("data-bs-target").slice(1);

      modalContainer.innerHTML += modalContent(id, src, content);
    });
  }
  handleArticleClick();

  // <---------- IMPLEMENTING ARTICLE TRUNCATE ------------>
  const articleBody = document.querySelectorAll(".article__body");
  articleBody.forEach((article) => {
    article.innerHTML = truncate(article.innerHTML, 350);
  });

  function truncate(string, limit) {
    const length = string.length;
    return length > limit ? `${string.slice(0, limit)}...` : string;
  }
};
