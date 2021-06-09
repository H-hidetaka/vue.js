let app = new Vue({
  el: '#app',
  data: {
    auhtor: {
      name: '山田'
    }
  },
  mounted: function() {
    Vue.set(this.auhtor, 'company', 'WINGSプロジェクト');0
  }
}
