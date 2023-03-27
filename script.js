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
<button id="add-item-btn">Добавить</button>

function Product(name) {
    this.name = name;
    this.parts = [];
 }
 Product.prototype.addPart = function(name, quantity) {
    this.parts.push({name: name, quantity: quantity});
 };

 function showAddPartForm(product) {
    var form = document.getElementById("add-part-form");
    form.style.display = "block";
    var nameInput = document.getElementById("part-name");
    var quantityInput = document.getElementById("part-quantity");
    form.addEventListener("submit", function(event) {
       event.preventDefault();
       var name = nameInput.value;
       var quantity = parseInt(quantityInput.value);
       product.addPart(name, quantity);
       nameInput.value = "";
       quantityInput.value = "";
       form.style.display = "none";
       displayProduct(product);
    });
 };


 function displayProduct(product) {
    var table = document.getElementById("products-table");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    nameCell.innerHTML = product.name;
    var partsCell = row.insertCell(1);
    var partsList = "<ul>";
    for (var i = 0; i < product.parts.length; i++) {
       partsList += "<li>" + product.parts[i].name + ": " + product.parts[i].quantity + "</li>";
    }
    partsList += "</ul>";
    partsCell.innerHTML = partsList;
    var editCell = row.insertCell(2);
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Удалить";
    deleteBtn.addEventListener("click", function() {
       row.remove();
    });
    editCell.appendChild(deleteBtn);
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Редактировать";
    editBtn.addEventListener("click", function() {
       showAddPartForm(product);
    });
    editCell.appendChild(editBtn);
    var addPartBtn = document.createElement("button");
    addPartBtn.innerHTML = "+";
    addPartBtn.addEventListener("click", function() {
       showAddPartForm(product);
    });
    editCell.appendChild(addPartBtn);
 };

 function handleAddItem() {
    var name = prompt("Введите название изделия:");
    if (name) {
       var product = new Product(name);
       displayProduct(product);
       showAddPartForm(product);
    }
 };

 var addItemBtn = document.getElementById("add-item-btn");
   addItemBtn.addEventListener("click", handleAddItem);

