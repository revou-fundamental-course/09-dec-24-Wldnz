
// jadi ketika documentnya sudah ke load/atau yang berubah 
// pokoknya pas lagi ngeload lah
document.addEventListener("DOMContentLoaded",() => {
    speed = 3500; // custome speed while sleeding image;
    divImage = document.querySelector('.content-img');
    arrayImage = Array.from(divImage.children);
    dot = document.querySelector(".dots").children;

    setInterval(() => {
        for(i=0;i<arrayImage.length;i++){
            if(getComputedStyle(arrayImage[i]).display == "inline"){
                arrayImage[i].style.display = "none";
                dot[i].style.backgroundColor = "rgba(255,255,255, .4)";
                if(i == arrayImage.length - 1){
                    dot[0].style.backgroundColor = "rgba(0,0,0, .9)";
                    return arrayImage[0].style.display = "inline";
                }else{
                    dot[i + 1].style.backgroundColor = "rgba(0,0,0, .9)";
                    return arrayImage[i + 1].style.display = "inline";
                }
            }
        }
    },speed)

    formc = document.querySelector('#contact-me')
    .addEventListener("submit",(e) =>{
        e.preventDefault();
        fullname = e.target[0].value;
        email = e.target[1].value;
        interest = e.target[2].value;
        if(!fullname || !email || !interest ||interest == "none")return alert("please fill all the column");

        console.log({
            message : "Sending data...",
            data : {
                fullname,
                email,
                interest
            }
        })

        alert("Please Check Your Email 1x24hours, (See Your Data in console)")
        // location.reload();
    })

    Array.from(document.querySelector(".dots").children).forEach((element,index) => {
        element.addEventListener("click",() => {
            for(i=0;i<arrayImage.length;i++){
                if(getComputedStyle(arrayImage[i]).display == "inline"){
                    
                    arrayImage[i].style.display = "none";
                    dot[i].style.backgroundColor = "rgba(255,255,255,.4)";
                    
                    arrayImage[index].style.display = "inline";
                    element.style.backgroundColor = "rgba(0,0,0,.9)";
                    
                    break;
                }
            }
        })
    });
});
// function createDot(){
//     if (createDot) return;
//     document.querySelector(".dots").children = [];
//     for(i=0;i<i<arrayImage.length;i++){
//         dot = document.createElement("div")
//         .classList.add("dot");
//         document.querySelector(".dots").append(dot);
//     }
//     createDot =true;
// }

// createDot()//

//created by Wldnz aka Wildan I.A