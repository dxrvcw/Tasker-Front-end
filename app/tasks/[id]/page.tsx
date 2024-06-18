'use client'

import { EditTaskForm } from '@/components/EditTaskForm'
import { useStore } from '@/store/store'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useEffect } from 'react'

export default function TaskPage({ params }: { params: { id: string } }) {
	const { fetchTasks } = useStore()
	useEffect(() => {
		fetchTasks()
	}, [])
	return (
		<div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<EditTaskForm id={params.id} />
			</LocalizationProvider>
		</div>
	)
}
