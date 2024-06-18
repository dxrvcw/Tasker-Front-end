'use client'

import { useStore } from '@/store/store'
import Link from 'next/link'
import { useEffect } from 'react'
import { GrAddCircle } from 'react-icons/gr'

export function TasksSidebar() {
	const { tasks, createTask, fetchTasks } = useStore()

	useEffect(() => {
		fetchTasks()
	}, [])

	return (
		<aside className='basis-1/4 border-r-2 h-full relative p-3'>
			{tasks ? (
				tasks.map(task => (
					<Link
						key={task.id}
						href={`/tasks/${task.id}`}
						className='block w-full border-2 p-2 rounded-md mt-4 hover:bg-slate-100'
					>
						{task.title}
					</Link>
				))
			) : (
				<p>Нічого немає(</p>
			)}

			<button
				className='absolute right-2 bottom-0 bg-green-500 hover:bg-green-600 text-white rounded-md flex justify-center items-center w-12 h-12 text-3xl'
				onClick={createTask}
			>
				<GrAddCircle />
			</button>
		</aside>
	)
}
