import { useState } from "react";
import InputTextBox from "./component/InputTextBox";
import RandomRecipe from "./component/RandomRecipe";
import HowToUse from "./component/HowToUse";
import RecipeInfos from "./component/RecipeInfos";
import "./App.css";

export default function App() {
  const [recipeInfos, setRecipeInfos] = useState([]);
  const [randomNum, setRandomNum] = useState(0);
  const [randomRecipe, setRandomRecipe] = useState([]);
  const [isRandomRecipeGotten, setIsRandomRecipeGotten] = useState(false);

  return (
    <div className="App">
      <h1>COCORO KITCHEN レシピランダム取得ツール</h1>
      <h3>SHARPのレシピサイト「COCORO KITCHEN」からランダムにレシピを取得できます</h3>
      <InputTextBox
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
