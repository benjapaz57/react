import products from "../components/products";

const promise = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  } catch {
    reject('No pudo realizarse la petición')
  }
});


const customFetch = () => promise;

export default customFetch;