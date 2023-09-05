const container = document.querySelector('.container');
class Tache {
    constructor(tache, date){
        this.tache = tache;
        this.date = date; 

    }

    showAlert(message, className){
        const alert = document.createElement('div');
        alert.className = `alert ${className}`;
        alert.innerHTML = message;
        container.insertBefore(alert, todoForm);

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000);
    }

    addTacheToList(){
        const list = document.querySelector('.tache-list')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${this.tache} </td>
        <td>${this.date} </td>
        <td><button class="toggle">X</button></td>
        `;
        list.appendChild(row);
    }

    clearFields(){
        document.querySelector('#tache').value = ''; 
        document.querySelector('#date').value = ''; 
    }
}
// selectionner le formulaire 
const todoForm = document.querySelector('.todo-form');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //attribuer les valeurs du formulaire à notre constructeur 
    const tache = document.querySelector('#tache').value; 
    const date = document.querySelector('#date').value; 

    //creer une instance de notre class Book 
    const tache1 = new Tache (tache, date);


    // verifier si les champs sont remplis 
    if(tache === '' || date === ''){
        // alert error
        tache1.showAlert('Remplissez les champs', 'error');
    }else{
        // ajout à la liste 
        // alert succes 
        tache1.clearFields();
        tache1.addTacheToList();
        tache1.showAlert('Tache ajouté', 'success');
    }
});

const tacheList = document.querySelector('.tache-list');

tacheList.addEventListener('click', (e) => {
    if (e.target.classList.contains('toggle')) {
    let tacheRow = e.target.parentElement.parentElement;
        let tacheCell = tacheRow.querySelector('td:first-child');
        let dateCell = tacheRow.querySelector('td:nth-child(2)')

    tacheCell.classList.toggle('completed')
    dateCell.classList.toggle('completed')

    }

})