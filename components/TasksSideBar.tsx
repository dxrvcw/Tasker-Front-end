import Link from 'next/link'
import { GrAddCircle } from 'react-icons/gr'

export function TasksSidebar() {
	return (
		<aside className='basis-1/4 border-r-2 h-full relative p-3'>
			<Link
				href='#'
				className='block w-full border-2 p-2 rounded-md mt-4 hover:bg-slate-100'
			>
				Олег мужик
			</Link>
			<Link
				href='#'
				className='block w-full border-2 p-2 rounded-md mt-4 hover:bg-slate-100'
			>
				Діма куколд
			</Link>
			<Link
				href='#'
				className='block w-full border-2 p-2 rounded-md mt-4 hover:bg-slate-100'
			>
				Великий лоб
			</Link>
			<Link
				href='#'
				className='block w-full border-2 p-2 rounded-md mt-4 hover:bg-slate-100'
			>
				Вадим найкращий!!!
			</Link>
			<Link
				href='#'
				className='block w-full border-2 p-2 rounded-md mt-4 hover:bg-slate-100'
			>
				Саня йде нахуй арсен ван лав
			</Link>
			<Link
				href='#'
				className='block w-full border-2 p-2 rounded-md mt-4 hover:bg-slate-100'
			>
				Note
			</Link>
			<button className='absolute right-2 bottom-0 bg-green-500 hover:bg-green-600 text-white rounded-md flex justify-center items-center w-12 h-12 text-3xl'>
				<GrAddCircle />
			</button>
		</aside>
	)
}
