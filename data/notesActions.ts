import { baseUrl } from './actions'

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
