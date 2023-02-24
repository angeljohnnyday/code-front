import { useMutation } from "react-query"
import api from 'src/helpers/axios-cliente'
import { BlogModel, BlogUpdate } from "src/types/blogType";

interface ParamBlogUpdate {
    blogId: string;
    data: BlogUpdate
}

const fetch = async (blogId: string, data: BlogUpdate) => {
    const response = await api.put<BlogModel>(`/${blogId}`, data);
    return response.data;
}
export default function useBlogUpdate() {
    return useMutation<BlogModel, Error, ParamBlogUpdate>(
        ({ blogId, data }: ParamBlogUpdate) => fetch(blogId, data)
    );
}
