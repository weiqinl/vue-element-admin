Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
    console.log(el)
    console.log('custorm directive')
  }
})
