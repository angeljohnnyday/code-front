import { useEffect, useState } from 'react'

import ReactQuill from 'react-quill';
import { FileContent, useFilePicker } from 'use-file-picker';
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
    Col,
    Row
} from 'src/components'
import 'react-quill/dist/quill.snow.css';

export default function EditorPage() {
    const [file, setFile] = useState<FileContent | null>(null);
    const [data, setData] = useState({
        title: '',
        body: '',
    });

    const [openFileSelector, { filesContent }] = useFilePicker({
        accept: '.png',
        readAs: "DataURL",
        multiple: false,
        maxFileSize: 50
    });

    const handleCard = () => openFileSelector();

    useEffect(() => {
        if (filesContent.length !== 0) {
            console.info(filesContent[0])
            setFile(filesContent[0])
        }
    }, [filesContent, setFile])

    return (
        <>
            <Box
                px={{
                    xs: 0,
                    lg: '12rem'
                }}
            >
                <Row>
                    <Col xs={12}>
                        <TextField
                            fullWidth
                            label="Titulo"
                            size="small"
                            value={data.title}
                            onChange={({ target: { value } }) => setData((values) => ({ ...values, 'title': value }))}
                        />
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardActionArea
                                onClick={handleCard}
                                sx={{ height: 200 }}
                            >
                                {!!file && (
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={file.content}
                                    />
                                )}
                                <CardContent>
                                    <Box
                                        display='flex'
                                        justifyContent='center'
                                        onClick={handleCard}
                                    >
                                        <Typography variant='h6'>
                                            Seleccionar imagen
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} mb='1.6rem'>
                        <ReactQuill
                            theme="snow"
                            value={data.body}
                            style={{ height: '20rem' }}
                            onChange={(newValue) => setData((values) => ({ ...values, 'body': newValue }))}
                        />
                    </Col>
                    <Col
                        xs={12}
                        textAlign='right'
                    >
                        <Button
                            variant='contained'
                            size='small'
                        >
                            Guardar
                        </Button>
                    </Col>
                </Row>
            </Box>
        </>
    )
}
