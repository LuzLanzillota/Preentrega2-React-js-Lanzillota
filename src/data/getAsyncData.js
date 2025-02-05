import { useState, useEffect } from "react";
import products from "./data";

function getAsyncData() {

    const promiseData = new Promise((resolve, reject) => {
        const errorFatal = false;

        setTimeout(() => {
            if (errorFatal) reject("Algo salió mal!!!!");

            resolve(products);
        }, 2000);
    });

    return promiseData;
}

export function useAsyncData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getAsyncData().then((result) => {
            setData(result);
            setLoading(false);
        }).catch((error) => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    return { data, loading };
}

export function getAsyncItemById(itemID) {
    const promiseData = new Promise((resolve) => {
        setTimeout(() => {
            const requestedProduct = products.find((item) => item.id === Number(itemID));
            resolve(requestedProduct);
        }, 2000);
    });



    return promiseData;
}

export function getAsyncItemsByCategory(catID) {
    console.log("Solicitando productos para... ", catID);

    const promiseData = new Promise((resolve) => {
        setTimeout(() => {
            const requestedProduct = products.filter((item) => item.category.toLowerCase() === catID.toLowerCase());
            resolve(requestedProduct);
        }, 1000);
    });


    return promiseData;
}
export default getAsyncData;
