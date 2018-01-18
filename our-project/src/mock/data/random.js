import Mock from 'mockjs';

let random = [];

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i <= count.length; i++) {
  random.push(Mock.mock({ // 根据数据模板生成模拟数据。
    randomid: Mock.mock('@id'), // 随机id
    randomtit: Mock.mock('@ctitle'), // 随机标题
    randomcont: Mock.mock('@cparagraph')
  }));
}
export { // 导出列表数据
  random
};
