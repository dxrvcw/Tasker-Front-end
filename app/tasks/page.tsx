'use client'

import { EditTaskForm } from '@/components/EditTaskForm'
import { createTheme } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ukUA } from '@mui/x-date-pickers/locales'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

const theme = createTheme(
	{
		palette: {
			primary: { main: '#1976d2' },
		},
	},
	ukUA
)

export default function TasksPage() {
	const token = Cookies.get('token')

	const router = useRouter()
	if (!token) {
		router.push('/')
	}

	return (
		<main className='w-full'>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<EditTaskForm />
			</LocalizationProvider>
		</main>
	)
}
