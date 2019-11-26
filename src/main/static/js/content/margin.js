var doSearch = function(page) {
	var uri = "/credit/margin/"+pageSize+"/"+page;
	$("#searchForm").attr("action", uri).submit();
};
var paginationCallback = function(page) {
	doSearch(page);
};
$("#validFrom").datepicker(datePickerOptions);
$("#validTo").datepicker(datePickerOptions);
$("#searchBtn").click(function() {
	doSearch(1);
});
$("#companySel").val($("#criterionCompanyId").val());
$("#currencySel").val($("#criterionCurrency").val());
$(".click-audit").click(function() {
	var fields = $(this).attr("value").split("_");
	$.ajaxProxy({
		url: "/credit/margin/audit",
		type: "POST",
		dataType: "JSON",
		data: {
			"id": fields[0],
			"currency": fields[1],
			"amount": fields[2].replace(reg, "")
		},
		handle: function(data) {
			if(confirm(data.msg+"刷新查询列表吗？"))
				doSearch(page);
		}
	});
});
$(".click-delete").click(function() {
	$.ajaxProxy({
		url: "/credit/margin/delete/"+$(this).attr("value"),
		type: "GET",
		dataType: "JSON",
		data: {
			
		},
		handle: function(data) {
			alert(data.msg);
			if(data.status!=0)
				doSearch(page);
		}
	});
});
$(".click-update").click(function() {
	clear();
	$("#creditMarginId").val($(this).attr("value"));
	$("#updateModal").modal("show");
});
$("#updateSubmitBtn").click(function() {
	$.ajaxProxy({
		url: "/credit/margin/update",
		type: "POST",
		dataType: "JSON",
		data: {
			"id": $("#creditMarginId").val(),
			"currency": $("#marginCurrencySel").val(),
			"amount": $("#marginAmmountTxt").val().replace(reg, ""),
		},
		handle: function(data) {
			if(confirm(data.msg+"刷新查询列表吗？"))
				doSearch(page);
		}
	});
});