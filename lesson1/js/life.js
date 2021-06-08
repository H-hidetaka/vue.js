let app = new Vue({
  el: '#app',
  beforeCreate: function() {
    console.log('beforeCreate...');
  },
  created: function() {
    console.log('created...');
  },
  beforeMount: function() {
    console.log('beforeMount...');
  },
  mounted: function() {
    console.log('mounted...');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate...');
  },
  updated: function() {
    console.log('update...')
  },
  beforeDestroy: function() {
    console.log('beforeDestroy...');
  },
  destroyed: function() {
    console.log('destroyed...');
  }
});

// 3000msの後にはき＝３秒後に破棄
setTimeout(function() {
  app.$destroy();
}, 3000);
