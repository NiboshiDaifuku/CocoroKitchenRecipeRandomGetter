const HowToUse = () => {
  return (
    <>
      <hr />
      <h2>使い方（PC）</h2>
      <ol>
        <li>
          SHARPのレシピサイト{" "}
          <a href="https://cocoroplus.jp.sharp/kitchen/recipe/searchresults/">COCORO KITCHEN</a>{" "}
          にアクセスする
        </li>
        <li>好みに応じて「機器選択」と「絞り込み」を設定する</li>
        <li>一番下のレシピまでスクロールする</li>
        <li>F12を押して開発ツールを開く</li>
        <li>レシピのitem一覧（col4ListItem）を格納している親要素を探し、要素をコピーする</li>
        <ul>
          <li>サイトの作りが変わらない限りは、以下の要素をコピーすればOK</li>
          <li>{`<ul data-v-793feda9 data-v-5e7d565f class="Pc4Sp2ColumnThumbnailList col4List square">`}</li>
        </ul>
        <li>テキストボックスに張り付ける</li>
        <li>解析開始ボタンを押す</li>
        <li>レシピ一覧が出力されるので「ランダム取得」ボタンを押してレシピを取得する</li>
      </ol>
    </>
  );
};

export default HowToUse;
