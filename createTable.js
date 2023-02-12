function createTable(dataList, table) {
	var tableHead = dataList.shift();
	var headRow = table.insertRow(0);
	if (Array.isArray(tableHead)) {createRow(tableHead, headRow, "TH")}
	else {createRow(tableHead.data, headRow, "TH", tableHead.class, tableHead.id, tableHead.onclick)}
	for (var sublistI in dataList) {
		var sublist = dataList[sublistI];
		var tableLength = table.rows.length;
		var newRow = table.insertRow(tableLength);
		if (Array.isArray(sublist)) {createRow(sublist, newRow, "TD")}
		else {createRow(sublist.data, newRow, "TD", sublist.class, sublist.id, sublist.onclick)}
	}
}

function createRow(dataList, row, dataType, rowClass, rowID, rowOnclick) {
	for (var dataI in dataList) {
		var data = dataList[dataI]
		var cell = document.createElement(dataType);
		if (data.constructor != Object) {
			var textNode = document.createTextNode(data);
			cell.appendChild(textNode);
		} else {
			var textNode = document.createTextNode(data.data);
			if (data.class) cell.className = data.class;
			if (data.id) cell.id = data.id;
			if (data.onclick) cell.onclick = new Function (data.onclick);
			cell.appendChild(textNode);
		}
		row.appendChild(cell);
		if (rowClass) row.className = rowClass;
		if (rowID) row.id = rowID;
		if (rowOnclick) row.onclick = new Function (rowOnclick);
	}
}