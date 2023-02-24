import { useQuery } from "react-query"
import api from 'src/helpers/axios-cliente';
import { BlogModel } from "src/types/blogType";

const fetch = async (uuid?: string) => {
    const response = await api.get<BlogModel>(`/blog/${uuid}`);
    return response.data;
}

export default function useGetBlog(uuid?: string) {
    return useQuery<BlogModel, Error>(
        ['getBlog', uuid],
        async () => await fetch(uuid),
        {
            enabled: !!uuid,
        }
    );
}
