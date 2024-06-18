import { EditTaskForm } from '@/components/EditTaskForm'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function TaskPage({ params }: { params: { id: string } }) {
	return (
		<div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<EditTaskForm id={params.id} />
			</LocalizationProvider>
		</div>
	)
}
