//Creating skeletal of table using dom
var Id;
var check = "";
var container = document.createElement("div");
container.setAttribute("class", "container");
var Header = document.createElement("h3");
Header.innerText = "DOM Pagination ";
Header.style.textAlign = "center";
var div = document.createElement("div");
div.setAttribute("class", "btn-group btn-group-toggle");
function createbtn(Id, number) {
  lbl1 = document.createElement("label");
  lbl1.className = "btn btn-outline-secondary btn-sm";
  input1 = document.createElement("input");
  input1.setAttribute("type", "radio");
  input1.setAttribute("name", "options");
  input1.setAttribute("id", Id);
  lbl1.innerText = number;
  lbl1.append(input1);
  div.append(lbl1);
}
createbtn("b1", "1");
createbtn("b2", "2");
createbtn("b3", "3");
createbtn("b4", "4");
createbtn("b5", "5");
createbtn("b6", "6");
createbtn("b7", "7");
createbtn("b8", "8");
createbtn("b9", "9");
createbtn("b10", "10");
var div2 = document.createElement("div");
div2.setAttribute("class", " btn-group");
function otherbtn(Id, text) {
  button = document.createElement("button");
  button.className = "btn btn-outline-secondary btn-sm";
  button.innerText = text;
  button.setAttribute("id", Id);
  div2.append(button);
}
otherbtn("b11", "First");
otherbtn("b12", "Last");
otherbtn("b13", "Back");

//create table

var table = document.createElement("table");
table.className = "table";
var thead = document.createElement("thead");
thead.className = "thead-dark";
var tbody = document.createElement("tbody");
var tr = document.createElement("tr");
var th1 = document.createElement("th");
th1.setAttribute("scope", "col");
th1.innerText = "ID";
var th2 = document.createElement("th");
th2.setAttribute("scope", "col");
th2.innerText = "Name";
var th3 = document.createElement("th");
th3.setAttribute("scope", "col");
th3.innerText = "Email";
tr.append(th1, th2, th3);
thead.append(tr);
table.append(thead);

container.append(Header, table, div, div2);
document.body.append(container);
//function to fetch required json data 
function Display(ID) {
  var req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",
    true
  );
  req.send();

  req.onload = function () {
    var data = JSON.parse(this.response);
    //Checking which button is pressed and displaying data accordingly
    if (ID == "b1") {
      check = 1;
      Row(0, 10);
    }
    if (ID == "b2") {
      check = 2;
      Row(10, 20);
    }
    if (ID == "b3") {
      check = 3;
      Row(20, 30);
    }
    if (ID == "b4") {
      check = 4;
      Row(30, 40);
    }
    if (ID == "b5") {
      check = 5;
      Row(40, 50);
    }
    if (ID == "b6") {
      check = 6;
      Row(50, 60);
    }
    if (ID == "b7") {
      check = 7;
      Row(60, 70);
    }
    if (ID == "b8") {
      check = 8;
      Row(70, 80);
    }
    if (ID == "b9") {
      check = 9;
      Row(80, 90);
    }
    if (ID == "b10") {
      check = 10;

      Row(90, 100);
    }
    //3 button
    if (ID == "b11") {
      check = 1;
      Row(0, 10);
    }
    if (ID == "b12") {
      check = 10;
      Row(90, 100);
    }
    if (ID == "b13") {
      var p = check - 1;
      Display("b" + p);
    }
    function Row(i, j) {
      tbody.innerHTML = " ";
      for (p = i; p < j; p++)
        CreateRow(data[p].id, data[p].name, data[p].email);
    }
  };
}

for (j = 1; j <= 13; j++) {
  document.getElementById("b" + j).addEventListener("click", function (e) {
    console.log(e.target.id);
   
    Display(e.target.id);
  });
}
//Creation of Row using form data
function CreateRow(id, name, email) {
  row = document.createElement("tr");
  td1 = document.createElement("td");
  td2 = document.createElement("td");
  td3 = document.createElement("td");
  td1.innerText = id;
  td2.innerText = name;
  td3.innerText = email;
  row.append(td1, td2, td3);
  tbody.append(row);
  table.append(tbody);
}
