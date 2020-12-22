$(document).ready(function(){

	$('.nav__item-link').on('click', function(e) {
		e.preventDefault();

		// var section = $(this).attr('href');
		// showSection(section, true);
		// это сократили

		showSection($(this).attr('href'), true);

	});

	showSection(window.location.hash, false);

}); // - > ready_end;

$(window).scroll(function(){

	checkSection();

}); // - > scroll_end;

function showSection(section, isAnimate) {
	var 
		direction = section.replace(/#/, ''),
		reqSection = $('.section').filter('[data-section="' + direction + '"]'),
		reqSectionPos = reqSection.offset().top;

	if (isAnimate) {
		$('body, html').animate({scrollTop: reqSectionPos}, 500);
	} else {
		$('body, html').scrollTop(reqSectionPos);
	}
}

function checkSection(){
	$('.section').each(function(){
		var 
			$this = $(this),
			topEdge = $this.offset().top - 200,
			bottomEdge = topEdge + $this.height(),
			wScroll = $(window).scrollTop();

		if (topEdge < wScroll && bottomEdge > wScroll) {
			var 
				currentId = $this.data('section'),
				reqLink = $('.nav__item-link').filter('[href="#' + currentId + '"]');

			reqLink.closest('.nav__item').addClass('active')
				.siblings().removeClass('active');

			window.location.hash = currentId;

		}
	});
}


 /* 
напишем функцию которая будет определять видно нашу секцию на экране или нет
для этог пройдёмся по всем section при помощи метода each
и определим верхний край section и нижний
верхний мы определим при помощи метода offset и его свойства top (отодвинем от верхнего края секцию на 200px чтобы был небольшой запас)
а нижний определим прибавив к верхнему краю высоту секции
также нам нужно знать где у нас сейчас на стрпанице скролл(сколько мы проскролили страницу)
дальше обычным условие если края у нас есть в окне то следовательно мы эту секцию видим

дальше будем определять какую ссылку в навигации нам подсветить, при помощи метода filter мы отфильтруем по тому href который
совпадёт с текущей секцией на экране
и подсвечивая классом active мы выделим наш пункт удалив при этом подсветку у всех его соседей.

ВСЁ РАБОТАЕТ

теперь нужно проставить хеши к нашему адресу, это название нашей секции взятое из атрибута data-section

теперь напишим функцию которая будет скролить страницу к нужной нам секции
в функции будет два параметра это то какую именно секцию нам нужно показать и параметр отвечающий за то будет это происходить
анимированно либо сразу, потому что если мы кому-то передадим ссылку нам анимация там совсем ненужна

определим к какой секции мы хотим попасть
так как у нас берётся из атрибута href то нам нужно удалить решётку из названия
отфильтруем по href какую именно нам секцию показать, тоесть сделаем ровно обратную операцию которую мы делали до этого в функции checkSection
и определим верхний край необходимой нам секции чтобы потом нашу страницу проскролить именно до нужного места
при помощи метода animate анимиря свойство scrollTop мы плавно 500мс прокрутим нашу страницу
и при вызове при загрузке страницы определив какой хеш стоит в адресе притянем страницу к нужному месту

а для пользователя сделаем клик по навигации в котором будет происходить таже самая функция showSection только уже с 
анимированным эффектом
сократим немножко написание нашей функции и вуаля всё работает как часы
*/