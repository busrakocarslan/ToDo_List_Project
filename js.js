const container=document.querySelector(".container")
const baslik=document.querySelector(".container h2")
const inputAlani=document.querySelector(".inputAlani")
const input=document.querySelector("#input")
const ekleButon=document.querySelector(".ekle")
const isListesi=document.querySelector(".isListesi")
const listeTop=document.querySelector(".listeTop")
const taskList=document.querySelector(".baslik")
const program=document.querySelector(".listeİs")
const is=document.querySelectorAll(".is")
const sil = document.querySelector("#delete")



document.addEventListener("DOMContentLoaded", () => {
    const storedTodo = localStorage.getItem("newTodo");
    if (storedTodo) {
        const newTodo = createTodoElement(storedTodo);
        program.appendChild(newTodo);
        sil.style.display = "inline-block"; // Silme düğmesini göster
    } else {
        sil.style.display = "none"; // Silme düğmesini gizle
    }
    input.focus();
    
});



sil.addEventListener("click",()=>{
    program.textContent=""
    localStorage.removeItem("newTodo")
    if(document.querySelectorAll("li").length===0){
        sil.style.display="none"         
    }
    input.focus()
})



container.style.display="flex"
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.backgroundColor = "lightGray";
container.style.flexDirection="column"
container.style.height="100vh"
container.style.width="90vw"
container.style.gap="2rem"
container.style.margin="auto"


baslik.style.fontSize="2rem"
baslik.style.color="mediumaquamarine"

input.style.border="none"
input.style.backgroundColor="#f0f0f0"
input.style.color="blackdsd"
input.style.height="2rem"
input.style.width="12rem"
input.style.borderRadius="12rem"
input.addEventListener("focus", function() {
    this.style.outline ="none";
});




ekleButon.style.height="2rem"
ekleButon.style.width="2rem"
ekleButon.style.borderRadius="10%"
ekleButon.style.cursor="pointer"
ekleButon.style.border="1px solid orange"



ekleButon.addEventListener("click",function() {
    if(input.value === "" || input.value.trim() === ""){
        return 
    }
    
    const newTodo= document.createElement("li")
    sil.style.display="inline-block"
    newTodo.style.borderBottom = "2px solid #ddd";
    newTodo.style.width="15rem"
    newTodo.style.display="flex"
    newTodo.style.justifyContent="space-between"
    newTodo.style.gap="3rem"
    newTodo.style.whiteSpace="nowrap"
    newTodo.style.overflow="hidden"
    newTodo.style.margin="1rem 0"

    const textLi=input.value.trim()
    newTodo.textContent=textLi
    const deleteButon=document.createElement("button")
    deleteButon.textContent=" -"
    deleteButon.style.border="none"
    deleteButon.style.backgroundColor="inherit"
    deleteButon.style.color="orange"
    deleteButon.style.fontSize="2rem"
    deleteButon.style.cursor="pointer"
    localStorage.setItem("newTodo",textLi)
    

    deleteButon.addEventListener("click", function() {
        newTodo.remove();
    
    });
    newTodo.appendChild(deleteButon)
    program.appendChild(newTodo)
    input.value=" "
    input.focus()
    
})

listeTop.style.display="flex"
listeTop.style.justifyContent="space-between"
listeTop.style.alignItems="center"
listeTop.style.gap="5rem"


program.style.listStyleType="none"
program.style.lineHeight="2rem"
program.style.margin="0 3rem 0 0"


taskList.style.color="orange"

sil.style.textDecoration="none"
sil.style.color="mediumaquamarine"

input.onkeydown=function(e) {
    if(e.code==="Enter"){
        ekleButon.click()
    }else if(e.code === "Delete"){
       const silinecek=document.querySelector("li:last-child");
       if(silinecek){
        silinecek.remove()
       }
       if (document.querySelectorAll("li").length === 0) {
        alert("Silinecek program kalmadı.");
        sil.style.display="none"
       }
    }

}


















