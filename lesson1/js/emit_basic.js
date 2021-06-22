Vue.component('my-counter', {
  props: [ 'step' ],
  template: `<button type="button" v-on:click="onclick">
    {{ step }}</button>`,
  methods: {
    onclick: function() {
      this.$emit('plus', Number(this.step));
    }
  }
});

new Vue({
  el: '#app',
  data: {
    current: 0
  },
  methods: {
    onplus: function(e) {
      this.current += e;
    }
  }
});

// props: {
//   yourName: {
//     type: String,
//     required: true,
//     validator: function(value) {
//       return value.length <= 5;
//     }
//   }
// }

// new Vue({
//   el: '#app'
// });

// let MyHello = {
//   template: `<div>こんにちは、Vue.js!</div>`
// };

// new Vue({
//   el: '#app',
//   components: {
//     'my-hello': MyHello
//   }
// });

// components: {
//   'my-hello': {
//     template: `<div>こんにちは、Vue.js!`</div>
//   }
// }
