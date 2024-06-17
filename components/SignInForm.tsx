'use client'

import { loginUser } from '@/data/actions'
import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function SignInForm() {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const { setToken } = useStore()
	const router = useRouter()

	const handleSignIn = async () => {
		if (!name || !password) {
			alert('Введіть усі дані!!!')
			return
		}

		const response = await loginUser(name, password)

		if (!response.ok) {
			alert('Неправильний логін або пароль!!!')
			return
		}

		const data = await response.json()
		setToken(data.access_token)
		router.push('/')
		router.refresh()
	}

	return (
		<>
			<h1 className='text-2xl'>Вхід</h1>
			<input
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Введіть ім`я користувача'
				className='mt-6 w-full border p-2 rounded-md'
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
				onClick={handleSignIn}
			>
				Увійти
			</button>
		</>
	)
}
