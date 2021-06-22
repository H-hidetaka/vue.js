Vue.component('my-counter', {
  props: [ 'init' ],
  template: `<div>現在地は、{{ current }}です！
    <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    data: function() {
      return {
        current: this.init
    };
  },
  methods: {
    onclick: function() {
      this.current++;
    }
  }
})

new Vue({
  el: '#app'
});

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
