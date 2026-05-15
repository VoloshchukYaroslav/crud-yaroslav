// export const getIce = () => {
//   return fetch("http://localhost:3000/icecream").then((res) => res.json());
// };

export const getIce = async () => {
  try {
    const res = await fetch("http://localhost:3000/icecream");
    if (!res.ok) {
      throw new Error("Error");
    }
    const data = await res.json();
    if (!data) {
      throw new Error("No datas");
    }
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }

  // .then((res) => res.json());
};
