new Vue({
  el: '#app',
  methods: {
    // .htmlファイルが渡されたメッセージをログ出力
    onclick: function(message, e) {
      console.log(message);
      console.log(e);
    }
  }
});
