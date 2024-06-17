import Cookies from 'js-cookie'

const baseUrl = 'https://3jxnk4ll-8080.euw.devtunnels.ms'

export async function registerUser(
	username: string,
	email: string,
	password: string
) {
	const response = await fetch(`${baseUrl}/api/auth/sign_up`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username,
			email,
			password,
		}),
	})
	return response
}

export async function loginUser(username: string, password: string) {
	const response = await fetch(`${baseUrl}/api/auth/sign_in`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username,
			password,
		}),
	})
	return response
}

export function setCookieWithExpiry(
	name: string,
	value: string,
	minutes: number
) {
	const now = new Date()
	const expires = new Date(now.getTime() + minutes * 60 * 1000)
	Cookies.set(name, value, { expires })
}

export async function getNotes(token: string | undefined) {
	if (!token) {
		return
	}
	const response = await fetch(`${baseUrl}/api/notes`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	return response
}

export async function getNote(token: string | undefined, id: string) {
	if (!token) {
		return
	}
	const response = await fetch(`${baseUrl}/api/notes/${id}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	return response
}

export async function updateNote(
	token: string | undefined,
	id: string,
	title: string,
	description?: string
) {
	if (!token) {
		return
	}
	const response = await fetch(`${baseUrl}/api/notes/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			title,
			description: description ? description : null,
		}),
	})
	return response
}

export async function deleteNote(token: string, id: string) {
	if (!token) return

	await fetch(`${baseUrl}/api/notes/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}

export async function createNote(
	token: string,
	title = 'Untitled note',
	description = null
) {
	if (!token) return

	const response = await fetch(`${baseUrl}/api/notes`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			title,
			description,
		}),
	})

	return response
}
