export interface ResponseType<T> {
    list: T[],
    totalItems: number;
    totalPages: number;
    currentPage: number;
}

export interface PageableType {
    page: number;
    size: number;
}