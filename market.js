//Перевірка підключення
console.log('Перевірка чи підключено market.js')
//Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");
//Перевірка існування блоку
if (itemsDiv) {
    //Вивід знайденого елементу
    console.log(itemsDiv)
    //Додавання відформатованого HTML коду в блок
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    for (let i = 0; i < 100; i++) {
        itemsDiv.innerHTML += '<div class = "item"></div>'
    }
} else {
    //Повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')

}
let itemArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N',
    'Газокосарка 430',
    'Електричний тример 130',
    'Електрична газонокосарка 320',
'Акумуляторний оприскувач 12 E',


]
console.log(itemArray)

for (let i = 0; i < itemArray.itemArray.length; i++) {
    console.log(itemArray[i])
}
