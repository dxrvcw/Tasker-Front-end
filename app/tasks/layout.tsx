import { TasksSidebar } from '@/components/TasksSideBar'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tasker | Задачі',
}

export default function TasksLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className='container m-auto flex h-[80vh] mt-8'>
			<TasksSidebar />
			{children}
		</main>
	)
}
