# blend-cli 
> 版本 `@staticapis` 1.0.5.

## 介绍：

>可以实现服务的启动；
>
>可以实现接口的开放；

## 作者：

>陈元广


## 查看node版本：

    "必须保证node在7.3以上版本"

## 下载安装

检查是否安装过staticapis

```bash
    staticapis -V
```
### 初次安装

```bash
    npm install -g staticapis
```

### 版本更新

#### 命令方式

```bash
    npm update -g staticapis
```

#### 笨拙有效的方式（windows权限问题很恶心）

##### windows

>1、先找到全局npm和npm-cache(一般都在C:\Users\用户名\AppData\Roaming)
>
>2、删除npm-cache(防止从缓存中读取staticapis)
>
>3、打开npm文件夹
>
>4、把如下文件删除：staticapis
>
>5、打开npm/node_modules文件夹：删除staticapis
>
>6、再次进行全局安装
>

```bash
    npm install -g staticapis
```
##### mac

>1、先找到命令所在的文件夹(一般都在/usr/local/bin/)
>
>2、打开文件夹
>
>3、把如下文件删除：staticapis
>
>4、打开/usr/local/lib/node_modules文件夹：删除staticapis
>
>5、再次进行全局安装
>

```bash
    npm install -g staticapis
```


## 创建项目：

```bash
    staticapis [project-name]
    cd [project-name]
    npm start
```
example：

```bash
    staticapis projectTest
    cd projectTest
    npm start
```

## 注：

# 项目结构

|--bin                  //项目启动相关文件
|--mock                 //模拟接口
|  |--data              //使用json文件进行数据存储
|     |--students.json  
|  |--index.js          //配置接口地址
|--src                  //静态文件服务
|  |--page
|     |--article.html
|  |--css
|     |--article.css
|  |--js
|     |--article.js
|--package.json         //项目配置文件

