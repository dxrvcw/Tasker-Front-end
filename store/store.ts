import { createNote, deleteNote, getNotes, updateNote } from '@/data/actions'
import Cookies from 'js-cookie'
import { create } from 'zustand'

import { INote } from '@/components/NotesSidebar'

interface IStore {
	notes: INote[]
	fetchNotes: () => void
	updateNote: (id: string, title: string, description: string) => void
	deleteNote: (id: string) => void
	createNote: () => void
}

export const useStore = create<IStore>()(set => ({
	notes: [] as INote[],

	fetchNotes: async () => {
		const token = Cookies.get('token')
		if (!token) return
		const response = await getNotes(token)
		const notes: INote[] = await (response?.json() || [])
		set({ notes })
	},

	updateNote: async (id: string, title: string, description?: string) => {
		const token = Cookies.get('token')
		if (!token) return
		await updateNote(token, id, title, description)
		set(state => ({
			notes: state.notes.map(note =>
				note.id === +id ? { ...note, title, description } : note
			),
		}))
	},

	deleteNote: async (id: string) => {
		const token = Cookies.get('token')
		if (!token) return
		await deleteNote(token, id)
		set(state => ({
			notes: state.notes.filter(note => note.id !== +id),
		}))
	},

	createNote: async () => {
		const token = Cookies.get('token')
		if (!token) return
		const response = await createNote(token)
		const newNote: INote = await response!.json()
		set(state => ({
			notes: [...state.notes, newNote],
		}))
	},
}))
