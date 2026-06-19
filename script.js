// ======================
// PAGE LOAD
// ======================

window.addEventListener("DOMContentLoaded", () => {

    updateCounters();
    setupSearch();
    setupLogin();
    setupRegister();
    setupCartButtons();
    setupWishlistButtons();
    setupDarkMode();
    setupScrollTop();

});

// ======================
// COUNTERS
// ======================

function updateCounters() {

    const cartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];

    const wishlistItems =
        JSON.parse(localStorage.getItem("wishlistItems")) || [];

    const cartCount =
        document.getElementById("cartCount");

    const wishlistCount =
        document.getElementById("wishlistCount");

    if (cartCount) {
        cartCount.textContent = cartItems.length;
    }

    if (wishlistCount) {
        wishlistCount.textContent = wishlistItems.length;
    }
}

// ======================
// SEARCH
// ======================

function setupSearch() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {

        const value =
            searchInput.value.toLowerCase().trim();

        document
            .querySelectorAll(".product-card")
            .forEach(card => {

                const name =
                    card.querySelector(".name")
                    ?.textContent
                    .toLowerCase() || "";

                card.style.display =
                    name.includes(value)
                        ? ""
                        : "none";
            });
    });
}

// ======================
// LOGIN
// ======================

function setupLogin() {

    const loginBtn =
        document.getElementById("loginBtn");

    const loginModal =
        document.getElementById("loginModal");

    const closeLogin =
        document.getElementById("closeLogin");

    const loginSubmit =
        document.getElementById("loginSubmit");

    if (loginBtn && loginModal) {

        loginBtn.onclick = () => {
            loginModal.style.display = "flex";
        };
    }

    if (closeLogin && loginModal) {

        closeLogin.onclick = () => {
            loginModal.style.display = "none";
        };
    }

    if (loginSubmit) {

        loginSubmit.onclick = () => {

            const username =
                document.getElementById("username").value;

            if (!username) {

                alert("Enter username");
                return;
            }

            localStorage.setItem(
                "username",
                username
            );

            alert(
                "Welcome " + username
            );

            loginModal.style.display = "none";
        };
    }
}

// ======================
// REGISTER
// ======================

function setupRegister() {

    const registerModal =
        document.getElementById("registerModal");

    const openRegister =
        document.getElementById("openRegister");

    const closeRegister =
        document.getElementById("closeRegister");

    const registerBtn =
        document.getElementById("registerBtn");

    const loginModal =
        document.getElementById("loginModal");

    if (openRegister) {

        openRegister.onclick = (e) => {

            e.preventDefault();

            if (loginModal)
                loginModal.style.display = "none";

            registerModal.style.display = "flex";
        };
    }

    if (closeRegister) {

        closeRegister.onclick = () => {

            registerModal.style.display = "none";
        };
    }

    if (registerBtn) {

        registerBtn.onclick = () => {

            const user = {

                name:
                    document.getElementById("regName").value,

                email:
                    document.getElementById("regEmail").value,

                password:
                    document.getElementById("regPass").value
            };

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

            alert("Registration Successful");

            registerModal.style.display = "none";
        };
    }
}

// ======================
// CART
// ======================

function setupCartButtons() {

    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const card =
                        this.closest(".product-card");

                    const item = {

                        name:
                            card.querySelector(".name")
                            .textContent,

                        price:
                            card.querySelector(".price")
                            .textContent,

                        image:
                            card.querySelector("img")
                            .src,

                        quantity: 1
                    };

                    const cartItems =
                        JSON.parse(
                            localStorage.getItem("cartItems")
                        ) || [];

                    cartItems.push(item);

                    localStorage.setItem(
                        "cartItems",
                        JSON.stringify(cartItems)
                    );

                    updateCounters();

                    showToast(
                        "Added To Cart"
                    );
                }
            );
        });
}

// ======================
// WISHLIST
// ======================

function setupWishlistButtons() {

    document
        .querySelectorAll(".wishlist-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const card =
                        this.closest(".product-card");

                    const item = {

                        name:
                            card.querySelector(".name")
                            .textContent,

                        price:
                            card.querySelector(".price")
                            .textContent,

                        image:
                            card.querySelector("img")
                            .src
                    };

                    const wishlistItems =
                        JSON.parse(
                            localStorage.getItem("wishlistItems")
                        ) || [];

                    wishlistItems.push(item);

                    localStorage.setItem(
                        "wishlistItems",
                        JSON.stringify(
                            wishlistItems
                        )
                    );

                    updateCounters();

                    showToast(
                        "Added To Wishlist"
                    );
                }
            );
        });
}

// ======================
// DARK MODE
// ======================

function setupDarkMode() {

    const darkBtn =
        document.getElementById("darkModeBtn");

    if (!darkBtn) return;

    darkBtn.onclick = () => {

        document.body.classList.toggle(
            "dark"
        );
    };
}

// ======================
// TOP BUTTON
// ======================

function setupScrollTop() {

    const topBtn =
        document.getElementById("topBtn");

    if (!topBtn) return;

    window.addEventListener(
        "scroll",
        () => {

            topBtn.style.display =
                window.scrollY > 300
                    ? "block"
                    : "none";
        }
    );

    topBtn.onclick = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

// ======================
// BANNER
// ======================



// ======================
// TOAST
// ======================

function showToast(message) {

    const toast =
        document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "20px";
    toast.style.background = "#2874f0";
    toast.style.color = "white";
    toast.style.padding = "12px";
    toast.style.borderRadius = "8px";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}