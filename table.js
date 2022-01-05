fetch('https://jsonplaceholder.typicode.com/comments/')
.then(res=>res.json())
.then(json =>{
    var key=document.getElementById("table");
    for(i=0;i<json.length;i++){
        console.log(json[i]);
       var row= key.insertRow(i);
       var cell_A =row.insertCell(0);
       var cell_B =row.insertCell(1);
       var cell_C =row.insertCell(2);
    //    var cell_D =row.insertCell(3);

       cell_A.innerHTML=json[i].id;
       cell_B.innerHTML=json[i].name;
       cell_C.innerHTML=json[i].email;
    //    cell_D.innerHTML=json[i].age;
    }
    
}
   
)



// fetch('https://jsonplaceholder.typicode.com/comments/')
// .then(res => res.json())
// .then(json =>{
//    let k= document.getElementById('table');
// //    let kk=document.createElement('TABLE')
//     // var s=document.createElement("TABLE");
//     for(i=0;i<json.length;i++){
//         console.log(json[i]);
//         let row= k.insertRow(i);
//         let cellone=row.insertCell(0);
//         let celltwo=row.insertCell(1);
//         cellone.innerHTML=json[i].name;
//         celltwo.innerHTML=json[i].email;

//     }
// } )