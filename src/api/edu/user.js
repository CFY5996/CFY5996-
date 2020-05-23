import request from '@/utils/request'

const api_name = '/admin/shop/user'
export default {
  getUserAndAddressAndOrder() {
    return request({
      url: `${api_name}`,
      method: 'get'
    })
  }
}
