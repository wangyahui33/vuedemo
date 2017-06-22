<template>
  <div id='content' class="content">
    <div><span v-for='tab in tabs'>{{tab.name}}</span></div>
    <h2>{{msg}}</h2>
    <p class='box'>this is a home page</p>
    <iframe src='https://www.meipian.cn/fkwlmt7?from=webview&user=10659311' width='100%' height='100%' style='border:1px red solid;'></iframe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to home',
      tabs: [
        {
          name: 'tab1'
        },
        {
          name: 'tab2'
        }
      ]
    }
  },
  methods: {
    change: function () {
      console.log('change == ', this)
    },
    go: function () {
      console.log('go == ', this)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topNav{
  background-color: #ccc;
}
</style>
