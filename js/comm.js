// 封装函数

// 通过id获取页面元素
function byId(id){
    return document.getElementById(id);
}

//通过name获取页面对象
function byName(name){
    return document.getElementsByName(name);
}

// 通过标签名获取页面元素
function byTagName(tagName){
    return document.getElementsByTagName(tagName);
}

// 通过类名获取页面元素
function byClassName(className){
    return document.getElementsByClassName(className);
}

// 匹配指定 CSS 选择器的一个元素。
function selector(selector){
    return document.querySelector(selector);
}

// 匹配指定 CSS 选择器的所有元素。
function selectorAll(selectorall){
    return document.querySelectorAll(selectorall);
}

//设置文本innerText兼容函数
function setInnerText(element , text){
    if(element.innerText){
        element.innerText = text;
    }else{
        element.textContent = text;
    }
}

// 获取文本innerText兼容函数
function getInnerText(element){
    if(element.innerText){
        return element.innerText;
    }else{
        return element.textContent;
    }
}

//拆分cookie字符串
function splitCookie(cookiestr) {
    var str1 = cookiestr.split(";");
    var cookieObj = {};
    //trim 去除字符串的多余空格
    for (var i = 0; i < str1.length; i++) {
        var str2 = str1[i].split("=");
        cookieObj[str2[0].trim()]=str2[1];
    }
    return cookieObj;
}

// firstElementChild兼容性处理
function getFirstElementChild(element) {
    var node, nodes = element.childNodes,
        i = 0;
    while (node = nodes[i++]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

// lastElementChild兼容性处理
function getLastElementChild(element) {
    var node, nodes = element.childNodes,
        i = nodes.length - 1;
    while (node = nodes[i--]) {
        if (node.nodeType === 1) {
            return node;
        }
    }
    return null;
}

// nextElementSibling兼容性处理   获取当前节点的后一个同级元素节点
function getNextElementSibling(element) {
    var el = element;
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
}

// previousElementSibling兼容性处理
function getPreviousElementSibling(element) {
    var el = element;
    while (el = el.previousSibling) {
        if (el.nodeType === 1) {
            return el;
        }
    }
    return null;
}

// 添加事件的兼容性处理
function addEventListener(element,type,fn){
    if(element.addEventListener){
        element.addEventListener(type,fn);
    }else if (element.attachEvent) {
        element.attachEvent("on" + type, fn)
    }else{
        element["on"+type]=fn;
    }
}

// 移除事件的兼容性处理
function removeEventListener(element,type,fn){
    if(element.removeEventListener){
        element.removeEventListener(type,fn);
    }else if (element.detachEvent) {
        element.detachEvent("on" + type, fn)
    }else{
        element["on"+type]=null;
    }
}

//封装获取滚动距离函数
function getScroll() {
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    }
}

//封装获取页面坐标函数，依赖even对象
function getPage(e) {
    e = e || window.event;
    var pageX = e.pageX || getScroll().scrollLeft + e.clientX;
    var pageY = e.pageY || getScroll().scrollTop + e.clientY;
    return {
        pageX: pageX,
        pageY: pageY
    }
}

//  阻止冒泡的兼容性写法
function stopBubble(e) {
    e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}

// 阻止事件默认行为兼容
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.preventDefault = false;
    }
}

// 获取指定元素节点在集合或列表中的下标
function getElementIndex(list, n) {
    var index = -1;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === n) {
            index = i;
        }
    }
    return index;
}

// 设置指定集合中,指定下标元素的指定类,其他元素取消该类
function changeElementClass(list, index, cname) {
    for (var i = 0; i < list.length; i++) {
        if (i === index) {
            list[i].className = cname;
        } else {
            list[i].className = "";
        }
    }
}