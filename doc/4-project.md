MVP 概念：最小可行产品（Minimum Viable Product）

基本想法：快速地构建出符合产品预期功能的最小功能集合，这个最小集合所包含的功能足以满足产品部署的要求并能检验有关客户与产品交互的关键假设

MVP 版本功能点
* 整体场景的生成设置
* 物体的降落逻辑
* bottle 的跳跃过程逻辑（物理引擎）
* bottle 的跳跃结果逻辑（碰撞检测）
* 实现分数 + 1 累计
* 分数上传到 CloudStorage

优化版本
* 降落的弹性
* 粒子聚集的效果
* 跳跃尾部动态优化
* 跳跃失败动画
* 物体降落弹性动画

社交优化版本
* 分享到微信群
* 分享给朋友
* 增加排行版
* 观战模式

最终版本
* 增加开始页面
* 优化积分策略
* 增加音乐效果
* 增加 block 类型和纹理类型

代码结构
```shell
├── confs # 配置相关信息
├── libs # 通用功能
├── res # 静态资源
├── src # 源代码
    ├── block
    ├── game
    ├── objects
    ├── pages
    ├── scene
    ├── utils
    ├── view2d
    ├── view3d
    ├── main.js
├── game.js # 入口文件
```

基本场景搭建
* 使用 THREE 在场景中渲染出元素
* 视角和 Camera 设置
* Light 和 Shadow 设置
* bottle 和 block 物体设置

三大核心对象关系
* THREE.WebGLRenderer 包含 THREE.Scene 和 THREE.Camera，指定场景和 Camera，指定的是 Viewport mapping
* THREE.Scene 包含 Object、Texture、Light，局部坐标系到世界坐标系的转换
* THREE.Camera 在 Viewing transformation（Camera 位置和望向的位置） 和 Projection transformation 体现
* Scene 全局坐标，Camera 相机坐标

基本场景渲染：
1. Local(Object) Space 局部坐标系（对象坐标系）=>
2. Modeling transformation（模型变换）=>
3. World Space（世界坐标系）=>
4. View transformation（视变化）=>
5. Eye Space（眼坐标系，照相机坐标系）=>
6. Projection transformation（投影变化）=>
7. Clip Space（裁剪坐标系）=>
8. Perspective divide（透视除法）=>
9. NDC space（规范化设备坐标系 Normalized Device Coordinates =>
10. Viewport mapping（视口变化）=>
11. 屏幕坐标系（Screen space）

模型变换 => 视变换 => 投影变化

三角形是如何被渲染出来的？最终顶点坐标 = 投影矩阵 * 视图矩阵 * 模型矩阵 * 顶点坐标

世界坐标系 => 观察者坐标系：将世界坐标系通过旋转平移至观察者坐标系，这个旋转 R 和平移 T 矩阵的组合矩阵 M=T*R，则视图矩阵为：view = M 的逆矩阵

模型矩阵是相对世界坐标系的变化，但是大多数情况下，我们更关注物体相对于观察者的坐标变化，这决定了最终才 canvas 上渲染的结果

投影矩阵：并不是摄像机空间中所有的物体都能最终被观察到，只有在摄像机空间中位于视景体内（投影范围内）的物体才能最终被观察到，因此，将摄像机空间内视景体内的部分独立出来经过处理后就成为了裁剪空间

投影变化是将摄像机坐标系下的物体变换到裁剪坐标系，投影变化是通过乘以投影矩阵实现

投影分两步
1. 从 Frustum 内一点投影到近裁剪平面过程
2. 由近平面到规范化设备坐标系（-1~1）的过程

> Vector4 第四位就是缩放系数 w，用于控制透视中劲近大远小逻辑

扩展：投影矩阵推导、视图矩阵推导

MVC VS MVVM
* MVC：View 和 Model 通常是相互影响的，因此增加 Controller 这个中间角色来解耦代码，模块划分
* MVVM：将 Controller 层换成 ViewModel，ViewModel 层的数据驱动完全是在框架中进行管理，无需开发者进行控制逻辑的开发