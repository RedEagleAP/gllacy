/*
 * Форма обратной ствязи
 */
/* eslint-disable */
let contactsBtn = document.querySelector('.contacts__btn')
let overlay = document.querySelector('.overlay')
let modal = document.querySelector('.modal')
let modalCloseBtn = modal.querySelector('.modal__close')

let feedbackForm = document.querySelector('#feedback-form')
let feedbackNameField = feedbackForm.querySelector('#feedback-name')
let feedbackEmailField = feedbackForm.querySelector('#feedback-email')
let feedbackTextarea = feedbackForm.querySelector('#feedback-textarea')

let isStorageSupport = true
let feedbackNameSaved = ''

try {
  feedbackNameSaved = localStorage.getItem('feedback-name')
} catch (err) {
  isStorageSupport = false
}

const appFeedbackForm = {
  ContactsBtn() {
    contactsBtn.addEventListener('click', (evt) => {
      evt.preventDefault()
      if (modal.classList.contains('modal--show-remove-item')) {
        modal.classList.remove('modal--show-remove-item')
      } else {
        modal.classList.add('modal--show-new-item')
        overlay.classList.add('overlay--show')
      }

      if (feedbackNameSaved) {
        feedbackNameField.value = feedbackNameSaved
        feedbackEmailField.focus()
      } else {
        feedbackNameField.focus()
      }
    })
  },

  ModalClose() {
    modalCloseBtn.addEventListener('click', (evt) => {
      evt.preventDefault()
      modal.classList.remove('modal--show-new-item')
      overlay.classList.remove('overlay--show')
      // modal.classList.remove('modal--error')
      modal.classList.add('modal--show-remove-item')
    })
  },

  SubmitForm() {
    feedbackForm.addEventListener('submit', (evt) => {
      if (!feedbackNameField.value || !feedbackEmailField.value || !feedbackTextarea.value) {
        evt.preventDefault()
          // modal.classList.remove('modal--error')
          // modal.classList.add('modal--error')
      } else if (isStorageSupport) {
        localStorage.setItem('feedback-name', feedbackNameField.value)
      }
    })
  },

  Esc() {
    window.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        if (modal.classList.contains('modal--show-new-item')) {
          evt.preventDefault()
          modal.classList.remove('modal--show-new-item')
          overlay.classList.remove('overlay--show')
          // modal.classList.remove('modal--error')
          modal.classList.add('modal--show-remove-item')
        }
      }
    })
  },

  init() {
    this.ContactsBtn()
    this.ModalClose()
    this.SubmitForm()
    this.Esc()
  },
}

export default appFeedbackForm
