# VuePress 導入
最終的に Circle CI でデプロイまで行う  

# 開発環境
- OS: macOS Sierra  
- Node.js: v10.13.0  
- npm: 6.4.1  
- yarn: 1.12.1  

# 環境構築
VuePress 公式ドキュメントよると、  
- [グローバルにインストールする方法](https://vuepress.vuejs.org/guide/getting-started.html#global-installation)  
- [既存プロジェクトにインストールする方法](https://vuepress.vuejs.org/guide/getting-started.html#inside-an-existing-project)  

の2通りの方法が用意されている。  
  
今回は `$ yarn init` でプロジェクトを作成し VuePress を導入する。  

## Git リポジトリを作成  
GitHub でリポジトリを作成して `$ git clone`  
  
ローカルで作成する場合は  
```
$ mkdir vue-press
$ cd vue-press
$ git init
```

## npm プロジェクトを新規作成  
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

## VuePress を yarn でインストール  
VuePress を下記コマンドでインストールします。  
```
$ yarn add - D vuepress
```

docs/ ディレクトリを作成し、README.md を置く。  
```
$ mkdir docs
$ cd docs/
$ echo '# Hello VuePress' > docs/README.md
```

`package.json` に vuepress 用のコマンドを追記する。  
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## VuePress の開発環境を起動する  
下記コマンドを実行すると開発環境が立ち上がるので、  
表示された localhost のアドレスにアクセスして確認する。  
```
$ yarn docs:dev
```

開発環境を立ち上げたまま、README.md を書き換えると反映されます。  


# GitHub Pages で公開  
# Circle CI で自動ビルド、デプロイ  
