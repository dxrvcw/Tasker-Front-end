import Cookies from 'js-cookie'

export function setCookieWithExpiry(
	name: string,
	value: string,
	minutes: number
) {
	const now = new Date()
	const expires = new Date(now.getTime() + minutes * 60 * 1000)
	Cookies.set(name, value, { expires })
}
