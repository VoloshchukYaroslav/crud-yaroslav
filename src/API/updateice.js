export const updateIce = (id, iceData) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(iceData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return fetch(`http://localhost:3000/icecream/${id}`, options).then((res) =>
    res.json(),
  );
};
