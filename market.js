console.log("пфсm.js")
let itemsArray = [
  {
    title: "Carpathians",
    author: "Присяжнюк Богдана",
    author_photo: "",
    email: "23a_pbv@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://github.com/Prydana/Phaser2stGame",
    game_pages: "https://prydana.github.io/Phaser2stGame/",
    docs: "https://drive.google.com/drive/folders/1K--lAbvnwzUQ4BjN136Blvp46ErW0mkJ",
    forns: "https://forms.gle/HnBZ5pzJ4DLpa6E69",
    gamemarket_github: "https://github.com/Prydana/GameMarket_Prysiazhniuk",
    gamemarket_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/",
    market_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/market.html",
  },
  {
    title: "title",
    author: "Недзвецький Олег",
    author_photo: "",
    email: "23a_nom@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://github.com/Viogoo/Phaser2stGame2",
    game_pages: "https://viogoo.github.io/Phaser2stGame2/",
    docs: "https://drive.google.com/drive/folders/1a-3VlIBE5SnalcPulY1mKWRTqvyydk5i?usp=sharing",
    forms: "https://forms.gle/bvgt8tydcyS6AXPA6",
    gamemarket_github: "https://github.com/Viogoo/Game_Market_Nedzvetskiy_Oleg",
    gamemarket_pages: "https://viogoo.github.io/Game_Market_Nedzvetskiy_Oleg/",
    market_pages: "https://viogoo.github.io/market/",
  },
  {
    title: "",
    author: "Ніцкевич Дар'я",
    author_photo: "",
    email: "23a_ndi@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://github.com/Daria1284/Phaser2ndGame",
    game_pages: "https://daria1284.github.io/Phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1sx_bP3YdCY99mFM02u-FVcmtGm8bfNc1?usp=drive_link",
    forms: "https://forms.gle/PSoFKF3f8JE8JDF18",
    gamemarket_github: "https://github.com/Daria1284/GameMarket_Nitskevich",
    gamemarket_pages: "https://daria1284.github.io/GameMarket_Nitskevich/",
    market_pages: "https://daria1284.github.io/GameMarket_Nitskevich/market.html",
  },
  {
    title: "",
    author: "Соломонюк Богдан",
    author_photo: "",
    email: "23a_sbr@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://github.com/23asbr/phaser2ndGame",
    game_pages: "https://23asbr.github.io/phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1JcIFHoj8MY56cyNeD8yoQkIgYxHIFwl3?usp=drive_link",
    forms: "https://forms.gle/DbGSNNiXNbAfQx6x6",
    gamemarket_github: "https://github.com/23asbr/Game_Market_solomoniyk",
    gamemarket_pages: "https://23asbr.github.io/Game_Market_solomoniyk/",
    market_pages: "https://23asbr.github.io/Game_Market_solomoniyk/market.html",
  },
  {
    title: "",
    author: "Філімончук Євгеній",
    author_photo: "",
    email: "23a_fyev@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://github.com/filimonchukevgeniy/Phaser2ndGame",
    game_pages: "https://filimonchukevgeniy.github.io/Phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1gLzj_epUzeFt_KBhcfez33Xx4fcSrSJ9",
    forms: "https://forms.gle/gd2oE6EtLB3yFCa9A",
    gamemarket_github: "https://github.com/filimonchukevgeniy/GameMarket_Filimochuk/settings/pages",
    gamemarket_pages: "https://filimonchukevgeniy.github.io/GameMarket_Filimochuk/",
    market_pages: "",
  },
  {
    title: "",
    author: "Сікалюк Артем",
    author_photo: "",
    email: "23a_sai@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://github.com/lokloter/Phaser2ndGame",
    game_pages: "https://lokloter.github.io/Phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1CVaq2qHRHtju8V-IVYyI2a2bBJLlE-VH?usp=sharing",
    forms: "https://forms.gle/7oHYvp5hUw1oDwGZA",
    gamemarket_github: "https://github.com/lokloter/gamemarket",
    gamemarket_pages: "https://lokloter.github.io/gamemarket/",
    market_pages: "",
  },
  {
    title: "",
    author: "Якубець Денис",
    author_photo: "",
    email: "23a_yada@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://github.com/D3nis1238/Phaser-2nd-Game",
    game_pages: "https://d3nis1238.github.io/Phaser-2nd-Game/?authuser=0",
    docs: "https://docs.google.com/document/d/1H_AWqM8u9rFfDKVAxynlz5wGyiIW2AzeI2gTvWWs7Wc/edit?usp=sharing",
    forms: "https://forms.gle/NtHkb7ErZAcexoPY7",
    gamemarket_github: "https://github.com/D3nis1238/GameMarket_Yakubets",
    gamemarket_pages: "https://d3nis1238.github.io/GameMarket_Yakubets/",
    market_pages: "https://d3nis1238.github.io/GameMarket_Yakubets/market.html?authuser=0",
  },
  {
    title: "Phaser2ndGame",
    author: "Будішевський Єгор",
    author_photo: "",
    email: "23a_byeyu@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://github.com/EgorZTUkl/Platformer",
    game_pages: "https://egorztukl.github.io/Platformer/",
    docs: "https://drive.google.com/drive/folders/1Gme_cOgj7R14t3kaxbLxjPxgmTvhTKYq?usp=drive_link",
    forms: "https://forms.gle/ziZ41L7qHnzp6o7x6",
    gamemarket_github: "",
    gamemarket_pages: "",
    market_pages: "",
  },
  {
    title: "",
    author: "Михальський Нікіта",
    author_photo: "",
    email: "23a_mnv@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://github.com/Cement-Official/Minorun",
    game_pages: "https://cement-official.github.io/Minorun/",
    docs: "https://docs.google.com/document/d/1lgWfQHAtTu1E_xi-3cKiAC_8ZR0TD4xTL6B5dMvqGY0/edit?usp=sharing",
    forms: "https://forms.gle/XVTQaam7Maj2HLCh8",
    gamemarket_github: "https://github.com/Cement-Official/GameMarket_Myhalskiy",
    gamemarket_pages: "https://cement-official.github.io/GameMarket_Myhalskiy/",
    market_pages: "https://cement-official.github.io/GameMarket_Myhalskiy/market.html?authuser=0",
  },
  {
    title: "",
    author: "Столярчук Дмитро",
    author_photo: "",
    email: "23a_sdv@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "",
    game_pages: "",
    docs: "https://drive.google.com/drive/folders/12U9uaTrFbhzDPFx_wr8EnpO-ETNscTE5?usp=sharing",
    forms: "https://forms.gle/mbTievdu9FFLXpnV8",
    gamemarket_github: "",
    gamemarket_pages: "",
    market_pages: "",
  },
  {
    title: "",
    author: "Ткач Кирил",
    author_photo: "",
    email: "23a_tkv@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://github.com/21kery21/MyFirstPygameGame",
    game_pages: "-",
    docs: "https://drive.google.com/drive/folders/1fuUL8e5OCvSsQlp2i2UlqLIqwoI9QLOg?usp=sharing",
    forms: "https://forms.gle/uHDRhupAuBvuQrQT9",
    gamemarket_github: "-",
    gamemarket_pages: "-",
    market_pages: "https://21kery21.github.io/Market/",
  },
  {
    title: "",
    author: "Мединський Роман",
    author_photo: "",
    email: "23a_mrd@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://github.com/MedynskyiRoman/Phaser2ndGame",
    game_pages: "https://medynskyiroman.github.io/Phaser2ndGame/",
    docs: "https://drive.google.com/drive/folders/1ujjej9ifF-2xqLKIc5X2vpohSn6ZenZ4?usp=sharing",
    forms: "https://forms.gle/MzKxFco9L798EjKi8?authuser=1",
    gamemarket_github: "https://github.com/MedynskyiRoman/GameMarket_Medynskyi",
    gamemarket_pages: "https://medynskyiroman.github.io/GameMarket_Medynskyi/",
    market_pages: "https://medynskyiroman.github.io/market-test1",
  },
  {
    title: "",
    author: "Столяров Руслан",
    author_photo: "",
    email: "23a_srm@liceum.ztu.edu.ua",
    group: "10-А 2",
    Image: "",
    game_github: "https://shxdxwbxrnzz.github.io/Phaser2ndGame/",
    game_pages: "https://github.com/Shxdxwbxrnzz/Phaser2ndGame",
    docs: "https://drive.google.com/drive/folders/1hAhvz34e5KZ7pK-6kGDYw0V-MhZHmw3k?usp=sharing",
    forms: "https://docs.google.com/forms/d/e/1FAIpQLSfGf9QIp20gQ-Cl5FrVKXoFKkE8QcHToU52-BWm9EFHfomLUw/viewform?usp=sharing",
    gamemarket_github: "https://github.com/Shxdxwbxrnzz/GameMarket_Stolyarov",
    gamemarket_pages: "https://shxdxwbxrnzz.github.io/GameMarket_Stolyarov",
    market_pages: "https://shxdxwbxrnzz.github.io/Market/market.html",
  },

]
let itemsDiv = document.getElementById("items")

if (itemsDiv) {

  itemsArray.forEach((item, index) => {
    //console.log(item)
    //itemsDiv.innerText += item
    itemsDiv.innerHTML +=
      `
    <div class="item">
    <div class="item-title"> ${item.title} </div>
  
      <p> <img src = "${item.image}" class = "item-image"></p>
      
  
      <div class="parts-pay">
        <div><img src="https://onlysolar.in.ua/wp-content/uploads/2023/07/mono-lapka.png" >${item.lapka}</div>
        <div><img src="img\Без имени.png" alt="">${item.pb}</div>
      </div>
  
      <div class="prise">
        <div>звичайна ціна <span>${item.prise_normal} </span><sup>грн</sup></div>
        <div>ціна зі знижкою<span>${item.prise_discoun} </span><sup>грн</sup></div>
      </div>
  
      <div class="prise bonus">
        <div> ціна за купоном</div>
        <div><span>${item.price_coupon}</span><sup>грн</sup></div>
      </div>
    `
  })

} else {
  console.log('Блок товарів не знайдено')
}


// itemsArray.sort().forEach((item,index) =>{
//     console.log(index +'-й елемент: ' ,item)
// })

//  itemsArray = itemsArray.sort()

//consel.log(itemsArray)
// for (let i=0;i < itemsArray.length;i ++){
//     console.log(i + '-й елемент: ', itemsArray[i])
// }

//console.log(itemsDiv)

// console.log('поле classList: ', itemsDiv.classList)
// console.log('поле id: ', itemsDiv.id)
// console.log('поле clientWidth: ', itemsDiv.clientWidth)
// console.log('поле innerHTML: ', itemsDiv.innerHTML)

// itemsDiv.innerText = 'програмно доданий текст'

// itemsDiv.innerText = 'Перший програмно доданий текст'
// itemsDiv.innerText += 'другий програмно доданий текст'

// itemsDiv.innerHTML += '<h1> Відформатований HTML</h1> '
// itemsDiv.innerHTML += '<div class = item></div>'
// itemsDiv.innerHTML += '<div class = item></div>'
// itemsDiv.innerHTML += '<div class = item></div>'
// itemsDiv.innerHTML += '<div class = item></div>'

// {
//     firstName:"Віталій",
//     LastNAme:"Шатківський",
//     age:43,
//     subject:"CS",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
//     prise: "350$/hour",
// },
// {
//     firstName:"Іван",
//     LastNAme:"Григорович",
//     age:43,
//     subject:"Захист України",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/sevruk-i-h/",
//     prise: "150 грн/hour",
// },
// {
//     firstName:"Василь ",
//     LastNAme:"Дмитрович",
//     age:43,
//     subject:"Фізична культура",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
//     prise: "270 євро/hour",
//     url:"https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
// },
// {
//     firstName:"Тарас ",
//     LastNAme:"Євгенович",
//     age:43,
//     subject:"Англ мова",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
//     prise: "200 франків/hour",
// },
// {
//     firstName:"Рикардо ",
//     LastNAme:"Милос",
//     age:23,
//     subject:"Біологія",
//     photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUsdm3qOeu7KCczCy55IT_Lj_MLzJqHT_gYmoiVeU4w&s",
//     url:"https://drebedenboi.fandom.com/ru/wiki/%D0%A0%D0%B8%D0%BA%D0%B0%D1%80%D0%B4%D0%BE_%D0%9C%D0%B8%D0%BB%D0%BE%D1%81_(FlexAir)",
//     prise: "400$/hour",
// },
// {
//     firstName:"Олена",
//     LastNAme:"Анатоліївна",
//     age:23,
//     subject:"Історія",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/hecha-o-a/",
//     prise: "200 грн/hour",
// },
// {
//     firstName:"Наталія",
//     LastNAme:"Вікторівна",
//     age:23,
//     subject:"Фізика",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/kucher-n-v/",
//     prise: "200 грн/hour",
// },
// {
//     firstName:"Тарас ",
//     LastNAme:"Євгенович",
//     age:43,
//     subject:"Англ мова",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
//     prise: "200 франків/hour",
// },
// {
// firstName:"Вікторія",
//     LastNAme:"Віталіївна",
//     age:23,
//     subject:"Математика",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
//     prise: "200 грн/hour",
// },
// {
//     irstName:"Іван",
//     LastNAme:"Григорович",
//     age:43,
//     subject:"Захист України",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/sevruk-i-h/",
//     prise: "150 грн/hour",
//     },
//     {
//         firstName:"Вікторія",
//             LastNAme:"Віталіївна",
//             age:23,
//             subject:"Математика",
//             photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
//             url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
//             prise: "200 грн/hour",
//         },
//         {
//             firstName:"Вікторія",
//                 LastNAme:"Віталіївна",
//                 age:23,
//                 subject:"Математика",
//                 photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
//                 url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
//                 prise: "200 грн/hour",
//             },
// 'Газонокосарка 43',
// 'Електричний тример 110',
// 'Електрична газонокосарка 32',
// 'Акамулятор 12',
// 'Газонокосарка 430',
// 'Електричний тример 130',
//  'Електрична газонокосарка 320',
//  'Акамулятор 120',
//  'Газонокосарка 430',
// 'Електричний тример 130',
//  'Електрична газонокосарка 320',
//  'Акамулятор 120',



// {
//     title: "мотокоса 43",
//     image: "https://tatragarden.ua/image/cache/catalog/product/tatra-garden/tatra-garden-bcu-45/tatra-garden-bcu-45_01-800x800.webp",
//     lapka: "6",
//     pb: "8",
//     prise_normal: 5499,
//     prise_discoun: 4497,
//     price_coupon: 4395,
// },
// {
//     title: "Електричний тример 110",
//     image: "https://static.dnipro-m.ua/cache/products/6566/order_history_315131.jpg",
//     lapka: "6",
//     pb: "8",
//     prise_normal: 4497,
//     prise_discoun: 3498,
//     price_coupon: 3396,
// },
// {
//     title: "Електрична газонокосарка 32",
//     image: "https://static.dnipro-m.ua/cache/products/6567/order_history_300685.jpg",
//     lapka: "6",
//     pb: "8",
//     prise_normal: 4497,
//     prise_discoun: 3297,
//     price_coupon: 3195,
// },

// {
//     title: "Акумуляторний обрискувач 12N",
//     image: "https://static.dnipro-m.ua/cache/products/8964/order_history_314479.jpg",
//     lapka: "6",
//     pb: "8",
//     prise_normal: 2190,
//     prise_discoun: 1698,
//     price_coupon: 1596,
// }