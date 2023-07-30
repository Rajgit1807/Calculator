function display(val) {

    document.querySelector("#result").value += val;

}
function equate() {
    var x = document.querySelector("#result").value;
    var res = eval(x);
    document.querySelector("#result").value = res;
}

function clr() {
    document.querySelector("#result").value = " ";
}
function del() {
    var val = document.querySelector("#result").value;
    val = val.slice(0, -1);
    document.querySelector("#result").value = val;
}