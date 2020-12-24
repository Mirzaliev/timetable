export default function({ $axios, error: nuxtError, $config: { baseApiURL } }) {
  $axios.defaults.baseURL = baseApiURL
  $axios.onError((error) => {
    nuxtError({
      statusCode: 404,
      message: '404'
    })
    console.log(error)
    return Promise.resolve(false)
  })
}
