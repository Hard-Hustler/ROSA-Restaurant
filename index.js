let openShopping = document.getElementsByClassName('shopping');
let closeShopping = document.getElementsByClassName('closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping[0].addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping[0].addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    price: 200,
  },
  {
    id: 2,
    name: 'Rolls',
    image: 'https://media.istockphoto.com/id/1051064870/photo/vegetable-indian-rolls-are-filled-with-a-tasty-concoction-of-carrots-potatoes-pepper-and-peas.webp?b=1&s=170667a&w=0&k=20&c=SwCdECQYfbqZ1zCoH2Kh8Cs2jrkkFlhHxyesnIrFsPE=',
    price: 200,
  },
  {
    id: 3,
    name: 'Chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    price: 200,
  },
  {
    id: 4,
    name: 'Coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    price: 200,
  },
  {
    id: 5,
    name: 'Mojito',
    image: 'https://images.unsplash.com/photo-1509448613959-44d527dd5d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vaml0byUyMGRyaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    price: 200,
  },
  {
    id: 6,
    name: 'PRODUCT NAME',
    image: 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60',
    price: 200,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add('item');
    newDiv.innerHTML = `
    <img src="${value.image}" alt="${value.name}" />
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onClick = "addToCart(${key})" > Add To Cart </button>
        `;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCart(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity = listCards[key].quantity + 1;
    }
    reloadCart();
}
function reloadCart(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value , key) => {
        totalPrice = totalPrice + (value.price*listCards[key].quantity);
        count = count + value.quantity;
        if(value!=null)
        {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src ='${value.image}' alt='${value.title}'></div>
            <div>${value.name}</div>
            <div>${value.price*listCards[key].quantity}</div>
            <div>
                    <button onClick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onClick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity)
{
    if(quantity==0)
    {
        delete listCards[key];
    }
    else{
        listCards[key].quantity = quantity;
    }
    reloadCart()
}
