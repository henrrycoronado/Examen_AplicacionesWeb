export const Router = {
  init: () => {
    document.querySelectorAll("a.navbar-btn").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        const route = href.startsWith("#") ? href.slice(1) : href;
        Router.go(route);
      });
    });

    window.addEventListener("hashchange", () => {
      Router.go(location.hash.slice(1) || "/");
    });
    Router.go(location.hash.slice(1) || "/");
  },

  go: (route) => {
    let pageElement = null;
    switch (route) {
      case "/favorite":
        pageElement = document.createElement("favorite-page");
        break;
      case "/saved":
        pageElement = document.createElement("saved-page");
        break;
      default:
        pageElement = document.createElement("home-page");
        break;
    }

    if (pageElement) {
      const main = document.querySelector("main");
      let currentPage = main.firstElementChild;
      if (currentPage) {
        currentPage.remove();
      }
      main.appendChild(pageElement);
    }
    window.scrollTo(0, 0);
  },
};
