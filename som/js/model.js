

export default class Model {
    constructor() {
        this.view = null;
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        if ( !this.tasks || this.tasks.length < 1 ) {
            this.tasks = [
                {
                    id: 0,
                    title: 'Title',
                    description: 'Description',
                    completed: false
                },
            ];
            this.currentId = 1;
        } else {
            this.currentId = this.tasks[this.tasks.length - 1].id + 1;
        }
        console.log(this.tasks.length);
        console.log(this.tasks);
    }

    setView(view) {
        this.view = view;
    }

    getTasks() {
        return this.tasks.map((task) => ({...task}));
    }

    save() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    findTask(id) {
        return this.tasks.findIndex(todo => todo.id === id);
    }

    toggleCompleted(id) {
        const index = this.findTask(id);
        const task = this.tasks[index];
        task.completed = !task.completed;
        this.save();
        console.log(task);
    }

    editTask(id, values) {
        const index = this.findTask(id);
        Object.assign(this.tasks[index], values);
        this.save();
    }

    addTask(title, description) {
        const task = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        };
        this.tasks.push(task);
        this.save();
        return {...task};
    }

    removeTask(id) {
        const index = this.findTask(id);
        this.tasks.splice(index, 1);
        this.save();
    }
}