new Vue({
  el: '#app',
  data: {
    name: '', //入力値
    upperName: ''  //表示する値（大文字変換の文字列）
  },
  //遅延処理用のdelayFuncメソッドを準備
  created: function() {
    this.delayFunc = _.debounce(this.getUpper, 2000);
  },
  // //nameプロパティがへんかsチア時にdelayfuncメソッドを呼び出し
  // watch: {
  //   name: function(newValue, oldValue) {
  //     this.delayFunc();
  //   }
  // },
  computed: {
    upperName: function() {
      return this.name.toUpperCase();
    }
  },
  // nameの値を大文字に変換したものをupperNameプロパティに設定
  methods: {
    getUpper: function() {
      this.upperName = this.name.toUpperCase();
    }
  }
});
