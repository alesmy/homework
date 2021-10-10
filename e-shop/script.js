const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS_LIST = '/catalogData.json';
const CARD_LIST = '/getBasket.json';
const ADD_GOOD_TO_BASKET = '/addToBasket.json';
const REMOVE_GOOD_FROM_CARD = '/deleteFromBasket.json';

const serverRequest = function (method, postfix) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, `${API}${postfix}`, true);
    xhr.send();
    xhr.onload = (e) => {
      resolve(JSON.parse(e.target.responseText));
    };
  })
}

class GoodsItem {
  constructor(product_name = 'default title', price = 0, id_product = 123) {
    this.product_name = product_name;
    this.price = price;
    this.id = id_product;
  }
  render() {
    return `
        <div class="goods__item">
          <div class="goods__img"></div>
          <h3 class="goods__title">${this.product_name}</h3>
          <div class="goods__price">${this.price}</div>
          <button class="btnAdd" data-id='${this.id}'>Добавить</button>
        </div>
      `
  }
}

class GoodsList {
  goods = [];
  constructor() {
    this.fetchGoods();
  }

  fetchGoods() {
    serverRequest('GET', GOODS_LIST).then((goods) => {
      this.goods = goods;
      this.render();
    });
  }

  render() {
    const goodsItems = this.goods.map(({ product_name, price }) => {
      const goodsItem = new GoodsItem(product_name, price);
      return goodsItem.render();
    });
    document.querySelector('.goods').innerHTML = goodsItems.join('');
  }
}

class CardItem {
  constructor(id_product, product_name, price, quantity) {
    this.id_product = id_product;
    this.product_name = product_name;
    this.price = price;
    this.quantity = quantity;
  }
  render() {
    return `
        <div class="goods__item goods__item_cart">
          <div>
            <h3 class="goods__title">${this.product_name}</h3>
            <div class="goods__price">${this.price}</div>
          </div>
          <button>Удалить</button>  
        </div>
      `
  }
}

class Cart {
  goodsInCart = [];
  amount = 0;
  count = 0;

  constructor() {
    this.fetchCartContents();
  }

  fetchCartContents() {
    serverRequest('GET', CARD_LIST).then((goods) => {
      this.amount = goods.amount;
      this.count = goods.countGoods;
      this.goodsInCart = goods.contents;

      this.render();
    });
  }

  render() {
    const goodsItemsInCart = this.goodsInCart.map(({ id_product, product_name, price, quantity }) => {
      const goodsItemInCart = new CardItem(id_product, product_name, price, quantity);
      return goodsItemInCart.render();
    });
    document.querySelector('.cart').innerHTML = `
      <div> ${goodsItemsInCart.join('')} </div>
      <div>Общее количество товаров: ${this.count}</div>
      <div>Итого сумма товаров: ${this.amount}</div>
    `;
  }

  // removeProduct() { }

  // addProduct() { }

  // changeAmount() { }

  // sum() { }
}

onload = () => {
  const goodsList = new GoodsList;

  const cart = new Cart;

  document.getElementById('cartBtn').onclick = function () {
    let cart = document.getElementById('cart');
    cart.classList.toggle("cart_visible");
  }
}