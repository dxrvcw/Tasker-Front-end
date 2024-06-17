import { createNote, deleteNote, getNotes, updateNote } from '@/data/actions'
import { INote } from '@/utils/definitions'
import { setCookieWithExpiry } from '@/utils/utils'
import Cookies from 'js-cookie'
import { create } from 'zustand'

interface IStore {
	notes: INote[]
	token: string | null
	fetchNotes: () => void
	updateNote: (id: string, title: string, description?: string) => void
	deleteNote: (id: string) => void
	createNote: () => void
	setToken: (token: string | null) => void
	removeToken: () => void
}

export const useStore = create<IStore>((set, get) => ({
	notes: [],
	token: Cookies.get('token') || null,

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

	setToken: (token: string | null) => {
		if (token) {
			setCookieWithExpiry('token', token, 30)
		} else {
			Cookies.remove('token')
		}
		set({ token })
	},

	removeToken: () => {
		Cookies.remove('token')
		set({ token: null })
	},
}))
