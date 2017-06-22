<template>
  <div class="login login">
    <p v-if='loginFlag' class='redHint'>账号或密码错误</p>
    <label>账号：<input type='text' v-model='accountName'></label><br><br>
    <label>密码：<input type='password' v-model='password'></label><br><br>
    <button @click='login()' v-my-enter v-on:keyup.13='login'>登陆</button>
    <button @click='test()'>test</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      accountName: 'admin',
      password: 'admin',
      loginFlag: false
    }
  },
  watch: {
     // 如果路由有变化，会执行该方法
    '$route': function () {
      this.routeChange()
    }
  },
  methods: {
    login: function () {
      console.log('click me', this.$router)
      if (this.accountName === 'admin' && this.password === 'admin') {
        window.sessionStorage.name = this.accountName
        this.$http({
          url: '',
          method: 'GET'
        }).then(function (resp) {
          console.log('resp login', resp)
          let urls = window.location.href
          window.location.href = urls + 'layout/home'
        }, function (err) {
          console.log('request error ', err)
        })
      } else {
        this.loginFlag = true
      }
    },
    test () {
      let info = this.$store._modules.root._rawModule.loginInfo
      console.log('hahaha', this, info)
      this.$http({
        url: 'api/json.js',
        method: 'GET',
        headers: {'Content-Type': 'application/x-javascript'}
      }).then(function (resp) {
        console.log('resp json== ', resp)
      })
    },
    routeChange () {
      let path = this.$route.path
      if (path === '/' || path === '/layout') {
        this.showNav = true
      } else {
        this.showNav = false
      }
    },
    warn (e) {
      if (e) {
        console.log('dianjilewo')
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.login{
  border: 1px #ccc solid;
  width: 400px;
  height: 200px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -100px;
  margin-left: -200px;
  padding: 50px;
}
</style>
