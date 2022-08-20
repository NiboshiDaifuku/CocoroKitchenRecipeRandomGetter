import RecipeInfo from "./RecipeInfo";

const RecipeInfos = ({ recipeInfos }) => {
  const info = recipeInfos.map((e, idx) => (
    <RecipeInfo key={e.url} thumbnail={e.thumbnail} name={e.name} url={e.url} id={idx} />
  ));

  return (
    <>
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
    </>
  );
};

export default RecipeInfos;
