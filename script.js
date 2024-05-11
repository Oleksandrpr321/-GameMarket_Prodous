
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
  
    stars.forEach(function(star) {
      star.addEventListener("click", function() {
        const value = parseInt(star.getAttribute("data-value"));
        resetStars();
        for (let i = 0; i < value; i++) {
          stars[i].classList.add("active");
        }
      });
    });
  
    function resetStars() {
      stars.forEach(function(star) {
        star.classList.remove("active");
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var githubBtn = document.getElementById("githubBtn");

    githubBtn.addEventListener("click", function() {
        var newWindow = window.open("", "_blank", "width=400,height=400");
        newWindow.document.write(`
            <div id="paymentMenu" style="display: none;">
                <h3>Введіть дані вашої карти:</h3>
                <input type="text" id="cardNumber" placeholder="Номер картки">
                <input type="text" id="expirationDate" placeholder="Термін дії">
                <input type="text" id="cvv" placeholder="CVV">
                <button id="confirmPayment" class="button">Підтвердити оплату</button>
                <button id="transferBtn" class="button" style="display: none;">Переказати 1 грн</button>
            </div>
        `);

        var confirmPaymentBtn = newWindow.document.getElementById("confirmPayment");
        var transferBtn = newWindow.document.getElementById("transferBtn");

        confirmPaymentBtn.addEventListener("click", function() {
            var cardNumber = newWindow.document.getElementById("cardNumber").value;
            var expirationDate = newWindow.document.getElementById("expirationDate").value;
            var cvv = newWindow.document.getElementById("cvv").value;

            // Після введення даних карти, показуємо кнопку для переказу
            transferBtn.style.display = "block";

            // Тут можна додати логіку для перевірки платіжних даних
        });

        transferBtn.addEventListener("click", function() {
          var cardNumber = newWindow.document.getElementById("cardNumber").value;
          
          // Симуляція списання коштів
          var paymentSuccess = simulatePayment(cardNumber);
        
          if (paymentSuccess) {
              // Успішно списано 1 грн з картки
              alert("1 грн успішно списано з вашої картки!");
        
              // Відкриття нового вікна з вказаною посиланням
              window.open("https://github.com/Oleksandrpr321/-GameMarket_Prodous.git", "_blank");
          } 
          
        });

        newWindow.document.getElementById("paymentMenu").style.display = "block"; // Показати меню оплати у новому вікні
    });
});

// Функція для симуляції списання коштів
function simulatePayment(cardNumber) {
    // У цьому прикладі просто робимо перевірку на наявність номера картки
    // Якщо номер картки введений, симулюємо успішну оплату
    // У реальному середовищі тут буде виклик API для списання коштів
    if (cardNumber) {
        return true; // Успішно списано
    } else {
        return false; // П
    }
}



