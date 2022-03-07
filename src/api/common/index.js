import api from '@/api/index'

export default {
    area (params) {
      // return出去了一个promise
      return api.get('/api/user/area', params)
    },
    tableData (params) {
      // return出去了一个promise
      return api.get('/data/tableData', params)
    }
}