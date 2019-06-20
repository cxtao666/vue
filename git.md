#文件包括
## README.md 文件做项目的介绍
## src 源代码
## dist 生成代码
## .gitignore 做哪些项目内容是不用提交到git仓库的
##  LICENSE  开源许可
##  package.json npm包的配置文件
## webpack.config.js  webpack包的配置文件
## .babelrc babel 配置文件

## src 文件配置

在src 中 .html 文件中提供一个给 vue组件显示的平台 
### 在main.js文件中，负责引包，并把组件渲染到html文件中
### App.vue 是主组件，其它一切子组件的视图都是在App.vue中
### router.js 路由 ，负责子组件的切换，在App.vue中显示不同的子组件

## git的使用

1. git init 初始git项目
2. git status 查看git 的状态
3. git add .  保存代码到暂存区
4. git commit -m "项目名"  提交代码到本地git仓库
5. 创建git ssh 密钥
6. cd ~  ssh-keygen.exe
7. 把密钥放到github上
8. git remote add origin git@github.com:cxtao666/vue.git
   git push -u origin master
   提交代码到git上
9. git clone git@github.com:cxtao666/vue.git  把代码克隆到本地
10. 小技巧(命令行右键等于复制)
