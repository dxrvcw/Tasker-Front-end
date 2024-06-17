import { createNote, deleteNote, getNotes, updateNote } from '@/data/actions'
import { INote } from '@/utils/definitions'
import { StateCreator } from 'zustand'

export interface NotesSlice {
	notes: INote[]
	token: string | null
	fetchNotes: () => Promise<void>
	updateNote: (id: string, title: string, description?: string) => Promise<void>
	deleteNote: (id: string) => Promise<void>
	createNote: () => Promise<void>
}

export const createNotesSlice: StateCreator<NotesSlice> = (set, get) => ({
	notes: [],
	token: get().token,

	fetchNotes: async () => {
		const { token } = get()
		if (!token) return
		const response = await getNotes(token)
		const notes: INote[] = await (response?.json() || [])
		set({ notes })
	},

	updateNote: async (id: string, title: string, description?: string) => {
		const { token } = get()
		if (!token) return
		await updateNote(token, id, title, description)
		set(state => ({
			notes: state.notes.map(note =>
				note.id === +id ? { ...note, title, description } : note
			),
		}))
	},

	deleteNote: async (id: string) => {
		const { token } = get()
		if (!token) return
		await deleteNote(token, id)
		set(state => ({
			notes: state.notes.filter(note => note.id !== +id),
		}))
	},

	createNote: async () => {
		const { token } = get()
		if (!token) return
		const response = await createNote(token)
		const newNote: INote = await response!.json()
		set(state => ({
			notes: [...state.notes, newNote],
		}))
	},
})
