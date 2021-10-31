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