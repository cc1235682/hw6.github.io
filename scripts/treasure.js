// 模拟宝藏地图API
class TreasureMap {
  static getInitialClue() {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve("在古老的图书馆里找到了第一个线索...");
          }, 1000);
      });
  }

  static decodeAncientScript(clue) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (!clue) {
                  reject("没有线索可以解码!");
              }
              resolve("解码成功!宝藏在一座古老的神庙中...");
          }, 1500);
      });
  }

  static searchTemple(location) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              const random = Math.random();
              if (random < 0.5) {
                  reject("糟糕!遇到了神庙守卫!");
              }
              resolve("找到了一个神秘的箱子...");
          }, 2000);
      });
  }

  static openTreasureBox() {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              const random = Math.random();
              if (random < 0.3) {
                  reject("箱子里什么都没有，只有一张恶搞的纸条...");
              }
              resolve("恭喜!你找到了传说中的宝藏!");
          }, 1000);
      });
  }
}


async function findTreasure() {
  try {
      
      let clue = await TreasureMap.getInitialClue();
      updateStatus(clue); 
      console.log(clue);
      
      
      let location = await TreasureMap.decodeAncientScript(clue);
      updateStatus(location);  
      console.log(location);
      
      
      let box = await TreasureMap.searchTemple(location);
      updateStatus(box);  
      console.log(box);
      
      
      let treasure = await TreasureMap.openTreasureBox();
      updateStatus(treasure); 
      console.log(treasure);

  } catch (error) {
      console.error("任务失败:", error);
      updateStatus(`任务失败: ${error}`); 
  }
}

// 更新页面状态的函数
function updateStatus(message) {
  const statusElement = document.getElementById("status");
  statusElement.textContent = message;
}

// 确保 DOM 完全加载后再执行事件绑定
document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-btn');
  startButton.addEventListener("click", function() {
    findTreasure();
  });
});
