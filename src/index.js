import './sass/style.scss';

/* ВХОДНЫЕ ДАННЫЕ (МАКСИМУМ 6 ЭЛЕМЕНТОВ, 
НО ЕСЛИ ЗАХОТЕТЬ МОЖНО И БОЛЬШЕ))) ) */
const nameList = [
    {
    name: 'Rostov-on-Don, admiral',
    url_image: 'src/img/rostovOnDon_admiral.png',
    CITY: 
      ['Rostov-on-Don', 'LCD admiral'],
    APARTMENT_AREA: '81 m2',
    REPAIR_TIME: '3.5 months',
    REPAIR_COST: 'Upon request'
  },
  {
    name: 'Moscow, SuperStar',
    url_image: 'src/img/rostovOnDon_patriotic.png',
    CITY: 
      ['Moscow', 'SuperStar'],
    APARTMENT_AREA: '101 m2',
    REPAIR_TIME: '5 months',
    REPAIR_COST: 'Upon request'
  },
  {
    name: 'Sochi, Thieves',
    url_image: 'src/img/sochi_thieves.png',
    CITY: 
      ['Sochi', 'Thieves'],
    APARTMENT_AREA: '105 m2',
    REPAIR_TIME: '4 months',
    REPAIR_COST: 'Upon request'
  },
  {
    name: 'Saint-petersburg, Gallery',
    url_image: 'src/img/rostovOnDon_admiral.png',
    CITY: 
      ['Saint-petersburg', 'Gallery'],
    APARTMENT_AREA: '57 m2',
    REPAIR_TIME: '4.5 months',
    REPAIR_COST: 'Upon request'
  },
  {
    name: 'Rostov-on-Don, Patriotic',
    url_image: 'src/img/rostovOnDon_patriotic.png',
    CITY: 
      ['Rostov-on-Don', 'Patriotic'],
    APARTMENT_AREA: '93 m2',
    REPAIR_TIME: '3 months',
    REPAIR_COST: 'Upon request'
  },
  {
    name: 'Makhachkala, Center',
    url_image: 'src/img/sochi_thieves.png',
    CITY: 
      ['Rostov-on-Don', 'Patriotic'],
    APARTMENT_AREA: '153 m2',
    REPAIR_TIME: '156 months',
    REPAIR_COST: 'Upon request'
  }
];

const navTop = document.querySelector ('.nav-top');
const pointBlock = document.querySelector ('.point-block');  
const arrowLeft = document.getElementById ('arrow-left');
const arrowRight = document.getElementById ('arrow-right');

const urlPoint = 'src/img/point.svg';
const urlPointFill = 'src/img/point_fill.svg';

/* ОПРЕДЕЛЕНИЕ КОЛ-ВА ЭЛЕМЕНТОВ, УСТАНОВКА ТОЧЕК В НИЖНЕЙ 
ППАНЕЛИ НАВИГАЦИИ И ССЫЛОК В ВЕРХНЕЙ ПАНЕЛИ НАВИГАЦИИ */
for (i = 0; i < nameList.length; i ++ ) {
  const elemSpan = document.createElement ('span');
  navTop.appendChild (elemSpan);
  elemSpan.classList.add ('nav-top_link');
  elemSpan.textContent = nameList[i].name;

  const pointSpan = document.createElement ('span');
  pointBlock.appendChild (pointSpan);
  pointSpan.classList.add ('point');
  const imgPoint = document.createElement ('img');
  pointSpan.appendChild (imgPoint);
  if (i === 0) {
    elemSpan.classList.add ('link_active');
    pointSpan.classList.add ('point_active');
  };
};

const navLink = document.querySelectorAll ('.nav-top_link'); // NodeList
const pointList = document.querySelectorAll ('.point'); // NodeList


// ПРОКРУТКА ВЕРХНЕЙ ПАНЕЛИ НАВИГАЦИИ ПРИ НАВЕДЕНИИ
navTop.addEventListener('wheel', (e) => {
  navTop.scrollLeft += e.deltaY;
  isFunctionEnabled = false;
  setTimeout (() => {
    isFunctionEnabled = true;
  }, 5000);
});

// ДОБАВЛЕНИЕ/УДАЛЕНИЕ КЛАССА
navLink.forEach (btn => {
  btn.addEventListener ('click', (e) => {
    navLink.forEach (btn => {
      btn.classList.remove ('link_active');
    });
    e.target.classList.add ('link_active');
  
    startSlider ();
    clearInterval (slidesAuto);
  });
});

// ДЛЯ ОСТАНОВКИ АВТОПРОКРУТКИ НА 5 сек ПОСЛЕ РУЧНОЙ ПРОКРУТКИ
let isFunctionEnabled = true; 

function slideLeft () {
  const activeLink = document.querySelector('.link_active');
  const navTopLeft = navTop.getBoundingClientRect().left;
  const activeLeft = activeLink.getBoundingClientRect().left;

  if (isFunctionEnabled) {
    navTop.scrollLeft += activeLeft - navTopLeft;
  };
};

// ПРОВЕРКА ТЕКУЩЕЙ СТРАНИЦЫ
function startSlider () {
  for (i = 0; i < navLink.length; i ++ ) {
    if (navLink[i].classList.contains ('link_active')) {
      addInfo (i);
    };
  };
  
  slideLeft ();
};

// УСТАНОВКА ЗНАЧЕНИЙ
function addInfo (x) {
  const image = document.getElementById ('image');
  const cityList = document.querySelectorAll ('.info-block_city__text'); // NodeList
  const apartmentArea = document.getElementById ('apartment-area');
  const repairTime = document.getElementById ('repair-time');
  const repairCost = document.getElementById ('repair-cost');

  for (i = 0; i < cityList.length; i ++ ) {
    cityList[i].textContent = nameList[x].CITY[i];
  };
  apartmentArea.textContent = nameList[x].APARTMENT_AREA;
  repairTime.textContent = nameList[x].REPAIR_TIME;
  repairCost.textContent = nameList[x].REPAIR_COST;

  // УСТАНОВКА ИЗОБРАЖЕНИЯ
  image.src = nameList[x].url_image;

  // ЗАЛИВКА ТОЧЕК ВНИЗУ
  for (i = 0; i < pointList.length; i ++ ) {
    const point = pointList[i].querySelector ('img');
    const pointFill = pointList[x].querySelector ('img');
    if (pointList[i].classList.contains ('point_active')) {
      pointList[i].classList.remove ('point_active');
    };
    point.src = urlPoint;
    pointList[x].classList.add ('point_active');
    pointFill.src = urlPointFill;
  };
};

// ЗАЦИКЛИВАНИЕ СЛАДЕРА
let index = 0;
const pageCount = navLink.length;

function navigationArrow (operand) {
  for (i = 0; i < navLink.length; i ++ ) {
    if (navLink[i].classList.contains ('link_active')) {
      navLink[i].classList.remove ('link_active');
      index = i;
    };
  };
  if (operand === '+') {
    navLink[(index + 1) % pageCount].classList.add ('link_active');
  } else {
    navLink[(index - 1 + pageCount) % pageCount].classList.add ('link_active');
  };
  startSlider ();
}

// ОБРАБОТЧИКИ СТРЕЛОК
arrowRight.addEventListener ('click', () => {
  navigationArrow ('+');
  clearInterval (slidesAuto);
});

arrowLeft.addEventListener('click', () => {
  navigationArrow ('-');
  clearInterval (slidesAuto);
});

// ОБРАБОТЧИК КЛИКА ТОЧЕК В НИЖНЕЙ НАВИГАЗИИ 
pointList.forEach ((point, index) => {
  point.addEventListener ('click', () => {
    addInfo (index);
    navLink.forEach (btn => {
      btn.classList.remove ('link_active');
    });
    navLink[index].classList.add ('link_active');
    clearInterval (slidesAuto);
  });
});

// АВТОЗАМЕНА СЛАЙДОВ
const slidesAuto = setInterval (() => {
  navigationArrow ('+');
}, 3000);

startSlider ();