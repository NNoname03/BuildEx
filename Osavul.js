function Result(event) {
    event.preventDefault(); // блокуємо стандартну відправку форми
  
    // Ховаємо форму
    const form = event.target;
    form.style.display = "none";
  
    // Генеруємо випадковий номер замовлення
    const orderNumber = Math.floor(Math.random() * 9000) + 1000;
  
    // Оновлюємо текст у модальному вікні
    const modal = document.getElementById("thankyou-modal");
    modal.querySelector("h2").textContent = `Ваше замовлення #${orderNumber} прийнято!`;
  
    // Показуємо вікно
    modal.style.display = "flex";
  }
  
  // Закриває модальне вікно
  function closeModal() {
    const modal = document.getElementById("thankyou-modal");
    modal.style.display = "none";
  
    // Повертаємо форму, щоб можна було створити нове замовлення
    const form = document.querySelector("form");
    form.reset();
    form.style.display = "block";
  }
  