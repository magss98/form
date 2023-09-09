const Firstname= document.getElementById('name')
const lastName= document.getElementById('lastname')
const birthdate= document.getElementById('date')
const url= 'https://jsonplaceholder.typicode.com/users'
const buttn= document.getElementById("send")

async function postInfo(url) {
    const info= {
        nombre : Firstname.value,
        apellido : lastName.value,
        nacimiento : birthdate.value
    }

const methd= {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(info),
};
let response= await fetch(url,methd);
if (response.ok){
    console.log("Estado: ", response.status)
    console.log("Nombre: ", await response.json())
} else{
    alert ("Estado ", response.status) 
}
}
 buttn.addEventListener("click", (event)=>{
    event.preventDefault()
    postInfo(url)
 })
