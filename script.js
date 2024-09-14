// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  

  function tojgm() {
    // Получаем целевой элемент
    const targetElement = document.getElementById("jgm");

    // Вычисляем высоту sticky элемента (например, шапки)
    const stickyElement = document.querySelector('.sticky-element');
    const stickyHeight = stickyElement ? stickyElement.offsetHeight : 0; // Высота в пикселях

    // Позиция целевого элемента относительно начала страницы
    const targetPosition = targetElement ? targetElement.getBoundingClientRect().top + window.scrollY : 0;

    // Прокручиваем страницу с учетом высоты sticky
    window.scrollTo({
      top: targetPosition - stickyHeight,
      behavior: 'smooth'
    });
  }

function tots() {
  const targetElement = document.getElementById("ts");

  // Вычисляем высоту sticky элемента (например, шапки)
  const stickyElement = document.querySelector('.sticky-element');
  const stickyHeight = stickyElement ? stickyElement.offsetHeight : 0; // Высота в пикселях

  // Позиция целевого элемента относительно начала страницы
  const targetPosition = targetElement ? targetElement.getBoundingClientRect().top + window.scrollY : 0;

  // Прокручиваем страницу с учетом высоты sticky
  window.scrollTo({
    top: targetPosition - stickyHeight,
    behavior: 'smooth'
  });
}

function tojm() {
  const targetElement = document.getElementById("jm");

  // Вычисляем высоту sticky элемента (например, шапки)
  const stickyElement = document.querySelector('.sticky-element');
  const stickyHeight = stickyElement ? stickyElement.offsetHeight : 0; // Высота в пикселях

  // Позиция целевого элемента относительно начала страницы
  const targetPosition = targetElement ? targetElement.getBoundingClientRect().top + window.scrollY : 0;

  // Прокручиваем страницу с учетом высоты sticky
  window.scrollTo({
    top: targetPosition - stickyHeight,
    behavior: 'smooth'
  });
}