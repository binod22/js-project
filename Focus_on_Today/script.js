const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputField = document.querySelectorAll(".goal-input")
const errorlabel = document.querySelector('.alert-label');
const progressbar = document.querySelector('.progress-bar')
const progressvalue = document.querySelector('.progress-value')

console.log(checkBoxList);
checkBoxList.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        const allFieldsFilled = [...inputField].every((input)=>{
            return input.value
        })
        if(allFieldsFilled){
        box.parentElement.classList.toggle('completed')
        }
        else{
            progressbar.classList.add('show-error')
        }
    })
})

inputField.forEach((input)=>{
    input.addEventListener('focus',(e)=>{
        progressbar.classList.remove('show-error')
    })
})
