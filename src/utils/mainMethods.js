// 检测类型以及表单验证
/*
项目共用方法, 将方法抛出
*/
export const checkType = {
  isString: function (o) { //是否字符串
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
  },

  isNumber: function (o) { //是否数字
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
  },

  isBoolean: function (o) { //是否boolean
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
  },

  isFunction: function (o) { //是否函数
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
  },

  isNull: function (o) { //是否为null
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
  },

  isUndefined: function (o) { //是否undefined
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
  },

  isObj: function (o) { //是否对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
  },

  isArray: function (o) { //是否数组
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
  },

  isDate: function (o) { //是否时间
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
  },

  isRegExp: function (o) { //是否正则
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
  },

  isError: function (o) { //是否错误对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
  },

  isSymbol: function (o) { //是否Symbol函数
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
  },

  isPromise: function (o) { //是否Promise对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
  },

  isSet: function (o) { //是否Set对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
  },

  isFalse: function (o) {
    if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true
    return false
  },

  isTrue: function (o) {
    return !this.isFalse(o)
  },

  isIos: function (o) {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
      // return "Android";
      return false
    } else if (u.indexOf('iPhone') > -1) { //苹果手机
      // return "iPhone";
      return true
    } else if (u.indexOf('iPad') > -1) { //iPad
      // return "iPad";
      return false
    } else if (u.indexOf('Windows Phone') > -1) { //winphone手机
      // return "Windows Phone";
      return false
    } else {
      return false
    }
  },

  isPC: function (o) { //是否为PC端
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  },

  browserType: function (o) {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

    if (isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      if (fIEVersion == 7) return "IE7"
      else if (fIEVersion == 8) return "IE8";
      else if (fIEVersion == 9) return "IE9";
      else if (fIEVersion == 10) return "IE10";
      else return "IE7以下" //IE版本过低
    }
    if (isIE11) return 'IE11';
    if (isEdge) return "Edge";
    if (isFF) return "FF";
    if (isOpera) return "Opera";
    if (isSafari) return "Safari";
    if (isChrome) return "Chrome";
  },

  checkStr: function (str, type) {
    switch (type) {
      case 'phone': //手机号码
        return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
      case 'tel': //座机
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      case 'card': //身份证
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
      case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        return /^[a-zA-Z]\w{5,17}$/.test(str)
      case 'postal': //邮政编码
        return /[1-9]\d{5}(?!\d)/.test(str);
      case 'QQ': //QQ号
        return /^[1-9][0-9]{4,9}$/.test(str);
      case 'email': //邮箱
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      case 'money': //金额(小数点2位)
        return /^\d*(?:\.\d{0,2})?$/.test(str);
      case 'URL': //网址
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
      case 'IP': //IP
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
      case 'date': //日期时间
        return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      case 'number': //数字
        return /^[0-9]$/.test(str);
      case 'english': //英文
        return /^[a-zA-Z]+$/.test(str);
      case 'chinese': //中文
        return /^[\u4E00-\u9FA5]+$/.test(str);
      case 'lower': //小写
        return /^[a-z]+$/.test(str);
      case 'upper': //大写
        return /^[A-Z]+$/.test(str);
      case 'HTML': //HTML标记
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
      default:
        return true;
    }
  },

  // 检测密码强度

  checkPwd: function (str) {
    var Lv = 0;
    if (str.length < 6) {
      return Lv
    }
    if (/[0-9]/.test(str)) {
      Lv++
    }
    if (/[a-z]/.test(str)) {
      Lv++
    }
    if (/[A-Z]/.test(str)) {
      Lv++
    }
    if (/[\.|-|_]/.test(str)) {
      Lv++
    }
    return Lv;
  }
}
export const numOperation = {
  /*随机数范围*/
  random: function (min, max) {
    if (arguments.length === 2) {
      return Math.floor(min + Math.random() * ((max + 1) - min))
    } else {
      return null;
    }

  },
  /*将阿拉伯数字翻译成中文的大写数字*/
  numberToChinese: function (num) {
    var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
    var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
    var a = ("" + num).replace(/(^0*)/g, "").split("."),
      k = 0,
      re = "";
    for (var i = a[0].length - 1; i >= 0; i--) {
      switch (k) {
        case 0:
          re = BB[7] + re;
          break;
        case 4:
          if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
            .test(a[0]))
            re = BB[4] + re;
          break;
        case 8:
          re = BB[5] + re;
          BB[7] = BB[5];
          k = 0;
          break;
      }
      if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
        re = AA[0] + re;
      if (a[0].charAt(i) != 0)
        re = AA[a[0].charAt(i)] + BB[k % 4] + re;
      k++;
    }

    if (a.length > 1) // 加上小数部分(如果有小数部分)
    {
      re += BB[6];
      for (var i = 0; i < a[1].length; i++)
        re += AA[a[1].charAt(i)];
    }
    if (re == '一十')
      re = "十";
    if (re.match(/^一/) && re.length == 3)
      re = re.replace("一", "");
    return re;
  },
  /*将数字转换为大写金额*/
  changeToChinese: function (Num) {
    //判断如果传递进来的不是字符的话转换为字符
    if (typeof Num == "number") {
      Num = new String(Num);
    };
    Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
    Num = Num.replace(/ /g, "") //替换tomoney()中的空格
    Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
    if (isNaN(Num)) { //验证输入的字符是否为数字
      //alert("请检查小写金额是否正确");
      return "";
    };
    //字符处理完毕后开始转换，采用前后两部分分别转换
    var part = String(Num).split(".");
    var newchar = "";
    //小数点前进行转化
    for (var i = part[0].length - 1; i >= 0; i--) {
      if (part[0].length > 10) {
        return "";
        //若数量超过拾亿单位，提示
      }
      var tmpnewchar = ""
      var perchar = part[0].charAt(i);
      switch (perchar) {
        case "0":
          tmpnewchar = "零" + tmpnewchar;
          break;
        case "1":
          tmpnewchar = "壹" + tmpnewchar;
          break;
        case "2":
          tmpnewchar = "贰" + tmpnewchar;
          break;
        case "3":
          tmpnewchar = "叁" + tmpnewchar;
          break;
        case "4":
          tmpnewchar = "肆" + tmpnewchar;
          break;
        case "5":
          tmpnewchar = "伍" + tmpnewchar;
          break;
        case "6":
          tmpnewchar = "陆" + tmpnewchar;
          break;
        case "7":
          tmpnewchar = "柒" + tmpnewchar;
          break;
        case "8":
          tmpnewchar = "捌" + tmpnewchar;
          break;
        case "9":
          tmpnewchar = "玖" + tmpnewchar;
          break;
      }
      switch (part[0].length - i - 1) {
        case 0:
          tmpnewchar = tmpnewchar + "元";
          break;
        case 1:
          if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
          break;
        case 2:
          if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
          break;
        case 3:
          if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
          break;
        case 4:
          tmpnewchar = tmpnewchar + "万";
          break;
        case 5:
          if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
          break;
        case 6:
          if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
          break;
        case 7:
          if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
          break;
        case 8:
          tmpnewchar = tmpnewchar + "亿";
          break;
        case 9:
          tmpnewchar = tmpnewchar + "拾";
          break;
      }
      var newchar = tmpnewchar + newchar;
    }
    //小数点之后进行转化
    if (Num.indexOf(".") != -1) {
      if (part[1].length > 2) {
        // alert("小数点之后只能保留两位,系统将自动截断");
        part[1] = part[1].substr(0, 2)
      }
      for (i = 0; i < part[1].length; i++) {
        tmpnewchar = ""
        perchar = part[1].charAt(i)
        switch (perchar) {
          case "0":
            tmpnewchar = "零" + tmpnewchar;
            break;
          case "1":
            tmpnewchar = "壹" + tmpnewchar;
            break;
          case "2":
            tmpnewchar = "贰" + tmpnewchar;
            break;
          case "3":
            tmpnewchar = "叁" + tmpnewchar;
            break;
          case "4":
            tmpnewchar = "肆" + tmpnewchar;
            break;
          case "5":
            tmpnewchar = "伍" + tmpnewchar;
            break;
          case "6":
            tmpnewchar = "陆" + tmpnewchar;
            break;
          case "7":
            tmpnewchar = "柒" + tmpnewchar;
            break;
          case "8":
            tmpnewchar = "捌" + tmpnewchar;
            break;
          case "9":
            tmpnewchar = "玖" + tmpnewchar;
            break;
        }
        if (i == 0) tmpnewchar = tmpnewchar + "角";
        if (i == 1) tmpnewchar = tmpnewchar + "分";
        newchar = newchar + tmpnewchar;
      }
    }
    //替换所有无用汉字
    while (newchar.search("零零") != -1)
      newchar = newchar.replace("零零", "零");
    newchar = newchar.replace("零亿", "亿");
    newchar = newchar.replace("亿万", "亿");
    newchar = newchar.replace("零万", "万");
    newchar = newchar.replace("零元", "元");
    newchar = newchar.replace("零角", "");
    newchar = newchar.replace("零分", "");
    if (newchar.charAt(newchar.length - 1) == "元") {
      newchar = newchar + "整"
    }
    return newchar;
  }
}
