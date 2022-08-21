import { useEffect, useState } from "react";
import InputTextBox from "./component/InputTextBox";
import RandomRecipe from "./component/RandomRecipe";
import HowToUse from "./component/HowToUse";
import RecipeInfos from "./component/RecipeInfos";
import { getRecipeCacheFromLocalStorage, setRecipeCacheToLocalStorage } from "./lib/DatabaseLib";
import "./App.css";

export default function App() {
  const appVer = "v1.0";
  const [recipeInfos, setRecipeInfos] = useState([]);
  const [randomNum, setRandomNum] = useState(0);
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [isRandomRecipeGotten, setIsRandomRecipeGotten] = useState(false);

  // ページ読み込み時にLocalStorageにレシピ一覧があれば反映する
  useEffect(() => {
    const cache = getRecipeCacheFromLocalStorage();
    if (cache !== "") {
      setRecipeInfos(cache);
    }
  }, []);

  // レシピ一覧がセットされたら、LocalStorageに保存する
  useEffect(() => {
    setRecipeCacheToLocalStorage(recipeInfos);
  }, [recipeInfos]);

  return (
    <div className="App">
      <h1>COCORO KITCHEN レシピランダム取得ツール（{appVer}）</h1>
      <h3>SHARPのレシピサイト「COCORO KITCHEN」からランダムにレシピを取得できます</h3>
      <InputTextBox
        recipeInfos={recipeInfos}
        setRecipeInfos={setRecipeInfos}
        setRandomNum={setRandomNum}
        setRandomRecipe={setRandomRecipe}
        setIsRandomRecipeGotten={setIsRandomRecipeGotten}
      />
      <RandomRecipe
        isRandomRecipeGotten={isRandomRecipeGotten}
        randomNum={randomNum + 1}
        randomRecipe={randomRecipe}
      />
      <HowToUse />
      {<RecipeInfos recipeInfos={recipeInfos} />}
    </div>
  );
}
