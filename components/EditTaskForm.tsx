'use client'
import { useStore } from '@/store/store'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

dayjs.extend(utc)

export function EditTaskForm({ id }: { id: string }) {
	const { tasks, updateTask, deleteTask } = useStore()
	const task = tasks.find(task => task.id === +id) || null

	const router = useRouter()

	const [name, setName] = useState(task?.name || '')
	const [date, setDate] = useState<Dayjs | null>(
		dayjs(task?.created_at || new Date(Date.now()).toISOString())
	)
	const [completed, setCompleted] = useState(task?.is_completed || false)

	useEffect(() => {
		if (task) {
			const taskDate = new Date(task.complete_at)
			setDate(dayjs(taskDate))
		}
	}, [task])

	const handleSubmit = () => {
		console.log(date)
		if (date) {
			updateTask(id, name, date.utc().toISOString(), completed)
		} else {
			console.error('Invalid date or time')
		}
	}

	const handleDelete = () => {
		deleteTask(id)
		router.push('/tasks')
	}

	return (
		<div className='flex flex-col px-36 py-6 justify-between w-full items-center gap-6'>
			<label htmlFor='name' className='text-slate-500'>
				Назва:
			</label>
			<input
				type='text'
				name='name'
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Введіть назву:'
				className='w-full p-3 border rounded-md'
			/>

			<DateTimePicker
				label='Введіть дату та час'
				value={date}
				onChange={newDate => setDate(newDate)}
			/>
			<span>Виконано:</span>
			<input
				type='checkbox'
				value={String(completed)}
				onChange={() => setCompleted(!completed)}
			/>
			<div className='flex justify-end gap-5'>
				<button
					className='mt-6 bg-red-500 text-white w-fit px-6 py-2 hover:bg-red-600 rounded-md'
					onClick={handleDelete}
				>
					Видалити
				</button>
				<button
					className='mt-6 bg-green-500 text-white w-fit px-6 py-2 hover:bg-green-600 rounded-md'
					onClick={handleSubmit}
				>
					Зберегти
				</button>
			</div>
		</div>
	)
}
