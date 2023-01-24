const PAYMENT_METHODS = [
    { id: 1, name: 'BKash' },
    { id: 2, name: 'Nagad' },
    { id: 3, name: 'Card Payment' },
    { id: 4, name: 'Rocket' },
];

const dropdownWrapperElement = document.getElementById('js--custom-dropdown-wrapper');
const dropdownButtonElement = document.getElementById('js--btn-custom-dropdown');
const paymentNameElement = document.getElementById('js--payment-method');
const dropdownListElement = document.getElementById('js--custom-dorpdown-list');

let listItemElements = '';

function toggleDropdown() {
    dropdownWrapperElement.classList.toggle('show');
}

function generateListTemplate() {
    let paymentItemTemplate = `<li class="js--list-item" data-id="0">Update Payment Method</li>`;
    dropdownListElement.innerHTML = '';
    PAYMENT_METHODS.map((item, index) => {
        paymentItemTemplate += `<li class="js--list-item" data-id="${item.id}">${item.name}</li>`;
    });
    dropdownListElement.innerHTML += paymentItemTemplate;
}

function addClassOnSelectedItem(listItems, btnElement) {
    listItems.forEach(item => item.classList.add(item.textContent.trim() === btnElement.textContent.trim() ? 'selected' : 'unselected'));
}

function selectItem() {
    listItemElements.forEach(item => {
        item.addEventListener('click', function() {
            paymentNameElement.textContent = this.textContent;
            dropdownWrapperElement.classList.remove('show');
        });
    });
}

dropdownButtonElement.addEventListener('click', function() {
    toggleDropdown();
    generateListTemplate();
    listItemElements = document.querySelectorAll('.js--list-item');
    selectItem();
    addClassOnSelectedItem(listItemElements, this);
});

document.body.addEventListener('click', (event) => {
    console.log(event.target.closest('button'));
    if (event.target.closest('button').contain('.custom-select-dropdown__button')) return;
    dropdownWrapperElement.classList.remove('show');
});
