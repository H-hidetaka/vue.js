let MyHello = {
  template: `<div>こんにちは、Vue.js!</div>`
};

new Vue({
  el: '#app',
  components: {
    'my-hello': MyHello
  }
});

// components: {
//   'my-hello': {
//     template: `<div>こんにちは、Vue.js!`</div>
//   }
// }
// Vue.component('my-hello', {
//   template: `<div>こんにちは、{{ name }}！</div>`,
//   data: function() {
//     return {
//       name: 'Vue.js'
//     };
//   }
// });

// new Vue({
//   el: '#app'
// });
