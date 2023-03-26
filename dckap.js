let PButton = document.querySelector(".projectButtons")
let pButtonChild = PButton.children

pButtonChild[1].classList.add("active")
for(let i=0;i<pButtonChild.length;i++){
    pButtonChild[i].addEventListener("click",(e)=>{
        for(let k=0;k<pButtonChild.length;k++){
            pButtonChild[k].classList.remove("active")
        }
        e.target.classList.add("active")
    })
}
