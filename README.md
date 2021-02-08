### 编译
```
TARO_BUILD_TYPE=ui taro build --ui --ui-index=${CUSTOM_ENTRY}
```

### 使用
```
h5: {
  // 经过这一配置之后，代码中引入的处于 `node_modules/taro-ui/` 路径下的源码文件均会经过taro的编译处理。
  esnextModules: ['yui'],
  ...
}
```