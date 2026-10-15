const ranglar = ["Qizil", "Sariq", "Yashil"];
let ochirishVaqti = 6500;
let indeks = 0;
const svetoforIntervali = setInterval(()=>{
    console.log(ranglar[indeks])
    indeks ++
    if(indeks === ranglar.length){
        return indeks = 0
    }
},1000)
setTimeout(()=>{
    clearInterval(svetoforIntervali)
    console.log("Svetofor o'chirildi")
},ochirishVaqti)