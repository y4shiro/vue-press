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
yarn init v1.12.1
question name (vuepress):
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

`src/` ディレクトリを作成し、README.md を置く。  
公式ドキュメントでは `docs/` を推奨しているが、  
後に作成する GitHub Pages の公開ディレクトリと競合するため、  
`docs/` 以外の名前でディレクトリ作成する。  
```
$ mkdir src
$ echo '# Hello VuePress' > src/README.md
```

`package.json` に vuepress 用のコマンドを追記する。  
```
{
  "scripts": {
    "src:dev": "vuepress dev src",
    "src:build": "vuepress build src"
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

## VuePress のビルド
下記コマンドを実行すると、`src/.vuepress/dist` に静的ファイルが生成される。  
```
$ yarn src:dev
```

## `.vuepress/config.js` の追加  
静的ファイルの出力先、ページタイトルなどの変更を行いたいので、  
config ファイルを追加する。  
```
# .vuepress/ ディレクトリがない場合は作成
$ mkdir src/.vuepress/
# src/.vuepress/config.js を追加
$ touch src/.vuepress/config.js
```

`.vuepress/config.jp` に設定追加  
下記設定の場合、  
- title: 公開ページのタイトル
- description: ページ説明
- dest: build 時の出力先指定
- base: GitHub Pages の公開ディレクトリパス

```
module.exports = {
  title: 'GitHub Pages product by VuePress',
  description: 'VuePress やっていき',
  dest: 'docs/',
  base: '/vue-press/',
}
```


# GitHub Pages で公開  
## docs/ 公開  

# Circle CI で自動ビルド、デプロイ  
