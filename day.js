// 获取包含数字的容器元素
const numberContainer = document.getElementById('number-container');

// 设置基准日期
const baseDate = new Date('2023-05-20'); // 修改为你需要的基准日期

// 更新数字显示函数
function updateNumber() {
  const currentDate = new Date();
  const timeDiff = Math.floor((currentDate - baseDate) / (1000 * 60 * 60 * 24));
  const number = 111 + timeDiff;
  numberContainer.textContent = number;
}

// 更新初始数字
updateNumber();