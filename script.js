function Add() {
    var name = document.getElementById("Name").value;
    var price = document.getElementById("Price").value;
    var kg = document.getElementById("KG").value;
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    row.contentEditable = "true";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = price;
    cell3.innerHTML = kg;
}
function Delete() {
    var del_row = document.getElementById("Del").value;
    if (del_row > 0) {
        document.getElementById("myTable").deleteRow(del_row);
        document.getElementById("warn").style.display = "none";
    }
    else {
        document.getElementById("warn").style.display = "block";

    }
}