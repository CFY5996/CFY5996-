import request from '@/utils/request'

const api_name = '/eduservice/edu-teacher'
export default {

  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  // 通过ID删除讲师
  removeById(teacherId) {
    return request({
      url: `${api_name}/${teacherId}`,
      method: 'delete'
    })
  },
  // 添加讲师
  save(teacher) {
    return request({
      url: `${api_name}/save`,
      method: 'post', // 用data,表单传参
      data: teacher
    })
  },
  // 通过ID查询
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },
  // 通过ID修改讲师
  updateById(teacher) {
    return request({
      url: `${api_name}/${teacher.id}`,
      method: 'put',
      data: teacher
    })
  }
}
