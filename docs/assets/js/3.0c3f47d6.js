(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{164:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("までを行う")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("VuePress 公式ドキュメントよると、")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html#global-installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("グローバルにインストールする方法"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html#inside-an-existing-project",target:"_blank",rel:"noopener noreferrer"}},[t._v("既存プロジェクトにインストールする方法"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("の2通りの方法が用意されている。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("ローカルで作成する場合は")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("VuePress を下記コマンドでインストールします。")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),s("p",[t._v("開発環境を立ち上げたまま、README.md を書き換えると反映されます。")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),s("p",[t._v("CircleCI のアカウントを取得します。"),s("br"),t._v(" "),s("a",{attrs:{href:"https://circleci.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CircleCI"),s("OutboundLink")],1)]),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._m(47),t._v(" "),s("p",[t._v("CircleCI で build 後、GitHub へ自動デプロイを行うための Shell を作成します。")]),t._v(" "),t._m(48),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vuepress-で静的ページを作成し、github-pages-に公開する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-で静的ページを作成し、github-pages-に公開する","aria-hidden":"true"}},[this._v("#")]),this._v(" VuePress で静的ページを作成し、GitHub Pages に公開する")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("VuePress 環境構築")]),this._v(" "),e("li",[this._v("GitHub Pages の公開")]),this._v(" "),e("li",[this._v("CircleCI でビルド/デプロイ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"開発環境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#開発環境","aria-hidden":"true"}},[this._v("#")]),this._v(" 開発環境")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("OS: macOS Sierra")]),this._v(" "),e("li",[this._v("Node.js: v10.13.0")]),this._v(" "),e("li",[this._v("npm: 6.4.1")]),this._v(" "),e("li",[this._v("yarn: 1.12.1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vuepress-環境構築"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-環境構築","aria-hidden":"true"}},[this._v("#")]),this._v(" VuePress 環境構築")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("今回は "),e("code",[this._v("$ yarn init")]),this._v(" でプロジェクトを作成し VuePress を導入する。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"git-リポジトリを作成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-リポジトリを作成","aria-hidden":"true"}},[this._v("#")]),this._v(" Git リポジトリを作成")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("GitHub でリポジトリを作成して "),e("code",[this._v("$ git clone")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ mkdir vue-press\n$ cd vue-press\n$ git init\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"npm-プロジェクトを新規作成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-プロジェクトを新規作成","aria-hidden":"true"}},[this._v("#")]),this._v(" npm プロジェクトを新規作成")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ yarn init\nyarn init v1.12.1\nquestion name (vuepress):\nquestion version (1.0.0):\nquestion description:\nquestion entry point (index.js):\nquestion repository url:\nquestion author (y4shiro <y4shironao@gmail.com>):\nquestion license (MIT):\nquestion private:\nsuccess Saved package.json\n✨  Done in 8.99s.\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vuepress-を-yarn-でインストール"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-を-yarn-でインストール","aria-hidden":"true"}},[this._v("#")]),this._v(" VuePress を yarn でインストール")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ yarn add - D vuepress\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("src/")]),t._v(" ディレクトリを作成し、README.md を置く。"),s("br"),t._v("\n公式ドキュメントでは "),s("code",[t._v("docs/")]),t._v(" を推奨しているが、"),s("br"),t._v("\n後に作成する GitHub Pages の公開ディレクトリと競合するため、"),s("br"),t._v(" "),s("code",[t._v("docs/")]),t._v(" 以外の名前でディレクトリ作成する。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ mkdir src\n$ echo '# Hello VuePress' > src/README.md\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("package.json")]),this._v(" に vuepress 用のコマンドを追記する。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{\n  "scripts": {\n    "src:dev": "vuepress dev src",\n    "src:build": "vuepress build src"\n  }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vuepress-の開発環境を起動する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-の開発環境を起動する","aria-hidden":"true"}},[this._v("#")]),this._v(" VuePress の開発環境を起動する")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("下記コマンドを実行すると開発環境が立ち上がるので、"),e("br"),this._v("\n表示された localhost のアドレスにアクセスして確認する。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ yarn docs:dev\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vuepress-のビルド"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-のビルド","aria-hidden":"true"}},[this._v("#")]),this._v(" VuePress のビルド")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("下記コマンドを実行すると、"),e("code",[this._v("src/.vuepress/dist")]),this._v(" に静的ファイルが生成される。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ yarn src:build\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vuepress-config-js-の追加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-config-js-の追加","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v(".vuepress/config.js")]),this._v(" の追加")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("静的ファイルの生成先、ページタイトルなどの変更を行いたいので、"),e("br"),this._v("\nconfig ファイルを追加する。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# .vuepress/ ディレクトリがない場合は作成\n$ mkdir src/.vuepress/\n\n# src/.vuepress/config.js を追加\n$ touch src/.vuepress/config.js\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v(".vuepress/config.jp")]),this._v(" に設定追加"),e("br"),this._v("\n下記設定の場合、")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("title: 公開ページのタイトル")]),this._v(" "),e("li",[this._v("description: ページ説明")]),this._v(" "),e("li",[this._v("dest: build 時の出力先指定")]),this._v(" "),e("li",[this._v("base: GitHub Pages の公開ディレクトリパス")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("module.exports = {\n  title: 'GitHub Pages product by VuePress',\n  description: 'VuePress やっていき',\n  dest: 'docs/',\n  base: '/vue-press/',\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"github-pages-の公開"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-pages-の公開","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub Pages の公開")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"docs-公開"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docs-公開","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("docs/")]),this._v(" 公開")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("GitHub Pages を公開するには、GitHub リポジトリの "),e("code",[this._v("Settings > GitHub Pages")]),this._v(" にて設定します。"),e("br"),this._v(" "),e("code",[this._v("Source")]),this._v(" の項目にて、公開するソースを選択します。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("master branch: master ブランチのルート以下を全て公開")]),this._v(" "),e("li",[this._v("master branch /docs folder: master ブランチの "),e("code",[this._v("/docs")]),this._v(" 以下を公開")]),this._v(" "),e("li",[this._v("None: GitHub Pages の公開を無効化")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("今回は "),e("code",[this._v("docs")]),this._v(" 以下を公開するので、2を選択する。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("$ yarn src:build")]),this._v(" でビルドした結果を master branch に commit, push すると GitHub Pages にページが公開される。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("https://y4shiro.github.io/vue-press/")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"circleci-でビルド、デプロイ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#circleci-でビルド、デプロイ","aria-hidden":"true"}},[this._v("#")]),this._v(" CircleCI でビルド、デプロイ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("手動で build, commit, push をするのは手間がかかるので、"),e("br"),this._v("\nCircleCI を導入して自動化します。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"circleci-サインアップ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#circleci-サインアップ","aria-hidden":"true"}},[this._v("#")]),this._v(" CircleCI サインアップ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("GitHub アカウントでサインアップを行えるので、"),e("br"),this._v("\nトップページの右上にある "),e("code",[this._v("Sign UP")]),this._v(" から次へ進みます。"),e("br"),this._v(" "),e("img",{attrs:{src:"https://user-images.githubusercontent.com/14056951/49064462-5ca58880-f25e-11e8-9cae-8328e1045840.png",alt:"circleci_00"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("Sign Up Now")]),this._v(" のページにて、"),e("code",[this._v("Sign Up with GitHub")]),this._v(" をクリックして GitHub アカウントでサインアップを行います。"),e("br"),this._v(" "),e("img",{attrs:{src:"https://user-images.githubusercontent.com/14056951/49064489-6dee9500-f25e-11e8-90b0-0dd956863d10.png",alt:"circleci_01"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"circleci-と-github-リポジトリの連携"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#circleci-と-github-リポジトリの連携","aria-hidden":"true"}},[this._v("#")]),this._v(" CircleCI と GitHub リポジトリの連携")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("CircleCI のサイドメニューより "),e("code",[this._v("ADD PROJECT")]),this._v(" のページへ進み、"),e("br"),this._v("\n任意のリポジトリを選択してください。"),e("br"),this._v(" "),e("img",{attrs:{src:"https://user-images.githubusercontent.com/14056951/49064760-4946ed00-f25f-11e8-9a14-0b222974bf98.png",alt:"circleci_02"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"circleci-設定ファイルの作成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#circleci-設定ファイルの作成","aria-hidden":"true"}},[this._v("#")]),this._v(" CircleCI 設定ファイルの作成")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("CircleCI 実行時に読み込む config ファイルを作成/追加します。"),e("br"),this._v("\nパスは "),e("code",[this._v("/.circleci/config.yml")]),this._v(" です。"),e("br"),this._v("\nキャッシュ周りは下記参考")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("https://circleci.com/docs/2.0/yarn/#section=deployment")]),this._v(" "),e("li",[this._v("https://circleci.com/docs/2.0/caching/#npm-node--")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('version: 2\n\njobs:\n  build:\n    working_directory: ~/tmp\n    docker:\n      - image: node:9.11\n        environment:\n          TZ: "/usr/share/zoneinfo/Asia/Tokyo"\n          DEPLOY_BRANCH: master\n\n    steps:\n      - checkout\n\n      - restore_cache:\n          keys:\n            - yarn-packages-{{ .Branch }}-{{ checksum "yarn.lock" }}\n            - yarn-packages-{{ .Branch }}\n            - yarn-packages-\n\n      - run:\n          command: yarn install\n\n      - save_cache:\n          paths:\n            - node_moduels\n          key: yarn-packages-{{ .Branch }}-{{ checksum "yarn.lock" }}\n\n      - run:\n          command: |\n            if [ "${CIRCLE_BRANCH}" = "${DEPLOY_BRANCH}" ]; then\n              chmod +x deploy.sh\n              ./deploy.sh\n            fi\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"circleci-からのデプロイ用-shell-作成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#circleci-からのデプロイ用-shell-作成","aria-hidden":"true"}},[this._v("#")]),this._v(" CircleCI からのデプロイ用 Shell 作成")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('#!/bin/bash -e\n\n# build\nyarn run --silent build\n\n# ビルド生成物の差分がない場合、デプロイせずに終了する\nif [ "$(git status --porcelain | wc -l | xargs)" -eq 0 ]; then\n  echo "Not exist deploying contents."\n  exit 0\nfi\n\ngit config --global user.name "Circle CI"\ngit config --global user.email "<>"\ngit add -A\ngit commit -m "[ci skip] Deploy by CI"\n\ngit push -f $(git config --get remote.origin.url) master:master > /dev/null 2>&1\n\necho "Deploy completed."\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"github-リポジトリに-push-して動くことを確認"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-リポジトリに-push-して動くことを確認","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHub リポジトリに push して動くことを確認")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("上記作業が完了したら、GitHub リポジトリの Master ブランチに push して、"),e("br"),this._v("\nCircleCI でビルド/デプロイが行われることを確認してください。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/14056951/49065324-0b4ac880-f261-11e8-8337-7141d5df106c.png",alt:"circleci_03"}})])}],!1,null,null,null);r.options.__file="README.md";e.default=r.exports}}]);