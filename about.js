document.addEventListener("DOMContentLoaded", function () {

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  function activateTab(tabId) {

    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    const targetButton = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    const targetContent = document.getElementById(tabId);

    if (targetButton && targetContent) {
      targetButton.classList.add("active");
      targetContent.classList.add("active");

      // Optional: scroll content into view (adjust for fixed navbar)
      setTimeout(() => {
        targetContent.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }

  // Sidebar click
  tabButtons.forEach(button => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");
      activateTab(tabId);
      history.replaceState(null, null, "#" + tabId);
    });
  });

  // 🔥 IMPORTANT — Handle navbar click (hash load)
  function handleHash() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      activateTab(hash);
    }
  }

  // Run once on load
  handleHash();

  // Run when hash changes (if already on about page)
  window.addEventListener("hashchange", handleHash);

});