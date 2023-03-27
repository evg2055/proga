var counter1 = 0;
var counter2 = 0;

// Находим ячейки таблицы
var cell1 = document.getElementById("counter1");
var cell2 = document.getElementById("counter2");

// При загрузке страницы выводим начальные значения счетчиков
cell1.innerHTML = counter1;
cell2.innerHTML = counter2;

// Находим ячейки таблицы для редактирования
var editCells = document.querySelectorAll("#monitor td[contenteditable='true']");

// Добавляем обработчик события для каждой ячейки
for (var i = 0; i < editCells.length; i++) {
   editCells[i].addEventListener("keydown", function(event) {
      // Если нажата клавиша enter, завершаем редактирование ячейки
      if (event.keyCode === 13) {
         event.preventDefault(); // Отменяем стандартное поведение клавиши enter
         this.blur(); // Убираем фокус с ячейки, чтобы завершить редактирование
      }
   });

   // Добавляем обработчик события при вводе значений в ячейки
   editCells[i].addEventListener("input", function(event) {
      // Фильтруем вводимые символы, оставляя только цифры
      var value = this.innerText.replace(/\D/g, '');
      // Если новое значение отличается от старого, обновляем ячейку и счетчики
      if (value !== this.innerText) {
         this.innerText = value;
         // Обновляем счетчики
         counter1 = parseInt(cell1.innerText) + 1;
         counter2 = counter2 + 1;
         cell1.innerHTML = counter1;
         cell2.innerHTML = counter2;
      }
   });
};

// 

var tableBody = document.getElementById("products-table");
for (var productName in products) {
    // Создаем строку таблицы для каждого изделия
    var productRow = document.createElement("tr");
 
    // Создаем ячейку для названия изделия и добавляем ее в строку
    var productNameCell = document.createElement("td");
    productNameCell.textContent = productName;
    productRow.appendChild(productNameCell);
 
    // Проходим по всем деталям в текущем изделии
    for (var detailName in products[productName]) {
       // Создаем строку таблицы для каждой детали
       var detailRow = document.createElement("tr");
 
       // Создаем ячейки для названия детали и ее количества и добавляем их в строку для детали
       var detailNameCell = document.createElement("td");
       detailNameCell.textContent = detailName;
       detailRow.appendChild(detailNameCell);
 
       var detailQuantityCell = document.createElement("td");
       detailQuantityCell.textContent = products[productName][detailName];
       detailRow.appendChild(detailQuantityCell);
 
       // Добавляем строку для детали в строку для изделия
       productRow.appendChild(detailRow);
    }
 
    // Добавляем строку для изделия в таблицу
    tableBody.appendChild(productRow);
 }
