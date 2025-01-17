var VersionInfo = {
  version: '1.1.0',
  androidUrl: 'http://market.hqsc.net/file/statics/2023/05/03/fb9007d8-9be7-4d9c-9c01-33d96de2f2bb.apk',
  releaseTime: 1682993410000,
}

var app = new Vue({
  el: '#app',
  data: {
    version: VersionInfo.version,
    androidUrl: VersionInfo.androidUrl,
    releaseTime: VersionInfo.releaseTime,
    client: judgeClient(),
  },
  computed: {
    timeAge() {
      return timeago(this.releaseTime)
    }
  },
  beforeCreate () {
    document.title = "环球商家通V" + VersionInfo.version + "下载-环球水产"
  }
})

/*判断客户端*/
function judgeClient() {
  let client = '';
  if (/MicroMessenger/i.test(navigator.userAgent)) { 
    client = 'WX';
  } else if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  //判断iPhone|iPad|iPod|iOS
    client = 'iOS';
  } else if (/(Android)/i.test(navigator.userAgent)) {  //判断Android
    client = 'Android';
  } else {
    client = 'PC';
  }

  return client;
}

/**
 * 多久前
 */
function timeago(dateTimeStamp){   //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
    var minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();   //获取当前时间毫秒
    console.log(now)
    var diffValue = now - dateTimeStamp;//时间差

    if(diffValue < 0){
        return;
    }
    var minC = diffValue/minute;  //计算时间差的分，时，天，周，月
    var hourC = diffValue/hour;
    var dayC = diffValue/day;
    var weekC = diffValue/week;
    var monthC = diffValue/month;
    if(monthC >= 1 && monthC <= 3){
        result = " " + parseInt(monthC) + "月前"
    }else if(weekC >= 1 && weekC <= 3){
        result = " " + parseInt(weekC) + "周前"
    }else if(dayC >= 1 && dayC <= 6){
        result = " " + parseInt(dayC) + "天前"
    }else if(hourC >= 1 && hourC <= 23){
        result = " " + parseInt(hourC) + "小时前"
    }else if(minC >= 1 && minC <= 59){
        result =" " + parseInt(minC) + "分钟前"
    }else if(diffValue >= 0 && diffValue <= minute){
        result = "刚刚"
    }else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
        var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
        var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
        var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
        result = Nyear + "-" + Nmonth + "-" + Ndate
    }
    return result;
}
