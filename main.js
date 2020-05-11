const firstName = "Tomasz";
const age = 33;

console.log(firstName);
console.log(age);
console.log(`Mam na imię ${firstName} i mam ${age} lata.`);

const article = document.querySelector(".notes__article--js");
console.log(article.innerHTML);

article.innerHTML = "<p>LEGIA MISTRZ</p>";
console.log(article.innerHTML);
