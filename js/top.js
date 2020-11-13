// 回到顶部js
var goTop = document.getElementById("goTop");
// 点击回到顶部
goTop.onclick = function () {
    // 获取页面滚动距离
    var y = getScroll().scrollTop;
    var step = y / 60;

    var interId = setInterval(function () {
        if (getScroll().scrollTop <= 0) {
            clearInterval(interId);
            // return;
        }
        scrollBy(0, -step);
    }, 10)
}
// 页面下滚到一定距离显示回到顶部
document.onscroll = function () {
    var y = getScroll().scrollTop;
    var index = 1;
    if (y >= 250) {
        goTop.style.visibility = "visible";
        index = 2;
    } else {
        goTop.style.visibility = "hidden";
        index = 1;
    }
}