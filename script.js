let row_c=3;
function Add() {
    var name = document.getElementById("Name").value;
    var price = document.getElementById("Price").value;
    var kg = document.getElementById("KG").value;
    if (name==''){
        document.getElementById("warn_add").style.display = "block";
        return
    }
    else{
        document.getElementById("warn_add").style.display = "none";

    }
    if (price==''){
        document.getElementById("warn_add").style.display = "block";
        return
    }
    else{
        document.getElementById("warn_add").style.display = "none";
    }
    if (kg==''){
        document.getElementById("warn_add").style.display = "block";
        return
    }
    else{
        document.getElementById("warn_add").style.display = "none";
    }
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    row.contentEditable = "true";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = price;
    cell3.innerHTML = kg;
    row_c+=1;
}
function Delete() {
    var del_row = document.getElementById("Del").value;
    if (del_row > 0 && del_row<=row_c) {
        document.getElementById("myTable").deleteRow(del_row);
        document.getElementById("warn_del").style.display = "none";
    }
    else {
        document.getElementById("warn_del").style.display = "block";

    }
}
