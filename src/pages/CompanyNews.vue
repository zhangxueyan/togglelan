<template>
  <div class="student-voice">
    <div><img src="../assets/images/zx_02.jpg" alt=""></div>
    <!-- part14 ending  -->
    <div class="part15">
        <div class="container clearfix">
           <div class="part15-sidebar fl">
             <router-link to="studentvoice" class="part15-sv">{{$t('part15SideBtn1')}}</router-link>
             <router-link to="companynews" class="part15-sv active">{{$t('part15SideBtn2')}}</router-link>
           </div>

   <ul class="part15-content part15-content2 fr">
    <li class="part15-item2 clearfix" v-for="item in $t('part15Items2')" :key="item.id">
     <div class="part15-img2 fl"><img :src="item.imgUrl" alt=""></div>
     <div class="part15-div fr">
       <p class="part15-p4">{{item.title}}</p>
       <p class="part15-p5">{{item.text}}</p>
       <div class="part15-childDiv clearfix">
         <p class="part15-date fl">{{item.date}}</p>
         <router-link class="part15-but fr" :to="{name:'newsdetail',params:{id:item.id}}">{{$t('part15SideBtn3')}}</router-link> 
       </div>
     </div>
    </li>
  </ul>


        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'companynews',
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
