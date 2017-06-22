<template>
  <div class="leftMenu">
    <nav class="navbar-default navbar-static-side own-nav fixedleft">
    <div class="sidebar-collapse" v-for='nav in data'>
      <a class='se-menu list-group-item' @click='go(nav.name, $event)'>
        <span :class='nav.modules.length>0 ? "glyphicon glyphicon-triangle-right" : "" ' aria-hidden='true'></span>{{nav.alias}}
      </a>
      <ul class="nav list-unstyled collapse" id="side-menu" v-if='nav.modules.length>0'>
        <li v-for='m in nav.modules'><router-link :to="{ name: m.name }">{{m.alias}}</router-link></li>
      </ul>
    </div>
  </nav>
  </div>
</template>

<script>
import Jquery from 'jquery'
export default {
  data () {
    return {
      msg: 'Welcome to Your leftMenu',
      data: this.$store._modules.root._rawModule.loginInfo.sys,
      list: JSON.parse(JSON.stringify(this.$store._modules.root._rawModule.loginInfo.sys))
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.testFun()
    })
  },
  watch: {
     // 如果路由有变化，会执行该方法
    '$route': function () {
      this.isLogin()
      this.getUrl()
    }
  },
  methods: {
    isLogin () {
      if (!window.sessionStorage.name) {
        window.location.href = this.getUrl()
      }
    },
    getUrl () {
      let currentUrl = window.location.href
      if (currentUrl.indexOf('layout') > -1) {
        let s = currentUrl.substring(0, currentUrl.indexOf('layout'))
        return s
      }
    },
    testFun () {
      console.log('store test', this, JSON.stringify(this.data))
      console.log('转换 - ', JSON.parse(JSON.stringify(this.data)), this.list)
      Jquery.ajax({
        method: 'GET',
        url: 'https://cnodejs.org/api/v1/topics'
      }).then(function (resp) {
        console.log('------', resp)
      })
    },
    go (pa, el) {
      this.$router.push({name: pa})
      let target = Jquery(el.currentTarget)
      let next = target.next()
      console.log('target next', target, next)
      if (next.length > 0) {
        el.preventDefault()
        if (next.hasClass('collapse')) {
          target.find('span').attr('class', 'glyphicon glyphicon-triangle-bottom')
          next.removeClass('collapse')
        } else {
          target.find('span').attr('class', 'glyphicon glyphicon-triangle-bottom')
          next.addClass('collapse')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.leftMenu{

}
.list{
  border: 1px red solid;
}
.bor{
  border:1px red solid;
}
</style>
