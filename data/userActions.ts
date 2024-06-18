import { baseUrl } from './actions'

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
