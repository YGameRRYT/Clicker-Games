acTableData = [["Item", "Buy", "Quantity", "Cost", "HP per Second", "Description"]];

mcTableData = [["Item", "Buy", "Quantity", "Cost", "HP per Click", "Description"]];

for (var index in autoclickItems) {
  var item = autoclickItems[index];
  item.cost = item.initialCost;
  item.quantity = 0;
  acTableData.push([
    item.name,
    {data: "Buy", class: "buy", id: "buy" + item.name, onclick: "buyAutoclick(" + index + ")"},
    {data: item.quantity, id: "quantity" + item.name},
    {data: item.cost, id: "cost" + item.name},
    "+" + item.rate,
    item.description
  ])
}

for (var index in multiclickItems) {
  var item = multiclickItems[index];
  item.cost = item.initialCost;
  item.quantity = 0;
  mcTableData.push([
    item.name,
    {data: "Buy", class: "buy", id: "buy" + item.name, onclick: "buyMulticlick(" + index + ")"},
    {data: item.quantity, id: "quantity" + item.name},
    {data: item.cost, id: "cost" + item.name},
    "+" + item.rate,
    item.description
  ])
}

function updateACT() {
  for (var index in autoclickItems) {
    item = autoclickItems[index];
    document.getElementById("quantity" + item.name).innerHTML = item.quantity;
    document.getElementById("cost" + item.name).innerHTML = item.cost;
  }
  document.getElementById("cookieCount").innerHTML = cookies;
  document.getElementById("cps").innerHTML = cps;
}

function updateMCT() {
  for (var index in multiclickItems) {
    item = multiclickItems[index];
    document.getElementById("quantity" + item.name).innerHTML = item.quantity;
    document.getElementById("cost" + item.name).innerHTML = item.cost;
  }
  document.getElementById("cookieCount").innerHTML = cookies;
  document.getElementById("cpc").innerHTML = cpc;
}

function updateBuy() {
  for (var index in autoclickItems) {
    var item = autoclickItems[index];
    if (cookies >= item.cost) {
      document.getElementById("buy" + item.name).style.backgroundColor = "lightgreen";
    } else {
      document.getElementById("buy" + item.name).style.backgroundColor = "red";
    }
  }

  for (var index in multiclickItems) {
    var item = multiclickItems[index];
    if (cookies >= item.cost) {
      document.getElementById("buy" + item.name).style.backgroundColor = "lightgreen";
    } else {
      document.getElementById("buy" + item.name).style.backgroundColor = "red";
    }
  }
}