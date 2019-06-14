<template>
  <div class="student-voice">
    <div><img src="../assets/images/zx_02.jpg" alt=""></div>
    <!-- part14 ending  -->
    <div class="part15">
        <div class="container clearfix">
           <div class="part15-sidebar fl">
             <router-link to="studentvoice" class="part15-sv active">{{$t('part15SideBtn1')}}</router-link>
             <router-link to="companynews" class="part15-sv">{{$t('part15SideBtn2')}}</router-link>
           </div>
           <ul class="part15-content fr clearfix">
            <li class="part15-item" v-for="item in $t('part15Items')" :class="{'no-ml':item.isFirst}">
             <img :src="item.imgUrl" alt="">
             <p class="part15-p1">{{item.text1}}</p>
             <p class="part15-p2">{{item.text2}}</p>
             <p class="part15-p3">{{item.text3}}</p>
           </li>
         </ul>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'studentvoice',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log(this);
    console.log(this.swiper);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/css/style.css');
</style>
