import { Readable } from 'stream'

function task1(err, data, callback) {
  setTimeout(() => {
      console.log(`task 1 ${data}`)
      callback && callback()
  }, TASK_DURATION)
}

function task2(err, data, callback) {
  setTimeout(() => {
      console.log(`task 2 ${data}`)
      callback && callback()
  }, TASK_DURATION)
}

function task3(err, data, callback) {
  setTimeout(() => {
      console.log(`task 3 ${data}`)
      callback && callback()
  }, TASK_DURATION)
}

const TASK_DURATION = 500
const TASKS = [task3, task1, task2, task1]

const taskssStream = Readable.from(TASKS)
taskssStream.on('data', (task) => {
    const result = Math.floor(Math.random() * 100)
    task(null, result, () => { console.log('cb') })
})