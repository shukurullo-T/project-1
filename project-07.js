const Names = ["Jaksn","Maykl","Andrey","Jony"];
let indeks = 0
const NameDown = setInterval(()=>{
    console.log(Names[indeks])
    indeks++
    if(indeks===Names.length){
        return indeks
    }
},1000)
setTimeout(()=>{
    clearInterval(NameDown)
    console.log("too names the and")
},5000)