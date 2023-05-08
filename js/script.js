const endDate= "20 may 2023  12:00 PM"

document.getElementById("end-Date").innerText=endDate;
const inputs = document.querySelectorAll("input")
const clock=()=>{
    const end= new Date(endDate)
    const now= new Date()
    const diff= (end - now) / 1000;
    // console.log(diff);
    inputs[0].value=Math.floor(diff / 24 / 3600);
    inputs[1].value=Math.floor(diff/3600)% 24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;
    // console.log(end);
    // console.log(now);
}


setInterval(
    ()=>clock()
),1000