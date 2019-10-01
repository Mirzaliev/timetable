export default ({ store }, inject) => {
  const wh = window.innerHeight
  const hh = document.getElementsByClassName('header')[0].offsetHeight
  const height = wh - hh
  store.dispatch('WINDOW_SIZE_CHANGED', height)
  window.onresize = () => {
    store.dispatch('WINDOW_SIZE_CHANGED', height)
  }
}
