(function () {
  var titles = {
    it: "Nyxon — sistemi per server e commissioni",
    en: "Nyxon — server systems and commissions"
  };
  var descriptions = {
    it: "Portfolio di Nyxon. Plugin Paper e il server RPG ValaryRPG.",
    en: "Nyxon's portfolio. Paper plugins and the ValaryRPG server."
  };

  var root = document.documentElement;
  var buttons = document.querySelectorAll(".lang button");
  var description = document.querySelector('meta[name="description"]');

  function apply(lang) {
    var next = lang === "en" ? "en" : "it";
    root.lang = next;
    root.dataset.lang = next;
    document.title = titles[next];
    if (description) description.setAttribute("content", descriptions[next]);
    var nav = document.querySelector(".mast nav");
    if (nav) nav.setAttribute("aria-label", next === "en" ? "Sections" : "Sezioni");
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-lang") === next ? "true" : "false");
    });
    try {
      localStorage.setItem("nyxon-lang", next);
    } catch (error) {
      /* la pagina resta nella lingua scelta anche se lo storage è bloccato */
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      apply(button.getAttribute("data-lang"));
    });
  });

  apply(root.dataset.lang === "en" ? "en" : "it");
})();
