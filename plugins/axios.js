export default function({ $axios, store }) {
  $axios.defaults.baseURL = 'http://localhost:4000'
  $axios.onError((err) => {
    store.error = err.response.data
    console.log('ИЗ сервера' + err.response.data)
  })
}
