// 搜索js   获取搜索的值
var btn = document.getElementById("btn");
var txt = document.getElementById("txt");
// var url = location.href;
var url = "Search.html?k=";
btn.onclick = function () {
    url += txt.value
    location.assign(url);
    return false
}

// 将获取到的值填入html
var content =document.getElementById("content");
var key = decodeURIComponent(location.search);
var val = key.slice(3);
content.innerText=val;
