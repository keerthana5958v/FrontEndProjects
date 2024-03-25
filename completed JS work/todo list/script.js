const addNewTask = document.getElementById('addNewTask');
const Taskobj = {task:[],taskStatus:[]};


function createNewTask(){
    if(document.getElementById('txtBox').value != ''){
        const taskWrapper = document.createElement('div');
        taskWrapper.setAttribute('id','taskWrapper');

        const editBtn = document.createElement('div');
        editBtn.setAttribute('id','edit');
        editBtn.classList.add('editBtn')
        editBtn.textContent = 'Edit';


        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.setAttribute('id','delete');
        deleteBtn.textContent = 'delete;;';

        const displayWhatTask = document.createElement('input');
        displayWhatTask.value = document.getElementById('txtBox').value;
        displayWhatTask.classList.add('whatTask')
        displayWhatTask.disabled = true;
        displayWhatTask.setAttribute('id','taskInput');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox')
        checkbox.setAttribute('id','checkbox');

        taskWrapper.appendChild(checkbox);
        taskWrapper.appendChild(displayWhatTask);
        taskWrapper.appendChild(editBtn);
        taskWrapper.appendChild(deleteBtn);

        document.getElementById('taskManager').appendChild(taskWrapper);

        Taskobj.task.push(document.getElementById('txtBox').value);
        Taskobj.taskStatus.push(false);
        // }
    }
    else{
        console.log("enter task")
    }
    document.getElementById('txtBox').value = '';
}
let previousClickEvent = null;

document.body.addEventListener('click',function(event){
    if(event.target.id == 'addNewTask'){createNewTask()}
    let taskinput = document.querySelectorAll('.whatTask');
    let checkboxNum = document.querySelectorAll('.checkbox');


    let parentNodes = event.target.parentNode;
    const secondChild = parentNodes.childNodes[1];
    const editChild = parentNodes.childNodes[2];

    if (event.target.id == 'checkbox') {
        if(event.target.parentNode.childNodes[1].style.textDecoration == 'line-through'){
            event.target.parentNode.childNodes[1].style.textDecoration = 'none'
        }
        else{
            event.target.parentNode.childNodes[1].style.textDecoration= 'line-through';
        }
    }
    console.log(Taskobj)
    if(event.target.id == 'edit'){
        secondChild.disabled = !secondChild.disabled;
        if(secondChild.disabled){
            editChild.style.backgroundColor = 'blueviolet';
        }
        else{
            editChild.style.backgroundColor = 'brown';
        }

    }
    if(event.target.id != 'edit' && event.target.id != 'addNewTask' && event.target.id !='taskInput'){
        document.querySelectorAll('.whatTask').forEach(function(ele){
            ele.disabled = true;
        });
        document.querySelectorAll('.editBtn').forEach(function(ele){
            ele.style.backgroundColor = 'blueviolet';
        });
    }
    if(event.target.id != 'delete'){
        document.getElementById('dltConfirm').style.display = 'none';
    }
    if (event.target.id == 'delete'){ 
        document.getElementById('dltConfirm').style.display = 'flex';
        previousClickEvent = event;
    }
    if (event.target.id == 'areYouSureYouWantToDelete') {//yes
        previousClickEvent.target.parentNode.remove(); 
        document.getElementById('dltConfirm').style.display = 'none';
        previousClickEvent = null;
        // let checkBx = document.querySelectorAll('.checkbox');
        // for(let i = 0 ; i < checkBx.length; i ++){
        //     if(checkBx[i].checked){
        //         Taskobj.taskStatus[i] = true;
        //     }
        //     else{
        //         Taskobj.taskStatus[i] = false;
        //     }
        // } // to change task status
        // Taskobj.taskStatus.remove(taskStatus[checkBx.length - 1]);
    //     Taskobj.taskStatus.pop();
    // }
    if(event.target.id == 'doNotDeleteTask' || event.target.id == 'close'){//no delete
        document.getElementById('dltConfirm').style.display ='none';
    }

    for(let i = 0 ; i < checkboxNum.length; i ++){
        if(checkboxNum[i].checked){
            Taskobj.taskStatus[i] = true;
        }
        else{
            Taskobj.taskStatus[i] = false;
        }
    } // to change task status
    Taskobj.task = [];
    Taskobj.taskStatus = []
    for(let i = 0 ; i < document.querySelectorAll('.editBtn').length ; i++){
        Taskobj.task.push(document.querySelectorAll('.whatTask')[i].textContent);
    }

    // for(let i = 0; i < document.querySelectorAll('.whatTask').length ; i++){
    //     if (document.querySelectorAll('.whatTask')[i].style.lineDecoration == 'none') {
    //         Taskobj.taskStatus.push(false);
    //     }
    //     else {
    //         Taskobj.taskStatus.push(true);
    //     }
    // }
    checkboxNum = document.querySelectorAll('.checkbox');
    for(let i = 0 ; i < checkboxNum.length ; i++){
        if(checkboxNum[i].checked){
            console.log('checked');
        }else{
            console.log('unchecked');
        }
    }
    
}});

document.body.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
        createNewTask()
    }
});