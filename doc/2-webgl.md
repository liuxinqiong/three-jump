三种数据类型

- attribute：只能在 vertex shader 中使用的变量，一般用于传递顶点数据
- uniform：常量，不能被 shader 修改，uniform 变量在 vertex 和 fragment 两者之间声明方式完全一样，则它可以在 vertex 和 fragment 共享使用（相当于一个被 vertex 和 fragment shader 共享的全局变量）
- varying：varying 变量是 vertex 和 fragment shader 之间做数据传递用的

注意点

- webgl 默认视角，沿着 Z 轴负方向望向原点，没有 Z 值，则默认为 0
- 整个画布坐标，坐标系原点为画布中心，上下左右各为一个单元

通过矩阵变换，进行三维位置变换

- 平移操作
- 旋转操作

书籍：3D 数学基础：图形与游戏开发

使用索引绘制立方体

- 原理：两个三角形绘制一个面
- 使用 drawArray，由于需要两个三角形的顶点坐标，因此会有两个顶点坐标是重复的
- 使用 drawElements 索引的方式，降低空间使用，但效率会差一点，因为有个映射关系

ArrayBuffer 表示通用的、固定长度的原始二进制数据缓冲区，ArrayBuffer 不能直接操作，而是要通过类型数组对象或 DataView 对象操作，它们会将缓冲区的数据表示为特定的格式，并通过这个格式来读写缓冲区的内容

- DataView：Float32Array Int16Array Unit32Array ……
- 多个 DataView 可以共享一个 buffer 缓冲区

纹理、阴影、帧缓冲区

- 纹理：纹理坐标系统 => WebGL 坐标系统，坐标映射
  - WebGL api：sampler2D texture2D
- framebuffer
  - 帧缓冲区对象可以用来代替颜色缓冲区和深度缓冲区
  - 绘制在帧缓冲区中的对象并不会直接显示在 canvas 上，你可以先对帧缓冲区的内容进行一些处理在显示，或直接用其中的内容作为纹理图像
  - 常用于动态纹理的生成
- 使用 shadowmap 生成阴影
  - 使用帧缓冲区通过纹理维护 shadowmap，然后在渲染的时候，使用该 shadow map 来判断当前视角下，点是否在阴影的区域之内，从而完成了阴影的绘制
