console.log('Samod singh');
let myBtn = document.getElementById("myBtn").addEventListener("click",makquest);

function makquest(){
   let fetchApi = fetch('https://jsonplaceholder.typicode.com/posts');
   console.log(fetchApi)
   fetchApi.then((res)=>{
       if(!res.ok){
           throw Error (res.statusText)
       }
       console.log('res',res)
       return res.json()
   }).then((data)=>{
       console.log(data)
       let table = document.getElementById("table");
       
       for(let i of data){    
          console.log(i)

       
          let row = document.createElement('tr');
          let id = document.createElement('td');
          let title = document.createElement('td');
          let body = document.createElement('td');

          id.innerHTML = i.id;
          title.innerHTML = i.title;
          body.innerHTML = i.body;
     
     

          row.appendChild(id);
          row.appendChild(title);
          row.appendChild(body);

          table.appendChild(row);
       }
   }).catch((error)=>{
       console.log(error)
   })
}




     
  


