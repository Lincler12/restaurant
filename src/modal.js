 const modal = (() => {
    const modalContentElement = document.getElementById('modal-content');
    const modalElement = document.getElementById('modal');
    const modalToggleElement = document.getElementById('modal-toggle-btn');




    function toggleModal() {
        modalElement.classList.toggle("modal-toggle");
        modalContentElement.classList.toggle('modal-toggle-content');
    }

    function changeBars() {
        modalToggleElement.classList.toggle("change");
    }
    modalToggleElement.addEventListener('click', toggleModal);
    modalToggleElement.addEventListener('click', changeBars);
})();


export {modal};