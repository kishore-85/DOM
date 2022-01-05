// fetch('https://jsonplaceholder.typicode.com/comments')

// let a=document.getElementById('demo1')   //--albin---//

// a.style.backgroundColor="red"

//  let b=document.getElementsByClassName('demo')


// b[0].style.backgroundColor='blue';


       //----selfmade sample-1-----//
           //---ID---//
let a=document.getElementById('samples')
samples.style.backgroundColor="red";
samples.style.color="green";
samples.style.padding='10px'

function edit(){
    let fg = document.getElementById('samples').innerHTML="bye!"
}

          //---class---//
let b=document.getElementsByClassName('demo')
b[0].innerHTML="kjkl";
b[0].style.backgroundColor="blue"

        //----tag-name----//
let c = document.getElementsByTagName("DIV")[1];
c.getElementsByTagName('P')[0].innerHTML="TATA";
console.log(c);


