var locale = $("#locale").val();
var resourcePrefix = $("#resourcePrefix").val();
var uri = $("#uri").val();
(function($) {
	String.prototype.startWith = function(s) {
		if(s==null||s==undefined) {
			return false;
		} else {
			var _s = $.trim(s);
			var _this = $.trim(this);
			if(_this.length==0||_s.length>_this.length) {
				return false;
			} else {
				return _this.substr(0, _s.length)==_s?true:false;
			}
		}
	}
	$.i18n.properties({ 
		name: "view",
		path: resourcePrefix+"/i18n",
		mode: "map",//模式：变量或 Map
		language: locale,
		cache: false,
		encoding: "UTF-8",
		callback: function() {
			
		}
	});
	if(navigator.appName=="Microsoft Internet Explorer") {
		var regExp = new RegExp("^.+MSIE\\s*[1-9]\\.+.+$", "g");
		if(regExp.test(navigator.appVersion)) {
			alert($.i18n.prop("msg.ie"));
		}
	}
	$.ajaxProxy = function(s) {
		$.ajax({
			url: s.url,
			type: s.type,
			dataType: s.dataType,
			data: s.data,
			headers: {"locale": $("#locale").val()},
			complete: function(xhr, status) {
				//alert("complete---"+xhr+"-"+status);
			},
			success: function(data) {
				if(data.status==1) {
					s.handle(data.data);
				} else if(data.status==0) {
					alert(data.msg);
					$(top.location).attr("href", "/auth/signin");
				} else {
					alert(data.msg);
				}
				if(s.after!=null)
					s.after();
			},
			error: function(xhr, status) {
				alert("error---"+xhr+"-"+status);
				if(s.after!=null)
					s.after();
			}
		});
	};
	$.fn.ajaxUploadFiles = function(s) {
		var formData = new FormData();
		var validationErrorMsg = "";
		var retVal = 1;
		var path = $(this).val();
		if(path==null||path.length==0) {
			validationErrorMsg = $.i18n.prop("upload.error.null");
			retVal = 0;
		} else {
			var files = $(this).prop("files");
			var separator = null;
			var separatorSize = null;
			if(locale.startWith("zh")||locale.startWith("ZH")) {
				separator = "、";
				separatorSize = 1;
			} else {
				separator = ", ";
				separatorSize = 2;
			}
			for(var i=0;i<files.length;i++) {
				var file = files[i];
				var validFileType = false;
				var acceptableTypes = "";
				for(var j=0;j<s.acceptableTypes.length;j++) {
					var type = s.acceptableTypes[j];
					var regExp = new RegExp(".+\."+s.acceptableTypes[j]+"$", "i");
					if(regExp.test(file.name)) {
						validFileType = true;
					}
					acceptableTypes += type;
					acceptableTypes += separator;
				}
				if(!validFileType) {
					validationErrorMsg = $.i18n.prop("upload.error.types", acceptableTypes.substring(0, acceptableTypes.length-separatorSize));
					retVal = -1;
					break;
				}
				if(file.size>s.maxSize) {
					var maxSize = s.maxSize/1024/1024;
					validationErrorMsg = $.i18n.prop("upload.error.max_size", maxSize+"MB");
					retVal = -2;
					break;
				}
				formData.append("files", file);
			}
			if(s.fields!=null) {
				$.each(s.fields, function(name, value) {
					formData.append(name, value);
				});
			}
		}
		if(retVal<1) {
			s.validationFailed(validationErrorMsg);
			if(s.after!=null)
				s.after();
		} else {
			var req = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
			req.onreadystatechange = function() {
				if(req.readyState==4) {
					if(req.status==200) {
						var data = JSON.parse(req.responseText);
						if(data.status==1) {
							s.handle(data.data);
						} else if(data.status==0) {
							alert(data.msg);
							$(top.location).attr("href", "/auth/signin");
						} else {
							alert(data.msg);
						}
					} else {
						alert(req.status+"------"+req.responseText);
					}
					if(s.after!=null)
						s.after();
				}
			};
			req.open("POST", s.url, true);
			req.setRequestHeader("x-requested-with", "XMLHttpRequest");
			req.send(formData);
		}
		return retVal;
	};
})(jQuery);
var datePickerOptions = {
	dateFormat: "yy-mm-dd",
	showButtonPanel: true,
	currentText: "Now",
	hideIfNoPrevNext: true,
	beforeShow: function(input) {
		setTimeout(function() {
			var buttonPane = $(input).datepicker("widget").find(".ui-datepicker-buttonpane");
			$("<button>", {
				text: "Clear",
				click: function() {
					$.datepicker._clearDate(input);
				}
			}).addClass("ui-state-default ui-priority-primary ui-corner-all").appendTo(buttonPane);
		}, 1);
	}
};