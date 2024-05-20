//Перевірка підключення
//console.log('Перевірка чи підключено market.js')
// Визначення масиву товарів
// let itemsArray = [
//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
// ]

let itemsArray = [
    {
        title: "Мотокоса 43",
        image: "img-market/1.png",
        mono: 4,
        pb: 10,
        price_standart: 5000,
        price_discount: 4000,
        price_coupon: 3700,

    },

    {
        title: "Електричний тример 110",
        image: "img-market/2.webp",
        mono: 5,
        pb: 3,
        price_standart: 5770,
        price_discount: 4550,
        price_coupon: 3365,
    },

    {
        title: "Електрична газонокосарка 32",
        image: "img-market/3.webp",
        mono: 8,
        pb: 3,
        price_standart: 5470,
        price_discount: 4690,
        price_coupon: 3733,
    },
    {
        title: "Акумуляторний оприскувач 12 N",
        image: "img-market/4.webp",
        mono: 12,
        pb: 10,
        price_standart: 5220,
        price_discount: 3900,
        price_coupon: 3799,
    }


]
// let itemsArray = [
//     {
//         firstName: "Віталій",
//         lastName: "Шатківський",
//         age: 43,
//         subject: "Інформатика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
//         email: "pzs_shvm@ztu.edu.ua",
//     },
//     {
//         firstName: "Наталія",
//         lastName: "Венцель",
//         age: 18,
//         subject: "Директор",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
//         email: "n.ventsel@ukr.net",
//     },
//     {
//         firstName: "Наталія",
//         lastName: "Кучер",
//         age: 18,
//         subject: "Фізика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg", 
//         url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
//         email: "lic_knv@ztu.edu.ua",
//     },
//     {
//         firstName: "Анжела",
//         lastName: "Лознюк",
//         age: 18,
//         subject: "Українська мова, література",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
//         email: "lic_lal@ztu.edu.ua",
//     },
//     {
//         firstName: "Ірина",
//         lastName: "Боровська-Карандюк",
//         age: 18,
//         subject: "Українська мова, література, зарубіжна література",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
//         email: "lic_bia@ztu.edu.ua",
//     },
//     {
//         firstName: "Василь",
//         lastName: "Бабій",
//         age: 18,
//         subject: "Фізична культура",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
//         email: "lic_bvd@ztu.edu.ua",
//     },
//     {
//         firstName: "Тарас",
//         lastName: "Савінков",
//         age: 18,
//         subject: "Англійська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
//         email: "lic_ste@ztu.edu.ua",
//     },
//     {
//         firstName: "Вікторія",
//         lastName: "Нелипович",
//         age: 18,
//         subject: "Математика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
//         email: "lic_nvv@ztu.edu.ua",
//     },
//     {
//         firstName: "Іван",
//         lastName: "Севрук",
//         age: 18,
//         subject: "Захист України",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/sevruk-i-h/",
//         email: "lic_sih@ztu.edu.ua",
//     },
//     {
//         firstName: "Олена",
//         lastName: "Чугунова",
//         age: 18,
//         subject: "Математика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/chuhunova-olena-vasylivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/chuhunova-o-v/",
//         email: "lic_chov@ztu.edu.ua",
//     },
//     {
//         firstName: "Олена",
//         lastName: "Геча",
//         age: 18,
//         subject: "Історія",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
//         email: "lic_hoa@ztu.edu.ua",
//     },
//     {
//         firstName: "Ірина",
//         lastName: "Глібко",
//         age: 18,
//         subject: "Англійська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
//         email: "lic_gia@ztu.edu.ua",
//     },
// ]


//Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

//Перевірка існування блоку
if (itemsDiv) {
    // //Створення блоків по кількості елементів масиву
    // itemsArray.forEach((item,index) => {
    //     // console.log(item)
    //     //Виводимо на веб сторінку елемент масиву в блок з класом item
    //     itemsDiv.innerHTML +=
    //         `
    //     <div class = "item">
    //   <h2>Товар №${index}</h2>
    //   <p>${item}</p>
    //   </div>
    //   `
    // })

    // } else {
    //     //Повідомлення про не знайдений блок
    //     console.log('Блок товарів не знайдено')

    // }

    // //Виведення едементів масиву
    // itemsArray.forEach((item) => {
    //     console.log(item)
    // })
    //Виведення елементів відсортованого масиву
    // itemsArray.sort().forEach((item, index) => {
    //     console.log(index + '-й елемент:',item)
    // })
    itemsArray.forEach((item, index) => {
        // console.log(item)
        // itemsDiv.innerText += item
        // itemsDiv.innerHTML += `<div class = "item">${item}</div>`
        //Виводимо на веб сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML +=
            // `
            // <div class = "item">
            //     <h2>Вчитель №${index+1} з ${itemsArray.length}</h2>
            //     <p>${item.firstName} ${item.lastName}</p>
            //     <p>Предмет: ${item.subject}</p>
            //     <p><img src = "${item.photo}" class = "item-image"></p>
            //     <p><a href = ${item.url}" target = "_blank" class = "bonus price">Профіль</a></p>
            //     <p><a href = "mailto:${item.email}?subject=Питання&body=Доброго дня" target = "_blank" class = "price">Написати </a></p>
            // </div>
            // `
            `
    <div class="item">
                <!-- блок назва товару  -->
                <div class="item-title">${item.title}</div>
                <!-- блок зображення товару  -->
                <div class="item-image">
                <img src="${item.image}" alt="" />
                </div>
                <!-- блок з оплатою частинами -->
                <div class="parts-pay">
                    <div><img src="img-market/lapka.png" alt="" />${item.mono}</div>
                    <div><img src="img-market/pb.png" alt="" />${item.pb}</div>
                </div>
                <!-- блок ціни -->
                <div class="price">
                    <div><span>${item.price_standart}</span> <sup>грн</sup></div>
                    <div><span>${item.price_discount}</span> <sup>грн</sup></div>
                    </div>

                <!-- блок бонусної ціни  -->
                <div class="price bonus">
                    <div>ціна за купоном</div>
                    <div><span>${item.price_coupon}</span> <sup>грн</sup></div>
                </div>
            </div>
            
        `


    })


} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}
s


// // //Виведення в консоль масиву
// // console.log (itemsArray)
// //Сортування масиву
// itemsArray = itemsArray.sort()

// //Виведення в консоль номерів та значень елементів масиву
// for (let i = 0; i < itemsArray.length; i++){
//     console.log(i +'-й елемент:',itemsArray[i])
// }

