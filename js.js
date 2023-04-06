window.addEventListener("scroll",function (event){
    var s =this.scrollY;
    console.log (s);
    if (s>600) {
        $('#nav').css({
            "background" : "#f27776"
        });
    }
});