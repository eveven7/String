console.log("1 uzd ---------------------------------\n");
//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.



let vardas = "Leonardo";
let pavarde = "dicaprio";

if (vardas.length < pavarde.length) {
    console.log(vardas);
} else if (vardas.length > pavarde.length) {
    console.log(pavarde);
} else {
    console.log("Aktoriaus vardas ir pavarde yra vienodo ilgio");
}


console.log("2 uzd ---------------------------------\n");
//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. (LEONARDO dicaprio)


console.log(vardas.toUpperCase());
console.log(pavarde.toLowerCase());


console.log("3 uzd ---------------------------------\n");
//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.



let pirmos = vardas.charAt(0) + pavarde.charAt(0);
console.log(pirmos);


console.log("4 uzd ---------------------------------\n");
//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.



let trys = vardas.substring(vardas.length - 3) + " " + pavarde.substring(pavarde.length - 3)

console.log(trys);


console.log("5 uzd ---------------------------------\n");
//Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.


let american = "An American in Paris";

american = american.replace(/a/g, "*")
american = american.replace(/A/g, "*")
console.log(american);

console.log("6 uzd ---------------------------------\n");
//Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.

let american2 = "An American in Paris";
let noVowels1 = american2.replace(/[aeiou]/gi, '');

console.log(noVowels1);

let breakfast = "Breakfast at Tiffany's";
let noVowels2 = breakfast.replace(/[aeiou]/gi, '');

console.log(noVowels2);

let oddysey = "2001: A Space Odyssey";
let noVowels3 = oddysey.replace(/[aeiou]/gi, '');

console.log(noVowels3);

let wonderful = "It's a Wonderful Life";
let noVowels4 = wonderful.replace(/[aeiou]/gi, '');

console.log(noVowels4);


console.log("7 uzd ---------------------------------\n");
//Stringe, kurį generuoja toks kodas: "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope"; Surasti ir atspausdinti epizodo numerį.
console.log("8 uzd ---------------------------------\n");

//Suskaičiuoti kiek stringe “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” yra žodžių trumpesnių arba lygių nei 5 raidės.
//Pakartokite kodą su stringu “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.



