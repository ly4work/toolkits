## 持久化存储

> tki.DB 包含 localStorage 及 sessionStorage 的读写操作。注意，DB 获取值时，返回的数据类型会与写入时传递的数据类型一致，开发者无需再进行处理

### tki.DB.set

<font color="#666" size="1px">更新时间：2021-03-22 </font>  
调用`tki.DB.set`写入本地存储

```javascript
//  基本使用，存储默认为localStorage
tki.DB.set("userInfo", {
  name: "Halo Tki",
});

//  传入第三个参数选择存储类型为sessionStorage
tik.DB.set("tempToken", "df1od0flflg190snDNldf9", {
  type: "session",
});
```

#### 参数说明

| 参数    | 类型                              | 是否必须 | 默认值 | 说明   |
| ------- | --------------------------------- | -------- | ------ | ------ |
| key     | String                            | true     |        | 键     |
| value   | any                               | true     |        | 值     |
| options | [Object](/core/#options-参数配置) | false    |        | 配置项 |

#### options 参数配置

| 参数 | 类型   | 是否必须 | 默认值 | 说明                     |
| ---- | ------ | -------- | ------ | ------------------------ |
| type | string | false    | local  | 存储类型：local, session |

### tki.DB.get

<font color="#666" size="1px">更新时间：2021-03-22 </font>  
调用`tki.DB.get`读取本地存储

```javascript
//  默认从localStorage里取
tki.DB.get("userInfo");

//  从sessionStorage获取
tki.DB.get("tempToken", {
  type: "session",
});
```

#### 参数说明

| 参数    | 类型                              | 是否必须 | 默认值 | 说明   |
| ------- | --------------------------------- | -------- | ------ | ------ |
| key     | String                            | true     |        | 键     |
| options | [Object](/core/#options-参数配置) | false    |        | 配置项 |

### tki.DB.remove

<font color="#666" size="1px">更新时间：2021-03-22 </font>  
调用`tki.DB.remove`删除本地存储

```javascript
//  默认从localStorage里移除

tki.DB.remove("userInfo");

//  从sessionStorage移除
tki.DB.remove("tempToken", {
  type: "session",
});
```

#### 参数说明

同 `tki.DB.get`

## Cookie
