# VuePress で静的ページを作成し、GitHub Pages に公開する  
- VuePress 環境構築  
- GitHub Pages の公開  
- CircleCI でビルド/デプロイ  

までを行う行います。  

# 開発環境  
- OS: macOS Sierra  
- Node.js: v10.13.0  
- npm: 6.4.1  
- yarn: 1.12.1  

# VuePress 環境構築  
VuePress 公式ドキュメントよると、  
- [グローバルにインストールする方法](https://vuepress.vuejs.org/guide/getting-started.html#global-installation)  
- [既存プロジェクトにインストールする方法](https://vuepress.vuejs.org/guide/getting-started.html#inside-an-existing-project)  

の2通りの方法が用意されています。  
今回は後者の方法し、`$ yarn init` でプロジェクト作成後に VuePress を導入します。  

## ディレクトリを作成  
ローカルに作業ディレクトリを作成します。  
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
$ yarn add -D vuepress
```

`src/` ディレクトリを作成し、README.md を設置します。  
  
[公式ドキュメント](https://vuepress.vuejs.org/guide/getting-started.html#inside-an-existing-project)では `docs/` を作成していますが、後に作成する GitHub Pages の公開ディレクトリと競合するため、  
`docs/` 以外の名前でディレクトリ作成します。  
```
$ mkdir src
$ echo '# Hello VuePress' > src/README.md
```

`package.json` に VuePress 用のコマンドを追記します。  
```
"scripts": {
  "src:dev": "vuepress dev src",
  "src:build": "vuepress build src"
},
```

## VuePress の開発環境を起動する  
下記コマンドを実行すると開発環境が立ち上がるので、  
表示された localhost のアドレスにアクセスして確認します。  
開発環境を立ち上げたまま、README.md を書き換えるとリアルタイムで反映されます。  
```
$ yarn src:dev
```
![vuepress00](https://user-images.githubusercontent.com/14056951/50330427-7fb21800-053e-11e9-9027-90c86a9d044c.png)


## VuePress のビルド  
下記コマンドを実行すると、`src/.vuepress/dist` に静的ファイルが生成されます。  
```
$ yarn src:build
```

## `.vuepress/config.js` の追加  
静的ファイルの生成先、ページタイトルなどの変更を行いたいので、  
config ファイルを追加します。  
```
# .vuepress/ ディレクトリがない場合は作成
$ mkdir src/.vuepress/

# src/.vuepress/config.js を追加
$ touch src/.vuepress/config.js
```

`.vuepress/config.js` に設定追加  
下記設定を追加します。  
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

# GitHub Pages の公開  
## `docs/` 公開  
GitHub Pages を公開するには、GitHub リポジトリの `Settings > GitHub Pages` にて設定します。  
`Source` の項目にて、公開するソースを選択します。  
1. master branch: master ブランチのルート以下を全て公開  
2. master branch /docs folder: master ブランチの `/docs` 以下を公開  
3. None: GitHub Pages の公開を無効化  

今回は `docs` 以下を公開するので、2を選択します。  

`$ yarn src:build` でビルドした結果を master branch に commit, push すると GitHub Pages にページが公開されます。  
- https://y4shiro.github.io/vue-press/  

# CircleCI でビルド、デプロイ  
手動で build, commit, push をするのは手間がかかるので、CircleCI を導入して自動化します。  

## CircleCI サインアップ  
CircleCI のアカウントを取得します。  
[CircleCI](https://circleci.com/)  
  
GitHub アカウントでサインアップを行えるので、  
トップページの右上にある `Sign UP` から次へ進みます。  
![circleci_00](https://user-images.githubusercontent.com/14056951/49064462-5ca58880-f25e-11e8-9cae-8328e1045840.png)  

`Sign Up Now` のページにて、`Sign Up with GitHub` をクリックして GitHub アカウントでサインアップを行います。  
![circleci_01](https://user-images.githubusercontent.com/14056951/49064489-6dee9500-f25e-11e8-90b0-0dd956863d10.png)  

## CircleCI と GitHub リポジトリの連携  
CircleCI のサイドメニューより `ADD PROJECT` のページへ進み、  
任意のリポジトリを選択してください。  
![circleci_02](https://user-images.githubusercontent.com/14056951/49064760-4946ed00-f25f-11e8-9a14-0b222974bf98.png)  

## CircleCI 設定ファイルの作成  
CircleCI 実行時に読み込む config ファイルを作成/追加します。  
パスは `/.circleci/config.yml` です。  
キャッシュ周りは下記参考  
- https://circleci.com/docs/2.0/yarn/#section=deployment  
- https://circleci.com/docs/2.0/caching/#npm-node--

```yml
version: 2

jobs:
  build:
    working_directory: ~/tmp
    docker:
      - image: node:9.11
        environment:
          TZ: "/usr/share/zoneinfo/Asia/Tokyo"
          DEPLOY_BRANCH: master

    steps:
      - checkout

      - restore_cache:
          keys:
            - yarn-packages-{{ .Branch }}-{{ checksum "yarn.lock" }}
            - yarn-packages-{{ .Branch }}
            - yarn-packages-

      - run:
          command: yarn install

      - save_cache:
          paths:
            - node_moduels
          key: yarn-packages-{{ .Branch }}-{{ checksum "yarn.lock" }}

      - run:
          command: |
            if [ "${CIRCLE_BRANCH}" = "${DEPLOY_BRANCH}" ]; then
              chmod +x deploy.sh
              ./deploy.sh
            fi
```

## CircleCI からのデプロイ用 Shell 作成  
CircleCI で build 後、GitHub へ自動デプロイを行うための Shell を作成します。  

```Shell
#!/bin/bash -e

# build
yarn run --silent build

# ビルド生成物の差分がない場合、デプロイせずに終了する
if [ "$(git status --porcelain | wc -l | xargs)" -eq 0 ]; then
  echo "Not exist deploying contents."
  exit 0
fi

git config --global user.name "Circle CI"
git config --global user.email "<>"
git add -A
git commit -m "[ci skip] Deploy by CI"

git push -f $(git config --get remote.origin.url) master:master > /dev/null 2>&1

echo "Deploy completed."
```

## GitHub リポジトリに push して動くことを確認  

上記作業が完了したら、GitHub リポジトリの Master ブランチに push して、  
CircleCI でビルド/デプロイが行われることを確認してください。  

![circleci_03](https://user-images.githubusercontent.com/14056951/49065324-0b4ac880-f261-11e8-8337-7141d5df106c.png)  

