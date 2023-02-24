import { useQuery } from "react-query"
import api from 'src/helpers/axios-cliente';
import { PageableType, ResponseType } from 'src/types/apiType';
import { BlogModel } from "src/types/blogType";

const fetch = async (pageable: PageableType) => {
    const response = await api.get<ResponseType<BlogModel>>('/blog/all', { params: { ...pageable } });
    return response.data;
}

export default function useBlogs(pageable: PageableType, enabled = true) {
    return useQuery<ResponseType<BlogModel>, Error>(
        ['blogs', pageable, enabled],
        async () => await fetch(pageable),
        {
            enabled
        }
    );
}
