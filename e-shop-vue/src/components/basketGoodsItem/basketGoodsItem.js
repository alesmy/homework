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