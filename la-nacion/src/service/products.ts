export const productsList = () => {
  const resData = fetch('http://localhost:3001/products', { next: { revalidate: 60 } })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return resData;
};
