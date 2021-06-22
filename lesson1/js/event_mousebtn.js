new Vue({
  el: '#app',
  data: {
    // コンテキストメニューの表示位置
    pos: {
      left: 0,
      top: 0
    },
    // コンテキスメニューの表示状態
    show: false
  },
  // 左クリックでメニューを非表示
  methods: {
    onleftclick: function() {
      this.show = false;
    },
    // 右クリックでメニューを表示
    onrightclick: function(e) {
      this.pos = {
        top: e.pageY + 'px',
        left: e.pageX + 'px'
      };
      this.show = true;
    }
  }
});
