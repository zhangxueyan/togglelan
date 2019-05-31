<template>
  <div class="navbar">
    <div class="container clearfix">
    	 <div class="nav-logo">
    	 	<img src="../assets/images/logo_03.png" alt="">
    	 </div>
    	 <ul class="nav-items clearfix">
    	 	<li class="nav-item" v-for="(navItem,index) in $t('navItems')" :class="{'active':navItem.isActive,'first':navItem.isFirst}" @mouseover="changeActive($t('navItems')[index])" @mouseout = "removeActive($t('navItems')[index])">
    	 		<a href="javascript:;" class="nav-child">{{navItem.title}}</a>
    	 		<div class="nav-slide">
    	 			<a href="javascript:;" class="nav-sitem" v-for="(navChild,idx) in navItem.subtitles" :class="{'active':navChild.isActive}" @mouseover="changeActive(navItem.subtitles[idx])" @mouseout = "removeActive(navItem.subtitles[idx])">{{navChild.subtitle}}</a>
    	 		</div>
    	 	</li>
    	 </ul>
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
     changeActive(curItem){
     	curItem.isActive = true
     },
     removeActive(curItem){
        curItem.isActive = false
     },
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
