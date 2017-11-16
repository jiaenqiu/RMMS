$(document).ready(function(){
	$("#rightShow").load("others.html #page",null,function(){
//		alert("加载成功");
	});
	$("#tree").treeview();
	$("#home").bind("click",function() { 
		$("#rightShow").load("others.html #page",null,function(){});
	});
	
	$("#dataManagement").bind("click",function() {
		dataManagementPublic();
    });
	$("#dataManagement2").bind("click",function() {
		dataManagementPublic();
    });
	function dataManagementPublic() {
		$("#page").show();
        var dataManagement='';
        dataManagement+='<table class="table table-hover">';
        dataManagement+='<tr><td colspan="5">信息列表</td><td><button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#addDataModal"><i class="glyphicon glyphicon-plus"></i></button></td></tr>';
        dataManagement+='<tr class="success"><td>#</td><td>姓名</td><td>手机号</td><td>身份证号</td><td>内容</td><td>操作</td></tr>';
        dataManagement+='<tr class="info"><td>1</td><td>贾恩秋</td><td>18332537474</td><td>11111111</td><td>十九大召开</td><td><button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#detailsModal"><i class="glyphicon glyphicon-eye-open"></i></button><button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#updateModal"><i class="glyphicon glyphicon-pencil"></i></button><button type="button" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#deleteModal"><i class="glyphicon glyphicon-remove"></i></button></td></tr>';
        dataManagement+='</table>';
        $('#rightShow').html(dataManagement);
	}
	
	$("#notice").bind("click",function() { 
		noticePublic();
	});
	$("#notice2").bind("click",function() { 
		noticePublic();
	});
	$("#notice3").bind("click",function() { 
		noticePublic();
	});
	$("#notice4").bind("click",function() { 
		noticePublic();
	});
	function noticePublic() {
		$("#page").show();
		$("#rightShow").load("emails.html");
	}
	
	$("#analysis").bind("click",function() { 
		$("#page").hide();
		$("#rightShow").load("analysis.html");
		
	});
	$("#contact").bind("click",function() { 
		$("#page").hide();
		$("#rightShow").load("contact.html");
	});
	
//	$('#addDataModal').on('shown.bs.modal', function () {
////		alert('23413');
//	});
                  
	$('#pageLimit').bootstrapPaginator({
	    currentPage: 1,//当前的请求页面。
	    totalPages: 10,//一共多少页。
	    size:"normal",//应该是页眉的大小。
	    bootstrapMajorVersion: 3,//bootstrap的版本要求。
	    alignment:"right",
	    numberOfPages:3,//一页列出多少数据。
	    itemTexts: function (type, page, current) {//如下的代码是将页眉显示的中文显示我们自定义的中文。
	        switch (type) {
	        case "first": return "首页";
	        case "prev": return "上一页";
	        case "next": return "下一页";
	        case "last": return "末页";
	        case "page": return page;
	        }
	    }
	});
	
	AddFavorite=function(sURL,sTitle) {
		try {  
            window.external.addFavorite(sURL, sTitle);  
        } catch (e) {  
            try {  
                window.sidebar.addPanel(sTitle, sURL, "");  
            } catch (e) {  
                alert("加入收藏失败，请使用ctrl/command+D进行添加");  
            }  
        } 
	}
	SetHome=function(obj,url) {
        try {  
        		obj.style.behavior='url(#default#homepage)';obj.setHomePage(url);  
        } catch(e) {  
            if(window.netscape) {  
                try {  
                		netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");   
                } catch (e) {   
                		alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将[signed.applets.codebase_principal_support]设置为'true'");   
                }  
                var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);  
                prefs.setCharPref('browser.startup.homepage',url);  
             }  
        }  
    }  
});

