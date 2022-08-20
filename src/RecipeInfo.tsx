const RecipeInfo = ({ thumbnail, id, url, name }) => {
  return (
    <tr>
      <td>
        <img src={thumbnail} alt="" width="80" />
      </td>
      <td align="center">{id + 1}</td>
      <td>
        <a href={url}>{name}</a>
      </td>
    </tr>
  );
};

export default RecipeInfo;
