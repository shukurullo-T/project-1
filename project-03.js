let bekorQilish = false;
console.log("Buyurtma qabul qilindi")
const yetkazishTaymeri = setTimeout(()=>{
        console.log("Pitsa yetkazildi")
},4000)

        if(bekorQilish){
            setTimeout(()=>{
                clearTimeout(yetkazishTaymeri)
            console.log("Buyurtma bekor qilindi")
            },1000)
    }
// setTimeout(()=>{
//         if(bekorQilish===false){
//         console.log("Buyurtma bekor qilindi")
//     }
// },1000)