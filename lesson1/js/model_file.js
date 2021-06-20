new Vue({
  el: '#app',
  data: {
    message: ''
  },
  methods: {
    //選択されたオプションの値をログに出力
    onchange: function() {
      //アップロードファイルを準備
      let that = this;
      let fl = this.$refs.upfile.files[0];
      let data = new FormData();
      data.append('upfile', fl, fl.name);
      //サーバーにデータを送信
      fetch('upload.php', {
        method: 'POST',
        body: data,
      })
      //成功時には結果を表示
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        that.message = text;
      })
      .catch(function (error) {
        window.alert('Error: ' + error.message);
      });
    }
  }
});
