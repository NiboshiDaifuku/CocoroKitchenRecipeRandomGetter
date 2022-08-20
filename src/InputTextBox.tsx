import { useState } from "react";
import { getRecipeInfo, recipeInfoArray } from "./ParserLib";

const InputTextBox = ({
  setRecipeInfos,
  setRandomRecipe,
  setIsRandomRecipeGotten
}) => {
  const [inputText, setText] = useState("");
  const [recipeInfoArray, setRecipeInfoArray] = useState([]);

  const startParse = () => {
    if (inputText !== "") {
      const tmpRecipeInfoArray = getRecipeInfo(inputText);
      setRecipeInfoArray(tmpRecipeInfoArray);
      setRecipeInfos(tmpRecipeInfoArray);
    }
  };

  // レシピをランダムに取得する
  const getRandomRecipe = () => {
    const recipeNum = recipeInfoArray.length;
    if (recipeNum > 0) {
      const randomNum = Math.floor(Math.random() * recipeNum);
      const recipeInfo: recipeInfoArray = {
        thumbnail: recipeInfoArray[randomNum].thumbnail,
        name: recipeInfoArray[randomNum].name,
        url: recipeInfoArray[randomNum].url
      };

      setRandomRecipe(recipeInfo);
      setIsRandomRecipeGotten(true);
    }
  };

  return (
    <div className="input-text-box">
      <textarea
        cols="50"
        rows="5"
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <p>
        <button onClick={startParse}>解析開始</button>　
        <button onClick={getRandomRecipe}>ランダム取得</button>
      </p>
    </div>
  );
};

export default InputTextBox;
