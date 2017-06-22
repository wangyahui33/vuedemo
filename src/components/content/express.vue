<template>
  <div id='content' class="content">
    <h2>{{msg}}</h2>
    <div><span v-for='tab in tabs'><router-link :to="{ name: tab.name }">{{tab.alias}}</router-link></span></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to express',
      tabs: [
        {
          name: 'cms.express.taba',
          alias: 'taba'
        },
        {
          name: 'cms.express.tabb',
          alias: 'tabb'
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
