// 1 уровень сложности: 

// Напишите try…catch для обработки ошибки с сервера по любому адресу. +

// Создайте новую ошибки +

// напишите что сервер не доступен в error консоли. +

async function getPosts() {
    try {
        const url = 'http://49.13.31.246:9191/posts';
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();

        console.log(data)
    }

    catch (e) {
        console.error(`сервер не доступен : ${e}`);
    }
}

getPosts();