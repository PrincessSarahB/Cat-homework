var app = function(){

// var catUl = document.createElement('ul');
// catUl.classList.add('cat');
// var nameLi = document.createElement('li');
// nameLi.textContent = "Name: Joey"
// var favouriteFoodLi = document.createElement('li')
// favouriteFoodLi.textContent = "Favourite Food: Fish"
// var imageLi = document.createElement('li')
// var image = document.createElement('img')
// image.src = "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
// image.width = "500";
//
//
//
// catUl.appendChild(nameLi)
// catUl.appendChild(favouriteFoodLi)
// catUl.appendChild(imageLi)
// imageLi.appendChild(image)
//
// var cats = document.querySelector('#cats');
// cats.appendChild(catUl)
// };
 for(cat of catsArray){
   addCat(cat.name, cat.food, cat.image)
 }

};

var catsArray = [
  {name: "Boba", food: "Sock Fluff", image: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'},
  {name: "Barnaby", food: "Tuna", image:'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'},
  {name: "Max", food: "Whiskas Temptations", image: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'},
  {name: "Bob", food: "Salmon", image: 'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg'}
];

var addCat = function(name, food, image){
  var cat = createCat();
  var catName = createName(name);
  var favouriteFood = createFavouriteFood(food);
  var catImage = createImage(image);
    var container = document.querySelector('#cats');

  appendElements(cat, catName, favouriteFood, catImage, container)
};

const createCat = function(){
 var cat = document.createElement('ul');
  cat.classList.add('cat');
  return cat;
};

const createName = function(name){
  var catName = document.createElement('li');
  catName.textContent = "Name: " + name;
  return catName;
};

const createFavouriteFood = function(food){
  var favouriteFood = document.createElement('li');
  favouriteFood.textContent = "Favourite Food: " + food;
  return favouriteFood;
};

const createImage = function(image){
  var imgLi = document.createElement('li');
  var img = document.createElement('img');
  img.setAttribute('src', image);
  img.setAttribute('width', '500')
  return img;
};


const appendElements = function(cat, catName, favouriteFood, img, container){
  cat.appendChild(catName);
  cat.appendChild(favouriteFood);
  cat.appendChild(img);
  container.appendChild(cat);
};


window.onload = app;
