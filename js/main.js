// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

console.log('--1--');
const objStudent = {
  name: 'Ivan',
  specialization: 'Filosof',
  averageScore: '75',
  countMissedClasses: '3',
  showInfo: function (metod = 'default') {
    console.group(`${this.name} info(metod - ${metod})`);
    console.log(`Ім'я студента - ${this.name}`);
    console.log(`Його спеціальнісь - ${this.specialization}`);
    console.log(`Середній бал - ${this.averageScore}`);
    console.log(`Кількість пропущених занять- ${this.countMissedClasses}`);
    console.groupEnd();
  }
};

objStudent.showInfo();

const student1 = {
  name: 'Олексій',
  specialization: 'Фізика',
  averageScore: '99',
  countMissedClasses: '0'
}

const student2 = {
  name: 'Степан',
  specialization: 'Математичний аналіз',
  averageScore: '95',
  countMissedClasses: '2'
}

const student3 = {
  name: 'Юля',
  specialization: 'Філологія',
  averageScore: '100',
  countMissedClasses: '1'
}

objStudent.showInfo.bind(student1, 'bind')();
// objStudent.showInfo.bind(student2, 'bind')();
// objStudent.showInfo.bind(student3, 'bind')();

// objStudent.showInfo.call(student1, 'call');
objStudent.showInfo.call(student2, 'call');
// objStudent.showInfo.call(student3, 'call');

// objStudent.showInfo.apply(student1, ['apply']);
// objStudent.showInfo.apply(student2, ['apply']);
objStudent.showInfo.apply(student3, ['apply']);

console.log('\n\n\n\n\n');

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке
console.log('--2--');

const htmlBtn = document.querySelector('#html');
const cssBtn = document.querySelector('#css');

const htmlInfoBlock = document.querySelector('.html_info');
const cssInfoBlock = document.querySelector('.css_info');

const htmlInfo = "HTML - скорочення від \"HyperText Mark-up Language\" - перекладається як /\"Мова розмітка гіпертексту\" (Гіпертекст - це текст, що не послідовно зв'язаний з іншими документами, тобто у вас є змога з першої сторінки документу перейти на останню). Іншими словами HTML - це мова розмітки, або ще один спосіб зберігання інформації. За допомогою HTML ти позначаєш текст, вказуючи своєму веб-переглядачу, як він має розуміти позначений текст, так само як і на жорсткому диску інформація зберігається в блоках, кластерах, секторах, доріжкаx і тільки за допомогою, такої, визначеної структури твій комп'ютер розуміє, що треба, а що не треба зчитувати.";

const cssInfo = "CSS (абревіатура від Cascading Style Sheets, що в перекладі означає каскадні таблиці стилів) - це спеціальна мова (мова стилів), за допомогою якої описують вигляду документів (як і де відображати елементи веб-сторінки), написаних мовами розмітки даних. Найчастіше CSS використовується для документів, котрі розмічені мовою HTML, XHTML та XML."; 

function showInfoHtml() {
  console.log(htmlInfo);
}

function showInfoCss() {
  console.log(cssInfo);
}

// навішування функуції на кнопку через onclick
htmlBtn.onclick = showInfoHtml;
cssBtn.onclick = showInfoCss;


// навішування функуцій на кнопкау через addEventListener
// htmlBtn.addEventListener('click', function (element) {
//   console.log(htmlInfo);
// });

// cssBtn.addEventListener('click', function (element) {
//   console.log(cssInfo);
// });

// навішування функуцій на кнопкау через addEventListener та вивід інформації в документ
// htmlBtn.addEventListener('click', function () {
//   htmlInfoBlock.innerHTML = htmlInfo;
//   cssInfoBlock.innerHTML = '';
//   console.log(htmlInfo);
// });

// cssBtn.addEventListener('click', function () {
//   cssInfoBlock.innerHTML = cssInfo;
//   htmlInfoBlock.innerHTML = '';
//   console.log(cssInfo);
// });
console.log('\n\n\n\n\n');

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

console.log('--3--');

const shop = function () {

  let totalPrice = null;
  let message = "";

  totalPrice = (this.price * this.count).toFixed(2);;
  
  message = `Product is - ${this.name}. Summ for product ${totalPrice} (massa:${this.count} kg)`;

  return message;
}

const product = [
  {
    name: 'banana',
    price: 30,
    count: 4.5
  },
  {
    name: 'cherry',
    price: 58,
    count: 1.3
  },
  {
    name: 'orange',
    price: 89,
    count: 3.4
  }
];

product.forEach(element => {
  console.log(shop.call(element));
});