Vue.component('my-hello', {
  // props: [ 'init' ],
  template: `<div title="result" class="main">こんにちは、Vue.js!</div>`
  //   data: function() {

  //     return {
  //       current: this.init
  //   };
  // },
  // methods: {
  //   onclick: function() {
  //     this.current++;
  //   }
  // }
});

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
