new Vue({
  el: '#app',
  data: {
    temperature: 0
  },
    methods: {
      // 入力値を小数点以下１にまるめ、ログ出力
      onchange: function() {
        console.log(this.temperature.toFixed(1));
      }
    }
  });
