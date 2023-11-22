function claim(){
    inputs = document.querySelectorAll("input")
    rtext = document.querySelectorAll(".red-text")
    for(i=0;i<4;i++){
        if(i!=2){
            if(inputs[i].value.length == 0){
                inputs[i].classList.add("red-box")
                rtext[i].style.display = "block"
            }
            else{
                inputs[i].classList.remove("red-box")
                rtext[i].style.display = "none"
            }
        }
        else{
            if( /^[^@]+@\w+(\.\w+)+\w$/.test(inputs[i].value) == false){
                inputs[i].classList.add("red-box")
                rtext[i].style.display = "block"
            }
            else{
                inputs[i].classList.remove("red-box")
                rtext[i].style.display = "none"
            }
        }
    }
}
for (i = 0; i < 4; i++) {
    document.querySelectorAll("input")[i].addEventListener("input",function(){
        if(this.value.length == 0){
            this.classList.add("red-box")
            this.nextElementSibling.style.display = "block"
        }
        else{
            this.classList.remove("red-box")
            this.nextElementSibling.style.display = "none"
        }
    })
}