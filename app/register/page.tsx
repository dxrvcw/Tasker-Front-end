import { RegisterForm } from '@/components/RegisterForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tasker | Реєстрація',
}

export default function RegisterPage() {
	return (
		<main className='w-full'>
			<div className='flex flex-col mt-56 items-center w-[350px] m-auto'>
				<RegisterForm />
			</div>
		</main>
	)
}
