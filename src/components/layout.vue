<template>
  <div class="layout">
    <top-nav></top-nav>
    <div class='content over-flow'>
      <div class='left'>
        <left-meun></left-meun>
      </div>
      <div class='right'>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import topNav from './TopNav'
import leftMeun from './LeftMeun'

export default {
  components: {
    topNav,
    leftMeun
  },
  methods: {
    test: function () {
      console.log('this == ', topNav)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.layout{
  
}
.content{
  width: 100%;
}
.left{
  float: left;
  width: 20%;
  height:  100%;
  background-color: #ccc;
}
.right{
  float: left;
  width:80%;
  height:100%;
}
.over-flow{
    overflow: auto;
    zoom: 1;
}
</style>
