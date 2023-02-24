import { useNavigate, useParams } from 'react-router-dom'
import PostAddIcon from '@mui/icons-material/PostAdd';
import {
    Box,
    Button,
    Typography,
} from '@mui/material'
import {
    BlogView,
} from 'src/components'
import useGetBlog from 'src/hook/useGetBlog';

export default function BlogDetail() {
    const navigate = useNavigate()
    const { blogId } = useParams();
    const { data: blog, isFetched } = useGetBlog(blogId);

    return (
        <>
            {!!blog && (
                <BlogView
                    blog={blog}
                />
            )}
            {(isFetched && !blog) && (
                <Box
                    mx='auto'
                    display='flex'
                    flexDirection='column'
                    textAlign='center'
                >
                    <Box>
                        <PostAddIcon
                            sx={{
                                fontSize: {
                                    xs: '12rem',
                                    lg: '16rem',
                                },
                                color: '#797D7F'
                            }}
                        />
                    </Box>
                    <Typography
                        variant='h4'
                        gutterBottom
                    >
                        Blog no encontrado
                    </Typography>
                    <Typography
                        variant="overline"
                        gutterBottom
                    >
                        Crea un nuevo blog, podrás subir tus ideas y colaborar con la gente.
                    </Typography>
                    <Button
                        size="small"
                        onClick={() => navigate('/editor')}
                    >
                        Nuevo blog
                    </Button>
                </Box>
            )}
        </>
    )
}
