export default function(context) {
  if (process.client) {
    context.userAgent = window.innerHeight
  }
}
