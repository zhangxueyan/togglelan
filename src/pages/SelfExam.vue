<template>
  <div class="self">
    <!-- 第3个swiper -->
    <swiper :options="swiperOption3" ref="mySwiper3">
      <!-- slides -->
      <swiper-slide v-for="item in selfbanners" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-prev3" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-next3" slot="button-next"></div>
      <div class="swiper-pagination swiper-pagination3" slot="pagination"></div>
    </swiper>
    <div class="part5">
      <div class="container">
        <!-- 第4个swiper -->
        <swiper :options="swiperOption4" ref="mySwiper4">
          <!-- slides -->
          <swiper-slide v-for="item in part5Items" :key="item.id">
            <p class="part5-p1">{{item.title}}</p>
            <img :src="item.imgUrl" alt="">
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination4" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="part6">
       <div class="container">
         <p class="part6-title">学历提升方式一览表</p>
         <ul class="part6-items clearfix">
           <li class="part6-item" v-for="item in part6Items" :key="item.id" :class="{'no-ml':item.isFirst}">
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
           <p>2019年上海市成人学历初审时间即将截止<br><span>自考本科一年报名时间只有两次，每年3月和9月，错过至少会耽误1年时间毕业</span></p>
         </div>
         <div class="part7-riqi clearfix">
            <span class="month">06</span>
            <span class="date">02</span>
         </div>
         <div class="part7-note">报考提醒：正式报名时间很短，官网会出现堵塞，建议考生提早报考，否则可能出现：<br>
          ① 考场名额限额，考场被安排在偏远区域；② 专业院校名额有限，选不上想报的专业。
         </div>

         <ul class="part7-steps clearfix">
           <li class="part7-step" v-for="item in part7Items" :key="item.id" :class="{'no-ml':item.isFirst}">
             <p class="part7-p1">{{item.text1}}</p>
             <p class="part7-p2">{{item.text2}}</p>
           </li>
         </ul>
         <a href="javascript:;" class="part-btn part7-btn">2019年报考咨询入口</a>
      </div>
    </div>
    <div class="part8">
        <div class="container">
           <p class="part6-title">名校学历才真正有含金量<br><span>成人考学历，当然只考高含金量的本科</span></p>
           <img src="../assets/images/zx4_03.jpg" alt="" class="part8-img">
        </div>
    </div>
    <div class="part9">
        <div class="container">
          <div class="part9-items clearfix">
            <dl class="part9-item" v-for="item in part9Items" :key="item.id" :class="{'no-ml':item.isFirst}">
               <dt>{{item.cate}}</dt>
               <dd v-for="childitem in item.majors" :key="childitem.id">{{childitem}}</dd>
            </dl>
          </div>
          <a href="javascript:;" class="part-btn part9-btn">点击了解各学校报名详细信息</a>
        </div>
    </div>
    <div class="part10">
       <div class="container">
         <div class="part7-title">
           <p>名师授课，帮你规划适合的提升路径<br><span>覆盖各学历层次需求，因人施教</span></p>
         </div>
         <ul class="part10-cates clearfix">
            <li class="part10-cate" v-for="item in part10Cates" :key="item.id" :class="{'no-ml':item.isFirst}">
              <p class="part10-p1">{{item.text1}}</p>
              <p class="part10-p2">{{item.text2}}</p>
            </li>
         </ul>

         <ul class="part10-items clearfix">
           <li class="part10-item" v-for="item in part10Items" :key="item.id" :class="{'no-ml':item.isFirst}">
             <p  class="part10-cell" v-for="childItem in item.data" :key="childItem.id" :class="{'active':childItem.isActive}">{{childItem.text}}</p>
           </li>
         </ul>





         <a href="javascript:;" class="part-btn part10-btn">选择适合自己的方案</a>
       </div>
    </div>
    <div class="part11">
      <div class="container">
            <p class="part6-title">国家教育部认可，学信网可查<br><span>登录教育考试学院学历查询系统”学信网”（http://www.chsi.com.cn/）终身可查</span></p>
            <div class="part11-divs clearfix">
            <div class="part11-div1">
              <p class="part11-p1">1. 所有学员成绩合格者可获取所报考院校专业对应的学历证书，该证书 属于国民教育系列学历证书，国家承认，社会认可。<br>2. 电子注册，唯一编码，学信网终身可查。<br>3.含金量高，待遇等同在校统招生，企事业单位认可度高，可申请优先 办理居住证。</p>
              <div class="part11-buts clearfix">
                <a href="javascript:;" class="part11-but part11-but1">大专学历证书咨询</a>
                <a href="javascript:;" class="part11-but part11-but2">大专学历证书咨询</a>
              </div>
            </div>
            <div class="part11-div3">
              <img src="../assets/images/zx7_03.png" alt="">
            </div>
            </div>
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
      part5Items:[
        {imgUrl:require('../assets/images/td1_03.jpg'),title:'职场竞争，不同学历薪资的差异'},
        {imgUrl:require('../assets/images/td2_03.jpg'),title:'学历是反映一个人学识水平的重要途径。'},
        {imgUrl:require('../assets/images/td3_03.jpg'),title:'随着学历的提高，基本年薪、奖金补贴。'},
        {imgUrl:require('../assets/images/td4_03.jpg'),title:'不同学历人群薪资水平。'}
      ],
      part6Items:[
        {
         isFirst:true,
         imgUrl:require('../assets/images/zx2_03.jpg'),
         title:'自学考试',
         text:'名校汇聚于此<br>学历含金量高<br>学习周期灵活<br>全程费用极低<br>快速考取文凭'
        },
        {
         isFirst:false,
         imgUrl:require('../assets/images/zx2_05.jpg'),
         title:'自学考试',
         text:'名校汇聚于此<br>学历含金量高<br>学习周期灵活<br>全程费用极低<br>快速考取文凭'
        },
        {
         isFirst:false,
         imgUrl:require('../assets/images/zx2_07.jpg'),
         title:'自学考试',
         text:'名校汇聚于此<br>学历含金量高<br>学习周期灵活<br>全程费用极低<br>快速考取文凭'
        },
        {
         isFirst:false,
         imgUrl:require('../assets/images/zx2_09.jpg'),
         title:'自学考试',
         text:'名校汇聚于此<br>学历含金量高<br>学习周期灵活<br>全程费用极低<br>快速考取文凭'
        },
      ],
      part7Items:[
        {
         isFirst:true,
         text1:'第一步',
         text2:'新康内部学籍注册'
        },
        {
         isFirst:false,
         text1:'第二步',
         text2:'新康内部学籍注册'
        },
        {
         isFirst:false,
         text1:'第三步',
         text2:'新康内部学籍注册'
        },
        {
         isFirst:false,
         text1:'第四步',
         text2:'新康内部学籍注册'
        },
        {
         isFirst:false,
         text1:'第五步',
         text2:'新康内部学籍注册'
        },
      ],
      part9Items:[
        {
         isFirst:true,
         cate:'管理类专业',
         majors:['物流管理','物流管理','物流管理','物流管理']
        },
        {
         isFirst:false,
         cate:'管理类专业',
         majors:['物流管理','物流管理','物流管理','物流管理']
        },
        {
         isFirst:false,
         cate:'管理类专业',
         majors:['物流管理','物流管理','物流管理','物流管理']
        },
        {
         isFirst:false,
         cate:'管理类专业',
         majors:['物流管理','物流管理','物流管理','物流管理']
        },
        {
         isFirst:false,
         cate:'管理类专业',
         majors:['物流管理','物流管理','物流管理','物流管理']
        },
        {
         isFirst:false,
         cate:'管理类专业',
         majors:['物流管理','物流管理','物流管理','物流管理']
        },
        {
         isFirst:false,
         cate:'管理类专业',
         majors:['物流管理','物流管理','物流管理','物流管理']
        }
      ],
      part10Cates:[
        {
         isFirst:true,
         text1:'无',
         text2:'无学历报名'
        },
        {
         isFirst:false,
         text1:'初',
         text2:'无学历报名'
        },
        {
         isFirst:false,
         text1:'高',
         text2:'无学历报名'
        },
        {
         isFirst:false,
         text1:'专',
         text2:'无学历报名'
        },
        {
         isFirst:false,
         text1:'二',
         text2:'无学历报名'
        }
      ],
      part10Items:[
       {
        data:[
          {text:'学习方式',isActive:true},
          {text:'自考学历',isActive:true},
          {text:'成人高考',isActive:true},
          {text:'网络教育',isActive:true},
          {text:'函授本科',isActive:true}
        ],
        isFirst:true
       },
       {
        data:[
          {text:'含金量',isActive:true},
          {text:'仅次于统招',isActive:false},
          {text:'仅次于自考和成考',isActive:false},
          {text:'仅次于自考和成考',isActive:false},
          {text:'含金量较低',isActive:false}
        ],
        isFirst:false
       },
       {
        data:[
          {text:'学习难度',isActive:true},
          {text:'仅次于统招',isActive:false},
          {text:'仅次于自考和成考',isActive:false},
          {text:'仅次于自考和成考',isActive:false},
          {text:'含金量较低',isActive:false}
        ],
        isFirst:false
       },
       {
        data:[
          {text:'报考条件',isActive:true},
          {text:'仅次于统招',isActive:false},
          {text:'仅次于自考和成考',isActive:false},
          {text:'仅次于自考和成考',isActive:false},
          {text:'含金量较低',isActive:false}
        ],
        isFirst:false
       },
       {
        data:[
          {text:'获证时间',isActive:true},
          {text:'仅次于统招',isActive:false},
          {text:'仅次于自考和成考',isActive:false},
          {text:'仅次于自考和成考',isActive:false},
          {text:'含金量较低',isActive:false}
        ],
        isFirst:false
       }
      ]
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
@import url('../assets/css/index.css');
</style>
