var app = function(){

var catUl = document.createElement('ul');
catUl.classList.add('cat');
var nameLi = document.createElement('li');
nameLi.textContent = "Name: Joey"
var favouriteFoodLi = document.createElement('li')
favouriteFoodLi.textContent = "Favourite Food: Fish"
var imageLi = document.createElement('li')
var image = document.createElement('img')
image.src = "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
image.width = "500";



catUl.appendChild(nameLi)
catUl.appendChild(favouriteFoodLi)
catUl.appendChild(imageLi)
imageLi.appendChild(image)

var cats = document.querySelector('#cats');
cats.appendChild(catUl)
};




window.onload = app;
