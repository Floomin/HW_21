/* Строка `let elementID = 'Results';` объявляет переменную `elementID` и присваивает ей
строковое значение `'Results'`. Эта переменная используется для хранения идентификатора HTML-элемента, который будет
создаваться или обновляться функциями скрипта. Она используется для идентификации и манипулирования
конкретным элементом на веб-странице, где будут отображаться результаты вычислений или действий. */
let elementID = 'Results';

/*
    Функция `PowFunc` предлагает пользователю ввести число и степень, вычисляет
    число, возведенное в заданную степень, используя рекурсию, и выводит результат на веб-страницу.
*/
let PowFunc = function () {
    let num = +prompt(`Enter a number:`);
    let degree = +prompt(`Enter a degree:`);
    if (!isNaN(num) && !isNaN(degree)) {
        function pow(num, degree) {
            if (degree != 1) {
                return num * pow(num, degree - 1);
            }
            else {
                return num;
            }
        }
        let element = document.getElementById(elementID);
        if (element) {
            element.remove();
        }
        let result = pow(num, degree);
        let newElement = document.createElement('div');
        newElement.setAttribute('id', elementID);
        newElement.innerHTML = result;
        document.body.appendChild(newElement);
    }
    else {
        alert('Please enter a number');
    }
}

/*
    Функция `RemoveFunc` принимает от пользователя массив и индекс элемента, удаляет указанный
    элемент из массива, обновляет HTML-контент на странице и предупреждает пользователя, если введено неверное число.
    введено недопустимое число.
*/
let RemoveFunc = function () {
    let arrayStr = prompt('Enter an array (comma-separated values):');
    let array = arrayStr.split(',').map(item => item.trim());
    let ItemIndex = +prompt(`Enter item number (starting from 0):`);
    if (!isNaN(ItemIndex) && ItemIndex >= 0 && ItemIndex < array.length) {
        function removeE(array, ItemIndex) {
            let NewArray = array.slice();
            NewArray.splice(ItemIndex, 1);
            return NewArray;
        }
        let element = document.getElementById(elementID);
        if (element) {
            element.remove();
        }
        let result = removeE(array, ItemIndex);
        let newElement = document.createElement('div');
        newElement.setAttribute('id', elementID);
        newElement.innerHTML = `Первинний масив: ${array} <br> Відкорегованний масив: ${result}`;
        document.body.appendChild(newElement);
    }
    else {
        alert('Please enter a valid number within the array range');
    }
}

/*
    Функция `GenerateKeyFunc` генерирует случайный ключ заданной длины с использованием набора
    символов и выводит его на веб-страницу.
*/
let GenerateKeyFunc = function () {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let LenghtKey = +prompt(`Enter Length of key:`);
    if (!isNaN(LenghtKey) && LenghtKey > 0) {
        function generateKey(characters, LenghtKey) {
            let Key = '';
            for (let i = 0; i < LenghtKey; i++) {
                let indexKey = Math.floor(Math.random() * characters.length)
                Key += characters[indexKey];
            }
            return Key;
        }
        let element = document.getElementById(elementID);
        if (element) {
            element.remove();
        }
        let result = generateKey(characters, LenghtKey);
        let newElement = document.createElement('div');
        newElement.setAttribute('id', elementID);
        newElement.innerHTML = `Ваш ключ: ${result}`;
        document.body.appendChild(newElement);
    }
    else {
        alert('Please enter a valid number greater than 0');
    }
}

/* Эта строка кода выбирает HTML-элемент с идентификатором 'PowButton' и добавляет к нему слушателя событий
к нему. Когда элемент 'PowButton' будет щелкнут, будет выполнена функция `PowFunc`. Это
распространенный способ добавить интерактивность на веб-страницу, запустив функцию при нажатии на определенный элемент
при нажатии на определенный элемент. */

let PowBtn = document.getElementById('PowButton').addEventListener("click", PowFunc);

/* Строка `let RemoveBtn = document.getElementById('RemoveElement').addEventListener(«click»,
RemoveFunc);` выбирает HTML-элемент с идентификатором 'RemoveElement' и добавляет слушатель события
к нему. Когда элемент с идентификатором 'RemoveElement' будет щелкнут, будет выполнена функция `RemoveFunc`.
будет выполнена. Это позволяет реализовать интерактивное поведение на веб-странице, где щелчок по указанному элементу
вызывает запуск определенной функции. */

let RemoveBtn = document.getElementById('RemoveElement').addEventListener("click", RemoveFunc);

/* Эта строка кода выбирает HTML-элемент с идентификатором 'GenerateKey' и добавляет к нему событие
слушателя к нему. Когда элемент с идентификатором 'GenerateKey' будет щелкнут, функция
`GenerateKeyFunc` будет выполнена. Это позволяет реализовать интерактивное поведение на веб-странице, где
щелчок на указанном элементе вызывает выполнение определенной функции. */

let GenerateKeyBtn = document.getElementById('GenerateKey').addEventListener("click", GenerateKeyFunc);
