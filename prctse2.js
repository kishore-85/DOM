
///---creating element without using function---///
// let pt = document.createElement("H1")
// let txt = document.createTextNode("this is content 1")
// pt.appendChild(txt)
// document.body.appendChild(pt)


//---------with function------//
// function myTest(){
//     let a = document.createElement('P')
//     let b = document.createTextNode('learn and entertain you')
//     a.appendChild(b)
//     document.body.appendChild(a)
// }mytest();



//------With function on objects creating P by for loop---//
  function mytest3(){
  fetch('https://jsonplaceholder.typicode.com/comments/')
 .then(res => res.json())

.then(json =>{
    for(i=490;i<json.length;i++){   ///loop in jsonb
        document.write(json[i].body);
        
         let a = document.createElement('P')
         let b = document.createTextNode(json[i].body)
         a.appendChild(b)
         document.body.appendChild(a)
    }
})
 }




//  function getData() {
//         fetch('https://jsonplaceholder.typicode.com/posts').then(res => 
//         res.json()
//      ).then(json => {
//         for(let i = 0 ;  i < json.length; i++){
//              console.log(json[i].body)
//              var li = document.createElement("LI");
//             var val = document.createTextNode("hello")
//             li.appendChild(val)
//             document.
//             document.getElementById("ulist").innerHTML = ''
//         }
//      }
        
//      )
//      }

