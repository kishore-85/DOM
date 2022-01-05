fetch('https://jsonplaceholder.typicode.com/comments/')
.then(res=>res.json())
.then(con => {
    let table = document.createElement('TABLE')
    for(i=0;i<con.length;i++){
        console.log(con[i])
        let row = document.createElement("tr")
        let col1=document.createElement('TD')
        let col2=document.createElement('TD')
        let val1=document.createTextNode(con[i].email);
        let val2=document.createTextNode(con[i].name);

        row.appendChild(col1);
        row.appendChild(col2);
        table.appendChild(row);
        col1.appendChild(val1);
        col2.appendChild(val2);
        document.body.appendChild(table)
    }
})