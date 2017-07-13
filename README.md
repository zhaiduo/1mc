## 1mc
One million count test. Just for fun.

## GC Types
    Scavenge
    清除最常见的垃圾回收方法, 只要 vm 空闲, 就会自动将其调用到节点。

    Marksweepcompact
    V8 是最重的垃圾收集类型。 如果频繁调用, 则必须减少进程中的对象数或提高 V8 的堆限制。

    IncrementalMarking
    在应用程序代码执行过程中逐步进行的垃圾回收的类型, 以减少 incrementalmarking 应用程序暂停的时间。 仅适用于节点 V6 或更高版本。

    ProcessWeakCallbacks
    对于 processweakcallbacks 垃圾回收的每次出现, 向打开的对象注册的弱引用将被调用到 V8。 此测量从开始到每个垃圾回收的最后一个弱回调。 仅适用于节点 V6 或更高版本。

## Result
Hardware: macOS Sierra + 2.6G Core i5 + 16 Memory 1600 MHz DDR3
For 1 millions:
```
result: { '1': 99808,
  '2': 100573,
  '3': 99742,
  '4': 99756,
  '5': 100472,
  '6': 100018,
  '7': 99944,
  '8': 99564,
  '9': 100111,
  '10': 100012 }
lengthCount: 1000033
redundentCount: 33
1mc: 1436.928ms
```
For 10 millions:
```
result: { '1': 999868,
  '2': 999385,
  '3': 998465,
  '4': 999385,
  '5': 1001655,
  '6': 1001273,
  '7': 1000565,
  '8': 999344,
  '9': 999578,
  '10': 1000482 }
lengthCount: 10000322
redundentCount: 322
1mc: 13416.666ms
```