THREEJS 是 WEBGL 的封装

- Geometries
  - Circle
  - Box
  - Cylinder
  - Sphere
- Light
  - AmbientLight
  - DirectionalLight
- Materials
  - LineDashedMaterial
  - MeshPhongMaterial
- Cameras
  - PerspectiveCamera
  - OrthographicCamera

三个核心东西

- WebGLRenderer 渲染器
- Camera 相机
- Scene 场景

坐标系：右手坐标系

三大核心对象关系

- THREE.WebGLRenderer 包含 THREE.Scene 和 THREE.Camera，指定场景和 Camera，指定的是 Viewport mapping
- THREE.Scene 包含 Object、Texture、Light，局部坐标系到世界坐标系的转换
- THREE.Camera 在 Viewing transformation（Camera 位置和望向的位置） 和 Projection transformation 体现
- Scene 全局坐标，Camera 相机坐标

光照的原理

- 粗糙的物体表面向各个方向等强度地反射光，这个等同地散射现象称为光的漫反射（Diffuse Reflection）
- 漫反射模型和视点无关，与入射光、入射点、物体材质相关
- 漫反射模型可以表现出粗糙表面的关照现象，如墙壁、纸张等，但是无法很好的表现出光泽金属所有的镜面反射
- Phong 模型认为镜面反射的光强与反射光线和视线的夹角相关

* 光源类型
  - 点光源（PointLight）
  - 平行光（DirectionalLight）
  - 环境光（黑夜 AmbientLight）
  - 聚光灯（SpotLight）
* 光照模型：真实世界物体材质进行最优化的模拟
  - Phong 模型：常规和经典模型
  - Lambert 模型：理想的漫反射模型，毛玻璃，粗糙材质模型，和视点无关
  - Blinn-Phong：基于 Phong 模型上的性能优化，大部分情况下不会影响效果，但减少了计算量
  - Cook-Torrance：相对复杂模型
* Phong Reflection = Ambient + Diffuse + Sepcular
  - Ambient：全局光，没有光照强弱，物体本身区域范围和基本轮廓
  - Diffuse：漫反射，不同部分会有光照差异
  - Sepcular：金属高光

开启 shadow 基本设置

- 渲染器启用阴影：renderer.shadowMapEnabled
- 能形成阴影的光源：DirectionalLight SpotLight
- 能够表现阴影的材质：LambertMaterial PhongMaterial
- 光源启用阴影：castShadow
- 物体投射阴影：castShadow
- 物理接受阴影：receiveShadow

Camera 基本知识

- camera.position：相机所在的位置，默认为（0，0，0）
- camera.lookAt：相机焦点方向，默认为 Z 轴负半轴方向
- camera.up：坐标轴向上方向，默认（0，1，0）。PS：要设置在 camera.lookAt 前才有效，原点到 up 点的向量即为整个空间坐标系垂直向上的方向。

Mesh 基本知识

- position：决定该对象相对其父对象的位置，多数情况下父对象是 Scene 对象
  - 直接设置相关属性 position.x
  - 一次性设置：position.set
  - 赋值 THREE.Vector3 对象
  - 默认位置父元素中心点，对于 Scene 而言就是原点
- rotation 旋转
- scale 缩放
- translateX translateY
- visible 显影

Geometry

- 对 BufferGeometry 的用户友好替代
- 比起 BufferGeometry 更容易读写，但是运行效率较差
- 对于大型工程或正式工程，推荐采用 BufferGeometry。

常见材质

- MeshPhongMaterial：一种用于具有镜面高光的光泽表面的材质
- MeshBasicMaterial：一个以简单着色（平面或线框）方式来绘制几何体的材质。这种材质不受光照的影响。
- ShadowMaterial：此材质可以接收阴影，但在其他方面完全透明。
