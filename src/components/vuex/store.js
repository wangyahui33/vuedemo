import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list: [{
    name: '灰灰',
    age: '18'
  }],
  count: 100
}

const mutations = {
  GETLIST (state, amount) {
    state.list = amount
  },
  INCREASE (state, amount) {
    state.count = state.count + amount
  },
  REDUCE (state, amount) {
    state.count = state.count - amount
  }
}

const loginInfo = {
  'sys': [
    {
      'name': 'cms.home',
      'alias': '架构',
      'modules': [
        {
          'name': 'cms.home',
          'alias': '标签管理'
        },
        {
          'name': 'cms.express',
          'alias': '类目管理'
        }
      ]
    },
    {
      'name': 'cms.express',
      'alias': '内容管理',
      'modules': [
        {
          'name': 'cms.resource',
          'alias': '内容审核'
        },
        {
          'name': 'cms.list',
          'alias': '推荐列表'
        }
      ]
    }
  ]
}

export default new Vuex.Store({
  state,
  mutations,
  loginInfo
})
