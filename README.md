# VuePress 導入
最終的に Circle CI でデプロイまで行う  

# 開発環境
- OS: macOS Sierra  
- Node.js: v10.13.0  
- npm: 6.4.1  
- yarn: 1.12.1  

# VuePress インストール
VuePress 公式ドキュメントよると、  
- [グローバルにインストールする方法](https://vuepress.vuejs.org/guide/getting-started.html#global-installation)  
- [既存プロジェクトにインストールする方法](https://vuepress.vuejs.org/guide/getting-started.html#inside-an-existing-project)  
の2通りの方法が用意されている。  
  
今回は `$ yarn init` でプロジェクトを作成し VuePress を導入する。  

## vue-press ディレクトリ作成し移動する  
```
$ mkdir vue-press
$ cd vue-press
```

## Git リポジトリを作成  
```
$ git init
```

# npm プロジェクトを新規作成  
```
$ yarn init
yarn init
yarn init v1.12.1
question name (test-vuepress):
question version (1.0.0):
question description:
question entry point (index.js):
question repository url:
question author (y4shiro <y4shironao@gmail.com>):
question license (MIT):
question private:
success Saved package.json
✨  Done in 8.99s.
```
