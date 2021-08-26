#!/bin/zsh
# tarminal > yarn new:post (package.json)

printf "記事タイトルを入力してください >> "; read TITLE
printf "ファイル名を入力してください(sample.mdx) >> "; read FILENAME
printf "タグを入力してください\n"
printf "既存のタグは以下です\n\n"
ls -r content/article/
printf "\nタグ名 >> "; read TAGS
printf "カテゴリフォルダを入力してください\n"
printf "既存のカテゴリフォルダは以下です\n\n"
ls -r content/article/
printf "\nカテゴリフォルダ名 >> "; read DIRNAME

EXTENSION=$(echo $FILENAME | cut -f 2 -d .)

if [ $EXTENSION != "mdx" ]; then
  FILENAME=${FILENAME}".mdx"
fi;

FILEPATH="content/article/$DIRNAME/$FILENAME"

if [ ! -d content/article/$DIRNAME ]; then
  mkdir content/article/$DIRNAME
fi
cp bin/template.mdx $FILEPATH

CURRENT_TIME=$(date +"%Y-%m-%dT%TZ")
function replaceTemplate() {
  # @1 > $2 で置き換える
  # Example: replaceTemplate @DATE $DATE
  sed -i -e "s/$1/$2/g" $FILEPATH
}

# Replace
replaceTemplate @TITLE $TITLE
replaceTemplate @TAGS $TAGS
replaceTemplate @DATE $CURRENT_TIME
replaceTemplate @CATEGORYFOLDER $DIRNAME
\rm $FILEPATH-e

printf "$FILEPATHに記事ファイルを作成しました"