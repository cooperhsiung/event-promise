# event promise

### test

```bash
npm test
```

一个事件监听结合 promise 的例子

我们常用 resolve 去提前返回

结合事件时，假如我们没有 removeAllListeners(Player.js 第 23 行)，执行 `npm test`，我们会看到 resolve 之前的操作会累积执行多次

如下所示：

```
  GET /
receive..
    √ GET 1 (1036ms)
receive..
receive..
    √ GET 2 (1014ms)
receive..
receive..
receive..
    √ GET 3 (1006ms)

  3 passing (3s)

```

解决办法：

* 在 resolve 之前 removeAllListeners
* 每次操作 new 一个新的 Player
