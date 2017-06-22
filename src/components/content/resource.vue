<template>
  <div  id='resource' class="resource">
    <h2 class='box'>{{msg}}</h2>
    <div class='edit'>
      <label>名称:<input type='text' v-model='name' placeholder='请输入内容'></label>
      <label>详情:<input type='textarea' v-model='pos' placeholder='请输入内容'></label>
      <div class='upload'>
        <input name='button' type='button' onclick='img.click()' value='浏览'>
        <input type='file' name='img' id='img' style='display:none' @change='uploadPic($event)'>
      </div>
      <button @click='complete'>完成</button>
    </div>
    <div class='show_template'>
      <p class='title'><span>{{newName}}</span><span>{{newTime}}</span></p>
      <div class='picture' v-if='newImageUrl'><img v-bind:src='newImageUrl'></div>
      <div class='detail text-center'>{{newDetail}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to resource',
      name: '',
      pos: '',
      imageUrl: '',
      newName: '',
      newTime: '',
      newImageUrl: '',
      newDetail: ''
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    up () {
      console.log('点击上传了图片按钮')
    },
    getObjectUrl (file) {
      let url = null
      if (window.createObjectURL !== undefined) {
        url = window.createObjectURL(file)
      } else if (window.URL !== undefined) {
        url = window.URL.createObjectURL(file)
      } else if (window.webkitURL !== undefined) {
        url = window.webkitURL.createObjectURL(file)
      }
      return url
    },
    uploadPic (e) {
      console.log('e---', e)
      let objUrl = this.getObjectUrl(document.getElementById('img').files[0])
      console.log('objUrl === ', objUrl)
      this.imageUrl = objUrl
    },
    complete () {
      this.newName = this.name
      this.newTime = new Date()
      this.newImageUrl = this.imageUrl
      this.newDetail = this.pos
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resource{

}
.edit{
  width:400px;
  height:600px;
  position:absolute;
  border:1px pink solid;
  border-radius:4px;
}
.show_template{
  width:400px;
  height:600px;
  margin-left:405px;
  border:1px green solid;
  border-radius:20px;
  box-sizing:border-box;
}
.title{
  margin: 40px 0 0 0;
  padding-left: 20px;
  background-color: rgba(0,0,255,0.1);
}
.picture{
  padding:20px;
}
.picture img{
  width:100%;
  height:100%;
}
.detail{
}
</style>
