基于开发者工具中 performance 和 memory 进行分析

memory 分析

- Take Heap Snapshot：分析堆区快照，主要场景：前后内存快照进行对比
  - Distance：表示当前对象到 window 的距离
  - Objects Count：当前类型数量和百分比
  - Shadow Size：占据当前内存的百分比
  - Retained Size：能释放出多少内存空间
- Record Allocation Profile：一段时间内 function 中分配的内存空间，start => stop
- Record Allocation Timeline：基于时间查看内存分配情况，常用于分析内存泄露，start => stop
  - 以时间的维度记录内存分配的情况
  - 灰色的代表已经回收的内存，蓝色代表分配了但是没有回收的内存

performance 分析 cpu、gpu 和 painting 使用情况
