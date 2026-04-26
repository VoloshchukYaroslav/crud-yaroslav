export const delIce = (id) => {
  const options = {
    method: "DELETE",
  };
  return fetch(`http://localhost:3000/icecream/${id}`, options).then((res) =>
    res.json(),
  );
};
