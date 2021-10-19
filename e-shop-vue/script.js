const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS_LIST = '/catalogData.json';
const CARD_LIST = '/getBasket.json';
const ADD_GOOD_TO_BASKET = '/addToBasket.json';
const REMOVE_GOOD_FROM_CARD = '/deleteFromBasket.json';

const transformGoods = function (goods) {
  return goods.map((_good) => {
    return {
      id: _good.id_product,
      title: _good.product_name,
      price: _good.price,
      quantity: _good.quantity
    }
  })
}

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

Vue.component('goods-item', {
  props: ['item'],
  template: `
    <div class="goods__item">
      <div class="goods__img"></div>
      <h3 class="goods__title">{{ item.title }}</h3>
      <div class="goods__price">{{ item.price }}</div>
      <general-button class="btn_dark goods__btn">Добавить</general-button>
    </div>
  `
});

Vue.component('basket-goods-item', {
  props: ['item'],
  template: `
    <div class="goods__item goods__item_cart">
      <div>
        <h3 class="goods__title">{{ item.title }}</h3>
        <div class="goods__price">{{ item.price }}</div>
      </div>
      <general-button class="btn_dark ">Удалить</general-button>  
    </div>
  `
});

Vue.component('basket-card', {
  mounted: function () {
    serverRequest('GET', CARD_LIST).then((goods) => {
      let resultResponse = goods.contents;
      let resultGoods = transformGoods(resultResponse);
      this.goodsInCart = resultGoods;
      this.amountInCart = goods.amount;
      this.countInCart = goods.countGoods;
    });
  },
  data() {
    return {
      amountInCart: 0,
      countInCart: 0,
      goodsInCart: [],
    }
  },
  template: `
    <div class="cart">
      <slot name='header'></slot>
      <basket-goods-item v-for="item in this.goodsInCart" :key="item.id" :item='item'></basket-goods-item>
      <div v-show="this.countInCart > 0">Итого:
        <div>Количество: {{ this.countInCart }}</div>
        <div>Сумма: {{ this.amountInCart }}</div>
      </div>
    </div>
  `,
});

Vue.component('general-button', {
  template: `
  <button class="btn" type="button" @click="$emit('click')">
    <slot></slot>
  </button>
  `
});

const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    filteredGoods: [],
    basketCardVision: false,
    search: '',
  },
  methods: {
    setVision: function () {
      this.basketCardVision = !this.basketCardVision;
    },
    filterGoods: function () {
      this.filteredGoods = this.goods.filter(({ title }) => {
        return new RegExp(this.search, 'i').test(title);
      })
    }
  },
  mounted: function () {
    serverRequest('GET', GOODS_LIST).then((goods) => {
      let resultGoodsList = transformGoods(goods);
      this.goods = resultGoodsList;
      this.filteredGoods = resultGoodsList;
    });
  },
});