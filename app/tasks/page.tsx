'use client'

import { EditTaskForm } from '@/components/EditTaskForm'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function TasksPage() {
	return (
		<main className='w-full'>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<EditTaskForm />
			</LocalizationProvider>
		</main>
	)
}
