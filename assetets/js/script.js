window.onload = () => {
    var collapse = document.getElementById("collapse");
    var collapse = document.getElementById("menu");
    if(collapse) {
    colapse.addEventListener("click",()=> {
        if(menu.style.display=== "block"){
            menu.style.display="none" 
        }else{
            menu.style.display="block" ;
        }
        
    })
    if(menu){
        menu.addEventListener("mouseleave", ()=>{
            menu.style.display="none"
        })
    }
    }
}