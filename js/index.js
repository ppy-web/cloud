// 轮播图
// 自动轮播 获取页面元素
var merit = document.querySelector(".meritDiv");
var meritDiv = document.querySelectorAll(".meritDiv>div");
var ul = meritDiv[4].querySelector("ul");
// 所有li
var lis = meritDiv[4].querySelectorAll("li");

// 定时器自动换图
var interId = setInterval(intervalFun, 5000);
var divIndex = 0;
intervalFun();
// 定时器函数
function intervalFun() {
    // 如果循环到最后一个就重新开始
    if (divIndex === 4) {
        divIndex = 0;
    }
    // 改变背景颜色
    changeBgColor(divIndex);
    //meritDiv下有五个div，只用前四个，先关闭所有，然后打开当前的
    closeDiv(meritDiv);
    meritDiv[divIndex].style.display = "block";
    // 改变选中的li
    changLiStyle(lis, divIndex);
    divIndex++;
}

// 手动轮播，鼠标移入哪个li显示对应的图片，并且自动轮播从鼠标移入位置开始
ul.onmouseover = function (e) {
    // 获取事件源  ,兼容写法
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.nodeName.toLowerCase() == "li") {
        // 获取当前li下标
        var liIndex = getLiIndex(lis, target);
        // 改变背景颜色
        changeBgColor(liIndex);
        // 先关闭所有，然后打开当前的div
        closeDiv(meritDiv);
        meritDiv[liIndex].style.display = "block";
        // 改变选中的li
        changLiStyle(lis, liIndex);
        divIndex = liIndex + 1;
        clearInterval(interId);
    }
}

// 鼠标移入暂停，移除继续
merit.onmouseover = function () {
    clearInterval(interId);
}
merit.onmouseout = function () {
    interId = setInterval(intervalFun, 5000)
}

// 关闭所有div函数,将所有div设为display：none;
function closeDiv(list) {
    for (var i = 0; i < list.length - 1; i++) {
        list[i].style.display = "none";
    }
}

//改变背景颜色函数
function changeBgColor(n) {
    if (n == 0) {
        merit.style.background = "#02304D";
    } else if (n === 1) {
        merit.style.background = "#0C2E95";
    } else if (n === 2) {
        merit.style.background = "#2B52C9";
    } else if (n === 3) {
        merit.style.background = "#7F0CF6";
    }
}

// 根据下标改变li选中，参数是li数组和下标
function changLiStyle(list, n) {
    for (var i = 0; i < list.length; i++) {
        if (i == n) {
            list[i].className = "on";
        } else {
            list[i].className = "";
        }
    }
}

// 获取选中的li下标
function getLiIndex(list, n) {
    var index = -1;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === n) {
            index = i;
        }
    }
    return index;
}


// 图片滚动 
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var ul2 = document.querySelector(".programmeDiv ul");
// 左侧距离
var leftVal = -300;
// 定时器
var interId2;
// 左侧按钮
btn1.onclick = function () {
    // 清除定时器,防止多次点击加速滚动
    clearInterval(interId2);
    // 开始滚动
    interId2 = setInterval(function () {
        // 每次向左移动5px
        leftVal += 5;
        // 设置ul距离左侧的距离left
        ul2.style.left = leftVal + "px";
        if (leftVal == 0) {
            // 滚动一个li宽度清除定时器
            clearInterval(interId2);
            // 向左滚动，先移除ul中最后一个li，然后再获取现在ul中最后一个li并复制一份添加到ul的第一个元素
            // 由于一个li宽度300px，所以再将起始值设为-300px，
            var lastEle = getLastElementChild(ul2);
            ul2.removeChild(lastEle);
            var firstEle = getFirstElementChild(ul2);
            var cloneEle = getLastElementChild(ul2).cloneNode(true);
            ul2.insertBefore(cloneEle, firstEle);
            // 移除最后一个元素
            leftVal = -300;
            ul2.style.left = leftVal + "px";
        }
    }, 8)
}

//右侧按钮
btn2.onclick = function () {
    // 清除定时器,防止多次点击
    clearInterval(interId2);
    interId2 = setInterval(function () {
        leftVal -= 5;
        ul2.style.left = leftVal + "px";
        if (leftVal == -600) {
            clearInterval(interId2);
            // 右侧和左侧原理相同
            var firstEle = getFirstElementChild(ul2);
            ul2.removeChild(firstEle);
            var cloneEle = getFirstElementChild(ul2).cloneNode(true);
            ul2.appendChild(cloneEle);
            leftVal = -300;
            ul2.style.left = leftVal + "px";
        }
    }, 8)
} 