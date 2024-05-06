console.log("пр")

let itemsDiv = document.getElementById("items")

if (itemsDiv) {

    console.log(itemsDiv)

    // console.log('поле classList: ', itemsDiv.classList)
    // console.log('поле id: ', itemsDiv.id)
    // console.log('поле clientWidth: ', itemsDiv.clientWidth)
    // console.log('поле innerHTML: ', itemsDiv.innerHTML)

    // itemsDiv.innerText = 'програмно доданий текст'

    // itemsDiv.innerText = 'Перший програмно доданий текст'
    // itemsDiv.innerText += 'другий програмно доданий текст'

    // itemsDiv.innerHTML += '<h1> Відформатований HTML</h1> '
    itemsDiv.innerHTML += '<div class = item></div>'
    itemsDiv.innerHTML += '<div class = item></div>'
    itemsDiv.innerHTML += '<div class = item></div>'
    itemsDiv.innerHTML += '<div class = item></div>'
} else {
    console.log('Блок товарів не знайдено')
}