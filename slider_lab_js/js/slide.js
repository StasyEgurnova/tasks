let images = [
	{
		city: 'Rostov-on-Don LCD admiral',
		area: '81 m2',
		time: '3.5 months',
		url: './images/project.jpg',
	},
	{
		city: 'Sochi Thieves',
		area: '105 m2',
		time: '4 months',
		url: './images/project2.jpg',
	},
	{
		city: 'Rostov-on-Don Patriotic',
		area: '93 m2',
		time: '3 months',
		url: './images/project3.jpg',
	},
];

function initSlider(images) {
	if (!images || !images.length) return;
	const sliderWrapper = document.querySelector('.photo_project');
	const sliderImages = sliderWrapper.querySelector('.slider_images');
	const sliderArrows = document.querySelector('.arrows');
	const dotsBlock = document.querySelector('.dots-block');
	const linksBlock = document.querySelector('.menu');
	const infoBlock = document.querySelector('.info');
	// let area = infoBlock.querySelector('.span_area');
	// let time = infoBlock.querySelector('.span_time');
	// let city = infoBlock.querySelector('.span_city');

	initImages();
	initArrows();

	function initImages() {
		images.forEach((image, index) => {
			let imageElement = document.createElement('div');
			imageElement.classList = `image n${index} ${index ? '' : 'active'}`;
			imageElement.dataset.index = index;
			imageElement.style.backgroundImage = `url(${image.url})`;
			sliderImages.appendChild(imageElement);
			//добавляю точки
			let dot = `<div class="dot n${index} ${
				index === 0 ? 'active-dots' : ''
			}" data-index="${index}"></div>`;
			dotsBlock.innerHTML += dot;
			//добавляю ссылки
			// let link = linksBlock.querySelectorAll('a');
			// link[`${index}`].classList = `menu_link n${index} ${index ? '' : 'active-link'}`;
			// link[`${index}`].dataset.index = `${index}`;
			let link = `<a href="#" class='menu_link n${index} ${
				index ? '' : 'active-link'
			}' data-index="${index}">${image.city}
      </a>`;
			//console.log(link);
			linksBlock.innerHTML += link;

			//меняю текст
			//  area.innerHTML = images[index].area;
			//  time.innerHTML = images[index].time;
			//  city.innerHTML = images[index].city;

			// area.setAttribute('class',`span_info span_area n${index} ${
			// 	index === 0 ? 'active-info' : ''
			// }`)
		});
		initDots();
		initLink();
	}

	function initArrows() {
		sliderArrows.querySelectorAll('.slider_arrow').forEach((arrow) => {
			arrow.addEventListener('click', function () {
				let curNumber = +sliderImages.querySelector('.active').dataset.index;
				let nextNumber;
				if (arrow.classList.contains('arrow_left')) {
					nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
				} else {
					nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
				}
				moveSlider(nextNumber);
			});
		});
	}

	function moveSlider(num) {
		sliderImages.querySelector('.active').classList.remove('active');
		sliderImages.querySelector(`.n${num}`).classList.add('active');
		dotsBlock.querySelector('.active-dots').classList.remove('active-dots');
		dotsBlock.querySelector(`.n${num}`).classList.add('active-dots');
		linksBlock.querySelector('.active-link').classList.remove('active-link');
		linksBlock.querySelector(`.n${num}`).classList.add('active-link');

		//меняем текст
		let area = infoBlock.querySelector('.span_area');
		if (images[num].area) {
			area.innerText = images[num].area;
			area.style.display = 'block';
		} else {
			area.style.display = 'none';
		}
		let time = infoBlock.querySelector('.span_time');
		if (images[num].time) {
			time.innerText = images[num].time;
			time.style.display = 'block';
		} else {
			time.style.display = 'none';
		}
		let city = infoBlock.querySelector('.span_city');
		if (images[num].city) {
			city.innerText = images[num].city;
			city.style.display = 'block';
		} else {
			city.style.display = 'none';
		}
	}

	function initLink() {
		linksBlock.querySelectorAll('.menu_link').forEach((link) => {
			link.addEventListener('click', function () {
				moveSlider(this.dataset.index);
			});
		});
	}

	function initDots() {
		dotsBlock.querySelectorAll('.dot').forEach((dot) => {
			dot.addEventListener('click', function () {
				moveSlider(this.dataset.index);
			});
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initSlider(images);
});

//не до конца работающая часть, оставила на всякий случай

// // const dotsItems = Array.from(dots);
// console.log(dots);

// //превратила в массив содержмое дива с фото проектами
// const sliderItems = Array.from(slider.children);
// //обошла массив
// sliderItems.forEach(function (slide, index) {
// 	//console.log(slide);
// 	//и скрыла лишние картинки
// 	if (index !== 0) {
// 		slide.classList.add('hidden');
// 	}
// 	//индексы добавила
// 	slide.dataset.index = index;
// 	//добавила data атрибут activ для активного слайда
// 	sliderItems[0].setAttribute('data-active', '');
// 	//клик по картинке
// 	slide.addEventListener('click', () => {
// 		showNextSlide('next');
// 	});
// });
// //клик по стрелкам
// arrowRight.addEventListener('click', () => {
// 	showNextSlide('next');
// });
// arrowLeft.addEventListener('click', () => {
// 	showNextSlide('prev');
// });

// // функция, которая показывает картинки
// function showNextSlide(direction) {
// 	//скрываю текущий слайд
// 	const currentSlide = slider.querySelector('[data-active]');
// 	const currentSlideIndex = +currentSlide.dataset.index;
// 	currentSlide.classList.add('hidden');
// 	currentSlide.removeAttribute('data-active');
// 	//рассчитываем индекс в зависимости от стрелки
// 	let nextSliderIndex;
// 	if (direction === 'next') {
// 		nextSliderIndex =
// 			currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
// 	} else if (direction === 'prev') {
// 		nextSliderIndex =
// 			currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
// 	}
// 	//показываю следующий слайд
// 	const nextSlide = slider.querySelector(`[data-index = "${nextSliderIndex}"]`);
// 	nextSlide.classList.remove('hidden');
// 	nextSlide.setAttribute('data-active', '');
// }

// // //перебор кружочков и добавление активного при нажатии
// // dots.forEach((dot) => {
// // 	dot.addEventListener('click', () => {
// // 		removeActiveClass();
// //     dot.classList.add('active-dots');
// // 	});
// // });
// // //тоже самое, но для ссылок
// // links.forEach((link) => {
// // 	link.addEventListener('click', () => {
// // 		removeActiveClass();
// //     link.classList.add('active-link');
// // 	});
// // });

// // //функция которая удаляет "подсвечивающий класс" у ссылки и кружочка
// // function removeActiveClass() {
// // 	dots.forEach((dot) => {
// // 		dot.classList.remove('active-dots');
// // 	});
// // 	links.forEach((link) => {
// // 		link.classList.remove('active-link');
// // 	});
// // }
