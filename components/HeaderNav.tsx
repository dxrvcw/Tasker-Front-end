'use client'

import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
	{ name: 'Задачі', href: '/tasks' },
	{ name: 'Нотатки', href: '/notes' },
]

export function HeaderNav() {
	const pathname = usePathname()

	const [token, setToken] = useState<string | undefined>()

	useEffect(() => {
		setToken(Cookies.get('token'))
	}, [])
	return (
		<ul className='flex gap-8 items-center'>
			<li>
				<Link href='/' className='text-white text-xl hover:drop-shadow-xl'>
					<Image alt='Logo' src='/logo.png' width={32} height={32} />
				</Link>
			</li>
			{token ? (
				links.map((link, index) => (
					<li key={index}>
						<Link
							href={link.href}
							className={
								pathname === link.href
									? 'text-slate-300 hover:underline'
									: 'text-white hover:underline'
							}
						>
							{link.name}
						</Link>
					</li>
				))
			) : (
				<p></p>
			)}
		</ul>
	)
}
