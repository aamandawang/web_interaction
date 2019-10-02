function showFunction(){
    var checkBox = document.getElementById("show");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        text.style.display = "none";
    }
        else {
            text.style.display = "inherit";
        }
    
}

var input = document.getElementById("colorChoice");
var text = document.getElementById("text");
input.addEventListener('change', function(){
    text.style.color = this.value;
});

function fontFunction(){
    var font = document.getElementById("fonts").value;
    console.log(font)
    text.style.fontFamily = font;
}

$("#text").fadeTo(.01,1);
$("#slider").change(function(){
    var rangeVal = $("#slider").val();
    var val2 = ((80-rangeVal)/80);
    $("#text").fadeTo(.01,val2);
});


