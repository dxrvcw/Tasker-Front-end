import { NotesSidebar } from '@/components/NotesSidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tasker | Нотатки',
}

export default function NotesLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className='container m-auto flex h-[80vh] mt-8'>
			<NotesSidebar />
			{children}
		</main>
	)
}
