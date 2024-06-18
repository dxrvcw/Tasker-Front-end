import {
	createTask,
	deleteTask,
	getTasks,
	updateTask,
} from '@/data/tasksActions'
import { ITask } from '@/utils/definitions'
import { StateCreator } from 'zustand'
import { ISharedSlice } from './store'

export interface TasksSlice {
	tasks: ITask[]
	fetchTasks: () => Promise<void>
	updateTask: (id: string, title: string, finish_date: string) => Promise<void>
	deleteTask: (id: string) => Promise<void>
	createTask: () => Promise<void>
}

export const createTasksSlice: StateCreator<
	ISharedSlice & TasksSlice,
	[],
	[],
	TasksSlice
> = (set, get) => ({
	tasks: [] as ITask[],

	fetchTasks: async () => {
		const { token } = get()
		if (!token) return
		const response = await getTasks(token)
		const tasks: ITask[] = await (response?.json() || [])
		set({ tasks })
	},

	updateTask: async (id: string, title: string, finish_date: string) => {
		const { token } = get()
		if (!token) return
		await updateTask(token, id, title, finish_date)
		set(state => ({
			tasks: state.tasks.map(task =>
				task.id === +id ? { ...task, title, finish_date } : task
			),
		}))
	},

	deleteTask: async (id: string) => {
		const { token } = get()
		if (!token) return
		await deleteTask(token, id)
		set(state => ({
			tasks: state.tasks.filter(task => task.id !== +id),
		}))
	},

	createTask: async () => {
		const { token } = get()
		if (!token) return
		const response = await createTask(token)
		const newTask: ITask = await response!.json()
		set(state => ({
			tasks: [...state.tasks, newTask],
		}))
	},
})
