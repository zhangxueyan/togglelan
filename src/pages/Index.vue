<template>
  <div class="index">
    <!-- 第一个swiper -->
   <swiper :options="swiperOption1" ref="mySwiper1">
      <!-- slides -->
      <swiper-slide>
        <div class="part1">
            <!-- 第二个swiper -->
            <swiper :options="swiperOption2" ref="mySwiper2" class="banner">
                  <!-- slides -->
                  <swiper-slide v-for="banner in banners" :key="banner.id">
                    <img :src="banner.imgUrl" alt="">
                  </swiper-slide>
                  <div class="swiper-button-prev swiper-button-prev2" slot="button-prev"></div>
                  <div class="swiper-button-next swiper-button-next2" slot="button-next"></div>
                  <div class="swiper-pagination swiper-pagination2" slot="pagination"></div>
            </swiper>
            <div class="container">
              <p class="part1-p1">{{$t('part1Titl')}}</p>
              <p class="part1-p2">{{$t('part1Subt')}}</p>
              <ul class="part1-items">
                <li class="part1-item" v-for="item in $t('part1Items')" :class="{'no-ml':item.first}">
                  <img :src="item.imgUrl" alt="">
                  <div class="part1-mask">
                    <p class="part1-p3">{{item.text1}}</p>
                    <p class="part1-p4" v-html="item.text2"></p>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      </swiper-slide>
      <swiper-slide>
          <div class="part2">
             <div class="part-main">
               <p class="part1-p1">新康大数据</p>
               <ul class="part2-items clearfix">
                 <li class="part2-item" v-for="item in part2Items" :class="{'no-ml':item.isFirst}">
                   <img :src="item.imgUrl" alt="">
                   <p class="part2-p1">{{item.text1}}</p>
                   <p class="part2-p2">{{item.text2}}</p>
                 </li>
               </ul>
             </div>
          </div>
      </swiper-slide>
      <swiper-slide>
        <div class="part3">
            <div class="part-main">
              <p class="part3-p1">师资陈容</p>
              <p class="part3-p2">你的人生导师</p>
              <p class="part3-p3">① 打造高品质师资团队<br>② 更加靠谱<br>③ 更懂考点<br>④ 更懂沟通</p>
              <p class="part3-p4">在新康教育，一定能找到适合你的导师</p>
            </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="part4">
            <div class="part-main part4-main">
              <p class="part1-p1">热点新闻</p>
              <ul class="part4-items">
                <li class="part4-item clearfix" v-for="item in part4Items">
                   <div class="part4-box1">
                     <p class="part4-p1">{{item.date}}<br>{{item.month}}</p>
                   </div>
                   <div class="part4-box2">
                      <p class="part4-p2">{{item.text1}}</p>
                      <p class="part4-p3">{{item.text2}}</p>
                      <div class="part4-box3 clearfix">
                        <p class="part4-p4">{{item.text3}}</p>
                        <a href="javascript:;" class="part4-p5">{{item.text4}}</a>
                      </div>
                   </div>
                   <div class="part4-box4">
                     <img :src="item.imgUrl" alt="">
                   </div>
                </li>
              </ul>
            </div>
            <footer>Copyright © 2014-2019 沪ICP备13039508号-1 上海新康进修学院 版权所有</footer>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination1" slot="pagination"></div>
   </swiper>
  </div>
</template>

<script>


export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperOption1: {
        initialSlide:0,
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView:1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新
        pagination: {
          el: '.swiper-pagination1',
        },
        on: {
          slideChangeTransitionEnd(){
            // console.log(this.activeIndex)
          }
        }
      },
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
      ],
      // part1Items:[
      //   {
      //     imgUrl:require('../assets/images/home1_03.jpg'),
      //     text1:'无学历升专本',
      //     text2:'名校名师汇聚<br>含金量高',
      //     first:true
      //   },
      //   {
      //     imgUrl:require('../assets/images/home1_03.jpg'),
      //     text1:'无学历升专本',
      //     text2:'名校名师汇聚<br>含金量高',
      //     first:false
      //   },
      //   {
      //     imgUrl:require('../assets/images/home1_03.jpg'),
      //     text1:'无学历升专本',
      //     text2:'名校名师汇聚<br>含金量高',
      //     first:false
      //   },
      //   {
      //     imgUrl:require('../assets/images/home1_03.jpg'),
      //     text1:'无学历升专本',
      //     text2:'名校名师汇聚<br>含金量高',
      //     first:false
      //   },
      //   {
      //     imgUrl:require('../assets/images/home1_03.jpg'),
      //     text1:'无学历升专本',
      //     text2:'名校名师汇聚<br>含金量高',
      //     first:false
      //   },
      //   {
      //     imgUrl:require('../assets/images/home1_03.jpg'),
      //     text1:'无学历升专本',
      //     text2:'名校名师汇聚<br>含金量高',
      //     first:false
      //   },
      // ],
      part2Items:[
        {
          imgUrl:require('../assets/images/home5_03.jpg'),
          text1:'12+',
          text2:'累计服务学员',
          isFirst:true
        },
        {
          imgUrl:require('../assets/images/home5_05.jpg'),
          text1:'12+',
          text2:'累计服务学员',
          isFirst:false
        },
        {
          imgUrl:require('../assets/images/home5_07.jpg'),
          text1:'12+',
          text2:'累计服务学员',
          isFirst:false
        },
        {
          imgUrl:require('../assets/images/home5_12.jpg'),
          text1:'12+',
          text2:'累计服务学员',
          isFirst:true
        },
        {
          imgUrl:require('../assets/images/home5_13.jpg'),
          text1:'12+',
          text2:'累计服务学员',
          isFirst:false
        },
        {
          imgUrl:require('../assets/images/home5_14.jpg'),
          text1:'12+',
          text2:'累计服务学员',
          isFirst:false
        }
      ],
      part4Items:[
        {
          date:'13',
          month:'Apr',
          text1:'新康教育努力做好一件事，为社会培养有用人才',
          text2:'家长们！在社会竞争非常激烈的时代，没有丰富的科学文化知识是不行的。“知识就是力量”，知识对于现在社会的重要性不言而喻。现在摆在我们面前的是机遇与挑战并存，谁能在人生的第一次重要的抉择中胜出，谁就使未来的成功多一份保障。',
          text3:'9,518',
          text4:'《阅读全文》',
          imgUrl:require('../assets/images/home7_03.jpg'),
        },
        {
          date:'27',
          month:'Apr',
          text1:'新康教育努力做好一件事，为社会培养有用人才',
          text2:'家长们！在社会竞争非常激烈的时代，没有丰富的科学文化知识是不行的。“知识就是力量”，知识对于现在社会的重要性不言而喻。现在摆在我们面前的是机遇与挑战并存，谁能在人生的第一次重要的抉择中胜出，谁就使未来的成功多一份保障。',
          text3:'9,518',
          text4:'《阅读全文》',
          imgUrl:require('../assets/images/home7_06.jpg'),
        },
      ]
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper1.swiper;
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
