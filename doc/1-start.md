数学基础：线性代数（矩阵运算部分）

小游戏
* 基于 DOM 的 H5 小游戏
* 基于 canvas 的 H5 小游戏（2D）
* 基于游戏引擎的 H5 小游戏

什么是微信小游戏
* 没有 Page 概念，通过 `game.js` 入口启动
* canvas 2D 游戏
* WebGL 3D 游戏
* 游戏引擎：cocos、laya
* 开发框架：three.js、phaser
* Adapter：浏览器 BOM、DOM API 模拟

优势
* 相比 APP 游戏轻量级
* 相比 H5 游戏性能好
* 社交属性传播快

什么是 WebGL
* GPU vs CPU
  * CPU 控制单元 + 缓存能力 + ALU
  * GPU 丰富的计算单元（ALU）
* GPU 业务场景
  * 图像处理
  * 深度学习
  * 3D 游戏渲染
  * 大数据
* 如何对 GPU 编程：不同显卡对于 OPENGL 的支持程度不同
  * WebGL
  * GLSL
* 渲染管线