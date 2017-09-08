
   var wxData = {
        "imgUrl" : "images/bj.png",
        "link" : "",
        "desc" : "9月12-22日，答题即可获得华夏回报收益翻5倍的机会，奖励上限为50元！",
        "title" : "答题赢5倍收益，华夏财富推出华夏回报专享活动"
    };

//加载配置文件
var configUrl = "https://m.chinaamc.com/mphone/mp/wxshare/getWXShareConfigInfo/wgw?shareURL=" 
                + encodeURIComponent(window.location.href.split('#')[0]);
var data = $.ajax({url : configUrl,async : false}).responseText;
var configJson;
if (typeof(data) == "string") {
    configJson = JSON.parse(data);
} else {
    configJson = data;
}

wxData.link = configJson.shareURL;

wx.config({
    debug : false,
    appId : configJson.appId,
    timestamp : configJson.timestamp,
    nonceStr : configJson.nonceStr,
    signature : configJson.signature,
    jsApiList : [
        'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo'
    ]
});

wx.ready(function () {
    setMenuShare();
});

function setMenuShare() {

    wx.onMenuShareTimeline({
        title : wxData.title,
        link : wxData.link,
	    desc : wxData.desc,
        imgUrl : wxData.imgUrl,
        success : function () {},
        cancel : function () {}
    });

    wx.onMenuShareAppMessage({
        title : wxData.title,
        desc : wxData.desc,
        link : wxData.link,
        imgUrl : wxData.imgUrl,
        type : '',
        dataUrl : '',
        success : function () {},
        cancel : function () {}
    });

    wx.onMenuShareQQ({
        title : wxData.title,
        desc : wxData.desc,
        link : wxData.link,
        imgUrl : wxData.imgUrl,
        success : function () {},
        cancel : function () {}
    });

    wx.onMenuShareWeibo({
        title : wxData.title,
        desc : wxData.desc,
        link : wxData.link,
        imgUrl : wxData.imgUrl,
        success : function () {},
        cancel : function () {}
    });
}
