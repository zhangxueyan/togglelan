<template>
  <div class="home">
        <!-- 第二个swiper -->
        <swiper :options="swiperOption2" ref="mySwiper2" class="banner">
                  <!-- slides -->
                  <swiper-slide v-for="banner in banners" :key="banner.id">
                    <img :src="banner.imgUrl" alt="">
                  </swiper-slide>
                  <div class="swiper-pagination swiper-pagination2" slot="pagination"></div>
        </swiper>
        <div class="part1">
            <div class="container">
              <p class="part1-p1">{{$t('part1Titl')}}</p>
              <p class="part1-p2">{{$t('part1Subt')}}</p>
              <ul class="part1-items clearfix">
                <li class="part1-item" v-for="item in $t('part1Items')" :class="{'no-ml':item.first}" :key="item.id">
                  <img :src="item.imgUrl" alt="">
                  <div class="part1-mask">
                    <p class="part1-p3">{{item.text1}}</p>
                    <p class="part1-p4" v-html="item.text2"></p>
                  </div>
                </li>
              </ul>
            </div>
        </div>
        <div class="part2">
             <div class="part-main">
               <p class="part1-p1">{{$t('part2Titl')}}</p>
               <ul class="part2-items clearfix">
                 <li class="part2-item" v-for="item in $t('part2Items')" :class="{'no-ml':item.isFirst}" :key="item.id">
                   <img :src="item.imgUrl" alt="">
                   <p class="part2-p1">{{item.text1}}</p>
                   <p class="part2-p2">{{item.text2}}</p>
                 </li>
               </ul>
             </div>
        </div>
        <div class="part3">
            <div class="part-main">
              <p class="part3-p1">{{$t('part3Text1')}}</p>
              <p class="part3-p2">{{$t('part3Text2')}}</p>

              <p class="part3-p3">{{$t('part3Text3a')}}</p>
              <p class="part3-p3">{{$t('part3Text3b')}}</p>
              <p class="part3-p3">{{$t('part3Text3c')}}</p>
              <p class="part3-p3">{{$t('part3Text3d')}}</p>

              <p class="part3-p4">{{$t('part3Text4')}}</p>
            </div>
        </div>
        <div class="part4">
            <div class="part-main part4-main">
              <p class="part1-p1">{{$t('part4Titl')}}</p>
              <ul class="part4-items">
                <li class="part4-item clearfix" v-for="item in $t('part4Items')" :key="item.id">
                   <div class="part4-box1">
                     <p class="part4-p1">{{item.date}}<br>{{item.month}}</p>
                   </div>
                   <div class="part4-box2">
                      <p class="part4-p2">{{item.text1}}</p>
                      <p class="part4-p3">{{item.text2}}</p>
                      <div class="part4-box3 clearfix">
                        <p class="part4-p4">{{item.text3}}</p>
                        <router-link class="part4-p5" :to="{name:'newsdetail',params:{id:item.id}}">{{item.text4}}</router-link> 
                      </div>
                   </div>
                   <div class="part4-box4">
                     <img :src="item.imgUrl" alt="">
                   </div>
                </li>
              </ul>
            </div>
        </div>
  </div>
</template>

<script>


export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperOption2:{
         loop:true,
         height:200,
         pagination: {
          el: '.swiper-pagination2',
         },
      },
    banners:[
        {imgUrl:require('../assets/images/lunbo1.jpg')},
        {imgUrl:require('../assets/images/lunbo2.jpg')},
        {imgUrl:require('../assets/images/lunbo3.jpg')}
    ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/css/style.css');
</style>
