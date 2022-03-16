import Vue from 'vue'
import Router from 'vue-router'
import try1 from './views/try1.vue'
import register from './views/register.vue'
import pageOne from './views/pageOne.vue'
import notice from './views/notice.vue'
import share from './views/share.vue'
import activity from './views/activity.vue'
import me from './views/me.vue'
import joinAct from './views/joinAct'
import quitAct from './views/quitAct'
import myact from './views/myact'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: '登录',
        component: try1,
        redirect:'/login',
        show:false,

    },{
         path:"/register",
         name:'register',
         component:register
      },{
         path:"/login",
         name:'login',
         component:try1
      },
      {
          path:"/user",
          name:'高校区域互助平台',
          component:pageOne,
          show:true,
          children:[
              {
                  path:'/notice',
                  component:notice,
                  name:'notice',
                  show:true
              },{
                  path:'/share',
                  component:share,
                  name:'share',
                  show:true
              },{
                  path:'/activity',
                  component:activity,
                  name:'activity',
                  show:true,
              },{
                  path:'/me',
                  component:me,
                  name:'me',
              },{
                  path:'/joinAct',
                  component:joinAct,
                  name:'joinAct',
                  show:false
              },{
                  path:'/quitAct',
                  component:quitAct,
                  name:'quitAct',
                  show:false
              },{
                  path:'/myact',
                  component:myact,
                  name:'我的活动',
                  show:false
              }
          ]
      }

  ]

})

