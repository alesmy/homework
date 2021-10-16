const GOODS = [
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 }
]

Vue.component('goods-item', {
  props: ['item'],
  template: `
    <div class="goods__item">
      <div class="goods__img"></div>
      <h3 class="goods__title">{{ item.title }}</h3>
      <div class="goods__price">{{ item.price }}</div>
    </div>
  `
});

Vue.component('basket-goods-item', {
  props: ['item'],
  template: `
    <div class="goods__item goods__item_cart">
      <div>
        <h3 class="goods__title">${this.product_name}</h3>
        <div class="goods__price">${this.price}</div>
      </div>
      <button>Удалить</button>  
    </div>
  `
});

Vue.component('basket-card', {
  template: `
    <div class="cart">
      <slot></slot>  
    </div>
  `
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
    goods: GOODS,
    filteredGoods: GOODS,
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
  }
});