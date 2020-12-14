import Vue from 'vue'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'
// see docs for available options
const datepickerOptions = {
  sundayFirst: false,
  dateLabelFormat: 'dddd, MMMM D, YYYY',
  days: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ],
  daysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  colors: {
    selected: '#00a699',
    inRange: '#66e2da',
    selectedText: '#fff',
    text: '#565a5c',
    inRangeBorder: '#33dacd',
    disabled: '#fff',
    hoveredInRange: '#67f6ee'
  },
  texts: {
    apply: 'Apply',
    cancel: 'Cancel',
    keyboardShortcuts: 'Keyboard Shortcuts'
  },
  ariaLabels: {
    chooseDate: (date) => date,
    chooseStartDate: (date) => `Choose ${date} as your start date.`,
    chooseEndDate: (date) => `Choose ${date} as your end date.`,
    selectedDate: (date) => `Selected. ${date}`,
    unavailableDate: (date) => `Not available. ${date}`,
    previousMonth: 'Move backward to switch to the previous month.',
    nextMonth: 'Move forward to switch to the next month.',
    closeDatepicker: 'Close calendar',
    openKeyboardShortcutsMenu: 'Open keyboard shortcuts menu.',
    closeKeyboardShortcutsMenu: 'Close keyboard shortcuts menu'
  },
  keyboardShortcuts: [
    {
      symbol: '↵',
      label: 'Select the date in focus',
      symbolDescription: 'Enter key'
    },
    {
      symbol: '←/→',
      label: 'Move backward (left) and forward (right) by one day.',
      symbolDescription: 'Left or right arrow keys'
    },
    {
      symbol: '↑/↓',
      label: 'Move backward (up) and forward (down) by one week.',
      symbolDescription: 'Up or down arrow keys'
    },
    {
      symbol: 'PgUp/PgDn',
      label: 'Switch months.',
      symbolDescription: 'PageUp and PageDown keys'
    },
    {
      symbol: 'Home/End',
      label: 'Go to the first or last day of a week.',
      symbolDescription: 'Home or End keys'
    },
    {
      symbol: 'Esc',
      label: 'Close this panel',
      symbolDescription: 'Escape key'
    },
    {
      symbol: '?',
      label: 'Open this panel',
      symbolDescription: 'Question mark'
    }
  ]
}

// make sure we can use it in our components
Vue.use(AirbnbStyleDatepicker, datepickerOptions)
