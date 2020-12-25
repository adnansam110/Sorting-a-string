var str = prompt("Enter a string to sort");
var arr = str.split("");
var sorting = () =>{
    var newArr = arr.sort();
    return newArr.join("");
}
var show = sorting();
document.write(show);