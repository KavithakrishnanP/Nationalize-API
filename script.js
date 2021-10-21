function searchfun(){
let filter=document.getElementById('myInput');
}
fetch("https://api.nationalize.io/?name=michael")
.then(response =>response.json())
.then(jsonData=> console.log(jsonData))

async function getnationalizeapi(){
    let response = await fetch("https://api.nationalize.io/?name=michael")
    return response.json();
}

getnationalizeapi()
.then(jsonData => console.log(json.Data))