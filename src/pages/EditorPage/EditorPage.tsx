import { useEffect, useMemo, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { useFilePicker } from 'use-file-picker';
import {
    Button,
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    TextField,
    Typography
} from '@mui/material'
import {
    BlogView,
    Col,
    Modal,
    Row
} from 'src/components'
import useBlogCreate from 'src/hook/useBlogCreate';
import useGetBlog from 'src/hook/useGetBlog';
import { formatters, validations } from 'src/helpers/generic';
import 'react-quill/dist/quill.snow.css';

const maxTitle = 70;
const maxBody = 10000;
const maxNameAndLast = 15;

export default function EditorPage() {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const { data: blog } = useGetBlog(blogId);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        blogImg: '',
        title: '',
        body: '',
        authorImg: '',
        name: '',
        lastName: '',
    });

    const {
        isSuccess,
        data: savedBlog,
        mutate: create,
    } = useBlogCreate();

    const [openFileBlog, { filesContent: filesContentBlog }] = useFilePicker({
        accept: '.png',
        readAs: "DataURL",
        multiple: false,
        maxFileSize: 50
    });
    const [openFileAuthor, { filesContent: filesContentAuthor }] = useFilePicker({
        accept: '.png',
        readAs: "DataURL",
        multiple: false,
        maxFileSize: 50
    });

    const handleCardBlog = () => {
        openFileBlog();
    }

    const handleCardAuthor = () => {
        openFileAuthor();
    }

    const handleButton = () => {
        const { blogImg, authorImg, title, body, name, lastName } = data;
        create({
            img: blogImg,
            title,
            body,
            author: {
                name,
                lastName,
                img: authorImg
            },
        })
    }

    const isCompleted = useMemo(() => {
        const {
            blogImg,
            authorImg,
            title,
            body,
            name,
            lastName
        } = data;

        return !!blogImg && !!authorImg && validations.maxArray([
            {
                value: title,
                length: maxTitle,
            },
            {
                value: body,
                length: maxBody,
            },
            {
                value: name,
                length: maxNameAndLast,
            },
            {
                value: lastName,
                length: maxNameAndLast,
            }
        ])
    }, [data])

    useEffect(() => {
        if (filesContentBlog.length !== 0) {
            setData((object) => ({ ...object, 'blogImg': filesContentBlog[0].content }))
        }

        if (filesContentAuthor.length !== 0) {
            setData((object) => ({ ...object, 'authorImg': filesContentAuthor[0].content }))
        }
    }, [filesContentBlog, filesContentAuthor, setData]);

    useEffect(() => {
        if (blog) {
            const { img, title, body, author: { name, lastName, img: authorImg } } = blog;
            setData({
                blogImg: img,
                title,
                body,
                authorImg: authorImg,
                name,
                lastName,
            })
        }
    }, [blog, setData]);

    useEffect(() => {
        if (isSuccess && !!savedBlog) navigate(`/blog/${savedBlog.blogId}`)
    }, [isSuccess, savedBlog])

    return (
        <>
            <Box
                px={{
                    xs: 0,
                    lg: '12rem'
                }}
            >
                <Row>
                    <Col xs={12} lg={6}>
                        <Row>
                            <Col xs={12}>
                                <Card>
                                    <CardActionArea
                                        sx={{ height: 200 }}
                                        onClick={handleCardBlog}
                                    >
                                        {!!data.blogImg && (
                                            <CardMedia
                                                sx={{ height: 200 }}
                                                image={data.blogImg}
                                            />
                                        )}
                                        <CardContent>
                                            <Box
                                                display='flex'
                                                justifyContent='center'
                                            >
                                                <Typography variant='h6'>
                                                    Seleccionar imagen del blog
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Col>
                            <Col xs={12}>
                                <TextField
                                    fullWidth
                                    label="Titulo"
                                    size="small"
                                    value={data.title}
                                    inputProps={{ maxLength: 70 }}
                                    onChange={({ target: { value } }) => setData((values) => ({ ...values, 'title': value }))}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Row>
                            <Col xs={12}>
                                <Card>
                                    <CardActionArea
                                        sx={{ height: 200 }}
                                        onClick={handleCardAuthor}
                                    >
                                        {!!data.authorImg && (
                                            <CardMedia
                                                sx={{ height: 200 }}
                                                image={data.authorImg}
                                            />
                                        )}
                                        <CardContent>
                                            <Box
                                                display='flex'
                                                justifyContent='center'
                                            >
                                                <Typography variant='h6'>
                                                    Seleccionar imagen del autor
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Col>
                            <Col xs={12} lg={6}>
                                <TextField
                                    fullWidth
                                    label="Nombre"
                                    size="small"
                                    value={data.name}
                                    inputProps={{ maxLength: 15 }}
                                    onChange={({ target: { value } }) => setData((values) => ({ ...values, 'name': value }))}
                                />
                            </Col>
                            <Col xs={12} lg={6}>
                                <TextField
                                    fullWidth
                                    label="Apellido"
                                    size="small"
                                    value={data.lastName}
                                    inputProps={{ maxLength: 15 }}
                                    onChange={({ target: { value } }) => setData((values) => ({ ...values, 'lastName': value }))}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} mb='1.6rem'>
                        <Box textAlign='right'>
                            <Typography variant='caption'>
                                {formatters.numeric(data.body.length)}/{formatters.numeric(maxBody)}
                            </Typography>
                        </Box>
                        <ReactQuill
                            theme="snow"
                            value={data.body}
                            style={{ height: '20rem' }}
                            onChange={(newValue) => {
                                if (newValue.length <= 100000) setData((values) => ({ ...values, 'body': newValue }))
                            }}
                        />
                    </Col>
                    <Col
                        xs={12}
                        textAlign='right'
                    >
                        {isCompleted && (
                            <Button
                                variant='contained'
                                size='small'
                                sx={{ mr: '1.2rem' }}
                                onClick={() => setOpen(true)}
                            >
                                Visualizar
                            </Button>
                        )}
                        <Button
                            variant='contained'
                            size='small'
                            disabled={!isCompleted}
                            onClick={handleButton}
                        >
                            Guardar
                        </Button>
                    </Col>
                </Row>
            </Box>
            <Modal
                maxWidth='lg'
                open={open}
                onClose={{
                    title: 'Cerrar',
                    handle: () => setOpen(false)
                }}
            >
                <BlogView
                    buttonOptions={false}
                    blog={{
                        blogId: '',
                        img: data.blogImg,
                        title: data.title,
                        body: data.body,
                        createAt: new Date(),
                        author: {
                            authorId: '',
                            name: data.name,
                            lastName: data.lastName,
                            img: data.authorImg
                        }
                    }}
                />
            </Modal>
        </>
    )
}
