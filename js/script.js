let masterTodoList = []

// localstorage?
function getOldSession(){
    if(localStorage.getItem('todolist') != null){
        masterTodoList = JSON.parse(localStorage.getItem('todolist'))
        let transferDataFromOldStorageToHtml = masterTodoList.map(items=>items.text).join(" ")
        document.getElementById('show').innerHTML = transferDataFromOldStorageToHtml
    }
}

// end localstoare

function save(){
    localStorage.setItem('todolist', JSON.stringify(masterTodoList))
}

function addTodo()
{
    const item = document.getElementById('thingsToDo').value;
    const time = document.getElementById('datetime').value;
        masterTodoList.push({
        text: `${item}`,
        isDone:false,
        isPending: false,
        date: `${time}`
    })
    renderTodos(masterTodoList)
}

function renderTodos(arr)
{
    
    // let html = arr.map((item,i) =>
    // {
    //     return `<li>${item}<a href="#" onclick="remove(${i})">X</a></li>`
    // }).join("")
    // document.getElementById('show').innerHTML = `<ul>${html}</ul>`
    let html = ""
    for(let i = 0;i< arr.length;i++)
    {
        // html += `<li onclick="toggleDone(${i})" 
        // style="list-style-type: none;font-size:20pt" 
        // class="${arr[i].isDone ? 'Done': 'unDone'}">${arr[i].date}${arr[i].text}<a href="#" class="delete-mark"
        // onclick="remove(${i})">delete</li>\n`;

        //other ways

        html += `<li onclick="toggleDone(${i})"
        style="list-style-type: none;font-size:20pt;display:flex;justify-content:space-between" 
        class="${arr[i].isDone ? 'Done': 'unDone'} ${arr[i].isPending ? "is-open" : ""}">${arr[i].date}  ${arr[i].text}
        </li><span onclick="Opening(${i})"><a href=#">Opening<a></span>
        <span onclick="remove(${i})" style="margin-right:40px"><a href="#">Delete</a></span> 
        `
    }
    document.getElementById('show').innerHTML = `${html}`
    save()
}


function Opening(idx)
{

    masterTodoList[idx].isPending = !masterTodoList[idx].isPending;
    renderTodos(masterTodoList);
    // if(masterTodoList[idx].isPending == true)
    // {
    //     masterTodoList[idx].isPending = false
    //     renderTodos(masterTodoList)
    // }
    // else{
    //     masterTodoList[idx].isPending = true
    //     renderTodos(masterTodoList)
   
        
    // }
}


function openJob()
{
    let pending = masterTodoList.filter(items=>items.isPending === true)
    renderTodos(pending)
}

function remove(idx)
{

    masterTodoList.splice(idx,1)
    renderTodos(masterTodoList)
}


function solved()
{
    let solved = masterTodoList.filter(items=>items.isDone)
    renderTodos(solved)
}
function unSolved()
{
    let unSolved = masterTodoList.filter(items=>!items.isDone)
    renderTodos(unSolved)
}

function allTodos()
{
    renderTodos(masterTodoList)
}

function history()
{
    let i = masterTodoList.map()
    document.getElementById('show').innerHTML = i
}




function toggleDone(idx)
{
    if(masterTodoList[idx].isDone == true)
    {
     masterTodoList[idx].isDone = false
        renderTodos(masterTodoList)
        return 
    }
    else
    {
      masterTodoList[idx].isDone = true
        renderTodos(masterTodoList)
        return 
    }

}

function checkBoxFilter()
{
    let check = document.getElementById('btn-checkbox').checked
    if(check==true)
    {
        let checkUnDone = masterTodoList.filter(items => items.isDone === false)
        renderTodos(checkUnDone)
        return
    }
        renderTodos(masterTodoList) 
}


let input = document.getElementById("thingsToDo");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});