// 获取元素
// 顶部红色文字提示
var loginTip = document.getElementById("loginTip");

// 电话号码输入框
var phone = document.getElementById("phone");
var phoneInp = document.getElementById("phoneInp");

// 密码输入框
var pwd = document.getElementById("pwd");
var pwdInp = document.getElementById("pwdInp");

// 验证码div
var identCode = document.getElementById("identCode");

// 验证码输入框
var code = document.getElementById("code");
var inputCode = document.getElementById("inputCode");

// 刷新按钮
var refresh = document.getElementById("refresh");

// 获取验证码图片
var img = document.getElementById("img");

// 登录按钮
var btn = document.getElementById("btn");


// 电话号码输入框获取焦点和失去焦点,设置太复杂所以使用了csstext
phoneInp.onclick = function () {
    phone.style.cssText = "background-position: 10px -239px;border: 1px solid #009FD9;"
}
phoneInp.onblur = function () {
    phone.style.cssText = "";
}

// 密码输入框获取焦点和失去焦点
pwdInp.onclick = function () {
    pwd.style.cssText = "background-position: 11px -155px;border: 1px solid #009FD9;"
}
pwdInp.onblur = function () {
    pwd.style.cssText = "";
}

// 验证码输入框获取焦点和失去焦点
inputCode.onclick = function () {
    code.style.cssText = "background-position:9px -73px;border: 1px solid #009FD9;"
}
inputCode.onblur = function () {
    code.style.cssText = "";
}

// 验证码不正确提示验证码不正确并切换验证码
btn.onclick = function () {
    // 验证码输入错误,提示并切换验证码
    if (inputCode.value !== "") {
        loginTip.innerText = "验证码不正确";
    }
    changeImg();
    // 此处只实现效果,应加入判断,
    loginTip.style.display = "block";
    identCode.style.display = "block"
}

// 点击刷新切换图片
refresh.onclick = function () {
    changeImg();
}

// 切图函数
function changeImg() {
    // 先获取当前是第几张图片
    var n = img.src.slice(-5, -4);
    // 7张图自动从头开始, 此处只是实现效果
    if (n == 7) {
        n = 0;
    }
    img.src = "img/login/code/" + (++n) + ".png";
}