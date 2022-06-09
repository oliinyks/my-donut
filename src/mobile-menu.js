// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[mobile-menu-open]"),
//     closeModalBtn: document.querySelector("[mobile-menu-close]"),
//     modal: document.querySelector("[mobile-menu]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

(() => {
 const refs = {
  openModalBtn: document.querySelector('[mobile-menu-open]'),
  closeModalBtn: document.querySelector('[mobile-menu-close]'),
  modal: document.querySelector('[mobile-menu]'),
  menuList: document.querySelector('.mobile-menu-nav___list'),
 };
 refs.openModalBtn.addEventListener('click', toggleModal);
 refs.closeModalBtn.addEventListener('click', toggleModal);
 refs.menuList.addEventListener('click', removeModal);
 function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
 }
 function removeModal() {
  refs.modal.classList.add('is-hidden');
 }
})();