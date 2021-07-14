let num = document.querySelectorAll(".num");
let output = document.querySelector(".output");
let result = document.querySelector(".num16");
let clear = document.querySelector(".num1");

for (let i = 0; i < 17; i++){
    if(i!=0 && i!=15) {
    num[i].addEventListener("click", ()=> {
        output.value = output.value + num[i].value;
    }); };
}

result.addEventListener("click", () => {
    output.value=eval(output.value);
})

clear.addEventListener("click", () => {
    output.value="";
})