/**
 * Scripts
 */

import bodyClass from '../scripts/bodyclass'
import disableHover from '../scripts/disableHover'
import resizeClass from '../scripts/resizeClass'
import appFeedbackForm from '../scripts/appFeedbackForm'
import contactsMap from '../scripts/contactsMap'

// Modules Array
const scriptsArray = [bodyClass, disableHover, resizeClass, appFeedbackForm, contactsMap]

const scripts = {
  // Scripts
  Scripts() {
    if (scriptsArray.length > 0 && scriptsArray !== undefined) {
      scriptsArray.forEach((script) => {
        script.init()
      })
    }
  },

  init() {
    this.Scripts()
  },
}

export default scripts
