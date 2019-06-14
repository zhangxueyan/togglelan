<template>
  <div class="navbar">
    <div class="container clearfix">
    	 <div class="nav-logo">
    	 	<img src="../assets/images/logo_03.png" alt="">
    	 </div>

       <div class="nav-items clearfix">
          <router-link class="nav-item" v-for="(navItem,index) in $t('navItems')" :to="{name:navItem.link}" :key="navItem.id">{{navItem.title}}</router-link>
       </div>


       <div class="togLan clearfix">
            <a href="javascript:;" @click="changeZh" :class="{active:isZh}">{{$t("message.btnText1")}}</a>
            <a href="javascript:;" @click="changeEn" :class="{active:isEn}">{{$t("message.btnText2")}}</a>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isZh:true,
      isEn:false
    }
  },

  methods:{
      changeZh(){
        this.$i18n.locale = 'zh'
        this.isEn=false
        this.isZh=true
      },
      changeEn(){
        this.$i18n.locale = 'en'
        this.isEn=true
        this.isZh=false
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/navbar.css";

</style>
