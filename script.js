window.onload = () => {

  let cartItems =
    JSON.parse(localStorage.getItem("cartItems"))
    || [];

  let wishlistItems =
    JSON.parse(localStorage.getItem("wishlistItems"))
    || [];

  const cart =
    document.getElementById("cartCount");

  const wish =
    document.getElementById("wishlistCount");

  if(cart)
    cart.textContent = cartItems.length;

  if(wish)
    wish.textContent = wishlistItems.length;

};
// ==========================
// SEARCH FUNCTIONALITY
// ==========================

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(card => {
      const name = card.querySelector(".name").textContent.toLowerCase();

      card.style.display = name.includes(value)
        ? "block"
        : "none";
    });
  });
}

// ==========================
// LOGIN SYSTEM
// ==========================

const loginBtn =
document.querySelector(".login-wrapper label");

const loginModal =
document.getElementById("loginModal");

const closeLogin =
document.getElementById("closeLogin");

const loginSubmit =
document.getElementById("loginSubmit");

if (loginBtn && loginModal) {

  loginBtn.addEventListener("dblclick", () => {
    loginModal.style.display = "flex";
  });

}

if (closeLogin) {

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

// ==========================
// CART
// ==========================

document.querySelectorAll(".add-cart").forEach(button => {

  button.addEventListener("click", function(e){

    e.stopPropagation();

    const card = this.closest(".product-card");

    const name =
      card.querySelector(".name").textContent;

    const offer =
      card.querySelector(".offer").textContent;

    const image =
      card.querySelector("img").src;

    let cartItems =
      JSON.parse(localStorage.getItem("cartItems"))
      || [];

    cartItems.push({
      name,
      offer,
      image
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );

    document.getElementById("cartCount").textContent =
      cartItems.length;

    alert("Added To Cart");

  });

});

// ==========================
// WISHLIST
// ==========================

document.querySelectorAll(".wishlist-btn").forEach(button => {

  button.addEventListener("click", function(e){

    e.stopPropagation();

    const card = this.closest(".product-card");

    const name =
      card.querySelector(".name").textContent;

    const offer =
      card.querySelector(".offer").textContent;

    const image =
      card.querySelector("img").src;

    let wishlistItems =
      JSON.parse(localStorage.getItem("wishlistItems"))
      || [];

    wishlistItems.push({
      name,
      offer,
      image
    });

    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(wishlistItems)
    );

    document.getElementById("wishlistCount").textContent =
      wishlistItems.length;

    alert("Added To Wishlist");

  });

});

// ==========================
// PRODUCT MODAL
// ==========================

const modal =
document.getElementById(
"productModal"
);

const modalTitle =
document.getElementById(
"modalTitle"
);

const modalOffer =
document.getElementById(
"modalOffer"
);

const closeModal =
document.getElementById(
"closeModal"
);

document
.querySelectorAll(".product-card")
.forEach(card => {

  card.addEventListener(
    "click",
    () => {

      if (
        !modal ||
        !modalTitle ||
        !modalOffer
      ) return;

      modalTitle.textContent =
      card.querySelector(".name")
      .textContent;

      modalOffer.textContent =
      card.querySelector(".offer")
      .textContent;

      modal.style.display =
      "flex";

    }
  );

});

if (closeModal) {

  closeModal.onclick =
  () => {
    modal.style.display =
    "none";
  };

}

window.onclick =
event => {

  if (
    event.target === modal
  ) {

    modal.style.display =
    "none";

  }

};

// ==========================
// DARK MODE
// ==========================

const darkBtn =
document.getElementById(
"darkModeBtn"
);

if (darkBtn) {

  darkBtn.addEventListener(
    "click",
    () => {

      document.body
      .classList
      .toggle("dark");

    }
  );

}

// ==========================
// BACK TO TOP
// ==========================

const topBtn =
document.getElementById(
"topBtn"
);

window.addEventListener(
"scroll",
() => {

  if (!topBtn) return;

  if (
    window.scrollY > 300
  ) {

    topBtn.style.display =
    "block";

  } else {

    topBtn.style.display =
    "none";

  }

});

if (topBtn) {

  topBtn.onclick =
  () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

}

// ==========================
// TOAST
// ==========================

function showToast(
message
) {

  const toast =
  document.createElement(
    "div"
  );

  toast.textContent =
  message;

  toast.style.position =
  "fixed";

  toast.style.bottom =
  "20px";

  toast.style.left =
  "20px";

  toast.style.background =
  "#2874f0";

  toast.style.color =
  "white";

  toast.style.padding =
  "12px";

  toast.style.borderRadius =
  "8px";

  toast.style.zIndex =
  "9999";

  document.body.appendChild(
    toast
  );

  setTimeout(() => {

    toast.remove();

  }, 2000);

}

console.log(
"Flipkart Clone Loaded"
);
const registerBtn =
document.getElementById("registerBtn");

if(registerBtn){

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

};

}
const signupLink =
document.getElementById("signupLink");

const registerModal =
document.getElementById("registerModal");

const closeRegister =
document.getElementById("closeRegister");

if(signupLink){

  signupLink.addEventListener("click",(e)=>{

    e.preventDefault();

    registerModal.style.display =
    "flex";

  });

}

if(closeRegister){

  closeRegister.addEventListener("click",()=>{

    registerModal.style.display =
    "none";

  });

}
