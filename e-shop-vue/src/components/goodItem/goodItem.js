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