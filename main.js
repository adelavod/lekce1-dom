// tady je místo pro náš program

// 1. JavaScriptem změnit barvu nadpisu.
//document.getElementById('js-main-heading').style.color = "red";
// document.querySelector('#js-main-heading').style.color = '#006400';
let nadpis;
nadpis = document.querySelector('#js-main-heading');
nadpis.style.color = "orchid";

// 2. Změna dekorace odstace. (Poznámka: Zde slouží pro demonstraci, ale obecně je lepší tyto jednoduché změny a úpravy dělat pomocí CSS!)
let paragraphs = document.getElementsByClassName('js-paragraph');

let firstParagraph = paragraphs[0];
// Pomocí následujícího příkazu si mohu vypsat prvek do konzole. Vhodé při ladění programu.
 console.log(firstParagraph);
firstParagraph.style.fontSize = '16px';
// Pomocí následujícího příkazu si mohu vypsat nastavenou velikost písma.
//console.log(firstParagraph.style.fontSize);
firstParagraph.style.fontStyle = 'normal'; // nebo 'italic'
 firstParagraph.style.fontWeight = 'lighter'; // nebo 'bold'

// 3. Změna obrázku.
//let animalImageElement = document.getElementsByTagName('img')[0];
//animalImageElement.setAttribute('src', 'pes.jpg');
//animalImageElement.setAttribute('alt', 'Silný pes');

let obrazek = document.getElementsByTagName('img')[1]; // [0] by mělo vliv na 1. img na stránce, [1] druhý img na stánce atd.
obrazek.setAttribute('src', 'mlok.jpg');
obrazek.setAttribute('alt', 'báječný mločík');
obrazek.style.maxWidth = "200px";

// 4. Přemístění a otočení čtverečku
let squareElement = document.querySelector('.ctverecek');
let container = document.querySelector('.container');
//document.querySelector('body').insertBefore(squareElement, document.querySelector('#js-main-heading'));
// Pomocí následujícího příkazu přesunu čteveček ještě do paragrafu
firstParagraph.appendChild(container);
// změnit styl čtverečku
// squareElement.style.transform = 'skew(50deg)'  //'rotate(-90deg)';
container.style.margin = "50px";
squareElement.textContent = "PINKY SQUARE!"
squareElement.style.backgroundColor = 'pink';
squareElement.style.display = 'flex';
squareElement.style.justifyContent = 'center';

//5. Měníme HTML obsah!
let ctverecek2 = document.querySelector('.ctverecek2');
//firstParagraph.innerHTML = 'jsem <em>kurzíva</em>';
ctverecek2.style.marginLeft = "5px";
ctverecek2.innerHTML = 'jsem <em>kurzíva</em>'