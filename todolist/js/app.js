// UI 

const form = document.getElementById("task-form");
const taskinput = document.getElementById("task");
const filter = document.getElementById('filter');
const tasklist = document.querySelector(".collection");
const clearbtn = document.querySelector('.clear-tasks');

function addtask(e){
    // console.log('hay');

    if(taskinput.value === ''){
        window.alert("Add a task");
        return;
    }

    // console.log(taskinput.value);

    // create li element 
    const li = document.createElement('li');
    
    // add class 
    // li.classList.add('collection-item')
    li.className = "collection-item";

    // create test node append to li 
    li.appendChild(document.createTextNode(taskinput.value));
    
    // create link 
    const link = document.createElement("a");
    
    // add class 
    link.className = "delete-item secondary-content";
    
    // add icon 
    link.innerHTML = `<i class="far fa-trash-alt"></i>`;

    // console.log(link);
    // append link to li 
    li.appendChild(link);

    // append li to ul 
    tasklist.appendChild(li);
    
    // console.log(li);

    // store task 
    storetaskinlocalstroage(taskinput.value);

    e.preventDefault();
}

// Remove Task 
function removetask(e){
    // console.log(e.target);
    // console.log(e.target.parentElement);

    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('delete item');

        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }

    }

    removetaskfromlocalstorage(e.target.parentElement.parentElement);
}

// Clear Task
function cleartasks(){
    // console.log('hay');

    // Method 1
    // tasklist.innerHTML = '';

    // Method 2
    // console.log(tasklist);
    // console.log(tasklist.childElementCount);

    // let x = 0;
    // while(x < tasklist.childElementCount){
    //     // tasklist.removeChild(tasklist.firstChild);
    // }

    // Method 3

    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

    cleartasksfromlocalstorage();
}


// Store Task
function storetaskinlocalstroage(task){
    // console.log(task);

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Get Task from local storage
function gettasks(){
    // console.log('hay');

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task)=>{
        // console.log(task);

        // create li element
        const li = document.createElement('li');

        // add class
        li.className = "collection-item";

        // create text node and append to li
        li.appendChild(document.createTextNode(task));

        // create new link element
        const link = document.createElement('a');
        // add class
        link.className = "delete-item secondary-content";
        // add icon
        link.innerHTML = `<i class="far fa-trash-alt"></i>`;
        // append link into li
        li.appendChild(link);

        // console.log(li);

        // append li to ul
        tasklist.appendChild(li);

    });
}

// Remove task from local storage
function removetaskfromlocalstorage(taskitem){
    // console.log('hay');
    // console.log(taskitem);
    // console.log(taskitem.textContent);

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task,index)=>{
        // console.log(task);

        if(taskitem.textContent === task){
                // start(index),end(how many)
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Clear all tasks from local storage
function cleartasksfromlocalstorage(){
    localStorage.clear();
}

// Filter Tasks
function filtertasks(e){
    // console.log('hay');
    // console.log(e.target.value);

    const inputfilter = e.target.value.toLowerCase();
    // console.log(inputfilter);

    const tasks = document.querySelectorAll('.collection-item');
    // console.log(tasks);

    tasks.forEach((task)=>{
        // console.log(task);

        const item = task.firstChild.textContent.toLocaleLowerCase();
        // console.log(item);

        if(item.indexOf(inputfilter) !== -1){
            task.style.display = "block";
        }else{
            task.style.display = "none";
        }
    });
}


// Event Listener 
// Add Task 
form.addEventListener("submit", addtask);

// Remove Task 
tasklist.addEventListener('click', removetask);

// Clear Task 
clearbtn.addEventListener('click', cleartasks);

// DOM Load
document.addEventListener('DOMContentLoaded',gettasks);

// Filter task
filter.addEventListener('keyup',filtertasks);