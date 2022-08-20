import { useState } from "react";
import { getRecipeInfo } from "./ParserLib";

const InputTextBox = ({ setRecipeInfos, setRandomRecipe, setIsRecipeGotten }) => {
  const [inputText, setText] = useState("");
  const [recipeInfoArray, setRecipeInfoArray] = useState([]);

  const startParse = () => {
    if (inputText !== "") {
      setRecipeInfoArray(getRecipeInfo(inputText));
      setRecipeInfos(recipeInfoArray);
      setIsRecipeGotten(true);
    }
  };

  // レシピをランダムに取得する
  const getRandomRecipe = () => {
    if (recipeInfoArray.length !== 0) {
      setRandomRecipe();
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
