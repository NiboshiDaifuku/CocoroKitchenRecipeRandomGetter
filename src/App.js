import { useState } from "react";
import InputTextBox from "./InputTextBox";
import RandomRecipe from "./RandomRecipe";
import RecipeInfos from "./RecipeInfos";
import "./styles.css";

export default function App() {
  const [recipeInfos, setRecipeInfos] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [isRandomRecipeGotten, setIsRandomRecipeGotten] = useState(false);

  return (
    <div className="App">
      <h1>COCORO KITCHEN レシピランダム取得ツール</h1>
      <h3>
        SHARPのレシピサイト「COCORO KITCHEN」からランダムにレシピを取得できます
      </h3>
      <InputTextBox
        setRecipeInfos={setRecipeInfos}
        setRandomRecipe={setRandomRecipe}
        setIsRandomRecipeGotten={setIsRandomRecipeGotten}
      />
      <RandomRecipe
        isRandomRecipeGotten={isRandomRecipeGotten}
        randomRecipe={randomRecipe}
      />
      <hr />
      <h2>使い方（PC）</h2>
      <ol>
        <li>
          SHARPのレシピサイト{" "}
          <a href="https://cocoroplus.jp.sharp/kitchen/recipe/searchresults/">
            COCORO KITCHEN
          </a>{" "}
          にアクセスする
        </li>
        <li>好みに応じて「機器選択」と「絞り込み」を設定する</li>
        <li>一番下のレシピまでスクロールする</li>
        <li>F12を押して開発ツールを開く</li>
        <li>
          レシピのitem一覧（col4ListItem）を格納している親要素を探し、要素をコピーする
        </li>
        <ul>
          <li>サイトの作りが変わらない限りは、以下の要素をコピーすればOK</li>
          <li>{`<ul data-v-793feda9 data-v-5e7d565f class="Pc4Sp2ColumnThumbnailList col4List square">`}</li>
        </ul>
        <li>テキストボックスに張り付ける</li>
        <li>解析開始ボタンを押す（※2回押さないと動かないときがある）</li>
        <li>
          レシピ一覧が出力されるので「ランダム取得」ボタンを押してレシピを取得する
        </li>
      </ol>
      <hr />
      {<RecipeInfos recipeInfos={recipeInfos} />}
    </div>
  );
}
