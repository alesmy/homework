

class GoodsItem {
  constructor(title = 'default title', price = 0) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `
        <div class="goods__item">
          <div class="goods__img"></div>
          <h3 class="goods__title">${this.title}</h3>
          <div class="goods__price">${this.price}</div>
        </div>
      `
  }
}

class GoodsList {
  goods = [];
  constructor() {
    this.fetchGoods();
    this.render();
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 }
    ];
  }
  sumPrices() {
    let totalPrice = 0;

    for (let i = 0; i < this.goods.length; i++) {
      totalPrice += this.goods[i].price;
    }

    return totalPrice;
  }
  render() {
    const goodsItems = this.goods.map(({ title, price }) => {
      const goodsItem = new GoodsItem(title, price);
      return goodsItem.render();
    });
    document.querySelector('.goods').innerHTML = goodsItems.join('');
  }
}

class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

class Cart {
  goodsInCart = [];

  constructor() {

  }

  addProduct() {

  }

  removeProduct() {

  }

  changeAmount() {

  }

  sum() {

  }

  render() {

  }
}

onload = () => {
  const goodsList = new GoodsList;

  console.log(goodsList.sumPrices());
}