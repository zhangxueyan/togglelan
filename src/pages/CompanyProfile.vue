<template>
  <div class="company-profile">
    <img src="../assets/images/zx_02.jpg" alt="">
    <div class="part15">
        <div class="container clearfix">
           <div class="part15-sidebar fl">
             <router-link to="companyprofile" class="part15-sv active">{{$t('part15SideBtn4')}}</router-link>
             <router-link to="contactus" class="part15-sv">{{$t('part15SideBtn5')}}</router-link>
           </div>
          <div class="part15-content fr part17-content">
            <p class="part17-p1">{{$t('part17Titl')}}</p>
            <ul class="part17-advs clearfix">
               <li class="part17-adv" v-for="item in $t('part17Items')" :class="{'no-ml':item.isFirst}"><span>{{item.text1}}</span><br>{{item.text2}}</li>
            </ul>
            <p class="part17-p2">{{$t('part17Text')}}</p>
            
             <p class="part17-p1">{{$t('part17Titl2')}}</p>

             <p class="part17-p3">{{$t('part17Subt1')}}</p>
             <p class="part17-p4">{{$t('part17Text1')}}</p>

             <p class="part17-p3">{{$t('part17Subt2')}}</p>
             <p class="part17-p4">{{$t('part17Text2')}}</p>

             <p class="part17-p3">{{$t('part17Subt3')}}</p>
             <p class="part17-p4" v-html="$t('part17Text3')"></p>
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
