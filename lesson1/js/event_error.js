new Vue({
  el: '#app',
  data: {
    path: './images/noimage.jpg'
  },
  methods: {
    onerror: function() {
      this.path = './images/noimage.jpg';
    }
  }
});
