var Id;
var check = "";
var container = document.createElement('div');
container.setAttribute('class', 'container');
var Header = document.createElement('h3');
Header.innerText = "DOM Pagination ";
Header.style.textAlign = "center";
var div = document.createElement('div');
div.setAttribute('class', 'btn-group btn-group-toggle');
function createbtn(Id,number) {

    lbl1 = document.createElement('label');
    lbl1.className = 'btn btn-outline-secondary btn-sm';
    input1 = document.createElement('input');
    input1.setAttribute('type', 'radio');
    input1.setAttribute('name', "options");
    input1.setAttribute('id',Id );
    lbl1.innerText = number;
    lbl1.append(input1);
    div.append(lbl1);
}
createbtn("b1", "1");
createbtn("b2","2");
createbtn("b3", "3");
createbtn("b4", "4");
createbtn("b5", "5");
createbtn("b6", "6");
createbtn("b7", "7");
createbtn("b8", "8");
createbtn("b9", "9");
createbtn("b10", "10");
var div2 = document.createElement('div');
div2.setAttribute('class', ' btn-group');
function otherbtn(Id, text) {
    button = document.createElement('button');
    button.className = 'btn btn-outline-secondary btn-sm';
    button.innerText = text;
    button.setAttribute('id', Id);
    div2.append(button);
    
}
otherbtn('b11', 'First');
otherbtn('b12', 'Last');
otherbtn('b13', 'Back');


//create table

var table = document.createElement('table');
table.className = "table";
var thead = document.createElement('thead');
thead.className = "thead-dark";
var tbody = document.createElement('tbody');
var tr = document.createElement('tr');
var th1 = document.createElement('th');
th1.setAttribute('scope', 'col');
th1.innerText = "ID";
var th2 = document.createElement('th');
th2.setAttribute('scope', 'col');
th2.innerText = "Name";
var th3 = document.createElement('th');
th3.setAttribute('scope', 'col');
th3.innerText = "Email";
tr.append(th1, th2, th3);
thead.append(tr);
table.append(thead);

container.append(Header,table,div,div2);
document.body.append(container);
function Display(ID)
{
    var req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true);
    req.send();
    req.onload = function () {
        var data = JSON.parse(this.response);
        if (ID == "b1") {
            check=1
           
            for (i = 0; i < 10; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        if (ID == "b2") {
            check=2
            
            for (i = 10; i < 20; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        if (ID == "b3") {
            check=3
            
            for (i = 20; i < 30; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        if (ID == "b4") {
            check=4
            
            for (i = 30; i < 40; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        if (ID == "b5") {
            check=5
            
            for (i = 40; i < 50; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        if (ID == "b6") {
            check=6
            
            for (i = 50; i < 60; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        if (ID == "b7") {
            check=7
            
            for (i = 60; i < 70; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        if (ID == "b8") {
            check=8
            
            for (i = 70; i < 80; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        if (ID == "b9") {
            check=9
            
            for (i = 80; i < 90; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        if (ID == "b10") {
            check=10
            
            for (i = 90; i < 100; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        //3 button
        if (ID == "b11") {
           check=1
            for (i = 0; i < 10; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        if (ID == "b12") {
           check=10
            for (i = 90; i < 100; i++){
               
                CreateRow(data[i].id, data[i].name, data[i].email);
            }
        }
        if (ID == "b13") {
            var p = check - 1;
            Display('b'+p);
        }
    
    }
}
for (j = 1; j <= 13; j++) {
    
    document.getElementById('b'+j).addEventListener('click', function (e) {
        console.log(e.target.id);
        tbody.innerHTML = ' ';
        Display(e.target.id);

        
    });


}


function CreateRow(id,name,email) {
    row = document.createElement('tr');
                 td1 = document.createElement('td');
                td2 = document.createElement('td');
                 td3 = document.createElement('td');
                td1.innerText = id;
                td2.innerText = name;
                td3.innerText = email;
                row.append(td1, td2, td3);
                tbody.append(row);
                table.append(tbody);
}