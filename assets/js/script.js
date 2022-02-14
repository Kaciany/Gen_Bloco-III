
/*
podemos acessar o DOM por:
Tag: getElementByTagName()
Id: getElementById()
Nome: getElementsByName()
Classe: getElementsByClassName()
Seletor:querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%' /*Alterando tamanho do campo nome*/
email.style.width = '100%' /*Alterando tamanho do campo email*/
