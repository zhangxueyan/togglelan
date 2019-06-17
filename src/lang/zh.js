// 注意：一定是 exports，不是 export，否则会报错，报错信息是下列的中的内容不是 string
module.exports = {
    message: {
        btnText1:'中文',
        btnText2:'英文',
    },
    navItems:[
       {title:"首页",isActive:false,isFirst:true,link:'home'},
       {title:"自学考试",isActive:false,
        subtitles:[
         {subtitle:'成人高考',isActive:false},
         {subtitle:'远程网教',isActive:false},
         {subtitle:'函授本科',isActive:false}
         ],
         isFirst:false,
         link:'selfexam'
       },
       {title:"学员心声",isActive:false,isFirst:false,link:'studentvoice'},
       {title:"公司新闻",isActive:false,isFirst:false,link:'companynews'},
       {title:"公司介绍",isActive:false,isFirst:false,link:'companyprofile'},
       {title:"联系我们",isActive:false,isFirst:false,link:'contactus'}
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

    part2Titl:'新康大数据',
    part2Items:[
        {
          imgUrl:require('../assets/images/home5_03.jpg'),
          text1:'12+',
          text2:'累计服务学员',
          isFirst:true
        },
        {
          imgUrl:require('../assets/images/home5_05.jpg'),
          text1:'80%',
          text2:'授课教师拥有硕士以上学历',
          isFirst:false
        },
        {
          imgUrl:require('../assets/images/home5_07.jpg'),
          text1:'200+',
          text2:'90%教师有超过3年教学经验',
          isFirst:false
        },
        {
          imgUrl:require('../assets/images/home5_12.jpg'),
          text1:'教研实力',
          text2:'上海总部教研研究院提供优质课程研发服务',
          isFirst:true
        },
        {
          imgUrl:require('../assets/images/home5_13.jpg'),
          text1:'200+',
          text2:'与全国200多所知名高校签署院校合作协议',
          isFirst:false
        },
        {
          imgUrl:require('../assets/images/home5_14.jpg'),
          text1:'技术服务平台',
          text2:'自主拥有5大技术平台为学员提供360度全方位服务',
          isFirst:false
        }
    ],

    part3Text1:"师资阵容",
    part3Text2:"你的人生导师",

    part3Text3:"① 打造高品质师资团队<br>② 更加靠谱<br>③ 更懂考点<br>④ 更懂沟通",

    part3Text4:"在新康教育，一定能找到适合你的导师",

    part4Titl:'热点新闻',

    part4Items:[
        {
          date:'13',
          month:'Apr',
          text1:'叶的事业-新康教育为何要对学生进行感恩教育',
          text2:'伟大的诗人泰戈尔有这样一段名言：“花的事业是甜蜜的，果的事业是珍贵的”。而我们新康做的是“叶”的事业，每位老师都象是一片绿叶，在学院领导的带领下进行着光合作用...',
          text3:'9,518',
          text4:'《阅读全文》',
          imgUrl:require('../assets/images/home7_03.jpg'),
          id:"0001"
        },
        {
          date:'20',
          month:'May',
          text1:'新康教育-就业指导课,专家来帮忙',
          text2:'8月1日 上午9点30分，由上海市职介所副所长带领的专家团队光临上海新康进修学院，并在我院展开“金色阳光就业指导讲座”讲座活动。',
          text3:'9,518',
          text4:'《阅读全文》',
          imgUrl:require('../assets/images/home7_06.jpg'),
          id:"0002"
        },
        {
          date:'27',
          month:'Aug',
          text1:'新康教育努力做好一件事，为社会培养有用人才',
          text2:'家长们！在社会竞争非常激烈的时代，没有丰富的科学文化知识是不行的。“知识就是力量”，知识对于现在社会的重要性不言而喻。现在摆在我们面前的是机遇与挑战并存，谁能在人生的第一次重要的抉择中胜出，谁就使未来的成功多一份保障。',
          text3:'9,518',
          text4:'《阅读全文》',
          imgUrl:require('../assets/images/home7_06.jpg'),
          id:"0003"
        },
    ],

    footText:'Copyright © 2014-2019 沪ICP备13039508号-1 上海新康进修学院 版权所有',
    
    // home page ending

    part5Items:[
        {imgUrl:require('../assets/images/td1_03.jpg'),title:'职场竞争，不同学历薪资的差异'},
        {imgUrl:require('../assets/images/td2_03.jpg'),title:'学历是反映一个人学识水平的重要途径。'},
        {imgUrl:require('../assets/images/td3_03.jpg'),title:'随着学历的提高，基本年薪、奖金补贴。'},
        {imgUrl:require('../assets/images/td4_03.jpg'),title:'不同学历人群薪资水平。'}
    ],

    part6Titl:'学历提升方式一览表',

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
         title:'成人高考',
         text:'考试零压力<br>可脱产学习<br>体验大学生活<br>文凭国家承认'
        },
        {
         isFirst:false,
         imgUrl:require('../assets/images/zx2_07.jpg'),
         title:'远程/函授/电大',
         text:'时间地域无限制<br>学习足不出户<br>优质教学资源<br>网课实时更新'
        },
        {
         isFirst:false,
         imgUrl:require('../assets/images/zx2_09.jpg'),
         title:'2019年报考指导书',
         text:'新康2019版<br>《成人学历报考指导书》<br>免费发放，提醒考生切勿错过报考'
        },
    ],

    part7Titl:'2019年上海市成人学历初审时间即将截止',
    part7Subt:'自考本科一年报名时间只有两次，每年3月和9月，错过至少会耽误1年时间毕业',
    part7Month:'月',
    part7Date:'日',
    part7Note:'报考提醒：正式报名时间很短，官网会出现堵塞，建议考生提早报考，否则可能出现:① 考场名额限额，考场被安排在偏远区域；② 专业院校名额有限，选不上想报的专业。',
    part7Items:[
        {
         isFirst:true,
         text1:'第一步',
         text2:'新康内部学籍注册'
        },
        {
         isFirst:false,
         text1:'第二步',
         text2:'选考院校专业科目'
        },
        {
         isFirst:false,
         text1:'第三步',
         text2:'现场确认 录指纹、摄像、缴费'
        },
        {
         isFirst:false,
         text1:'第四步',
         text2:'领取准考证 查询考场、考试科目'
        },
        {
         isFirst:false,
         text1:'第五步',
         text2:'参加考试 2019年考试大纲 成绩查询、申请毕业'
        },
    ],
    part7Btn:'2019年报考咨询入口',

    part8Titl:'名校学历才真正有含金量',
    part8Subt:'成人考学历，当然只考高含金量的本科',

    part9Items:[
        {
         isFirst:true,
         cate:'管理类专业',
         majors:['物流管理','项目管理','人力资源','工商管理']
        },
        {
         isFirst:false,
         cate:'经济类专业',
         majors:['会计专业','金融专业','电子商务','市场营销']
        },
        {
         isFirst:false,
         cate:'工程类专业',
         majors:['工程与造价管理','土木工程','机械自动化','建筑工程']
        },
        {
         isFirst:false,
         cate:'计算机专业',
         majors:['计算机科学','通讯工程','网页设计','通讯管理']
        },
        {
         isFirst:false,
         cate:'教育类专业',
         majors:['学前教育','教育科学','教育管理','心理学']
        },
        {
         isFirst:false,
         cate:'医学类专业',
         majors:['医院综合','护理学','中医药学','临床医学']
        },
        {
         isFirst:false,
         cate:'语言法律类专业',
         majors:['英语专业','法律专业','汉语言文学','小语种专业']
        }
    ],

    part9Btn:'了解各学校报名详细信息',

    part10Titl:'名师授课，帮你规划适合的提升路径',
    part10Subt:'覆盖各学历层次需求，因人施教',
    part10Cates:[
        {
         isFirst:true,
         text1:'无',
         text2:'无学历报名'
        },
        {
         isFirst:false,
         text1:'初',
         text2:'初中升学历报名'
        },
        {
         isFirst:false,
         text1:'高',
         text2:'高中升学历报名'
        },
        {
         isFirst:false,
         text1:'专',
         text2:'专科升学历报名'
        },
        {
         isFirst:false,
         text1:'二',
         text2:'第二学历报名'
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
          {text:'★★★★',isActive:false},
          {text:'★★★',isActive:false},
          {text:'★★',isActive:false},
          {text:'★',isActive:false}
        ],
        isFirst:false
       },
       {
        data:[
          {text:'报考条件',isActive:true},
          {text:'年满18周岁',isActive:false},
          {text:'年满18周岁',isActive:false},
          {text:'年满18周岁',isActive:false},
          {text:'年满18周岁',isActive:false}
        ],
        isFirst:false
       },
       {
        data:[
          {text:'获证时间',isActive:true},
          {text:'1.5年左右',isActive:false},
          {text:'2.5 - 3年左右',isActive:false},
          {text:'2.5 - 3年左右',isActive:false},
          {text:'2.5 - 3年左右',isActive:false}
        ],
        isFirst:false
       }
    ],
    part10Btn:'选择适合自己的方案',

    part11Titl:'国家教育部认可，学信网可查',
    part11Subt:'登录教育考试学院学历查询系统”学信网”（http://www.chsi.com.cn/）终身可查',

    part11Text1:'1. 所有学员成绩合格者可获取所报考院校专业对应的学历证书，该证书 属于国民教育系列学历证书，国家承认，社会认可。',
    part11Text2:'2. 电子注册，唯一编码，学信网终身可查。',
    part11Text3:'3.含金量高，待遇等同在校统招生，企事业单位认可度高，可申请优先 办理居住证。',

    part11Btn1:'大专学历证书咨询',
    part11Btn2:'本科学历证书咨询',


    part12Titl:'我们的保障',
    part12Subt:'13年的品质保证我们一直努力前行',
    part12Items:[
        {
          type:0,
          title:'PICC 承保，考试不过保险理赔',
          text1:'自考机构，鱼龙混杂，空口承诺，谁都会说',
          text2:'但真的能做到吗？',
          text3:'PICC第三方承保协议有保障，新康教育联合PICC',
          text4:'中国人保财险，为您的考试做担保！'
        },
        {
          type:1,
          title:'助学分期， 0利息 0手续费',
          text1:'别让价格阻碍你的梦想',
          text2:'现在报名，可以申请分期还款',
          text3:'每个月只需花几百块钱，就可以拿 到本科学历'
        }
    ],

    // selfexam page ending
    part15SideBtn1:'学员心声',
    part15SideBtn2:'公司新闻',
    part15Items:[
        {
          imgUrl:require('../assets/images/1.png'),
          text1:'给他一次重新选择的机会',
          text2:'刘* 【工程管理】',
          text3:'因为我弟弟成绩不好，大学读了一个普通的专科学校（医学专业）， 现在的医院工作本科和本科以上文凭，专科毕业后很难进入医院工作。 一次偶然的机会，我看到了上海新康教育教育机构，然后让弟弟去上了两周免费试课 。因为弟弟现在一家医院实习比较忙， 报名以后没有多少时间去课堂学习课程。 老师推荐了直播课程（线上学习+面授答疑）。现在弟弟已经拿到本科毕业学历了， 也已经在医院里面转正了， 真心感谢新康教育机构，如果没有新康教育，真的不知道弟弟以后该怎么找工作。',
          isFirst:true
        },
        {
          imgUrl:require('../assets/images/2.png'),
          text1:'给他一次重新选择的机会',
          text2:'刘* 【工程管理】',
          text3:'因为我弟弟成绩不好，大学读了一个普通的专科学校（医学专业）， 现在的医院工作本科和本科以上文凭，专科毕业后很难进入医院工作。 一次偶然的机会，我看到了上海新康教育教育机构，然后让弟弟去上了两周免费试课 。因为弟弟现在一家医院实习比较忙， 报名以后没有多少时间去课堂学习课程。 老师推荐了直播课程（线上学习+面授答疑）。现在弟弟已经拿到本科毕业学历了， 也已经在医院里面转正了， 真心感谢新康教育机构，如果没有新康教育，真的不知道弟弟以后该怎么找工作。',
          isFirst:false
        },
        {
          imgUrl:require('../assets/images/3.png'),
          text1:'给他一次重新选择的机会',
          text2:'刘* 【工程管理】',
          text3:'因为我弟弟成绩不好，大学读了一个普通的专科学校（医学专业）， 现在的医院工作本科和本科以上文凭，专科毕业后很难进入医院工作。 一次偶然的机会，我看到了上海新康教育教育机构，然后让弟弟去上了两周免费试课 。因为弟弟现在一家医院实习比较忙， 报名以后没有多少时间去课堂学习课程。 老师推荐了直播课程（线上学习+面授答疑）。现在弟弟已经拿到本科毕业学历了， 也已经在医院里面转正了， 真心感谢新康教育机构，如果没有新康教育，真的不知道弟弟以后该怎么找工作。',
          isFirst:false
        },
    ],
    part15Items2:[
        {
          imgUrl:require('../assets/images/xwxw.png'),
          title:'叶的事业-新康教育为何要对学生进行感恩教育',
          text:'伟大的诗人泰戈尔有这样一段名言：“花的事业是甜蜜的，果的事业是珍贵的”。 而我们新康做的是“叶”的事业，每位老师都象是一片绿叶，在学院领导的带领下进行着光合作用',
          date:'2018-12-21',
          id:'0001'
        },
        {
          imgUrl:require('../assets/images/xwxw2.png'),
          title:'新康教育-就业指导课专家来帮忙',
          text:'8月1日 上午9点30分，由上海市职介所副所长带领的专家团队光临上海新康进修学院，并在我院展开“金色阳光就业指导讲座”讲座活动。',
          date:'2018-02-20',
          id:'0002'
        },
        {
          imgUrl:require('../assets/images/xwxw3.jpg'),
          title:'新康教育努力做好一件事,为社会培养有用人才',
          text:'家长们！在社会竞争非常激烈的时代，没有丰富的科学文化知识是不行的。“知识就是力量”，知识对于现在社会的重要性不言而喻。现在摆在我们面前的是机遇与挑战并存，谁能在人生的第一次重要的抉择中胜出，谁就使未来的成功多一份保障。',
          date:'2018-10-21',
          id:'0003'
        },
    ],
    part15SideBtn3:'点击查看详情',

    part15SideBtn4:'公司介绍',
    part15SideBtn5:'联系我们',




   
    // newsdetails
    newsCt:{
        '0001':{
          title:'叶的事业--新康教育为何要对学生<br>进行感恩教育',
          date:'2018-12-21',
          visits:'2028',
          text:'伟大的诗人泰戈尔有这样一段名言：“花的事业是甜蜜的，果的事业是珍贵的”。而我们新康做的是“叶”的事业，每位老师都象是一片绿叶，在学院领导的带领下进行着光合作用，孕育着花，孕育着果，孕育着芬芳桃李。作为一所全日制高等助学院校，我们不仅要致力于学生的知识提高，更强调学生个人素质、品格的提高。让我们怀揣着一颗感恩的心，感谢家长放心地把孩子交给我们！我们要把我们的爱，我们的智慧，我们的感恩之心传递给我们的每位学子.感恩是一种生活态度，是一种美德，是一片片肺腑之言。<br>现代的孩子都是家庭的中心，他们心中只知爱自己，不知道关爱别人。不少学生不但不体谅父母的辛劳，反而无休止索取，买吃的，买穿的，进网吧……在他们眼中，向父母要钱天经地义。大学生中，许多学生从父母那里要钱，但给家里写信问候的学生不到十分之一。我们不应该这样做，应该时时刻刻为别人着想，父母给你东西时应该说声“谢谢”，应该为父母做一些家务，更应该好好学习，以报答老师和学校。<br>美国的民歌《老黑奴》，那种对世界乐观的态度，对人生的豁达，由此联想到了西方文化的感恩节，想到了我们从古以来，历史文化长河中永不消失的感情——感恩。“知恩不报非君子”。我们要怀着一颗感恩的心，应该时时、天天、年年直至永远；让感恩应该作为一种习惯，一种美德，在我们心中深深扎根。<br>“叶”的事业，感谢有您的信任和支持！'

        },
        '0002':{
          title:'新康教育-就业指导课<br>专家来帮忙',
          date:'2018-12-21',
          visits:'2028',
          text:'8月1日 上午9点30分，由上海市职介所副所长带领的专家团队光临上海新康进修学院，并在我院展开“金色阳光就业指导讲座”讲座活动。<br>为了帮助大四毕业生准确有效地确定就业方向，提前做好就业准备，培训就业中心和上海市职业指导专家携手就当前就业形式、就业方向及定位做了详细的指导，参与此次讲座的13级的学子们从中获得了不少宝贵的经验。<br>专家用生动的语言、鲜明的事例，围绕在校大学生如何看待当今的就业形势、学会正确分析自己的优势与不足，如何转变就业观念等多个方面的问题，为同学们做了详细的解析。<br>通过这次精彩的讲座使同学们认识到了职业生涯规划的重要性，帮助学生认清就业形势，为自己制定一个更加合理的职业定位，调整好自己的心态，为即将面临的就业问题奠定了良好的基础。<br>培训就业中心会以务实的态度，积极努力的为学生的就业服务，积极响应“一切为学生，为了一切学生，为了学生一切”的办学理念。'

        },
        '0003':{
          title:'新康教育努力做好一件事,为社会<br>培养有用人才',
          date:'2018-12-21',
          visits:'2028',
          text:'家长们！在社会竞争非常激烈的时代，没有丰富的科学文化知识是不行的。“知识就是力量”，知识对于现在社会的重要性不言而喻。现在摆在我们面前的是机遇与挑战并存，谁能在人生的第一次重要的抉择中胜出，谁就使未来的成功多一份保障。<br>孩子是每个家庭最大的希望，新康教育作为一所承载着众多家庭希望的民办院校，有责任也有义务将您的孩子培养成为社会有用人才。<br>学院为学生创造了利于学习的环境、氛围和条件，从学习方法、学习态度、学习习惯等方面给以正面的教育和引导。同时，学院及时疏导、纠正孩子成长过程中遇到的思想困惑、情感波动和行为偏差。学院着重培养孩子良好的品行习惯，对孩子的道德品行、良好习惯的养成从开始抓起，从小事抓起，对不良行为要及时地预防和矫治。<br>学院自建校以来即实行“半封闭式管理”班主任老师全天候24小时对学生进行跟踪管理，从学生一入学即建立成长记录，确保学生的健康成长，同时实行的宿舍走访制度、定期与家长联系制度、定期班会制度贯穿于整个管理过程。'
        }
    },
    part16Time:'发布时间',
    part16Visits:'访问量',

    part17Addr:'地址：上海普陀区中山北路3553号伸大厦22楼',
    part17Tel:'电话：400-060-6080',


    part17Titl:'关于新康',
    part17Items:[
      {text1:'13年',text2:'教育培训经验',isFirst:true},
      {text1:'1600位',text2:'专业服务团队',isFirst:false},
      {text1:'3400+',text2:'专职师资+研发人员',isFirst:false},
      {text1:'12万',text2:'毕业学员',isFirst:false},
      {text1:'800+',text2:'合作企业',isFirst:false},
      {text1:'200+',text2:'院校合作',isFirst:false}
    ],
    part17Text:'上海新康进修学院成立于 2007 年，是一所经区教育局审批设立，于2011年7月经上海市教育委员会、高等教育自学考试委员会、区教育局审批， 获得高等教育自学考试助学单位资质，从事高等及高等以下非学历业余、全日制教育的民办院校。专注于业余制专科、本科学历考试辅导，课程涵盖自学考试、 成人高考、网络教育、国家开放大学四种成人学历考试辅导课程、专本科所开设专业达到20多个类别，是沪上优质社会助学单位；多年来已经先后培育学员近 3 万人。',
    

    part17Titl2:'企业文化',

    part17Subt1:'我们的使命',
    part17Text1:'让学习成就更美好的未来',
    part17Subt2:'我们的愿景',
    part17Text2:'成为最受尊敬的有文化价值的教育机构。做教育事业，唯有做到对学员负责、对社会负责、才能有立足之地，才能获得真正的尊重。',
    part17Subt3:'核心价值观',
    part17Text3:'1.) 学员第一，成就学员，是我们存在的唯一理由。<br>2.) 团队合作，共享共担，平凡人一起成就不平凡事。<br>3.) 诚信敬业，诚实守信，专业执着。<br>4.) 执行力，结果导向，马上行动。<br>5.) 创新，拥抱变化，勇于创新。<br>6.) 激情，永不放弃，乐观向上。',
}