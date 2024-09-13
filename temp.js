const cel=document.querySelector("#celsius");
const kel=document.querySelector("#kelvin");
const far=document.querySelector("#farenheit");

cel.addEventListener('input', function(){
    let c = parseFloat(cel.value);
    let f = (c*9/5)+32;
    let k = c+273.15;
    kel.value=k;
    far.value=f;
});

far.addEventListener('input', function(){
    let c = parseFloat(cel.value);
    let f = (c*9/5)+32;
    let k = c+273.15;
    kel.value=k;
    cel.value=c;

});

kel.addEventListener('input', function(){
    let c = parseFloat(cel.value);
    let f = (c*9/5)+32;
    let k = c+273.15;
    far.value=f;
    cel.value=c;

});