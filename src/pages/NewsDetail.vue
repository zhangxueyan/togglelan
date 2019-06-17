<template>
  <div class="news-detail">
     <div class="part16">
        <div class="container part16-ct">
            
            <p class="part16-p1" v-html="$t('newsCt')[this.num].title"></p>
            <p class="part16-p2">{{$t('part16Time')}}：{{$t('newsCt')[this.num].date}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{$t('part16Visits')}}：{{$t('newsCt')[this.num].visits}}</p>
            <p class="part16-p3" v-html="$t('newsCt')[this.num].text"></p>
        </div>
     </div>
    
  </div>
</template>

<script>


export default {
  name: 'newsdetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num:''
    }
  },
  created(){
    this.num = this.$route.params.id
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/css/style.css');
</style>
