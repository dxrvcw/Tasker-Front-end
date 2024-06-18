'use client'

import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function EditNoteForm({ id }: { id: string }) {
	const { notes, updateNote, deleteNote } = useStore()
	const note = notes.find(note => note.id === +id)

	const router = useRouter()

	const [title, setTitle] = useState(note?.title || '')
	const [text, setText] = useState(note?.description || '')

	const handleSave = () => {
		updateNote(id, title, text)
	}

	const handleDelete = () => {
		deleteNote(id)
		router.push('/notes')
	}

	return (
		<div className='flex flex-col px-36 py-6 justify-between w-full'>
			<label htmlFor='title' className='text-slate-500'>
				Заголовок:
			</label>
			<input
				type='text'
				name='title'
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder='Введіть заголовок'
				className='w-full p-3 border rounded-md'
			/>
			<label htmlFor='text' className='mt-6 text-slate-500'>
				Опис:
			</label>
			<textarea
				placeholder='Введіть опис'
				className='w-full p-3 border rounded-md h-80 resize-none'
				value={text}
				onChange={e => setText(e.target.value)}
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
					onClick={handleSave}
				>
					Зберегти
				</button>
			</div>
		</div>
	)
}
