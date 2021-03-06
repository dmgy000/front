import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Router from "vue-router";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


router.beforeEach((to, from, next) => {
    if (to.path.startsWith('/login')) {
        window.localStorage.removeItem('access-admin')
        next()
    } else {
        let admin=JSON.parse(window.localStorage.getItem('access-admin'))
        if (!admin) {
            next({path:'/login'})
        } else {
            axios({
                url:'http://localhost:8181/checkToken',
                method:'get',
                headers:{
                    token:admin.token
                }
            }).then((resp) => {
              console.log(resp.data)
              if(!resp.data){
                alert("身份已过期")
                next({path:'/login'})
              }
            })
            next()
        }
    }
})
