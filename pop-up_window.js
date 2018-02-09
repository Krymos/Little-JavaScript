'use strict';

/* WINDOW */

if (!sessionStorage.getItem("isTimerSet")) { 
// существует ли ключ isTimerSet во временном хранилище браузера?
	sessionStorage.setItem("isTimerSet", true);
	// если нет, то создаем ключ isTimerSet со значение true в локальном хранилище браузера		
} 

if (location.pathname !== '/contacts') {

	if (sessionStorage.getItem("isTimerSet") == "true") {
		setTimeout(() => { // ставим таймер и вызываем функцию

			let transitionToContactPage = document.createElement('div'); 
			// создаем окно, в виде блока
			let transitionToContactPage__text = document.createElement('div');
			let transitionToContactPage__btn = document.createElement('button');
			// создаем другие эелементы внутри блока		

			transitionToContactPage__text.innerHTML = "Перейдите на страницу контактов для выбора более предпочтительной связи со мной.";
			transitionToContactPage.innerHTML = '<a href="http://kkrymova.ru/contacts" class="transitionToContactPage__a">Мои контакты</a>';

			transitionToContactPage.className = "transitionToContactPage";
			transitionToContactPage__text.className = "transitionToContactPage__text";
			transitionToContactPage__btn.className = "transitionToContactPage__btn";
			// добавляем стили		

			transitionToContactPage.appendChild(transitionToContactPage__text);
			transitionToContactPage.appendChild(transitionToContactPage__btn);		
			document.body.appendChild(transitionToContactPage);
			// добавляем созданные элементы на страницу

			let buttonContacts = document.getElementsByClassName('transitionToContactPage__a');
			let buttonClose = document.getElementsByClassName('transitionToContactPage__btn');

			buttonClose[0].onclick = delWindow;
			// при клике вызываем функцию, которая удалит наше окно при нажатие на крестик
			sessionStorage.setItem("isTimerSet", false);
			// изменяем значение ключа после истечение времени таймера
		},
		100000); // время таймера - 1 минута
	}
}

function delWindow() { 
	let windowToContactPage = document.getElementsByClassName('transitionToContactPage');
	windowToContactPage[0].style.display = "none";
};
