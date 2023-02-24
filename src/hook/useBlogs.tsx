import { useQuery } from "react-query"
import api from 'src/helpers/axios-cliente';
import { PageableType, ResponseType } from 'src/types/apiType';
import { BlogModel } from "src/types/blogType";

const fetch = async (pageable: PageableType) => {
    const response = await api.get<ResponseType<BlogModel>>('/', { params: { ...pageable } });
    return response.data;
}

export default function useBlogs(pageable: PageableType) {
    return useQuery<ResponseType<BlogModel>, Error>(
        ['blogs', pageable],
        async () => await fetch(pageable)
    );
}
