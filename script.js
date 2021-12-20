const TASK_LIST = [
  { id: '1', name: 'Hacer la cama', completed: true },
  { id: '2', name: 'Hacer ejercicio', completed: true },
  { id: '3', name: 'Desayunar', completed: false }
];

document.body.onload = init;

function init() {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", addTask)
  loadTasksInDOM();
  const del = document.getElementById("delete-task-form");
  del.addEventListener("submit", deleteTask)
  const comp = document.getElementById("complete-task-form");
  comp.addEventListener("submit", completeTask)
  const mov = document.getElementById("mover-task-form");
  mov.addEventListener("submit", moverDOMTasks)
}

function loadTasksInDOM() {
  const listBody = document.getElementById("list-body");

  TASK_LIST.forEach(task => {
    const tr = document.createElement('tr');
    tr.className = 'list-row';
    const tdId = document.createElement('td');
    const tdName = document.createElement('td');
    const tdCompleted = document.createElement('td');

    tdId.innerText = task.id;
    tdId.className = 'list-head-item';
    tdName.innerText = task.name;
    tdName.className = 'list-head-item';
    tdCompleted.innerText = task.completed ? "completada" : "sin completar";
    tdCompleted.className = 'list-head-item';

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdCompleted);

    listBody.appendChild(tr)
  });
}

function addTask(event) {
  event.preventDefault();
  const newId = document.getElementById("new-task-id");
  const newName = document.getElementById("new-task-name");
  let isCreated = false;
  TASK_LIST.forEach( task => {
    if (task.id === newId.value) {isCreated = true;
    }
  });
if (isCreated) {
  alert (" Id repetido");
  return null;
}
  
  const newTask = {
    id: newId.value,
    name: newName.value,
    completed: false
  };

  TASK_LIST.push(newTask);
  removeDOMTasks();
  loadTasksInDOM();
}
function deleteTask(event) {
  event.preventDefault();
  const deleteId = document.getElementById("delete-task-id");
  let isCreatedTwo = false;
  TASK_LIST.forEach( task => {
    console.log(task);
    if (task.id == deleteId.value) {isCreatedTwo = true;
      const Indice = TASK_LIST.indexOf(task);
      TASK_LIST.splice(Indice,1);
      removeDOMTasks();
      loadTasksInDOM();
    }
    console.log("Id de la tarea", task.id);
    console.log(deleteId.value);
  });
if (isCreatedTwo) {
  alert("Id encontrado")
  //TASK_LIST.pop(newTask);
}
else {
  alert (" Id no existe");
  return null;
}
}
function completeTask(event) {
  event.preventDefault();
  const completeId = document.getElementById("complete-task-id");
  let isCreatedThree = false;
  TASK_LIST.forEach(task => {
    if (task.id == completeId.value) {
      isCreatedThree = true;
      const Indice = TASK_LIST.indexOf(task);
      TASK_LIST.splice(Indice,1,{id:task.id , name:task.name , completed:true})    
      removeDOMTasks();
      loadTasksInDOM();
    }
  }
  );
  if (isCreatedThree) {
    alert("Id encontrado")
    //TASK_LIST.pop(newTask);
  }
  else {
    alert (" Id no existe");
    return null;
  }
}

function removeDOMTasks() {
  const listBody = document.getElementById("list-body");
  while (listBody.lastChild){
    listBody.removeChild(listBody.lastChild);
  }
}

function moverDOMTasks(event) {
  event.preventDefault();
  const moverId = document.getElementById("mover-task-id");
  console.log("Id digitado",moverId.value)
  let isCreatedThree = false;
  TASK_LIST.forEach(task => {
    if (task.id == moverId.value) {
      isCreatedThree = true;
      const Indice = TASK_LIST.indexOf(task);
      console.log("objeto guardado", objectSaved);
      TASK_LIST.unshift(task);
      TASK_LIST.splice(Indice+1,1);    
      removeDOMTasks();
      loadTasksInDOM();
    }
  }
  );
  if (isCreatedThree) {
    alert("Id encontrado")
    //TASK_LIST.pop(newTask);
  }
  else {
    alert (" Id no existe");
    return null;
  }
}