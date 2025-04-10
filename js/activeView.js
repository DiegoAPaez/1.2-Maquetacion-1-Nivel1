(() => {
    // Mobile menu toggle
    const body = document.querySelector("body");
    const navBar = document.querySelector(".header__nav-bar");
    const hamburgerIcon = document.querySelector(
        ".header__nav-bar-icon-hamburger"
    );
    const closeIcon = document.querySelector(".header__nav-bar-icon-close");
    const navLinks = document.querySelector(".header__nav-bar-list");
    const loginButton = document.querySelector(
        ".header__nav-bar-list-link--login"
    );

    hamburgerIcon.addEventListener("click", () => {
        navBar.classList.add("menu-open");
        loginButton.classList.remove("shadow");
        body.style.overflowY = "hidden";
    });

    closeIcon.addEventListener("click", () => {
        navBar.classList.remove("menu-open");
        loginButton.classList.add("shadow");
        body.style.overflowY = "auto";
    });

    navLinks.addEventListener("click", () => {
        navBar.classList.remove("menu-open");
        body.style.overflowY = "auto";
    });

    // FAQ tabs
    const faqsAnimation = document.querySelectorAll(".faqs__tabs-container");

    faqsAnimation.forEach((container) => {
        container.addEventListener("click", () => {
            const isActive = container.classList.contains("active");

            document
                .querySelectorAll(".faqs__tabs-container")
                .forEach((item) => {
                    item.classList.remove("active");
                });

            if (!isActive) {
                container.classList.add("active");
            }
        });
    });

    // Features tab switch
    const tabs = document.querySelectorAll(".features__tabs-label");
    const contents = document.querySelectorAll(".features__content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const targetTab = tab.getAttribute("data-tab");

            tabs.forEach((t) => t.classList.remove("active"));
            contents.forEach((content) => content.classList.remove("active"));

            tab.classList.add("active");
            document
                .querySelector(`.features__content--${targetTab}`)
                .classList.add("active");
        });
    });

    // Form email validation
    const emailInput = document.querySelector(
        ".form__inputs-email-container-input"
    );
    const emailContainer = document.querySelector(
        ".form__inputs-email-container"
    );

    emailInput.addEventListener("click", () => {
        emailContainer.classList.remove("invalid");
    });

    emailInput.addEventListener("invalid", (event) => {
        event.preventDefault();
        emailContainer.classList.add("invalid");
    });
})();
