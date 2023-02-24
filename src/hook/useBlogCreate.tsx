import { useMutation } from "react-query"
import api from 'src/helpers/axios-cliente'
import { BlogCreation, BlogModel } from "src/types/blogType";

const fetch = async (body: BlogCreation) => {
    const response = await api.post<BlogModel>('/blog/create', body);
    return response.data;
}

export default function useBlogCreate() {
    return useMutation<BlogModel, Error, BlogCreation>(
        (body: BlogCreation) => fetch(body)
    );
}
