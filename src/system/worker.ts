import { promise, type queueAsPromised } from 'fastq'

type Task = {
  id: number
}

const asyncWorker = async (arg: Task): Promise<void> => {
  console.log(arg.id)
}

const q: queueAsPromised<Task> = promise(asyncWorker, 1)

q.push({ id: 42 }).catch((err) => console.error(err))
