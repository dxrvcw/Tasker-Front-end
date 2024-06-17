import { SignInForm } from '@/components/SignInForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tasker | Вхід',
}

export default function SignInPage() {
	return (
		<main className='w-full'>
			<div className='flex flex-col mt-56 items-center w-[350px] m-auto'>
				<SignInForm />
			</div>
		</main>
	)
}
