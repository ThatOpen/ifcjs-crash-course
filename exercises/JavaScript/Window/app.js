console.log(document)

let h1Element = document.getElementsByTagName('h1')
console.log(h1Element)

let container = document.getElementById('viewer-container')
console.log(container)

let subHeaderClass = document.getElementsByClassName('sub-header')
console.log(subHeaderClass)

let h3Element = document.createElement('h3')
h3Element.textContent = 'Hi from JavaScript'
h3Element.className = 'h3-js'
subHeaderClass[0].appendChild(h3Element)
