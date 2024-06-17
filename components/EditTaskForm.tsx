'use client'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useState } from 'react'

dayjs.extend(utc)

export function EditTaskForm() {
	const [title, setTitle] = useState('')
	const [time, setTime] = useState<Dayjs | null>(dayjs.utc())
	const [date, setDate] = useState<Dayjs | null>(dayjs.utc())

	const handleDateChange = (newDate: Dayjs | null) => {
		setDate(newDate ? newDate.utc() : null)
	}

	const handleTimeChange = (newTime: Dayjs | null) => {
		setTime(newTime ? newTime.utc() : null)
	}

	const handleSubmit = () => {
		const newDate = new Date(
			date?.get('year')!,
			date?.get('month')!,
			date?.get('date'),
			time?.get('hour')!,
			time?.get('minute')!
		)

		console.log(newDate.toISOString())
	}

	return (
		<div className='flex flex-col px-36 py-6 justify-between w-full items-center gap-6'>
			<label htmlFor='title' className='text-slate-500'>
				Назва:
			</label>
			<input
				type='text'
				name='title'
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder='Введіть назву:'
				className='w-full p-3 border rounded-md'
			/>

			<DateCalendar value={date} onChange={handleDateChange} />

			<TimePicker
				value={time}
				onChange={handleTimeChange}
				ampm={false}
				className='w-48'
			/>
			<div className='flex justify-end gap-5'>
				<button className='mt-6 bg-red-500 text-white w-fit px-6 py-2 hover:bg-red-600 rounded-md'>
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
