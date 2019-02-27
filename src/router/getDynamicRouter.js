/*
  动态获取路由的方法
*/
import {
  dynamicRouter,
  allNo
} from './index'

export function getRouter(userSetMenu) {
  var arr = []

  dynamicRouter.forEach((item) => {

    if (item.children) {
      userSetMenu.find((e, index) => {
        let newArr = {
          path: item.path,
          name: item.name,
          component: item.component,
          children: []
        };

        arr.push(newArr)
        item.children.forEach(child => {
          if (userSetMenu[index].children) {
            userSetMenu[index].children.find(userItem => {
              userItem.path == child.path ? arr[arr.length ? arr.length - 1 : arr.length].children.push(child) : arr = arr;
            })
          }

        })

      })
    } else {
      userSetMenu.find(e => {
        e.path == item.path ? arr.push(item) : arr = arr;
      })
    }
  });
  arr.push(allNo)
  return arr;
}
