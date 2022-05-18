const englishTask = document.getElementById('english');
const malayalamTask = document.getElementById('malayalam');
const hindiTask = document.getElementById('hindi');
const evsTask = document.getElementById('evs');
const mathTask = document.getElementById('math');
const csTask = document.getElementById('cs');
const plpTask = document.getElementById('plp');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task__container');
const scheduleContainer = document.querySelector('.schedule__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn__no');
const yesBtn = document.getElementById('btn__yes');

let selectedColor, active;

//Event Listeners
taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetTasks);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks);

// Tasks click  (3)
function selectTask (e){
    resetTasks()

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'english':
            activeTask(englishTask, taskColor);
            icon = '<i class="fa-duotone fa-font-case"></i>';
            break
        case 'malayalam':
            activeTask(malayalamTask, taskColor);
            icon = '<i class="fas fa-dumbbell"></i>';
            break
        case 'hindi':
            activeTask(hindiTask, taskColor);
            icon = '<i class="fas fa-book"></i>';
            break
        case 'evs':
            activeTask(evsTask, taskColor);
            icon = '<i class="fas fa-tv"></i>';
            break
        case 'math':
            activeTask(mathTask, taskColor);
            icon = '<i class="fas fa-users"></i>';
            break
        case 'cs':
            activeTask(csTask, taskColor);
            icon = '<i class="fas fa-briefcase"></i>';
            break
        case 'plp':
            activeTask(plpTask, taskColor);
            icon = '<i class="fas fa-briefcase"></i>';
            break
    }

};

// Set colors for schedule (4)
function setColors (e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
};

// Active task (1)
function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

// Reset tasks (2)
function resetTasks(){
    const allTasks = document.querySelectorAll('.task__name');

    allTasks.forEach((item)=>{
        item.className = 'task__name';
    })
}

// Delete tasks
function deleteTasks(){
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

// Open Pop-up
function openPopup(){
    popUp.style.display = 'flex';
}

// Close Pop-up
function closePopup(){
    popUp.style.display = 'none';
}