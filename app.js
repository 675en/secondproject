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