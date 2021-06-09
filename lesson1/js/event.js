new Vue({
  el: '#app',
  data: {
    message: '', //入力値
  },
  methods: {
    // クリック時に現在日時を取得
    onclick: function() {
      this.message = new Date().toLocaleString();
    }
  }
});
