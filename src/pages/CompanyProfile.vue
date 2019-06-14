<template>
  <div class="company-profile">
    <img src="../assets/images/zx_02.jpg" alt="">
    <div class="part15">
        <div class="container clearfix">
           <div class="part15-sidebar fl">
             <router-link to="companyprofile" class="part15-sv active">{{$t('part15SideBtn3')}}</router-link>
             <router-link to="contactus" class="part15-sv">{{$t('part15SideBtn4')}}</router-link>
           </div>
      <div class="part15-content fr part17-content">
        <p class="part17-p1">{{$t('part17Titl')}}</p>
        <ul class="part17-advs clearfix">
           <li class="part17-adv" v-for="item in $t('part17Items')" :class="{'no-ml':item.isFirst}"><span>{{item.text1}}</span><br>{{item.text2}}</li>
        </ul>
        <p class="part17-p2">{{$t('part17Text1')}}</p>
        
         <p class="part17-p1">企业文化</p>

         <p class="part17-p3">我们的使命</p>
         <p class="part17-p4">让学习成就更美好的未来</p>

         <p class="part17-p3">我们的愿景</p>
         <p class="part17-p4">成为最受尊敬的有文化价值的教育机构。做教育事业，唯有做到对学员负责、对社会负责、才能有立足之地，才能获得真正的尊重。</p>

         <p class="part17-p3">核心价值观</p>
         <p class="part17-p4">
          1.) 学员第一，成就学员，是我们存在的唯一理由。<br>
          2.) 团队合作，共享共担，平凡人一起成就不平凡事。<br>
          3.) 诚信敬业，诚实守信，专业执着。<br>
          4.) 执行力，结果导向，马上行动。<br>
          5.) 创新，拥抱变化，勇于创新。<br>
          6.) 激情，永不放弃，乐观向上。</p>
     </div>


        </div>
    </div>

    
  </div>
</template>

<script>


export default {
  name: 'companyprofile',
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
