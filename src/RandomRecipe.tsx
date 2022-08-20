const RandomRecipe = ({ isRandomRecipeGotten, randomRecipe }) => {
  return (
    <>
      {isRandomRecipeGotten && (
        <>
          <hr />
          <h2>取得結果</h2>
          <table border="1">
            <thead align="center">
              <tr>
                <th>サムネイル</th>
                <th>レシピ名</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={randomRecipe.thumbnail} alt="" width="80" />
                </td>
                <td>
                  <a href={randomRecipe.url}>{randomRecipe.name}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default RandomRecipe;
