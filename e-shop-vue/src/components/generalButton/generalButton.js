Vue.component('general-button', {
    template: `
    <button class="btn" type="button" @click="$emit('click')">
      <slot></slot>
    </button>
    `
});