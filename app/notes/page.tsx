'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function NotesPage() {
	const token = Cookies.get('token')
	const router = useRouter()
	if (!token) {
		router.push('/')
		window.location.reload()
	}
	return (
		<main className='w-full text-center'>Оберіть нотатку для редагування!</main>
	)
}
