

export default class Modal {
    constructor() {
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.completed = document.getElementById('modal-completed');
        this.modal = document.getElementById('modal');
        this.overlay = document.getElementById('overlay');
        this.btnClose = document.getElementById('close-modal');
        this.btnClose1 = document.getElementById('btn-close');
        this.btnSave = document.getElementById('btn-save');

        this.task = null;
        this.btnClose.onclick = () => this.offModal();
        this.btnClose1.onclick = () => this.offModal();
    }

    setValues(task) {
        this.task = task;
        this.title.value = this.task.title;
        this.description.value = this.task.description;
        this.completed.checked = this.task.completed;
        this.modal.style.display = 'block';
        this.overlay.style.display = 'block';
    }

    offModal() {
        this.modal.style.display = 'none';
        this.overlay.style.display = 'none';
    }

    onClick(callback) {
        this.btnSave.onclick = () => {
            this.offModal();
            callback(this.task.id, {
                title: this.title.value,
                description: this.description.value,
                completed: this.completed.checked,
            });
        }
    }


}