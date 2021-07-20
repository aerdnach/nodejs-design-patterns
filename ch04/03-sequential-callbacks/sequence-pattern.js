function task1(err, data, callback) {
    setTimeout(() => {
        console.log(`task 1 ${data}`)
        callback()
    }, TASK_DURATION)
}

function task2(err, data, callback) {
    setTimeout(() => {
        console.log(`task 2 ${data}`)
        callback()
    }, TASK_DURATION)
}

function task3(err, data, callback) {
    setTimeout(() => {
        console.log(`task 3 ${data}`)
        callback()
    }, TASK_DURATION)
}

function execute(tasks) {

    function iterate(index) {
        // tasks are finished
        if (index === tasks.length) {
            return finish()
        }

        // set the current task
        const task = tasks[index]
        const result = Math.floor(Math.random() * 100);

        /* executes the current task passing the 'iterate' function as a callback, it will be called by the task itself */
        task(null, result, () => iterate(index + 1))
    }

    function finish() {
        console.log('Task list completed.');
    }

    return iterate(0)
}

const TASK_DURATION = 500
const TASKS = [task1, task2, task3, task1]
execute(TASKS)