<template>
  <div class="self">
    <!-- 第3个swiper -->
    <swiper :options="swiperOption3" ref="mySwiper3">
      <!-- slides -->
      <swiper-slide v-for="item in selfbanners" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination3" slot="pagination"></div>
    </swiper>
    <div class="part5">
      <div class="container">
        <!-- 第4个swiper -->
        <swiper :options="swiperOption4" ref="mySwiper4">
          <!-- slides -->
          <swiper-slide v-for="item in $t('part5Items')" :key="item.id">
            <p class="part5-p1">{{item.title}}</p>
            <img :src="item.imgUrl" alt="">
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination4" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="part6">
       <div class="container">
         <p class="part6-title">{{$t('part6Titl')}}</p>
         <ul class="part6-items clearfix">
           <li class="part6-item" v-for="item in $t('part6Items')" :key="item.id" :class="{'no-ml':item.isFirst}">
               <img :src="item.imgUrl" alt="">
               <p class="part6-p1">{{item.title}}</p>
               <p class="part6-p2" v-html="item.text"></p>
           </li>
         </ul>
       </div>
    </div>
    <div class="part7">
      <div class="container">
         <div class="part7-title">
           <p>{{$t('part7Titl')}}<br><span>{{$t('part7Subt')}}</span></p>
         </div>
         <div class="part7-riqi clearfix">
            <span class="part7-s1 month">06</span>
            <span class="part7-s2">{{$t('part7Month')}}</span>
            <span class="part7-s1 date">02</span>
            <span class="part7-s2">{{$t('part7Date')}}</span>
         </div>
         <div class="part7-note">{{$t('part7Note')}}</div>

         <ul class="part7-steps clearfix">
           <li class="part7-step" v-for="item in $t('part7Items')" :key="item.id" :class="{'no-ml':item.isFirst}">
             <p class="part7-p1">{{item.text1}}</p>
             <p class="part7-p2">{{item.text2}}</p>
           </li>
         </ul>
         <a href="javascript:;" class="part-btn part7-btn">{{$t('part7Btn')}}</a>
      </div>
    </div>
    <div class="part8">
        <div class="container">
           <p class="part6-title">{{$t('part8Titl')}}<br><span>{{$t('part8Subt')}}</span></p>
           <img src="../assets/images/zx4_03.jpg" alt="" class="part8-img">
        </div>
    </div>
    <div class="part9">
        <div class="container">
          <div class="part9-items clearfix">
            <dl class="part9-item" v-for="item in $t('part9Items')" :key="item.id" :class="{'no-ml':item.isFirst}">
               <dt>{{item.cate}}</dt>
               <dd v-for="childitem in item.majors" :key="childitem.id">{{childitem}}</dd>
            </dl>
          </div>
          <a href="javascript:;" class="part-btn part9-btn">{{$t('part9Btn')}}</a>
        </div>
    </div>
    <div class="part10">
       <div class="container">
         <div class="part7-title">
           <p>{{$t('part10Titl')}}<br><span>{{$t('part10Subt')}}</span></p>
         </div>
         <ul class="part10-cates clearfix">
            <li class="part10-cate" v-for="item in $t('part10Cates')" :key="item.id" :class="{'no-ml':item.isFirst}">
              <p class="part10-p1">{{item.text1}}</p>
              <p class="part10-p2">{{item.text2}}</p>
            </li>
         </ul>

         <ul class="part10-items clearfix">
           <li class="part10-item" v-for="item in $t('part10Items')" :key="item.id" :class="{'no-ml':item.isFirst}">
             <p  class="part10-cell" v-for="childItem in item.data" :key="childItem.id" :class="{'active':childItem.isActive}">{{childItem.text}}</p>
           </li>
         </ul>
         <a href="javascript:;" class="part-btn part10-btn">{{$t('part10Btn')}}</a>
       </div>
    </div>
    <div class="part11">
      <div class="container">
            <p class="part6-title">{{$t('part11Titl')}}<br><span>{{$t('part11Subt')}}</span></p>
            <div class="part11-divs clearfix">
            <div class="part11-div1">
              <p class="part11-p1">{{$t('part11Text1')}}</p>
              <p class="part11-p1">{{$t('part11Text2')}}</p>
              <p class="part11-p1">{{$t('part11Text3')}}</p>
              <div class="part11-buts clearfix">
                <a href="javascript:;" class="part11-but part11-but1">{{$t('part11Btn1')}}</a>
                <a href="javascript:;" class="part11-but part11-but2">{{$t('part11Btn2')}}</a>
              </div>
            </div>
            <div class="part11-div3">
              <img src="../assets/images/zx7_03.png" alt="">
            </div>
            </div>
      </div>
    </div>
    <div class="part12">
      <div class="container">
         <div class="part7-title">
           <p>{{$t('part12Titl')}}<br><span>{{$t('part12Subt')}}</span></p>
         </div>
         <div class="part12-boxs clearfix">
           <div class="part12-box fl" v-for="item in $t('part12Items')" :class="{'fl':item.type==0,'fr':item.type==1,'part12-box2':item.type==1}">
              <p class="part12-p1">{{item.title}}</p>
              <p class="part12-p2">{{item.text1}}<br>{{item.text2}}<br>{{item.text3}}<br>{{item.text4}}</p>
           </div>
         </div>
      </div>
    </div>
    <div class="part13">
      <img src="../assets/images/bottom_02.jpg" alt="">
    </div>
  </div>
</template>

<script>


export default {
  name: 'selfexam',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperOption3:{
         loop:true,
         height:200,
         pagination: {
          el: '.swiper-pagination3',
         },
      },
      selfbanners:[
        {imgUrl:require('../assets/images/banner0.jpg')},
        {imgUrl:require('../assets/images/banner1.jpg')}
      ],
      swiperOption4:{
         loop:true,
         height:200,
         pagination: {
          el: '.swiper-pagination4',
          clickable :true,
         },
      },
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
