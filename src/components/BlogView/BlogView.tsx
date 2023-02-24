import { useMemo } from 'react'

import { useNavigate } from 'react-router-dom';
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    Typography,
} from '@mui/material'
import {
    Col,
    Row
} from 'src/components'
import { formatters } from 'src/helpers/generic';
import { BlogModel } from 'src/types/blogType';

interface Props {
    blog: BlogModel
    buttonOptions?: boolean
}

export default function BlogView({
    buttonOptions = true,
    blog,
}: Props) {
    const navigate = useNavigate();
    const author = useMemo(() => blog.author, [blog])

    return (
        <>
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                textAlign='center'
                gap={{
                    xs: '0.4rem',
                    lg: '0.8rem'
                }}
                px={{
                    xs: 0,
                    lg: '16rem'
                }}
            >
                <Typography variant="h4" >
                    {blog.title}
                </Typography>
                <Card
                    variant="outlined"
                    sx={{
                        border: 'none',
                        width: {
                            xs: '52%',
                            lg: '32%'
                        }
                    }}
                >
                    <CardHeader
                        avatar={<Avatar src={author.img} />}
                        title={formatters.fullName(author)}
                        subheader={formatters.date(blog?.createAt || new Date(), 'll')}
                    />
                </Card>
            </Box>
            <Row
                mt={{
                    xs: '2.4rem',
                    lg: '2.8rem'
                }}
                px={{
                    xs: 0,
                    lg: '5.2rem'
                }}
            >
                <Col xs={12}>
                    <Box
                        component='img'
                        src={blog.img}
                        sx={{
                            borderRadius: '0.8rem',
                            width: '100%',
                            height: {
                                xs: '12rem',
                                lg: '28rem'
                            },
                        }}
                    />
                </Col>
                <Col xs={12}>
                    {blog?.body && (
                        <div
                            dangerouslySetInnerHTML={{ __html: blog.body }}
                        />
                    )}
                </Col>
                {buttonOptions && (
                    <Col xs={12} textAlign='center'>
                        <ButtonGroup
                            size='small'
                        >
                            <Button
                                onClick={() => navigate('/blogs')}
                            >
                                Ver todos los blogs
                            </Button>
                            <Button
                                onClick={() => navigate(`/editor/${blog.blogId}`)}
                            >
                                Editar
                            </Button>
                        </ButtonGroup>
                    </Col>
                )}
            </Row>
        </>
    )
}
