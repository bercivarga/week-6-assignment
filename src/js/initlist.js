import { writeTodo } from "./firebase.js";

export function initList(url) {
    const retrieve =
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    retrieve
        .then(function (response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function (result) {
            console.log(result);
            for (const item of result) {
                if (typeof (item) != "undefined") {
                    writeTodo(item.userId, item.id, item.title, item.completed)
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}

export default initList;