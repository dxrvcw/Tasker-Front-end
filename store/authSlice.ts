import { setCookieWithExpiry } from '@/utils/utils'
import Cookies from 'js-cookie'
import { StateCreator } from 'zustand'
import { ISharedSlice } from './store'

export interface AuthSlice {
	setToken: (token: string | null) => void
	removeToken: () => void
}

export const createAuthSlice: StateCreator<
	AuthSlice & ISharedSlice,
	[],
	[],
	AuthSlice
> = set => ({
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
})
