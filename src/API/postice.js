export const postIce = async (iceData) => {
  const options = {
    method: "POST",
    body: JSON.stringify(iceData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    const res = await fetch("http://localhost:3000/icecream", options);
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
  // .then((res) =>
  // res.json(),
};
