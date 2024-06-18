'use client'

import { EditNoteForm } from '@/components/EditNoteForm'

export default function NotePage({ params }: { params: { id: string } }) {
	return (
		<div className='w-full'>
			<EditNoteForm id={params.id} />
		</div>
	)
}
