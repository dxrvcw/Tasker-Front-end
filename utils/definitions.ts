export interface INote {
	id: number
	user_id: number
	title?: string
	description?: string
	created_at: string
}

export interface ITask {
	id: number
	user_id: number
	finish_date: string
	title: string
	created_at: string
}
