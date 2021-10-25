const GOODS_LIST = 'http://localhost:3000/goods.json';
const ADD_GOOD_URL = 'http://localhost:3000/api';
const CARD_LIST = 'http://localhost:3000/basket-goods.json';

const serverRequest = function (method, path, body) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, path, true);
    if (body) {
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    }
    xhr.send(body);
    xhr.onload = (e) => {
      resolve(JSON.parse(e.target.response));
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
      <general-button class="btn_dark goods__btn" @click="$emit('click', item)">Добавить</general-button>
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
      <general-button class="btn_dark" @click="$emit('click', item)">Удалить</general-button>  
    </div>
  `
});

Vue.component('basket-card', {
  data() {
    return {
      basketGoods: []
    }
  },
  template: `
    <div class="cart">
      <slot name='header'></slot>
      <slot></slot>
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
    basketGoods: [],
    basketCardVision: false,
    search: '',
  },
  mounted: function () {
    serverRequest('GET', GOODS_LIST).then((goods) => {
      this.goods = goods;
      this.filteredGoods = goods;
    });
    serverRequest('GET', CARD_LIST).then((goods) => {
      this.basketGoods = goods;
    });
  },
  methods: {
    setVision: function () {
      this.basketCardVision = !this.basketCardVision;
    },
    filterGoods: function () {
      this.filteredGoods = this.goods.filter(({ title }) => {
        return new RegExp(this.search, 'i').test(title);
      })
    },
    addGood: function ({ title, price, id }) {
      serverRequest('PATCH', ADD_GOOD_URL, JSON.stringify({ title, price, id })).then((_basketGoods) => {
        this.basketGoods = _basketGoods;
      })
    },
    deleteGood: function ({ id }) {
      serverRequest('DELETE', CARD_LIST, JSON.stringify({ id })).then((_basketGoods) => {
        this.basketGoods = _basketGoods;
        console.log('_basketGoods ' + _basketGoods);
      })
    },
  },
});