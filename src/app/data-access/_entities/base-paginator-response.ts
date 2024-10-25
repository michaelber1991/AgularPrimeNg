export interface BasePaginatorRequest {
	page: number;
	per_page: number;
}

export interface BasePaginatorResponse<T> {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: T[];
}
