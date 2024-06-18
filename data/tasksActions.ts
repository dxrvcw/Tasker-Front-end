import { baseUrl } from './actions'

export async function getTasks(token: string | undefined) {
	if (!token) {
		return
	}
	const response = await fetch(`${baseUrl}/api/tasks`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})

	return response
}

export async function updateTask(
	token: string | undefined,
	id: string,
	name: string,
	complete_at: string,
	completed: boolean
) {
	if (!token) {
		return
	}
	const response = await fetch(`${baseUrl}/api/tasks/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			name,
			complete_at,
			is_completed: completed,
		}),
	})
	return response
}

export async function deleteTask(token: string, id: string) {
	if (!token) return

	await fetch(`${baseUrl}/api/tasks/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
}

export async function createTask(
	token: string,
	name = 'Untitled task',
	complete_at = new Date(Date.now()).toISOString()
) {
	if (!token) return

	const response = await fetch(`${baseUrl}/api/tasks`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			name,
			complete_at,
		}),
	})

	return response
}
