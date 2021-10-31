export const serverRequest = function (method, path, body) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, path, true);
        if (body) {
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        }
        xhr.send(body);
        xhr.onload = (e) => {
            resolve(JSON.parse(e.target.response));
        };
    })
}