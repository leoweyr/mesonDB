meson是一个为python程序服务的本地化非关系数据库系统模块，同时也是一个中转站，将高频储存随时调用的数据储存在本地，将关键需第三方调用的数据自动处理格式储存在远程mysql

## 项目名字来源及含义

“meson“英文直接翻译过来是微观物理名词“介子”，是粘合质子和中子的微粒子。“介子”在中文可以拆分成”介“和”子“两个字。”介“可以理解为”中介“，即代表发挥中间媒介的作用；”子“可以理解”附属“，即代表该系统是另外一个主系统的子系统，一切为主系统服务

## 

## 模块调用

```python
import mesonDB.meson
#mesonDB文件架放在主程序根目录
```

## 函数调用

```python
mesonDB.meson.connect
mesonDB.meson.connect.table
#以上为调用例子
#层级表示函数包含关系,数字越小越顶级。“->”表示父级函数

connect(database)
#参数:database = 数据库
#层级：1

table(table)
#参数：table = 数据表
#层级：2 -> connect

insert(data)
#参数：data = 数据内容
#层级：3 -> table
```

