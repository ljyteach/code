var Lee = (function(){

	function Table(selector){
		this.$ = $(selector);
	}
	Table.prototype = {
		insertData:function(data){
			var $tr = $("<tr></tr>");
			for(var i in data){
				var $td = $("<td></td>");
				$td.text(data[i]);
				$tr.append($td);
			}
			this.$.append($tr);
		}
	}

	return {
		Table:Table
	}
})();