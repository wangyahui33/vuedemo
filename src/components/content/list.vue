<template>
  <div class="list">
    <h2 class='box'>{{msg}}</h2>
    <button @click='openModel()'>弹窗</button>
    <modal title="Modal Title" :show.sync="show" @ok="ok" @cancel="cancel">
        测试
    </modal>
  </div>
</template>

<script>
import modal from './public/modal'

export default {
  data () {
    return {
      msg: 'Welcome to list',
      show: false
    }
  },
  components: {
    modal
  },
  methods: {
    openModel () {
      console.log('this -----', this)
      if (!this.show) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{

}
</style>
