(() => {
    "use strict";
    // Mobile menu toggle
    const body = document.querySelector("body");
    const bookmarkLogo = document.querySelector(".header__nav-bar-bookmark");
    const navBar = document.querySelector(".header__nav-bar");
    const hamburgerIcon = document.querySelector(
        ".header__nav-bar-icon-hamburger"
    );
    const closeIcon = document.querySelector(".header__nav-bar-icon-close");
    const navLinks = document.querySelector(".header__nav-bar-list");
    const loginButton = document.querySelector(
        ".header__nav-bar-list-link--login"
    );
    const socialIcons = document.querySelector(
        ".header__nav-bar-list-link-social"
    );

    hamburgerIcon.addEventListener("click", () => {
        navBar.classList.add("relative");
        bookmarkLogo.classList.add("z-11");
        bookmarkLogo.setAttribute(
            "src",
            "resources/Imagenes/logo-bookmark-mb-active.svg"
        );
        loginButton.classList.remove("shadow");
        loginButton.classList.add("border-white");
        navLinks.classList.remove("hidden");
        navLinks.classList.add("w-full");
        navLinks.classList.add("h-full");
        navLinks.classList.add("top-0");
        navLinks.classList.add("left-0");
        navLinks.classList.add("fixed");
        navLinks.classList.add("flex");
        navLinks.classList.add("flex-col");
        navLinks.classList.add("justify-center");
        navLinks.classList.add("gap-10");
        navLinks.classList.add("z-10");
        socialIcons.classList.remove("hidden");
        socialIcons.classList.add("flex");
        body.classList.remove("overflow-visible");
        body.classList.add("overflow-hidden");
        closeIcon.classList.remove("hidden");
        closeIcon.classList.add("z-11");
        hamburgerIcon.classList.add("hidden");
    });
    closeIcon.addEventListener("click", () => {
        navBar.classList.remove("relative");
        bookmarkLogo.classList.remove("z-10");
        bookmarkLogo.setAttribute(
            "src",
            "resources/Imagenes/logo-bookmark.svg"
        );
        loginButton.classList.add("shadow");
        loginButton.classList.remove("border-white");
        navLinks.classList.add("hidden");
        navLinks.classList.remove("w-full");
        navLinks.classList.remove("h-full");
        navLinks.classList.remove("top-0");
        navLinks.classList.remove("left-0");
        navLinks.classList.remove("fixed");
        socialIcons.classList.add("hidden");
        socialIcons.classList.remove("flex");
        body.classList.add("overflow-visible");
        body.classList.remove("overflow-hidden");
        closeIcon.classList.add("hidden");
        hamburgerIcon.classList.remove("hidden");
    });

    // Features tab switch
    const tabs = document.querySelectorAll(".features__tabs-label");
    const contents = document.querySelectorAll(".features__content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const targetTab = tab.getAttribute("data-tab");

            // Remove active state from all tabs
            tabs.forEach((t) =>
                t.classList.remove("border-b-(--color-red-bg)")
            );

            // Hide all content sections by adding hidden and removing flex
            contents.forEach((content) => {
                content.classList.add("hidden");
                content.classList.remove("grid");
            });

            // Activate selected tab
            tab.classList.add("border-b-(--color-red-bg)");

            // Show selected content by adding flex and removing hidden
            const targetContent = document.querySelector(
                `.features__content--${targetTab}`
            );
            targetContent.classList.remove("hidden");
            targetContent.classList.add("grid");
        });
    });

    // FAQ tabs
    const faqQuestions = document.querySelectorAll(
        ".faqs__tabs-container-question"
    );

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const container = question.closest(".faqs__tabs-container");
            const answer = container.querySelector(
                ".faqs__tabs-container-answer"
            );

            const isVisible = !answer.classList.contains("hidden");
            const allAnswers = document.querySelectorAll(
                ".faqs__tabs-container-answer"
            );

            allAnswers.forEach((item) => {
                item.classList.add("hidden");
            });

            const allArrows = document.querySelectorAll(
                ".faqs__tabs-container-question-arrow"
            );
            allArrows.forEach((arrow) => {
                arrow.classList.remove("rotate-180");
                arrow.classList.remove("filter-(--animate-fill-red)");
            });

            if (!isVisible) {
                answer.classList.remove("hidden");

                // Rotate the arrow for this question
                const arrow = question.querySelector(
                    ".faqs__tabs-container-question-arrow"
                );
                if (arrow) {
                    arrow.classList.add("rotate-180");
                    arrow.classList.add("filter-(--animate-fill-red)");
                }
            }
        });
    });

    // Form email validation
    const emailInput = document.querySelector(
        ".form__inputs-email-container-input"
    );
    const emailErrorMessage = document.querySelector(
        ".form__inputs-email-container-error-message"
    );
    const emailErrorIcon = document.querySelector(
        ".form__inputs-email-container-error"
    );

    // Show error message on invalid input
    emailInput.addEventListener("invalid", (event) => {
        event.preventDefault();
        emailErrorIcon.classList.remove("hidden");
        emailErrorMessage.classList.remove("hidden");
        emailInput.classList.remove("border-transparent");
        emailInput.classList.add("border-(--color-red-bg)");
    });

    // Removes error message on click input
    emailInput.addEventListener("click", () => {
        emailErrorIcon.classList.add("hidden");
        emailErrorMessage.classList.add("hidden");
        emailInput.classList.add("border-transparent");
        emailInput.classList.remove("border-(--color-red-bg)");
    });
})();
