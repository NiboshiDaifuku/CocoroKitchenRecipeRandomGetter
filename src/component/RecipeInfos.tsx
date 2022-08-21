import RecipeInfo from "./RecipeInfo";

const RecipeInfos = ({ recipeInfos }) => {
  let info = [];
  if (recipeInfos !== null) {
    info = recipeInfos.map((e, idx) => (
      <RecipeInfo key={e.url} thumbnail={e.thumbnail} name={e.name} url={e.url} id={idx} />
    ));
  }
  return (
    <div className="recipe-infos">
      <hr />
      <table border="1">
        <thead align="center">
          <tr>
            <th>サムネイル</th>
            <th>ID</th>
            <th>レシピ名</th>
          </tr>
        </thead>
        <tbody>{info}</tbody>
      </table>
    </div>
  );
};

export default RecipeInfos;
