/* 侧滑显示NavMenu */
function showNavMenu() {
  $("#mask").css({
    "z-index": "999",
    background: "rgba(0,0,0,0.3)",
  });
  $("#navMenu").css({
    "margin-left": "-260px",
  });
}

/* 侧滑隐藏NavMenu */
function hideNavMenu() {
  $("#mask").css({
    "z-index": "-99",
    background: "transparent",
  });
  $("#navMenu").css({
    "margin-left": "30px",
  });
}

function GetRequest() {
  var url = location.search; //获取url中"?"符后的字串
  //   console.log(url);
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  //   console.log(theRequest);
  return theRequest;
}
