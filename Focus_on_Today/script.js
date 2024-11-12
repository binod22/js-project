const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputField = document.querySelectorAll(".goal-input")
const errorlabel = document.querySelector('.alert-label');
const progressbar = document.querySelector('.progress-bar')
const progressvalue = document.querySelector('.progress-value')

const allgoals = JSON.parse(localStorage.getItem('allgoals')) || {};
let completedGoalCount=Object.values(allgoals).filter((goal) => goal.completed).length
checkBoxList.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        const allFieldsFilled = [...inputField].every((input)=>{
            return input.value
        })
        if(allFieldsFilled){
        box.parentElement.classList.toggle('completed')
        
        inputID = box.nextElementSibling.id
        allgoals[inputID].completed = !allgoals[inputID].completed;
        completedGoalCount=Object.values(allgoals).filter((goal) => goal.completed).length
        console.log(completedGoalCount) 
        progressvalue.style.width = `${33.33*completedGoalCount}%`
        progressvalue.innerHTML = `<span>${completedGoalCount}/3 Completed</span>`
        localStorage.setItem('allgoals',JSON.stringify(allgoals))
        }
        else{
            progressbar.classList.add('show-error')
        }
    })
})

inputField.forEach((input)=>{
    input.value = allgoals[input.id].name
    if(allgoals[input.id].completed){
        input.parentElement.classList.add('completed')
    }
    input.addEventListener('focus',(e)=>{
        progressbar.classList.remove('show-error')

    })
    input.addEventListener('input',(e)=>{
        allgoals[input.id]= {
            name : input.value,
            completed: false
        }
        localStorage.setItem('allgoals',JSON.stringify(allgoals))
    })
})


