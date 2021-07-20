function task1(err, data, callback) {
    console.log('task 1 started')

    setTimeout(() => {
        console.log(`task 1 completed [${data}]`)
        callback()
    }, Math.random() * 2000)
}

function task2(err, data, callback) {
    console.log('task 2 started')

    setTimeout(() => {
        console.log(`task 2 completed [${data}]`)
        callback()
    }, Math.random() * 2000)
}

function task3(err, data, callback) {
    console.log('task 3 started')

    setTimeout(() => {
        console.log(`task 3 completed [${data}]`)
        callback()
    }, TASK_DURATION)
}


function execute(tasks) {

    let completed = 0

    tasks.forEach(task => {
        const result = Math.floor(Math.random() * 100);
        task(null, result, () => {
            if (++completed === tasks.length) {
                finish('All tasks have been completed')
            }
        })
    });

    function finish(message) {
        console.log(message);
    }
}

const TASK_DURATION = 500
const TASKS = [task1, task2, task3, task1]
execute(TASKS)