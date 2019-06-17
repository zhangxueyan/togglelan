<template>
  <div class="company-profile">
    <img src="../assets/images/zx_02.jpg" alt="">
    <div class="part15">
        <div class="container clearfix">
           <div class="part15-sidebar fl">
             <router-link to="companyprofile" class="part15-sv">{{$t('part15SideBtn4')}}</router-link>
             <router-link to="contactus" class="part15-sv active">{{$t('part15SideBtn5')}}</router-link>
           </div>

           <div class="part15-content part17-content2 fr">
             <div class="part17-map fl">
              <img src="../assets/images/lx2_03.jpg" alt="">
            </div>
            <p class="part17-p5 fr">{{$t('part17Addr')}}<br>{{$t('part17Tel')}}</p>
          </div>

        </div>
    </div>

    
  </div>
</template>

<script>


export default {
  name: 'contactus',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
