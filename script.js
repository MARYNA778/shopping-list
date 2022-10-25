const container = document.querySelector('.items'); //нашли весь контейнер 
const input = document.querySelector("input");
// Вешаем обработчик нажатия клавиши
input.addEventListener("keydown", function(event) {
    // Если нажата клавиша Enter
    if (event.key === "Enter") {
        const shopping = document.createElement('li'); // создаём элемент списка <li> 
        shopping.addEventListener('click', function() {
            shopping.classList.toggle('done');

        });

        container.append(shopping); // длбавляем его в контейнер
        shopping.textContent = input.value;
        input.value = ''; // очистка инпута    


    };
});


/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */