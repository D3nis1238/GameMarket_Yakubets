console.log("пфсm.js")
let itemsArray= [
    {
        firstName:"Віталій",
        LastNAme:"Шатківський",
        age:43,
        subject:"CS",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    },
    {
        firstName:"Іван",
        LastNAme:"Григорович",
        age:43,
        subject:"Захист України",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/sevruk-i-h/",
    },
    {
        firstName:"Василь ",
        LastNAme:"Дмитрович",
        age:43,
        subject:"Фізична культура",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    },
    {
        firstName:"Тарас ",
        LastNAme:"Євгенович",
        age:43,
        subject:"Англ мова",
        photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
        url:"https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
    }
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
]
let itemsDiv = document.getElementById("items")

if (itemsDiv) {

itemsArray.forEach((item,index)=>{
    //console.log(item)
//itemsDiv.innerText += item
itemsDiv.innerHTML += 
    `
    <div class = "item">
    <h2>Вчитель №${index + 1 } з ${itemsArray.length}</h2>
    <p>${item.LastNAme} ${item.firstName}</p>
    <p>Вік: ${item.age} </p>
    <p><img src = "${item.photo}" class="item-image"> </p>
    <p><a href = "${item.url}" target="_blank" Профіль> </p>
    </div>
    `
})
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