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
	complete_at: string
	name: string
	created_at: string
	is_completed: boolean
}
