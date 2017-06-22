import Vue from 'vue'

function system () {
  var sys = {
    'systems': [
      {
        'name': 'cms',
        'alisa': '首页',
        'modules': [
          {
            'name': 'read',
            'alisa': '列表'
          }
        ]
      }
    ]
  }
  return sys
}
export default new Vue({
  json: system()
})
