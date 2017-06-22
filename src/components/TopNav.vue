<template>
  <div  id='topnav' class="topNav">
    <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
      <ul class="list-inline nav navbar-top-links navbar-right">
        <li>
          <a><i class="fa fa-user"></i>欢迎灰灰</a>
        </li>
        <li @click='logout()'>退出登录</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to topNav'
    }
  },
  methods: {
    logout () {
      console.log('退出登录', this, window.sessionStorage)
      this.$router.push({name: 'Login'})
      window.sessionStorage.name = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#topnav ul li{
  display: inline-block;
}
.topNav{
  background-color: #ccc;
}
</style>
