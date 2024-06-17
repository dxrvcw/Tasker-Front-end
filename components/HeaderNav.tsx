'use client'

import { useStore } from '@/store/store'
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
	const token = useStore(state => state.token)

	const [clientToken, setClientToken] = useState<string | null>(null)

	useEffect(() => setClientToken(token), [token])

	return (
		<ul className='flex gap-8 items-center'>
			<li>
				<Link href='/' className='text-white text-xl hover:drop-shadow-xl'>
					<Image alt='Logo' src='/logo.png' width={32} height={32} />
				</Link>
			</li>
			{clientToken &&
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
				))}
		</ul>
	)
}
