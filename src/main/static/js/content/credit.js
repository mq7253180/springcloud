$("#addBtn").click(function() {
	clear();
	$("#addModal").modal("show");
});
$(".click-update").click(function() {
	clear();
	$("#creditId2").val($(this).attr("value"));
	$("#companyLabel2").html($("#row_company_"+$(this).attr("value")).html());
	$("#currencyLabel2").html($("#row_currency_"+$(this).attr("value")).html());
	$("#amountLabel2").html($("#row_amount_"+$(this).attr("value")).html());
	$("#ratioTxt2").val($("#row_ratio_"+$(this).attr("value")).html());
	$("#maxLimitOneDayTxt2").val($("#row_maxLimitOneDay_"+$(this).attr("value")).html());
	$("#updateModal").modal("show");
});
$(".click-updateAmount").click(function() {
	clear();
	$("#creditId3").val($(this).attr("value"));
	$("#companyLabel3").html($("#row_company_"+$(this).attr("value")).html());
	$("#currencyLabel3").html($("#row_currency_"+$(this).attr("value")).html());
	$("#amountTxt3").val($("#row_amount_"+$(this).attr("value")).html());
	$("#ratioLabel3").html($("#row_ratio_"+$(this).attr("value")).html());
	$("#maxLimitOneDayLabel3").html($("#row_maxLimitOneDay_"+$(this).attr("value")).html());
	$("#updateAmountModal").modal("show");
});
$(".click-addMargin").click(function() {
	clear();
	$("#creditId4").val($(this).attr("value"));
	$("#addMarginModal").modal("show");
});
$("#addSubmitBtn").click(function() {
	$.ajaxProxy({
		url: "/credit/add",
		type: "POST",
		dataType: "JSON",
		data: {
			"companyId": $("#companySel").val(),
			"currency": $("#currencySel").val(),
			"amount": $("#ammountTxt").val(),
			"ratio": $("#ratioTxt").val(),
			"maxLimitOneDay": $("#maxLimitOneDayTxt").val()
		},
		handle: function(data) {
			alert(data.msg);
			if(data.status==1) {
				$(location).attr("href", "/credit");
			}
		}
	});
});
$("#updateSubmitBtn").click(function() {
	$.ajaxProxy({
		url: "/credit/update",
		type: "POST",
		dataType: "JSON",
		data: {
			"id": $("#creditId2").val(),
			"ratio": $("#ratioTxt2").val(),
			"maxLimitOneDay": $("#maxLimitOneDayTxt2").val().replace(reg, "")
		},
		handle: function(data) {
			alert(data.msg);
			if(data.status==1) {
				$(location).attr("href", "/credit");
			}
		}
	});
});
$("#updateAmountSubmitBtn").click(function() {
	$.ajaxProxy({
		url: "/credit/update/amount",
		type: "POST",
		dataType: "JSON",
		data: {
			"id": $("#creditId3").val(),
			"amount": $("#amountTxt3").val().replace(reg, "")
		},
		handle: function(data) {
			alert("成功");
			$(location).attr("href", "/credit");
		}
	});
});
$("#addMarginSubmitBtn").click(function() {
	$.ajaxProxy({
		url: "/credit/margin/add",
		type: "POST",
		dataType: "JSON",
		data: {
			"creditId": $("#creditId4").attr("value"),
			"amount": $("#marginAmmountTxt").val().replace(reg, ""),
			"currency": $("#marginCurrencySel").val(),
		},
		handle: function(data) {
			alert(data.msg);
			if(data.status==1)
				$(location).attr("href", "/credit/margin/5/1");
		}
	});
});