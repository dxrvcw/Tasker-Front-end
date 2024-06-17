import { setCookieWithExpiry } from '@/utils/utils'
import Cookies from 'js-cookie'
import { StateCreator } from 'zustand'

export interface AuthSlice {
	token: string | null
	setToken: (token: string | null) => void
	removeToken: () => void
}

export const createAuthSlice: StateCreator<AuthSlice> = set => ({
	token: Cookies.get('token') || null,

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
