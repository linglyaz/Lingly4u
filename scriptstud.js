   // Получаем данные пользователя из localStorage
   const userData = JSON.parse(localStorage.getItem('userData'));

   // Проверяем, есть ли данные пользователя
   if (userData && userData.fullName) {
       document.getElementById('user-name').textContent = userData.fullName;
   } else {
       document.getElementById('user-name').textContent = "Guest";
   }