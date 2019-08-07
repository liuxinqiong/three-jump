MVP 概念：最小可行产品（Minimum Viable Product）

基本想法：快速地构建出符合产品预期功能的最小功能集合，这个最小集合所包含的功能足以满足产品部署的要求并能检验有关客户与产品交互的关键假设

MVP 版本功能点

- 整体场景的生成设置
- 物体的降落逻辑
- bottle 的跳跃过程逻辑（物理引擎）
- bottle 的跳跃结果逻辑（碰撞检测）
- 实现分数 + 1 累计
- 分数上传到 CloudStorage

优化版本

- 降落的弹性
- 粒子聚集的效果
- 跳跃尾部动态优化
- 跳跃失败动画
- 物体降落弹性动画

社交优化版本

- 分享到微信群
- 分享给朋友
- 增加排行版
- 观战模式

最终版本

- 增加开始页面
- 优化积分策略
- 增加音乐效果
- 增加 block 类型和纹理类型

代码结构

```shell
├── confs # 配置相关信息
├── libs # 通用功能
├── res # 静态资源
├── src # 源代码
    ├── block
    ├── game
    ├── objects // 场景常用对象
    ├── pages
    ├── scene
    ├── utils
    ├── view2d
    ├── view3d
    ├── main.js
├── game.js # 入口文件
```

基本场景搭建

- 使用 THREE 在场景中渲染出元素
- 视角和 Camera 设置
- Light 和 Shadow 设置
- bottle 和 block 物体设置

MVC VS MVVM

- MVC：View 和 Model 通常是相互影响的，因此增加 Controller 这个中间角色来解耦代码，模块划分
- MVVM：将 Controller 层换成 ViewModel，ViewModel 层的数据驱动完全是在框架中进行管理，无需开发者进行控制逻辑的开发

项目 scene 和 camera 设置：相机整体斜上方看原点位置
