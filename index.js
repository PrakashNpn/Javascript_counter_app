let add = document.getElementById("add");
let sub = document.getElementById("substract");
let reset = document.getElementById("reset");

// let counter = parseInt(document.getElementById("counter").innerHTML) ;
let counter = document.querySelector('#counter');

add.addEventListener("click" , () => {

    // document.getElementById("counter").innerHTML = counter + 1;
    // counter = counter + 1;
    counter.innerHTML++;
    console.log(counter);

});

sub.addEventListener("click" , () => {

    // document.getElementById("counter").innerHTML = counter - 1;
    // counter = counter - 1;
    counter.innerHTML--;
    console.log(counter);

});

reset.addEventListener("click" , () =>{

    // document.getElementById("counter").innerHTML = 0;
    // counter = 0;
    counter.innerHTML =  0;
    console.log(counter);

});
