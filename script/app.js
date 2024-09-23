let products = [
    {
        id: 1,
        name: 'Crazy',
        price: 31000,
        img: 'images/products/burger-1.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },{
        id: 2,
        name: 'Light',
        price: 26000,
        img: 'images/products/burger-2.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },{
        id: 3,
        name: 'CheeseBurger',
        price: 29000,
        img: 'images/products/burger-3.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },{
        id: 4,
        name: 'dBurger',
        price: 24000,
        img: 'images/products/burger-4.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
        
    
]

const wrapperList = document.querySelector('.wrapper__list')
      
  
   
      
      
function outBurgers() {
    
    products.forEach((item, i) => {
        let { id, name, price, img} = item
        
        wrapperList.innerHTML += `<div class="wrapper__list-card" id="${id}">
                <p class="wrapper__list-count"></p>
                <img class="wrapper__list-image" src="${img}" alt="">
                <h3 class="wrapper__list-title">${name}</h3>
                <div class="wrapper__list-sub">
                    <p class="wrapper__list-text">${price}</p>
                    <button class="wrapper__list-btn"><img src="images/sell-icon.svg" alt=""></button>
                </div>
            </div>`
    })  
    
}

outBurgers()

const burgerBtns   = document.querySelectorAll('.wrapper__list-btn'),
      cartBtn     = document.querySelector('.wrapper__navbar-btn'),
      cartClose   = document.querySelector('.wrapper__navbar-close'),
      basket      = document.querySelector('.wrapper__navbar-basket')

      
      cartBtn.addEventListener('click', () => basket.classList.add('active'))     
      cartClose.addEventListener('click', () => basket.classList.remove('active'))   
 
burgerBtns.forEach((btn) =>{
    btn.addEventListener('click', () => {
        addAmount(btn)
        
    })
    
})

function addAmount(btn) {
    // closest() - метод который подключается к указаному родителю
    // getAttribute() - метод который указывает значение указаного атрибута
    let id = btn.closest('.wrapper__list-card').getAttribute('id')
    let currentBurger = products.find((item) => item.id == id)
    currentBurger.amount++
    
    
}


document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.title');
    let count = 0;
    const interval = setInterval(() => {
        if (count <= 100) {
            title.textContent = count;
            count++;
            if (count === 100) {
                title.style.fontSize = '100px'; 
                title.textContent = count + 'lvl'; 
            }
        } else {
            clearInterval(interval);
        }
    }, 50); 
});




    
