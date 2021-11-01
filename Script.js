let myfun = document.getElementById("myBtn").addEventListener("click", myFunction);

// function myFunction(){
// let promiseObj = fetch("data.txt")   
// console.log(promiseObj) 
// promiseObj.then((resolve)=>{
//   if(!resolve.ok){
//       throw Error(resolve.statusText)
//   }  
//  return resolve.text();

// }).then((result)=>{
//     document.getElementById("demo").innerText = result;
// }).catch((erro)=>{
//     console.log(erro)
// })
// }
 
// async and await .

async function myFunction(){
   try{
    console.log("Button Clicked");
    let res = await fetch("data.txt");
    if(!res.ok){
        throw Error(res.statusText)
    }
     let data = await res.text();
     document.getElementById("demo").innerText = data;
     
   }catch(error) {
        console.log(error)
   }
}