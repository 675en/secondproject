const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Lifestyle",
      price: 100,
      colors: [
        {
          code: "pink",
          img: "./img/lifestyle.png",
        },
        {
          code: "black",
          img: "./img/lifestyle2.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Running",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/running.jpg",
        },
        {
          code: "violet",
          img: "./img/running2.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Trainig",
      price: 150,
      colors: [
        {
          code: "black",
          img: "./img/training.jpg",
        },
        {
          code: "purple",
          img: "./img/training2.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "Basketball",
      price: 200,
      colors: [
        {
          code: "pink",
          img: "./img/basketball.jpg",
        },
        {
          code: "black",
          img: "./img/basketball2.jpg",
        },
      ],
    },
    {
      id: 5,
      title: "Soccer",
      price: 219,
      colors: [
        {
          code: "beige",
          img: "./img/soccer.jpg",
        },
        {
          code: "whitesmoke",
          img: "./img/soccer2.jpg",
        },
      ],
    },
  ];

  let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });

  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

  const productButtons = document.querySelectorAll(".productButton");
productButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".payment").style.display = "flex";
  });
});
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  
  productButtons.forEach(button => {
    button.addEventListener("click", () => {
      payment.style.display = "flex";
      payment.scrollIntoView({ behavior: "smooth" });
    });
  });  

  close.addEventListener("click", () => {
    payment.style.display = "none";
  });

  const checkoutButton = document.querySelector(".payButton");

checkoutButton.addEventListener("click", () => {
  payment.style.display = "none";


  const thanksMessage = document.createElement("div");
  thanksMessage.textContent = "Thank you for your purchase!";
  thanksMessage.style.position = "fixed";
  thanksMessage.style.top = "50%";
  thanksMessage.style.left = "50%";
  thanksMessage.style.transform = "translate(-50%, -50%)";
  thanksMessage.style.backgroundColor = "#369e62";
  thanksMessage.style.color = "white";
  thanksMessage.style.padding = "20px 40px";
  thanksMessage.style.fontSize = "24px";
  thanksMessage.style.fontWeight = "bold";
  thanksMessage.style.borderRadius = "10px";
  thanksMessage.style.zIndex = "999";

  document.body.appendChild(thanksMessage);

  setTimeout(() => {
    thanksMessage.remove();
  }, 3000);
});


document.addEventListener('DOMContentLoaded', function () {
  const fListItems = document.querySelectorAll(".fListItem");
  const footerNotice = document.getElementById("footerNotice");

  fListItems.forEach(item => {
    item.addEventListener("click", () => {
      if (footerNotice) {
        footerNotice.textContent = "This section is still under processing.";
        footerNotice.style.display = "block";

        setTimeout(() => {
          footerNotice.style.display = "none";
        }, 3000);
      } else {
        alert("This section is still under processing.");
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const subscribeBtn = document.getElementById('subscribeBtn');
  const emailInput = document.getElementById('emailInput');

  subscribeBtn.addEventListener('click', function () {
    const email = emailInput.value.trim();

    if (!email || !email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Subscribed with:', email);

    const thanksMessage = document.createElement("div");
    thanksMessage.textContent = "Thanks for subscribing!";
    thanksMessage.style.position = "fixed";
    thanksMessage.style.top = "50%";
    thanksMessage.style.left = "50%";
    thanksMessage.style.transform = "translate(-50%, -50%)";
    thanksMessage.style.backgroundColor = "#369e62";
    thanksMessage.style.color = "white";
    thanksMessage.style.padding = "20px 40px";
    thanksMessage.style.fontSize = "24px";
    thanksMessage.style.fontWeight = "bold";
    thanksMessage.style.borderRadius = "10px";
    thanksMessage.style.zIndex = "999";

    document.body.appendChild(thanksMessage);

    setTimeout(() => {
      thanksMessage.remove();
    }, 3000);

    emailInput.value = '';
  });
});