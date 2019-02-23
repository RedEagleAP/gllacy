/*
 * Форма обратной ствязи
 */
let contactsBtn = document.querySelector('.contacts__btn')
let overlay = document.querySelector('.overlay')
let modalFeedback = document.querySelector('.feedback')
let modalFeedbackCloseBtn = modalFeedback.querySelector('.modal__close')
let feedbackForm = document.querySelector('#feedback-form')
let feedbackNameField = feedbackForm.querySelector('#feedback-name')
let feedbackEmailField = feedbackForm.querySelector('#feedback-email')
let feedbackNameSaved = localStorage.getItem('feedback-name')

const appFeedbackForm = {
  ContactsBtn() {
    contactsBtn.addEventListener('click', (evt) => {
      evt.preventDefault()
      modalFeedback.classList.add('feedback--show-fadeout')
      overlay.classList.add('overlay--show')
      if (feedbackNameSaved) {
        feedbackNameField.value = feedbackNameSaved
        feedbackEmailField.focus()
      } else {
        feedbackNameField.focus()
      }
    })
  },

  ModalCloseBtn() {
    modalFeedbackCloseBtn.addEventListener('click', (evt) => {
      evt.preventDefault()
      modalFeedback.classList.remove('feedback--show-fadeout')
      overlay.classList.remove('overlay--show')
    })
  },

  FeedbackForm() {
    feedbackForm.addEventListener('submit', (evt) => {
      localStorage.setItem('feedback-name', feedbackNameField.value)
    })
  },

  Keydown() {
    window.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        if (modalFeedback.classList.contains('feedback--show-fadeout')) {
          modalFeedback.classList.remove('feedback--show-fadeout')
          overlay.classList.remove('overlay--show')
        }
      }
    })
  },

  init() {
    this.ContactsBtn()
    this.ModalCloseBtn()
    this.FeedbackForm()
    this.Keydown()
  },
}

export default appFeedbackForm
