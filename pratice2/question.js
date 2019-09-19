function formattime () {
	const oDate = new Date();
	let time = '';

	let year = oDate.getFullYear();
	let month = oDate.getMonth() + 1;
	let day  =oDate.getDay();

	month = format(month);
	day = format(day);
	time = year + "-" + month + "-" + day;

	tt.innerHTML = time
}
function format (parma) {
	if(parma < 10){
		return parma = '0' + parma
	}
}
//原生ajax
/*	0 未发送
	1 已载入，调用send，正在发送请求
	2 send完成，已接受到返回响应数据
	3 正在解析响应内容
	4 响应内容解析完成，可以在客户端调用了
	http状态码：
	2xx 请求处理成
	3xx 需要重定向，浏览器直接跳转
	4xx 客户端请求错误
	5xx 服务端出错
*/
var ajax = new new XMLHttpRequest();
ajax.open('GET', './index.json', false);
ajax.onreadystatechange = function () {
	if(ajax.readyState == 4){
		if(ajax.status == 200){
			console.log(ajax.responseText)
		}
	}
}	
ajax.send(null)