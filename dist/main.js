/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://npm-package/./src/sass/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n\r\n\r\n/* ВХОДНЫЕ ДАННЫЕ (МАКСИМУМ 6 ЭЛЕМЕНТОВ, \r\nНО ЕСЛИ ЗАХОТЕТЬ МОЖНО И БОЛЬШЕ))) ) */\r\nconst nameList = [\r\n    {\r\n    name: 'Rostov-on-Don, admiral',\r\n    url_image: 'src/img/rostovOnDon_admiral.png',\r\n    CITY: \r\n      ['Rostov-on-Don', 'LCD admiral'],\r\n    APARTMENT_AREA: '81 m2',\r\n    REPAIR_TIME: '3.5 months',\r\n    REPAIR_COST: 'Upon request'\r\n  },\r\n  {\r\n    name: 'Moscow, SuperStar',\r\n    url_image: 'src/img/rostovOnDon_patriotic.png',\r\n    CITY: \r\n      ['Moscow', 'SuperStar'],\r\n    APARTMENT_AREA: '101 m2',\r\n    REPAIR_TIME: '5 months',\r\n    REPAIR_COST: 'Upon request'\r\n  },\r\n  {\r\n    name: 'Sochi, Thieves',\r\n    url_image: 'src/img/sochi_thieves.png',\r\n    CITY: \r\n      ['Sochi', 'Thieves'],\r\n    APARTMENT_AREA: '105 m2',\r\n    REPAIR_TIME: '4 months',\r\n    REPAIR_COST: 'Upon request'\r\n  },\r\n  {\r\n    name: 'Saint-petersburg, Gallery',\r\n    url_image: 'src/img/rostovOnDon_admiral.png',\r\n    CITY: \r\n      ['Saint-petersburg', 'Gallery'],\r\n    APARTMENT_AREA: '57 m2',\r\n    REPAIR_TIME: '4.5 months',\r\n    REPAIR_COST: 'Upon request'\r\n  },\r\n  {\r\n    name: 'Rostov-on-Don, Patriotic',\r\n    url_image: 'src/img/rostovOnDon_patriotic.png',\r\n    CITY: \r\n      ['Rostov-on-Don', 'Patriotic'],\r\n    APARTMENT_AREA: '93 m2',\r\n    REPAIR_TIME: '3 months',\r\n    REPAIR_COST: 'Upon request'\r\n  },\r\n  {\r\n    name: 'Makhachkala, Center',\r\n    url_image: 'src/img/sochi_thieves.png',\r\n    CITY: \r\n      ['Rostov-on-Don', 'Patriotic'],\r\n    APARTMENT_AREA: '153 m2',\r\n    REPAIR_TIME: '156 months',\r\n    REPAIR_COST: 'Upon request'\r\n  }\r\n];\r\n\r\nconst navTop = document.querySelector ('.nav-top');\r\nconst pointBlock = document.querySelector ('.point-block');  \r\nconst arrowLeft = document.getElementById ('arrow-left');\r\nconst arrowRight = document.getElementById ('arrow-right');\r\n\r\nconst urlPoint = 'src/img/point.svg';\r\nconst urlPointFill = 'src/img/point_fill.svg';\r\n\r\n/* ОПРЕДЕЛЕНИЕ КОЛ-ВА ЭЛЕМЕНТОВ, УСТАНОВКА ТОЧЕК В НИЖНЕЙ \r\nППАНЕЛИ НАВИГАЦИИ И ССЫЛОК В ВЕРХНЕЙ ПАНЕЛИ НАВИГАЦИИ */\r\nfor (i = 0; i < nameList.length; i ++ ) {\r\n  const elemSpan = document.createElement ('span');\r\n  navTop.appendChild (elemSpan);\r\n  elemSpan.classList.add ('nav-top_link');\r\n  elemSpan.textContent = nameList[i].name;\r\n\r\n  const pointSpan = document.createElement ('span');\r\n  pointBlock.appendChild (pointSpan);\r\n  pointSpan.classList.add ('point');\r\n  const imgPoint = document.createElement ('img');\r\n  pointSpan.appendChild (imgPoint);\r\n  if (i === 0) {\r\n    elemSpan.classList.add ('link_active');\r\n    pointSpan.classList.add ('point_active');\r\n  };\r\n};\r\n\r\nconst navLink = document.querySelectorAll ('.nav-top_link'); // NodeList\r\nconst pointList = document.querySelectorAll ('.point'); // NodeList\r\n\r\n\r\n// ПРОКРУТКА ВЕРХНЕЙ ПАНЕЛИ НАВИГАЦИИ ПРИ НАВЕДЕНИИ\r\nnavTop.addEventListener('wheel', (e) => {\r\n  navTop.scrollLeft += e.deltaY;\r\n  isFunctionEnabled = false;\r\n  setTimeout (() => {\r\n    isFunctionEnabled = true;\r\n  }, 5000);\r\n});\r\n\r\n// ДОБАВЛЕНИЕ/УДАЛЕНИЕ КЛАССА\r\nnavLink.forEach (btn => {\r\n  btn.addEventListener ('click', (e) => {\r\n    navLink.forEach (btn => {\r\n      btn.classList.remove ('link_active');\r\n    });\r\n    e.target.classList.add ('link_active');\r\n  \r\n    startSlider ();\r\n    clearInterval (slidesAuto);\r\n  });\r\n});\r\n\r\n// ДЛЯ ОСТАНОВКИ АВТОПРОКРУТКИ НА 5 сек ПОСЛЕ РУЧНОЙ ПРОКРУТКИ\r\nlet isFunctionEnabled = true; \r\n\r\nfunction slideLeft () {\r\n  const activeLink = document.querySelector('.link_active');\r\n  const navTopLeft = navTop.getBoundingClientRect().left;\r\n  const activeLeft = activeLink.getBoundingClientRect().left;\r\n\r\n  if (isFunctionEnabled) {\r\n    navTop.scrollLeft += activeLeft - navTopLeft;\r\n  };\r\n};\r\n\r\n// ПРОВЕРКА ТЕКУЩЕЙ СТРАНИЦЫ\r\nfunction startSlider () {\r\n  for (i = 0; i < navLink.length; i ++ ) {\r\n    if (navLink[i].classList.contains ('link_active')) {\r\n      addInfo (i);\r\n    };\r\n  };\r\n  \r\n  slideLeft ();\r\n};\r\n\r\n// УСТАНОВКА ЗНАЧЕНИЙ\r\nfunction addInfo (x) {\r\n  const image = document.getElementById ('image');\r\n  const cityList = document.querySelectorAll ('.info-block_city__text'); // NodeList\r\n  const apartmentArea = document.getElementById ('apartment-area');\r\n  const repairTime = document.getElementById ('repair-time');\r\n  const repairCost = document.getElementById ('repair-cost');\r\n\r\n  for (i = 0; i < cityList.length; i ++ ) {\r\n    cityList[i].textContent = nameList[x].CITY[i];\r\n  };\r\n  apartmentArea.textContent = nameList[x].APARTMENT_AREA;\r\n  repairTime.textContent = nameList[x].REPAIR_TIME;\r\n  repairCost.textContent = nameList[x].REPAIR_COST;\r\n\r\n  // УСТАНОВКА ИЗОБРАЖЕНИЯ\r\n  image.src = nameList[x].url_image;\r\n\r\n  // ЗАЛИВКА ТОЧЕК ВНИЗУ\r\n  for (i = 0; i < pointList.length; i ++ ) {\r\n    const point = pointList[i].querySelector ('img');\r\n    const pointFill = pointList[x].querySelector ('img');\r\n    if (pointList[i].classList.contains ('point_active')) {\r\n      pointList[i].classList.remove ('point_active');\r\n    };\r\n    point.src = urlPoint;\r\n    pointList[x].classList.add ('point_active');\r\n    pointFill.src = urlPointFill;\r\n  };\r\n};\r\n\r\n// ЗАЦИКЛИВАНИЕ СЛАДЕРА\r\nlet index = 0;\r\nconst pageCount = navLink.length;\r\n\r\nfunction navigationArrow (operand) {\r\n  for (i = 0; i < navLink.length; i ++ ) {\r\n    if (navLink[i].classList.contains ('link_active')) {\r\n      navLink[i].classList.remove ('link_active');\r\n      index = i;\r\n    };\r\n  };\r\n  if (operand === '+') {\r\n    navLink[(index + 1) % pageCount].classList.add ('link_active');\r\n  } else {\r\n    navLink[(index - 1 + pageCount) % pageCount].classList.add ('link_active');\r\n  };\r\n  startSlider ();\r\n}\r\n\r\n// ОБРАБОТЧИКИ СТРЕЛОК\r\narrowRight.addEventListener ('click', () => {\r\n  navigationArrow ('+');\r\n  clearInterval (slidesAuto);\r\n});\r\n\r\narrowLeft.addEventListener('click', () => {\r\n  navigationArrow ('-');\r\n  clearInterval (slidesAuto);\r\n});\r\n\r\n// ОБРАБОТЧИК КЛИКА ТОЧЕК В НИЖНЕЙ НАВИГАЗИИ \r\npointList.forEach ((point, index) => {\r\n  point.addEventListener ('click', () => {\r\n    addInfo (index);\r\n    navLink.forEach (btn => {\r\n      btn.classList.remove ('link_active');\r\n    });\r\n    navLink[index].classList.add ('link_active');\r\n    clearInterval (slidesAuto);\r\n  });\r\n});\r\n\r\n// АВТОЗАМЕНА СЛАЙДОВ\r\nconst slidesAuto = setInterval (() => {\r\n  navigationArrow ('+');\r\n}, 3000);\r\n\r\nstartSlider ();\n\n//# sourceURL=webpack://npm-package/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;