// 不要なHTMLタグを含んだ文字列から、欲しい要素のみを持つ配列を取り出して返す関数
const divideTarget = (target: string, regExp: RegExp, unnecessaryTag: string): string[] => {
  const tmpArray = target.match(regExp);
  return tmpArray.map((element) => element.replace(unnecessaryTag, "").replace('"', ""));
};

// レシピ一覧
export interface recipeInfoArray {
  thumbnail: string;
  name: string;
  url: string;
}

export const getRecipeInfo = (analysisTarget: string) => {
  const sharpUrlHeader = "https://cocoroplus.jp.sharp/";

  // サムネイル一覧
  const thumbTmpArray = divideTarget(analysisTarget, /src=.*?jpg/g, 'src="/');
  const thumbArray = thumbTmpArray.map((element) => sharpUrlHeader + element);

  // URL一覧
  const urlArrayWithGarbage = divideTarget(analysisTarget, /href=".*?class/g, 'href="/');
  const urlArray = urlArrayWithGarbage.map(
    (element) => sharpUrlHeader + element.replace(" class", "")
  );

  // レシピ名一覧
  //   </p>を除去したいが、"/"も">"もエスケープできないので、pで判定している。
  //   "p"を含むレシピが公開された場合、おかしなことになるので注意★
  const nameArrayWithGarbage = divideTarget(
    analysisTarget,
    /class="DefaultText default-text".*?p/g,
    'class="DefaultText default-text"'
  );
  const nameArray = nameArrayWithGarbage.map((element) =>
    element.replace("</p", "").replace(">", "")
  );

  const recipeInfo: recipeInfoArray[] = [];
  for (let i = 0; i < nameArray.length; ++i) {
    recipeInfo.push({
      thumbnail: thumbArray[i],
      name: nameArray[i],
      url: urlArray[i]
    });
  }

  // フォーマッタのせいでforの後にセミコロンを入れられないため、
  // return文の解釈が上手くいかずエラーになる。
  // 無意味な変数で暫定対応★
  let avoidError; // eslint-disable-line

  return recipeInfo;
};
