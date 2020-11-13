//侧边栏top
var goTop = document.getElementById("goTop");
goTop.onclick = function () {
    // 获取页面滚动距离
    var y = getScroll().scrollTop;
    var step = y / 80;

    var interId = setInterval(function () {
        if (getScroll().scrollTop <= 0) {
            clearInterval(interId);
        }
        scrollBy(0, -step);
    }, 10)
}
// 锚点滚动事件
var ul = document.querySelector(".optionDiv>ul");
var lis = document.querySelectorAll(".optionDiv li");

var freeDiv = document.getElementById("freeDiv");
var faultDiv = document.getElementById("faultDiv");
var supportDiv = document.getElementById("supportDiv");
var vipDiv = document.getElementById("vipDiv");

// 点击li跳转到指定部分，委托写法
var flag = 1;
ul.onclick = function (e) {
    // 先清除定时器，防止冲突
    var interId;
    clearInterval(interId);
    if (flag === 1) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.nodeName.toLowerCase() === "li") {
            var n = target.value;
            var goal;
            if (n === 1) {
                goal = freeDiv.offsetTop;
            } else if (n === 2) {
                goal = faultDiv.offsetTop;
            } else if (n === 3) {
                goal = supportDiv.offsetTop;
            } else if (n === 4) {
                goal = vipDiv.offsetTop;
            }
            // 获取页面滚动距离
            var x=parseInt((goal-getScroll().scrollTop)/70);
            // 每一步走多少
            var step = x;
            // 页面滚动定时器
            // 总结：clearInterval执行要将函数执行完，所以要放在最后面
            interId = setInterval(function () {
                flag = 0;
                // if (parseInt(getScroll().scrollTop) < goal) {
                //     scrollBy(0, step);
                // } else {
                //     scrollBy(0, -step);
                // }
                // 判断
                scrollBy(0, step); 
                var n = goal - parseInt(getScroll().scrollTop);
                if ((n < step && n > -step)||(n > step && n < -step)) {
                    // 函数执行完后，由于步数step比较大，说以最后用scrollTo定位
                    scrollTo(0, goal);
                    clearInterval(interId);
                    flag = 1;
                }
            }, 10)
        }
    }
}

// 监听高度更换选中li
document.onscroll = function () {
    // 侧边栏，100为stickydiv的高度
    var y = getScroll().scrollTop + 100;
    var index = 1;
    if (y >= 250) {
        goTop.style.visibility = "visible";
        index = 2;
    } else {
        goTop.style.visibility = "hidden";
        index = 1;
    }
    //锚点
    if (y <= faultDiv.offsetTop) {
        changLiStyle(lis, 0);
    } else if (y < supportDiv.offsetTop && y > faultDiv.offsetTop) {
        changLiStyle(lis, 1);
    } else if (y < vipDiv.offsetTop && y > supportDiv.offsetTop) {
        changLiStyle(lis, 2);
    } else if (y > vipDiv.offsetTop) {
        changLiStyle(lis, 3);
    }
}

// 根据下标改变li选中，参数是li数组和下标
function changLiStyle(list, n) {
    for (var i = 0; i < list.length; i++) {
        if (i == n) {
            list[i].className = "active";
        } else {
            list[i].className = "";
        }
    }
}


// 免费备案
var problemsDiv = document.getElementById("problemsDiv");
        var ul2 = document.querySelectorAll(".problemsDiv>ul");
        for (var i = 0; i < ul2.length; i++) {
            ul3 = ul2[i];
            ul3.index = i;
            ul3.onclick = function () {
                var firstEle = getFirstElementChild(this);
                var lastEle = getLastElementChild(this);
                for (var i = 0; i < ul2.length; i++) {
                    ul2[i].setAttribute("class", "");
                }
                this.setAttribute("class", "active");
            }
        }

        // problemsDiv.onclick =function(e){
        //     e = e ||window.event;
        //     e.stopPropagation()
        //     var target = e.target||e.srcElement;
        //     // 兼容性处理
        //     console.log(target);
        //     var firstEle =getFirstElementChild(target);
        //     var lastEle =getLastElementChild(target);
        //     // console.log(firstEle);
        //     // console.log(lastEle);