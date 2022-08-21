import { useState } from "react";
import { getRecipeInfo, recipeInfoArray } from "../lib/ParserLib";

const InputTextBox = ({
  recipeInfos,
  setRecipeInfos,
  setRandomNum,
  setRandomRecipe,
  setIsRandomRecipeGotten
}) => {
  const [inputText, setText] = useState("");

  const startParse = () => {
    if (inputText !== "") {
      const tmpRecipeInfoArray = getRecipeInfo(inputText);
      setRecipeInfos(tmpRecipeInfoArray);
    }
  };

  // レシピをランダムに取得する
  const getRandomRecipe = () => {
    const recipeNum = recipeInfos?.length;
    if (recipeNum > 0) {
      const randomNum = Math.floor(Math.random() * recipeNum);
      const randomRecipeInfo: recipeInfoArray = {
        thumbnail: recipeInfos[randomNum].thumbnail,
        name: recipeInfos[randomNum].name,
        url: recipeInfos[randomNum].url
      };

      setRandomNum(randomNum);
      setRandomRecipe(randomRecipeInfo);
      setIsRandomRecipeGotten(true);
    }
  };

  return (
    <div className="input-text-box">
      <textarea cols="50" rows="5" onChange={(e) => setText(e.currentTarget.value)} />
      <p>
        <button onClick={startParse}>解析開始</button>　
        <button onClick={getRandomRecipe}>ランダム取得</button>
      </p>
    </div>
  );
};

export default InputTextBox;
