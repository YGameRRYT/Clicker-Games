window.onload = function() {
  document.getElementById("cookieCount").innerHTML = cookies;
  document.getElementById("cps").innerHTML = cps;
  document.getElementById("cpc").innerHTML = cpc;
  createTable(acTableData, document.getElementById("acTable"));
  createTable(mcTableData, document.getElementById("mcTable"));
  createSelect();
};

function createSelect() {
  var select = "";
  for (var image in images) {
    select += "<option value='" + image + "'>" + image + "</option>";
  }
  document.getElementById("select").innerHTML = select;
  updateSelect();
}

function updateSelect() {
  document.getElementById("img").src = images[document.getElementById("select").value];
}

setInterval(function() {
  cookies += cps; // Autoclicks
  document.getElementById("cookieCount").innerHTML = cookies;
  updateBuy();
  if (showHelp && cookies >= 100) {
    document.getElementById("help").style.display="none";
    showHelp = false;
  }
}, 1000);

function bakeCookie() {
  cookies += cpc; // Multiclicks
  document.getElementById("cookieCount").innerHTML = cookies;
  updateBuy();
}

function buyAutoclick(index) {
  item = autoclickItems[index];
  if (cookies >= item.cost) {
    cookies -= item.cost;
    item.quantity++;
    item.cost = Math.floor(item.initialCost * Math.pow(3, 0.1 * item.quantity));
    cps += item.rate;
    updateACT();
    updateBuy();
  }
}

function buyMulticlick(index) {
  item = multiclickItems[index];
  if (cookies >= item.cost) {
    cookies -= item.cost;
    item.quantity++;
    item.cost = Math.floor(item.initialCost * Math.pow(3, 0.1 * item.quantity));
    cpc += item.rate;
    updateMCT();
    updateBuy();
  }
}
 `use strict`
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime; //it will print on html page