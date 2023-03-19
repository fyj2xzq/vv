muban.首图.二级.title = '.text-fff&&Text;.myui-player__data p&&Text';
muban.首图.二级.img = '.lazyload&&data-original';
muban.首图.二级.desc = '.myui-player__data p&&Text;;;.text-collapse p:eq(1)&&Text;.text-collapse p:eq(0)&&Text';
muban.首图.二级.content = '.data&&Text';
var rule={
    title:'fositv',
    模板:'首图',
    host:'https://fositv.com',
    // url:'/fyclass-fypage.html',
    // url:'/vod_________________________show/fyfilter.html',
    url:'/vod______________________________show/fyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by}}------fypage---{{fl.year}}',
    filter:{
        "1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作","v":"101"},{"n":"喜剧","v":"102"},{"n":"爱情","v":"103"},{"n":"科幻","v":"104"},{"n":"剧情","v":"105"},{"n":"悬疑","v":"106"},{"n":"惊悚","v":"107"},{"n":"恐怖","v":"108"},{"n":"犯罪","v":"109"},{"n":"谍战","v":"110"},{"n":"冒险","v":"111"},{"n":"奇幻","v":"112"},{"n":"灾难","v":"113"},{"n":"战争","v":"114"},{"n":"动画","v":"115"},{"n":"歌舞","v":"116"},{"n":"历史","v":"117"},{"n":"传记","v":"118"},{"n":"纪录","v":"119"},{"n":"其他","v":"120"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"武侠","v":"201"},{"n":"喜剧","v":"202"},{"n":"爱情","v":"203"},{"n":"剧情","v":"204"},{"n":"青春","v":"205"},{"n":"悬疑","v":"206"},{"n":"科幻","v":"207"},{"n":"军事","v":"208"},{"n":"警匪","v":"209"},{"n":"谍战","v":"210"},{"n":"奇幻","v":"211"},{"n":"偶像","v":"212"},{"n":"年代","v":"213"},{"n":"乡村","v":"214"},{"n":"都市","v":"215"},{"n":"家庭","v":"216"},{"n":"古装","v":"217"},{"n":"历史","v":"218"},{"n":"神话","v":"219"},{"n":"其他","v":"220"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "3":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"3"},{"n":"脱口秀","v":"301"},{"n":"真人秀","v":"302"},{"n":"搞笑","v":"303"},{"n":"访谈","v":"304"},{"n":"生活","v":"305"},{"n":"晚会","v":"306"},{"n":"美食","v":"307"},{"n":"游戏","v":"308"},{"n":"亲子","v":"309"},{"n":"旅游","v":"310"},{"n":"文化","v":"311"},{"n":"体育","v":"312"},{"n":"时尚","v":"313"},{"n":"纪实","v":"314"},{"n":"益智","v":"315"},{"n":"演艺","v":"316"},{"n":"歌舞","v":"317"},{"n":"音乐","v":"318"},{"n":"播报","v":"319"},{"n":"其他","v":"320"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "4":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"4"},{"n":"热血","v":"401"},{"n":"格斗","v":"402"},{"n":"恋爱","v":"403"},{"n":"美少女","v":"404"},{"n":"校园","v":"405"},{"n":"搞笑","v":"406"},{"n":"LOLI","v":"407"},{"n":"神魔","v":"408"},{"n":"机战","v":"409"},{"n":"科幻","v":"410"},{"n":"真人","v":"411"},{"n":"青春","v":"412"},{"n":"魔法","v":"413"},{"n":"神话","v":"414"},{"n":"冒险","v":"415"},{"n":"运动","v":"416"},{"n":"竞技","v":"417"},{"n":"童话","v":"418"},{"n":"亲子","v":"419"},{"n":"教育","v":"420"},{"n":"励志","v":"421"},{"n":"剧情","v":"422"},{"n":"社会","v":"423"},{"n":"历史","v":"424"},{"n":"战争","v":"425"},{"n":"其他","v":"426"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}],
        "5":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"5"},{"n":"人物","v":"501"},{"n":"军事","v":"502"},{"n":"历史","v":"503"},{"n":"自然","v":"504"},{"n":"探险","v":"505"},{"n":"科技","v":"506"},{"n":"文化","v":"507"},{"n":"刑侦","v":"508"},{"n":"社会","v":"509"},{"n":"旅游","v":"510"},{"n":"其他","v":"511"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"中国大陆"},{"n":"中国香港","v":"中国香港"},{"n":"中国台湾","v":"中国台湾"},{"n":"美国","v":"美国"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}]}]
    },
    filter_def:{
        1:{cateId:'1'},
        2:{cateId:'2'},
        3:{cateId:'3'},
        4:{cateId:'4'},
        5:{cateId:'5'}
    },
    // searchUrl:'/vod_________________________search/**----------fypage---.html',
    searchUrl:'/vod______________________________search/**----------fypage---.html',
    headers: {
        'User-Agent': 'PC_UA',
    },
    // class_parse:'.myui-header__menu li.hidden-sm:gt(0):lt(6);a&&Text;a&&href;com/(.*?).html',
    class_parse: '.myui-header__menu li.hidden-sm:gt(0):lt(6);a&&Text;a&&href;.*/(.*?).html',
    lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){let url2='https://play.xmaomi.top/?url='+url+'&tm='+html.tm+'&key='+html.key+'&next='+html.url_next+'&title='+html.vod_data.vod_name;/cache/.test(url)?input={jx:0,url:url2,parse:1,header:JSON.stringify({'user-agent':'Mozilla/5.0'})}:input=url}else{input}",
    推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    一级: '.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    搜索:'#searchList li;a&&title;.lazyload&&data-original;.text-right&&Text;a&&href',
}