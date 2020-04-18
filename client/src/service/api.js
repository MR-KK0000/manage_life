import vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'


Vue.use(VueAxios, axios)

var baseurl = "http://localhost:3000/"

export default{
    test(){
        return Vue.axios.get(baseurl+'api/gettest')
    },
}