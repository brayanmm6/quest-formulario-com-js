const inputAction = document.querySelectorAll(".input-action")
const submitButton = document.getElementById("submit-button")
const errorMessage = document.querySelectorAll(".error-message")

inputAction.forEach((itemInput, index) =>{
    itemInput.addEventListener("change", function(){
        if(itemInput.value){
            itemInput.classList.add("border-green")
        }else{
            itemInput.classList.remove("border-green")
        }
    })

    submitButton.addEventListener("click", function(e){
        e.preventDefault()
        if(itemInput.value.length <= 0){
            errorMessage[index].classList.remove("hide-error-message")
            itemInput.classList.add("border-red")
        }else{
            errorMessage[index].classList.add("hide-error-message")
            itemInput.classList.remove("border-red")
        }
    })
})