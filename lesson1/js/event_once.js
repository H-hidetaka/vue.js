new Vue({
  el: '#app',
  data: {
    result: '-'
  },
  methods: {
    onclick: function(e) {
      this.result = Math.floor(Math.random() * 100) + 1;
    // }
    // onsubmit: function(e) {
    //   if (!confirm('送信しても良いですか？')) {
    //     e.preventDefault();
    //     return;
      }
    }
});
