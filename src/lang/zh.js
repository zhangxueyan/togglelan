// 注意：一定是 exports，不是 export，否则会报错，报错信息是下列的中的内容不是 string
module.exports = {
    message: {
        btnText1:'中文',
        btnText2:'英文',
        title: '运动品牌'
    },
    placeholder: {
        enter: '请输入您喜欢的品牌'
    },
    brands: {
        nike: '耐克',
        adi: '阿迪达斯',
        nb: '新百伦',
        ln: '李宁'
    },
    navItems:[
       {title:"首页",isActive:true,isFirst:true},
       {title:"自学考试",isActive:false,
        subtitles:[
         {subtitle:'自学考试1',isActive:false},
         {subtitle:'自学考试1',isActive:false},
         {subtitle:'自学考试1',isActive:false}
         ],
         isFirst:false
       },
       {title:"学员心声",isActive:false,isFirst:false},
       {title:"公司介绍",isActive:false,isFirst:false},
       {title:"公司新闻",isActive:false,isFirst:false},
       {title:"联系我们",isActive:false,isFirst:false},
       {title:"投诉中心",isActive:false,isFirst:false}
    ],
    part1Titl:'新康教育 量身定制学历提升方案',
    part1Subt:'名校名师汇聚/学历含金量高/文凭国家承认/时间地域无限制',
    part1Items:[
        {
          imgUrl:require('../assets/images/home1_03.jpg'),
          text1:'无学历升专本',
          text2:'名校名师汇聚<br>含金量高',
          first:true
        },
        {
          imgUrl:require('../assets/images/home1_03.jpg'),
          text1:'无学历升专本',
          text2:'名校名师汇聚<br>含金量高',
          first:false
        },
        {
          imgUrl:require('../assets/images/home1_03.jpg'),
          text1:'无学历升专本',
          text2:'名校名师汇聚<br>含金量高',
          first:false
        },
        {
          imgUrl:require('../assets/images/home1_03.jpg'),
          text1:'无学历升专本',
          text2:'名校名师汇聚<br>含金量高',
          first:false
        },
        {
          imgUrl:require('../assets/images/home1_03.jpg'),
          text1:'无学历升专本',
          text2:'名校名师汇聚<br>含金量高',
          first:false
        },
        {
          imgUrl:require('../assets/images/home1_03.jpg'),
          text1:'无学历升专本',
          text2:'名校名师汇聚<br>含金量高',
          first:false
        },
    ],
}