Vue.component('my-hello', {
//   props: [ 'yourName' ],
//   template: `<div>こんにちは、{{ yourName }}さん！</div>`
// })

props: {
  yourName: {
    type: String,
    required: true,
    validator: function(value) {
      return value.length <= 5;
    }
  }
}

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
