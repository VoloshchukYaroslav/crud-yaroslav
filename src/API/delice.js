// export const delIce = (id) => {
//   const options = {
//     method: "DELETE",
//   };
//   return fetch(`http://localhost:3000/icecream/${id}`, options).then((res) =>
//     res.json(),
//   );
// };

export const delIce = async (id) => {
  const options = {
    method: "DELETE",
  };
  try {
    const res = await fetch(`http://localhost:3000/icecream/${id}`, options);

    if (!res.ok) {
      throw new Error("Помилка");
    }
    const data = await res.json();
    if (!data) {
      throw new Error("Нема данних");
    }
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
  // .then((res) => res.json(),
};
