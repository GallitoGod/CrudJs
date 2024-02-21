import AddTask from "./components/addTaskForm.js";
import Modal from "./components/modal.js";


export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addTaskForm = new AddTask();
        this.modal = new Modal();
        
        this.addTaskForm.onClick((title, description) => this.addTask(title, description));
        this.modal.onClick((id, values) => this.editTask(id, values));
    }

    render() {
        const tasks = this.model.getTasks();
        tasks.forEach((todo) => this.createRow(todo));
    }

    setModel(model) {
        this.model = model
    }

    addTask(title, description) {
        const task = this.model.addTask(title, description);
        this.createRow(task);
    }

    toggleCompleted(id) {
        this.model.toggleCompleted(id);
    }

    editTask(id, values) {
        this.model.editTask(id, values);
        const row = document.getElementById(id);
        row.children[0].innerHTML = values.title;
        row.children[1].innerHTML = values.description;
        row.children[2].children[0].checked = values.completed;
    }

    removeTask(id) {
        this.model.removeTask(id);
        document.getElementById(id).remove();
    }

    createRow(task) {
        const row = table.insertRow();
        row.setAttribute('id', task.id);
        row.innerHTML = `
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td class="comp"></td>
            <td class="btn-add-delete">
            </td>            
        `;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onclick = () => this.toggleCompleted(task.id);
        row.children[2].appendChild(checkbox);

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-edit');
        editBtn.innerHTML = `
            <span class="material-symbols-outlined">
                edit
            </span>
        `;
        editBtn.onclick = () => this.modal.setValues({
            id: task.id,
            title: row.children[0].innerHTML,
            description: row.children[1].innerHTML,
            completed: row.children[2].children[0].checked,
        });
        row.children[3].appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-delete');
        deleteBtn.innerHTML = `
            <span class="material-symbols-outlined">
                delete
            </span>
        `;
        deleteBtn.onclick = () => this.removeTask(task.id);
        row.children[3].appendChild(deleteBtn);
    }
}