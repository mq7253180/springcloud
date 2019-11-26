$("#showAllCountriesBtn").click(function() {
	$.ajaxProxy({
		url: "/zone/countries",
		type: "GET",
		dataType: "JSON",
		handle: function(data) {
			var content = "所有国家和地区: \n";
			data.forEach(function(obj, index) {
				content += obj.cnName;
				content += ": ";
				content += obj.enName;
				content += "\n";
			});
			/*for(var i=0;i<data.length;i++) {
				var obj = data[i];
				content += obj.cnName;
				content += ": ";
				content += obj.enName;
				content += "\n";
			}*/
			alert(content);
		}
	});
});
$("#showAllCountriesBtn2").click(function() {
	$.ajaxProxy({
		url: "/zone/countries2",
		type: "GET",
		dataType: "JSON",
		handle: function(data) {
			var content = "所有国家和地区: \n";
			data.forEach(function(obj, index) {
				content += obj.cnName;
				content += ": ";
				content += obj.enName;
				content += "\n";
			});
			/*for(var i=0;i<data.length;i++) {
				var obj = data[i];
				content += obj.cnName;
				content += ": ";
				content += obj.enName;
				content += "\n";
			}*/
			alert(content);
		}
	});
});
$("#showAllCountriesBtn3").click(function() {
	$.ajaxProxy({
		url: "/zone/countries3",
		type: "GET",
		dataType: "JSON",
		handle: function(data) {
			var content = "所有国家和地区: \n";
			data.forEach(function(obj, index) {
				content += obj.cnName;
				content += ": ";
				content += obj.enName;
				content += "\n";
			});
			/*for(var i=0;i<data.length;i++) {
				var obj = data[i];
				content += obj.cnName;
				content += ": ";
				content += obj.enName;
				content += "\n";
			}*/
			alert(content);
		}
	});
});