new Vue({
  el: '#app',
  data: {
    songs: [
      {
        title: '赤トンボ',
        lyrics: '夕焼けこやけの赤とんぼ',
        composer: '山田工作'
      },
      {
        title: '赤トンボ',
        lyrics: '夕焼けこやけの赤とんぼ',
        composer: '山田工作'
      },
      {
        title: '赤トンボ',
        lyrics: '夕焼けこやけの赤とんぼ',
        composer: '山田工作'
      },
      {
        title: '赤トンボ',
        lyrics: '夕焼けこやけの赤とんぼ',
        composer: '山田工作'
      },
      {
        title: '赤トンボ',
        lyrics: '夕焼けこやけの赤とんぼ',
        composer: '山田工作'
      },
    // books: [
    //   {
    //     isbn: '978-4-7981-5757-3',
    //     title: 'JavaScript逆引きレシピ',
    //     price: 2800
    //   },
    //   {
    //     isbn: '978-4-7321-5757-3',
    //     title: 'JavaScript逆ピ',
    //     price: 2800
    //   },
    //   {
    //     isbn: '978-4-7981-5757-3',
    //     title: 'JavaScript逆引きレシピ',
    //     price: 2800
    //   },
    ]
  },
  computed: {
    expensiveBooks: function() {
      return this.books.filter(function(b) {
        return b.price >= 2500;
        })
    }
  }
});
