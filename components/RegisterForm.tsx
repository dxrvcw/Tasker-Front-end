'use client'

import { registerUser } from '@/data/actions'
import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function RegisterForm() {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const { setToken } = useStore()
	const router = useRouter()

	async function handleRegister() {
		if (!name || !password || !email) {
			alert('Заповніть усі поля!')
			return
		}
		const response = await registerUser(name, email, password)

		if (!response.ok) {
			alert('Помилка при реєстрації користувача!')
			return
		}

		const data = await response.json()
		setToken(data.access_token)

		router.push('/')
		router.refresh()
	}

	return (
		<>
			<h1 className='text-2xl'>Реєстрація</h1>
			<input
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Введіть ім`я користувача'
				className='mt-6 w-full border p-2 rounded-md'
			/>
			<input
				type='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='Введіть електронну пошту'
				className='mt-2 w-full border p-2 rounded-md'
			/>
			<input
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder='Введіть пароль'
				className='mt-2 w-full border p-2 rounded-md'
			/>

			<button
				className='mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md'
				onClick={handleRegister}
			>
				Зареєструватись
			</button>
		</>
	)
}
