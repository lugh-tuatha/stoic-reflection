import '../css/styles.css';

import './api';

/*---------------- open add dialog ----------------*/
const openAddModal = document.querySelector('[data-open-add-modal]')
const addModal = document.querySelector('[data-add-modal]')
const closeAddModal = document.querySelector('[data-close-add-modal]')

openAddModal.addEventListener("click", () => {
    addModal.showModal()
})

closeAddModal.addEventListener("click", () => {
    addModal.close()
})