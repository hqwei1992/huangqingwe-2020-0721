import Vue from 'vue';
let _baseURL = 'http://localhost:8080/';
const ajax=function (opt) {
  opt = opt || {};
  opt.method = opt.method || 'post';
  opt.url = _baseURL + (opt.url || '');
  opt.async = opt.async || true;
  opt.data = opt.data || null;
  opt.success = opt.success || function () {
  };
  // 创建ajax 对象
  var xmlHttp = null;
  if (XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  }
  else {
    xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  var postData = JSON.stringify(opt.data)
  //post 方法
  if (opt.method === 'post') {
    xmlHttp.open(opt.method, opt.url, opt.async);
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    xmlHttp.send(postData);
  }
  // get 方法
  else if (opt.method === 'get') {
    xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
    xmlHttp.send(null);
  }
  // 读取请求相应的状态
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      //请求成功时，执行这个函数
      opt.success(xmlHttp.responseText);
    }
  };
}
export default ajax()
