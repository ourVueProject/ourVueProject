import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';
import {
  random
} from './data/random'; // 导入random数据
export default {
  /**
   * mock start
   */
  start() { // 初始化函数
    let mock = new MockAdapter(axios); // 创建 MockAdapter 实例
    // 获取todo列表
    mock.onGet('/randoms').reply(config => { //  config 指 前台传过来的值
      //let id = config.data;
      //console.log(id);
      let mockrandom = random.map(rd => { // 重组 random数组，变成我们想要的数据
        return {
          randomid: rd.randomid,
          randomtit: rd.randomtit,
          randomcont: rd.randomcont
        };
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: random // 返回状态为200，并且返回todos数据
          }]);
        }, 200);
      });
    });
    mock.onPost('/randomitem').reply(config => {
        console.log(config.data);
        let {id} = JSON.parse(config.data);
        // console.log(str.data);
        // var jsonStr=str.replace("\"", "");
        // console.log(jsonStr);
        // let id = jsonStr.data.id;
        // console.log(jsonStr.data.data);
        //console.log(id);
        let mockrandom = random.map(rd => { // 重组 random数组，变成我们想要的数据
          return {
            randomid: rd.randomid,
            randomtit: rd.randomtit,
            randomcont: rd.randomcont
          };
        });
        return new Promise((resolve,reject) => {
            let randomit = null;
            setTimeout(() => {
                let hasrandom = mockrandom.some(element => {
                    if(element.randomid === id) {
                        randomit = JSON.parse(JSON.stringify(element));
                        console.log(randomit);
                        //randomitem.
                        return true
                    }else {
                        return false
                    }
                })
                if (hasrandom) {
                    resolve([200, { code: 200, msg: '获取成功', randomit }])
                }else {
                    resolve([404, { code: 404, msg: '获取失败' }])
                }
            }, 1000);
        });
    });
        // 新增一条todo
    // mock.onPost('/todo/addTodo').reply(config => {
    //   Todos.push({
    //     id: Mock.Random.guid(),
    //     title: 'newList',
    //     isDelete: false,
    //     locked: false,
    //     record: []
    //   });
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([200]);
    //     }, 200);
    //   });
    // });
  }
};
