// Минимальная логика модального окна <dialog>: открыть и закрыть.
const modal = document.querySelector('.modal');

if (modal) {
  document.querySelectorAll('[data-modal-open]').forEach((button) => {
    button.addEventListener('click', () => modal.showModal());
  });
  document.querySelectorAll('[data-modal-close]').forEach((button) => {
    button.addEventListener('click', () => modal.close());
  });
}
