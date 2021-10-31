import { GOODS_LIST, ADD_GOOD_URL, CARD_LIST } from './constants';
import { serverRequest } from './services';
import * as components from './components'

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
    addGood: function ({ title, price }) {
      serverRequest('PATCH', ADD_GOOD_URL, JSON.stringify({ title, price })).then((_basketGoods) => {
        this.basketGoods = _basketGoods;
      })
    },
    deleteGood: function (item) {
      // serverRequest('DELETE', ADD_GOOD_URL, JSON.stringify(item)).then((_basketGoods) => {
      //   this.basketGoods = _basketGoods;
      //   console.log('_basketGoods ' + _basketGoods);
      // })
    },
  },
});