export default function({ $axios, store, $config: { baseApiURL } }) {
  $axios.defaults.baseURL = baseApiURL
  //
  $axios.onError((err) => {
    store.error = err.response.data
    alert(err)
    console.log('ИЗ сервера' + err.response.data)
  })
}
