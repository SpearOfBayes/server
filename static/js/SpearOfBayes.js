// alert("hello, world");
//jquery

$(document).ready(function(){
	// 加载单个查询界面
	$("#main_window").html(single_query_html_text);
	$("#single_query_btn").click(single_query);

	// 单个查询函数
	function single_query() {
		commodity_name = $("#commodity_text")[0].value
		alert(commodity_name)
		
		submit_query(commodity_name)
	}

	//批量查询函数
	function batch_query() {
		var commoditys = new Array()
		$(".commodity_name").each(function() {
			if ($(this).val() == "") {
				return false;
			}
			commoditys.push($(this).val());
		})
		commoditys_name = commoditys.join(",")
		alert(commoditys_name)
		submit_query(commoditys_name)
	}

	//提交查询请求
	function submit_query(commodity_name) {
		data = {
			"commoditys": commodity_name
		}
		$.post(
			"/batch_query/",//url
			{data:JSON.stringify(data)},//data
			function(response) {
				alert(response);
		})
	}

	//左侧模块的变化
	//定义模块数组
	var modules = new Array()
	modules[0] = single_query_html_text
	modules[1] = batch_query_html_text

	$("#single_query_module").click(function() {
		change_module(0, this);
		$("#single_query_btn").click(single_query);
	})

	$("#batch_query_module").click(function(){
		change_module(1, this);
		$("#batch_query_btn").click(batch_query)
	})

	function change_module(module_num, that) {
		$(".active_module").attr("class", "module");
		$(that).attr("class", "active_module");
		$("#main_window").html(modules[module_num]);
	}
 });
 

 
var single_query_html_text = `
<!--主窗体-->
<div class="center">
	<!--顶部预留一个筛选栏-->
	<div>
	</div>
	<!---->
	<!--用于放置搜索内容的窗体-->
	<div class="center">
		<!--应当放在中偏上的位置-->
		<div class="single_query">
		<!--可以放一些图片之类的-->
		<div>
		</div>
		<!--单个搜索框和按钮，应当设置为横向排列-->
		<table>
			<tr>
			<th>
				<div class="search_text">
				<input id="commodity_text" type="text" name="commodity" placeholder="输入商品名，如“冬暖夏凉空调被”" style="width:420px;height:100%">
				</div>
			</th>
			<th>
				<div class="search_button">
				<button id="single_query_btn" type="button" class="btn btn-info btn-sm" style="height:92%;width:90px;font-size:16px;margin:2px">
					查  询
				</button>
				</div>
			</th>
			</tr>
		</table>
		</div>
	</div>
</div>
`
	
var batch_query_html_text = `
<!--这⾥里里⾯面的所有内容应当在按键时替换--> <!--主窗体-->
<div>
<div class="background_container">
<div class="inner_container"> <!--这部分⽤用于批量量查询的输⼊入--> <div class="batch_query_input">
<table class="table"> <thead>
<tr>
<th width="70%" style="text-align: center;">商品名</th> <th style="text-align: center;">类别</th>
</tr> <tbody>
<tr> <td>
<input class="commodity_name" type="text"/> </td>
<td>
<input class="class_name" type="text", readonly="readonly"> </td>
</tr> <tr>
<td>
<input class="commodity_name" type="text"/>
</td> <td>
<input class="class_name" type="text", readonly="readonly"> </td>
</tr> <tr>
<td>
<input class="commodity_name" type="text"/>
</td> <td>
<input class="class_name" type="text", readonly="readonly"> </td>
</tr> <tr>
<td>
<input class="commodity_name" type="text"/>
</td> <td>
<input class="class_name" type="text", readonly="readonly"> </td>
</tr> <tr>
<td>
<input class="commodity_name" type="text"/>
</td> <td>
<input class="class_name" type="text", readonly="readonly"> </td>
</tr> <tr>
<td>
<input class="commodity_name" type="text"/>
</td> <td>
<input class="class_name" type="text", readonly="readonly"> </td>
</tr> <tr>
<td>
<input class="commodity_name" type="text"/>
</td> <td>
<input class="class_name" type="text", readonly="readonly"> </td>
</tr> <tr>
<td>
<input class="commodity_name" type="text"/>
</td> <td>
<input class="class_name" type="text", readonly="readonly"> </td>
</tr> <tr>
<td>
<input class="commodity_name" type="text"/>
</td>

 <td>
<input class="class_name" type="text", readonly="readonly">
</td> </tr>
<tr> <td>
<input class="commodity_name" type="text"/> </td>
<td>
<input class="class_name" type="text", readonly="readonly"> </td>
</tr> <tr>
<td>
<input class="commodity_name" type="text"/>
</td> <td>
<input class="class_name" type="text", readonly="readonly"> </td>
</tr> </tbody>
</thead> </table>
</div> <!--这部分是底部的各种按钮--> <div class="bottom_bar">
<div class="container-fluid"> <div class="submit_button">
<button id="batch_query_btn" type="button" class="btn btn-info btn-lg" style="width:100px; margin:10%">提交</button> </div>
<div class="submit_button">
<button type="button" class="btn btn-default btn-lg" style="width:100px; margin:10%">导⼊文本</button> </div>
</div> </div>
</div> </div>
</div> <!--到这为⽌止-->
`
 