'use client'

import { useStore } from '@/store/store'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { HeaderNav } from './HeaderNav'

export function Header() {
	const { token, removeToken } = useStore()
	const router = useRouter()

	const [clientToken, setClientToken] = useState<string | null>(null)

	useEffect(() => setClientToken(token), [token])

	const handleSignOut = () => {
		removeToken()
		setClientToken(null)
		router.push('/')
		router.refresh()
	}

	return (
		<header className='bg-blue-500 p-4'>
			<div className='container m-auto flex justify-between'>
				<HeaderNav />
				<div>
					{!clientToken ? (
						<>
							<Link href='/sign-in' className='text-white hover:underline mr-8'>
								Увійти
							</Link>
							<Link href='/register' className='text-white hover:underline'>
								Зареєструватись
							</Link>
						</>
					) : (
						<button onClick={handleSignOut} className='text-white'>
							Вийти
						</button>
					)}
				</div>
			</div>
		</header>
	)
}
