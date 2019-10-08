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
        html += `<li onclick="toggleDone(${i})" style="list-style-type: none;font-size:20pt" class="${arr[i].isDone ? 'Done': 'unDone'}">${arr[i].date}${arr[i].text}<a href="#" onclick="remove(${i})">${arr[i].isDone ? '  MarkUndone <a style="cursor:pointer">X</a>' : '   MarkDone <a style="cursor:pointer">X</a>'}</a> </li>\n`;
    }
    console.log("test html",html)
    document.getElementById('show').innerHTML = `<ul>${html}</ul>`
    save()
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


var input = document.getElementById("thingsToDo");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});