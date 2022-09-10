const ru = document.querySelector('.language__ru');
const eng = document.querySelector('.language__eng');

const burgerRu = document.querySelector('.burger-language__ru');
const burgerEng = document.querySelector('.burger-language__eng');



const burger = document.querySelector('.burger');
const burgerOpen = document.querySelector('.burger-open')
const burgerClose = document.querySelector('.burger-close')
const burgerText = document.querySelectorAll('.burger-item-text')


let languageCheck;


if (window.innerWidth < 769) {
}


if (window.innerWidth > 768) {
}



burgerText[0].addEventListener('click', function() {

	burgerText[1].style.color = '#828282';
	burgerText[2].style.color = '#828282';
	burgerText[3].style.color = '#828282';
	burgerText[4].style.color = '#828282';
	
	burgerText[0].style.color = '#000';

	burgerOpen.style.display = 'none';

	openBody()
	
	setTimeout(function() {
		window.scrollTo({

			top: 0,

			behavior: 'smooth',
		});
	}, 200)

});



burgerText[1].addEventListener('click', function() {

	burgerText[0].style.color = '#828282';
	burgerText[2].style.color = '#828282';
	burgerText[3].style.color = '#828282';
	burgerText[4].style.color = '#828282';
	
	burgerText[1].style.color = '#000';


	burgerOpen.style.display = 'none';		

	openBody()

	setTimeout(function() {
		aboutScroll();
	}, 200)	

});

burgerText[2].addEventListener('click', function() {

	burgerText[0].style.color = '#828282';
	burgerText[1].style.color = '#828282';
	burgerText[3].style.color = '#828282';
	burgerText[4].style.color = '#828282';
	
	burgerText[2].style.color = '#000';

	
	burgerOpen.style.display = 'none';		

	openBody()

	setTimeout(function() {
		skillScroll();
	}, 200)

});

burgerText[3].addEventListener('click', function() {

	burgerText[0].style.color = '#828282';
	burgerText[1].style.color = '#828282';
	burgerText[2].style.color = '#828282';
	burgerText[4].style.color = '#828282';
	
	burgerText[3].style.color = '#000';
	

	burgerOpen.style.display = 'none';		

	openBody()

	setTimeout(function() {
		portfolioScroll();
	}, 200)

});

burgerText[4].addEventListener('click', function() {


	burgerText[0].style.color = '#828282';
	burgerText[1].style.color = '#828282';
	burgerText[2].style.color = '#828282';
	burgerText[3].style.color = '#828282';
	
	burgerText[4].style.color = '#000';


	burgerOpen.style.display = 'none';		

	openBody()

	setTimeout(function() {
		contactScroll();
	}, 200)
});









burger.addEventListener('click', function() {
	burgerOpen.style.display = 'block';

	const fullContent = document.querySelector('.overall');
	const footer = document.querySelector(".footer");

	fullContent.style.display = 'none';
	footer.style.display = 'none';
})

burgerClose.addEventListener('click', function() {
	burgerOpen.style.display = 'none';

	openBody()
	
})

function openBody() {
	const fullContent = document.querySelector('.overall');
	const footer = document.querySelector(".footer");

	fullContent.style.display = 'block';
	footer.style.display = 'block';
}



if (window.innerWidth < 600) {
	const element = document.querySelector('.info__language');
	console.log(element)
	element.style.display = 'none'
	burger.style.display = 'block'

	const mainInfoName = document.querySelector('.info__name');
	mainInfoName.style.fontSize = '47px';


	const mainInfoSkills = document.querySelector('.info__skills');
	mainInfoSkills.style.width = '35vw';
	mainInfoSkills.style.fontSize = '16px';
	mainInfoSkills.style.lineHeight = '20px';		
}


if (window.innerWidth > 599) {
	const element = document.querySelector('.info__language');
	console.log(element)
	element.style.display = 'flex'
	burger.style.display = 'none'


	const mainInfoName = document.querySelector('.info__name');
	mainInfoName.style.fontSize = '3.65vw';	




	const mainInfoSkills = document.querySelector('.info__skills');
	mainInfoSkills.style.width = '12.6vw';
	mainInfoSkills.style.fontSize = '1.35vw';
	mainInfoSkills.style.lineHeight = '1.6vw';

}



window.addEventListener('resize', function() {
	if (window.innerWidth < 600) {
		const element = document.querySelector('.info__language');
		console.log(element)
		element.style.display = 'none'
		burger.style.display = 'block'
		
		const mainContentInfo = document.querySelector(".main-content__info");
		mainContentInfo.style.display = 'block';

		const mainInfoName = document.querySelector('.info__name');
		mainInfoName.style.fontSize = '47px';

		const mainInfoSkills = document.querySelector('.info__skills');
		mainInfoSkills.style.width = '35vw';
		mainInfoSkills.style.fontSize = '16px';
		mainInfoSkills.style.lineHeight = '20px';
		

	}

	if (window.innerWidth > 599) {
		const element = document.querySelector('.info__language');
		console.log(element)
		element.style.display = 'flex'
		burger.style.display = 'none'

		const mainContentInfo = document.querySelector(".main-content__info");
		mainContentInfo.style.display = 'flex';

		const mainInfoName = document.querySelector('.info__name');
		mainInfoName.style.fontSize = '3.65vw';

		

		const mainInfoSkills = document.querySelector('.info__skills');
		mainInfoSkills.style.width = '12.6vw';
		mainInfoSkills.style.fontSize = '1.35vw';
		mainInfoSkills.style.lineHeight = '1.6vw';
	}


	if (window.innerWidth < 769) {
	
	}

	if (window.innerWidth > 768) {
		
	}

})

window.addEventListener('resize', function() {
	if (window.innerWidth > 599) {
		burgerOpen.style.display = 'none'
	}
})

if (window.innerWidth < 600) {
	const mainContentInfo = document.querySelector(".main-content__info");
	mainContentInfo.style.display = 'block';
}

if (window.innerWidth > 599) {
	const mainContentInfo = document.querySelector(".main-content__info");
	mainContentInfo.style.display = 'flex';
}






console.log(ru)





ru.addEventListener('click', function () {
	console.log('ru')
	eng.classList.remove('language_active');
	ru.classList.add("language_active");

	burgerEng.classList.remove('language_active');
	burgerRu.classList.add("language_active");

	languageRu();

})

eng.addEventListener('click', function () {
	console.log('eng')
	ru.classList.remove('language_active');
	eng.classList.add("language_active");

	burgerRu.classList.remove('language_active');
	burgerEng.classList.add("language_active");

	languageEng();
})


burgerRu.addEventListener('click', function () {
	console.log('ru')

	eng.classList.remove('language_active');
	ru.classList.add("language_active");


	burgerEng.classList.remove('language_active');
	burgerRu.classList.add("language_active");



	languageRu();

})

burgerEng.addEventListener('click', function () {
	console.log('eng')

	ru.classList.remove('language_active');
	eng.classList.add("language_active");


	burgerRu.classList.remove('language_active');
	burgerEng.classList.add("language_active");

	languageEng();
})







function languageRu() {
	const headerItemsText = document.querySelectorAll(".header__item-text");

	headerItemsText[0].innerHTML = 'Главное';
	headerItemsText[1].innerHTML = 'Обо мне';
	headerItemsText[2].innerHTML = 'Навыки';
	headerItemsText[3].innerHTML = 'Портфолио';
	headerItemsText[4].innerHTML = 'Контакты';



	const mainInfoText = document.querySelectorAll('.main-info-text')

	mainInfoText[0].innerHTML = 'Денис Новик';
	mainInfoText[1].innerHTML = 'UX|UI дизайнер, 24 года, проживаю в Минске';



	const aboutInfoText = document.querySelectorAll('.about-text');

	aboutInfoText[0].innerHTML = 'Обо мне';
	aboutInfoText[1].innerHTML = 'Привет, Я Денис – UX/UI дизайнер из Минска.   <br>   Интересуюсь дизайном и всем, \
			что с ним связано.   <br><br><br><br>   Я учусь на курсах \"Веб и мобильный дизайн интерфейсов\" в \
			IT-Академии.   <br><br><br><br>   Готов осуществлять превосходные проекты с замечательными людьми.';



	const skillInfoText = document.querySelectorAll('.skill-text');

	skillInfoText[0].innerHTML = 'Навыки';
	skillInfoText[1].innerHTML = 'Я работаю в таких программах, как';
	


	const portfolioInfoText = document.querySelectorAll('.portfolio-text');

	portfolioInfoText[0].innerHTML = 'Портфолио';
	portfolioInfoText[1].innerHTML = 'Модный онлайн магазин - Главное';
	portfolioInfoText[2].innerHTML = 'Reebok Store - Концепт';
	portfolioInfoText[3].innerHTML = 'Braun Landing Page - Концепт';



	const contactInfoText = document.querySelectorAll('.contacts-text');

	contactInfoText[0].innerHTML = 'Контакты';
	contactInfoText[1].innerHTML = 'Хочешь узнать больше или просто пообщаться? Пожалуйста!';
	contactInfoText[2].innerHTML = 'Следи за мной в LinkedIn, Instagram, Behance, Dribble';



	const buttonInfoText = document.querySelectorAll('.button-text');

	buttonInfoText[0].innerHTML = 'Отправить сообщение';

	const burgerItemText = document.querySelectorAll('.burger-item-text');

	burgerItemText[0].innerHTML = 'Главное';
	burgerItemText[1].innerHTML = 'Обо мне';
	burgerItemText[2].innerHTML = 'Навыки';
	burgerItemText[3].innerHTML = 'Портфолио';
	burgerItemText[4].innerHTML = 'Контакты';
	
}

function languageEng() {
	const headerItemsText = document.querySelectorAll(".header__item-text");

	headerItemsText[0].innerHTML = 'Home';
	headerItemsText[1].innerHTML = 'About me';
	headerItemsText[2].innerHTML = 'Skills';
	headerItemsText[3].innerHTML = 'Portfolio';
	headerItemsText[4].innerHTML = 'Contacts';



	const mainInfoText = document.querySelectorAll('.main-info-text')

	mainInfoText[0].innerHTML = 'Denis Novik';
	mainInfoText[1].innerHTML = 'UX|UI designer 24 years old, Minsk';



	const aboutInfoText = document.querySelectorAll('.about-text');

	aboutInfoText[0].innerHTML = 'About me';
	aboutInfoText[1].innerHTML = 'Hi, I\'m Denis – UX/UI designer from Minsk.<br>I\'m interested \
			in design and everything connected with it.<br><br><br><br> I\'m studying at courses "Web and mobile \
			design interfaces" in IT-Academy.<br><br><br><br> Ready to implement excellent projects with wonderful people.';



	const skillInfoText = document.querySelectorAll('.skill-text');

	skillInfoText[0].innerHTML = 'Skills';
	skillInfoText[1].innerHTML = 'I work in such programs as';
	


	const portfolioInfoText = document.querySelectorAll('.portfolio-text');

	portfolioInfoText[0].innerHTML = 'Portfolio';
	portfolioInfoText[1].innerHTML = 'Online fashion store - Homepage';
	portfolioInfoText[2].innerHTML = 'Reebok Store - Concept';
	portfolioInfoText[3].innerHTML = 'Braun Landing Page - Concept';



	const contactInfoText = document.querySelectorAll('.contacts-text');

	contactInfoText[0].innerHTML = 'Contacts';
	contactInfoText[1].innerHTML = 'Want to know more or just chat? You are welcome!';
	contactInfoText[2].innerHTML = 'Like me on LinkedIn, Instagram, Behance, Dribble';



	const buttonInfoText = document.querySelectorAll('.button-text');

	buttonInfoText[0].innerHTML = 'Send message';


	if (window.innerWidth < 600) {
		const burgerItemText = document.querySelectorAll('.burger-item-text');

		burgerItemText[0].innerHTML = 'Home';
		burgerItemText[1].innerHTML = 'About me';
		burgerItemText[2].innerHTML = 'Skills';
		burgerItemText[3].innerHTML = 'Portfolio';
		burgerItemText[4].innerHTML = 'Contacts';
	}
}




const guideButtons = document.querySelectorAll('.header__item-text');







guideButtons[0].addEventListener('click', function() {

	guideButtons[1].style.color = '#828282';
	guideButtons[2].style.color = '#828282';
	guideButtons[3].style.color = '#828282';
	guideButtons[4].style.color = '#828282';
	
	guideButtons[0].style.color = '#000';


	window.scrollTo({

		top: 0,

		behavior: 'smooth',
	});
});



guideButtons[1].addEventListener('click', function() {

	guideButtons[0].style.color = '#828282';
	guideButtons[2].style.color = '#828282';
	guideButtons[3].style.color = '#828282';
	guideButtons[4].style.color = '#828282';
	
	guideButtons[1].style.color = '#000';

	aboutScroll();

	
})

guideButtons[2].addEventListener('click', function() {

	guideButtons[0].style.color = '#828282';
	guideButtons[1].style.color = '#828282';
	guideButtons[3].style.color = '#828282';
	guideButtons[4].style.color = '#828282';
	
	guideButtons[2].style.color = '#000';

	skillScroll();

})

guideButtons[3].addEventListener('click', function() {

	guideButtons[0].style.color = '#828282';
	guideButtons[1].style.color = '#828282';
	guideButtons[2].style.color = '#828282';
	guideButtons[4].style.color = '#828282';
	
	guideButtons[3].style.color = '#000';

	portfolioScroll();



})

guideButtons[4].addEventListener('click', function() {

	guideButtons[0].style.color = '#828282';
	guideButtons[1].style.color = '#828282';
	guideButtons[2].style.color = '#828282';
	guideButtons[3].style.color = '#828282';
	
	guideButtons[4].style.color = '#000';

	contactScroll();

})


function aboutScroll() {

	const about = document.querySelector('.about');
	const aboutHeight = about.offsetHeight;

	console.log(aboutHeight)
	console.log(window.innerHeight)

	if (window.innerHeight > aboutHeight){

		about.scrollIntoView({

			block: 'center',

			inline: 'center',

			behavior: 'smooth'
		});
	};

	if (!(window.innerHeight > aboutHeight)){
		
		const aboutY = about.offsetTop;
		
		window.scrollTo({

			top: aboutY,

		
			behavior: 'smooth',
		});
	
	};
};

function skillScroll() {

	const skill = document.querySelector('.skill');
	const skillHeight = skill.offsetHeight;

	if (window.innerHeight > skillHeight){

		skill.scrollIntoView({

			block: 'center',

			inline: 'center',

			behavior: 'smooth'
		});
	};

	if (!(window.innerHeight > skillHeight)){
		
		const skillY = skill.offsetTop;
		
		window.scrollTo({

			top: skillY,

		
			behavior: 'smooth',
		});
	
	};

}

function portfolioScroll() {

	const portfolio = document.querySelector('.portfolio');
	const portfolioHeight = portfolio.offsetHeight;

	if (window.innerHeight > portfolioHeight){

		portfolio.scrollIntoView({

			block: 'center',

			inline: 'center',

			behavior: 'smooth'
		});
	};

	if (!(window.innerHeight > portfolioHeight)){
		
		const portfolioY = portfolio.offsetTop;
		
		window.scrollTo({

			top: portfolioY,

		
			behavior: 'smooth',
		});
	
	};

};

function contactScroll() {

	const contact = document.querySelector('.contacts');
	const contactHeight = contact.offsetHeight;

	if (window.innerHeight > contactHeight){

		contact.scrollIntoView({

			block: 'center',

			inline: 'center',

			behavior: 'smooth'
		});
	};

	if (!(window.innerHeight > contactHeight)){
		
		const contactY = contact.offsetTop;
		
		window.scrollTo({

			top: contactY,

		
			behavior: 'smooth',
		});
	
	};

}





