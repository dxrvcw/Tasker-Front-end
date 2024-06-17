'use client'

import { useStore } from '@/store/store'
import Link from 'next/link'
import { useEffect } from 'react'
import { GrAddCircle } from 'react-icons/gr'

export function NotesSidebar() {
	const { notes, createNote, fetchNotes } = useStore()

	useEffect(() => {
		fetchNotes()
	}, [])

	return (
		<aside className='basis-1/4 border-r-2 h-full relative p-3'>
			{notes ? (
				notes.map(note => (
					<Link
						key={note.id}
						href={`/notes/${note.id}`}
						className='block w-full border-2 p-2 rounded-md mt-4 hover:bg-slate-100'
					>
						{note.title}
					</Link>
				))
			) : (
				<p>Нічого немає(</p>
			)}

			<button
				className='absolute right-2 bottom-0 bg-green-500 hover:bg-green-600 text-white rounded-md flex justify-center items-center w-12 h-12 text-3xl'
				onClick={createNote}
			>
				<GrAddCircle />
			</button>
		</aside>
	)
}
