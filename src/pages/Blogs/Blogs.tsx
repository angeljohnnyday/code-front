import { useEffect, useMemo, useState } from 'react'

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import { Col, Row } from 'src/components';
import useBlogs from 'src/hook/useBlogs';
import { PageableType } from 'src/types/apiType';
import { useNavigate } from 'react-router-dom';
import { formatters } from 'src/helpers/generic';
import { BlogModel } from 'src/types/blogType';

export default function Blogs() {
    const navigate = useNavigate();
    const [enabled, setEnabled] = useState(false);
    const [blogs, setBlogs] = useState<BlogModel[]>([]);
    const [pageable, setPageable] = useState<PageableType>({ page: 0, size: 3 })
    const { data, isSuccess } = useBlogs(pageable, enabled);

    const showButton = useMemo(() => {
        if (!data?.totalItems) return false;
        return data?.totalItems > blogs.length
    }, [data, blogs])

    const handleMore = () => {
        setPageable(({ size, page }) => ({ size, page: page + 1 }))
    }

    useEffect(() => {
        if (!!data && isSuccess) setBlogs((blogList) => ([...blogList, ...data.list]))
    }, [data])

    useEffect(() => {
        setEnabled(true)
    }, [setEnabled])

    return (
        <>

            <Row>
                {data?.totalItems === 0 && (
                    <Box
                        mx='auto'
                        display='flex'
                        flexDirection='column'
                        textAlign='center'
                    >
                        <Box>
                            <ArticleOutlinedIcon
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
                            Crea tu primer blog!
                        </Typography>
                        <Typography
                            variant="overline"
                            gutterBottom
                        >
                            Creando un blog, podrás subir tus ideas y colaborar con la gente.
                        </Typography>
                        <Button
                            size="small"
                            onClick={() => navigate('/editor')}
                        >
                            Nuevo blog
                        </Button>
                    </Box>
                )}
                {blogs.map(({ blogId, title, img, createAt, author: { name, lastName, img: authorImg } }) => (
                    <Col xs={12} lg={4} key={blogId}>
                        <Card>
                            <CardActionArea onClick={() => navigate(`/blog/${blogId}`)}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={img}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        sx={{ color: '#273746' }}
                                    >
                                        {title}
                                    </Typography>
                                    <Box
                                        mt='1.6rem'
                                        display='flex'
                                        alignItems='center'
                                    >
                                        <Box mr='01.2rem'>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={authorImg}
                                            />
                                        </Box>
                                        <Box flexGrow={1}>
                                            <Box
                                                display='flex'
                                                justifyContent='space-around'
                                            >
                                                <Typography
                                                    variant="overline"
                                                    sx={{ color: '#424949' }}
                                                >
                                                    {name} {lastName}
                                                </Typography>
                                                <Typography
                                                    variant="overline"
                                                    sx={{ color: '#424949' }}
                                                >
                                                    {formatters.date(createAt, 'll')}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                ))}
            </Row>
            {showButton && (
                <Box
                    mt='1.2rem'
                    textAlign='right'
                    onClick={handleMore}
                >
                    <Button>
                        Cargar más
                    </Button>
                </Box>
            )}
        </>
    )
}
