

export default class AddTask {
    constructor() {
        this.task = null;
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
        this.completed = document.getElementById('completed');
    }

    setValues(task) {
        this.task = task;
        this.title.title = task.title;
        this.description.value = task.description;
        this.completed.checked = task.completed;
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if (this.title.value === '' || this.description.value === '') {
                console.log('aaaa');
            } else {
                callback(this.title.value, this.description.value);
            }
        }
    }
}