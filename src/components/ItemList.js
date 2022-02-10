import item from './Item'

let isOk = true;
let data = item;

const itemList = (timeout, data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOk) {
                resolve(data);
            } else {
                reject(alert('no se pudo mostrar el inventario.'))
            }
        }, timeout);
    });
};

itemList(2000, data)
.then((data) => console.log('accept'))
.catch((error) => console.log('error'))

export default itemList;