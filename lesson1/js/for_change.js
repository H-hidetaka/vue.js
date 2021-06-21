new Vue({
  el: '#app',
  data: {
    list: [ '赤パジャマ', '青パジャマ', '黄パジャマ' ]
  },
  methods: {
    // ボタンクリック時に２番目の要素を変更
    onclick: function() {
      // Vue.set(this.list, 0, '茶パジャマ');
      // Vue.set(this.list, 0, '茶パジャマ');
      this.list.shift();
    }
  //     {
  //       isbn: '978-4-7981-5757-3',
  //       title: 'JavaScript逆引きレシピ',
  //       price: 2800
  //     },
  //     {
  //       isbn: '978-4-7321-5757-3',
  //       title: 'JavaScript逆ピ',
  //       price: 2800
  //     },
  //     {
  //       isbn: '978-4-7981-5757-3',
  //       title: 'JavaScript逆引きレシピ',
  //       price: 2800
  //     },
  //   ]
  // },
  // computed: {
  //   expensiveBooks: function() {
  //     return this.books.filter(function(b) {
  //       return b.price >= 2500;
  //       })
  //   }
  }
});
