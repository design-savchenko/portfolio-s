// "use strict";

// // Burger
// const burgerButton = document.querySelector(".burger-button");
// const menu = document.querySelector(".menu");
// const body = document.body;
// const menuLinks = document.querySelectorAll(".menu a"); // Отримуємо всі посилання меню

// // Відкриття/закриття меню за допомогою кнопки
// burgerButton?.addEventListener("click", () => {
//   const isOpen = menu.classList.toggle("open"); // Тогл класу "open"
//   burgerButton?.classList.toggle("active", isOpen); // Анімація кнопки
//   body?.classList.toggle("menu-open", isOpen); // Блокування скролу
// });

// // Закриття меню при кліку на пункт меню
// menuLinks?.forEach((link) => {
//   link?.addEventListener("click", () => {
//     menu?.classList.remove("open"); // Закриваємо меню
//     burgerButton?.classList.remove("active"); // Знімаємо активний стан кнопки
//     body?.classList.remove("menu-open"); // Відновлюємо скролінг
//   });
// });

"use strict";

// Отримання елементів
const burgerButton = document.querySelector(".burger-button");
const menu = document.querySelector(".menu");
const body = document.body;
const menuLinks = document.querySelectorAll(".menu a"); // Посилання меню

// Перевірка наявності елементів
if (burgerButton && menu && body && menuLinks.length) {
  // Відкриття/закриття меню
  burgerButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    burgerButton.classList.toggle("active", isOpen);
    body.classList.toggle("menu-open", isOpen);
  });

  // Закриття меню при кліку на пункт
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      burgerButton.classList.remove("active");
      body.classList.remove("menu-open");
    });
  });
} else {
  console.error("Одного з ключових елементів меню не знайдено!");
}
