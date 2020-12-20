import ApiRepository from '~/app/api/Repository'

export default (ctx, inject) => {
  inject('apiRepository', ApiRepository(ctx.$axios))
}
