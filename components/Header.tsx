'use client'

import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { HeaderNav } from './HeaderNav'

export function Header() {
	const [token, setToken] = useState<string | undefined>()
	const router = useRouter()

	useEffect(() => {
		setToken(Cookies.get('token'))
	}, [])

	const handleSignOut = () => {
		if (token) {
			Cookies.remove('token')
			window.location.reload()
			router.push('/')
		} else {
			window.location.reload()
		}
	}

	return (
		<header className='bg-blue-500 p-4'>
			<div className='container m-auto flex justify-between'>
				<HeaderNav />
				<div>
					{!token ? (
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
