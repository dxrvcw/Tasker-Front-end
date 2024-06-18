import Cookies from 'js-cookie'
import { create } from 'zustand'
import { AuthSlice, createAuthSlice } from './authSlice'
import { NotesSlice, createNotesSlice } from './notesSlice'
import { TasksSlice, createTasksSlice } from './tasksSlice'

export interface ISharedSlice {
	token: string | null
}

export const useStore = create<
	NotesSlice & AuthSlice & TasksSlice & ISharedSlice
>((...a) => ({
	token: Cookies.get('token') || null,
	...createNotesSlice(...a),
	...createAuthSlice(...a),
	...createTasksSlice(...a),
}))
