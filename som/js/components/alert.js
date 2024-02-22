

export default class Alert {
    constructor() {
        this.alert = document.getElementById('alert');
    }

    onAlert() {
        this.alert.style.display = 'block';
    }

    offAlert() {
        this.alert.style.display = 'none';
    }
}