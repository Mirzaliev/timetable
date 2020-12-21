export default function({ $axios, error: nuxtError, $config: { baseApiURL } }) {
  $axios.defaults.baseURL = baseApiURL
  //
  $axios.onError((error) => {
    nuxtError({
      statusCode: error.response.status,
      message: error.response.data
    })
    return Promise.resolve(false)
  })
}
