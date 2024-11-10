Створення проекту:

1. New репозиторій(порожній) на github.com;
2. Клонуємо на комп
3. відкрити термінал, зайті в папку проекту(pwd - де знаходимось, cd -
   навігація(наприклад cd goit-react-hw-02), ls - список папок)
4. npm create vite@latest
5. .(створить в цій же папці) або назву (тоді створе нову папку)
6. React, JS + SWS (потім typescript)
7. npm install
8. npm run dev (Запустить проєкт)
9. ctrl + С (зупине сервер)
<!--  -->
10. відкриваємо VScode
11. в index.html змінитит title з 'Vite + React' на свій
    <!--  -->
12. додати файл prettier
13. нормалізація стилів (npm i modern-normalize). В main.jsx імпортуємо стилі
    нормалізації (import "modern-normalize");
14. в файлі index.css, скид/додавання деяких глобальних стилів для елементів;
<!-- ---- -->
15. ESLint: Замінили вміст файлу eslint.config.js;
16. в файлі vite.config.js замінили вміст
<!--  -->
17. npm i prop-types - для PropTypes;
<!-- h/w-3 -->
18. встановлення Formik ( npm install formik). Компонент Formik не стилізується, зберігає логіку;
19. Валідація Formik (npm i yup)
20. npm i nanoid (генерування id) ??? useId() - (генерування id на поля форми)
21. npm i react-icons
22. LocalStorage в useEffect, якщо об'єм, масив і.д то (localStorage.setItem("contacts", JSON.stringify(contacts)))
23. npm i prop-types - для PropTypes;
<!-- propTypes для масива [{}] ====
FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
}; -->
