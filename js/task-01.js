
const getElementItemt = document.querySelectorAll('.item');
console.log(`Nomber of categories: ${getElementItemt.length}`);

getElementItemt.forEach(element => {
    const getElemTitle = element.querySelector('h2');
    const getElemItem = element.querySelectorAll('li');

    console.log(`Category: ${getElemTitle.textContent}`);
 console.log(`Elements: ${getElemItem.length}`);

});
