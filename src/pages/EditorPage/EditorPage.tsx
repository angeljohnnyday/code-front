import { useEffect, useState } from 'react'

import ReactQuill from 'react-quill';
import { Box } from '@mui/material'
import { Col, Row } from 'src/components'
import 'react-quill/dist/quill.snow.css';

export default function EditorPage() {
    const [value, setValue] = useState('');

    return (
        <Box
            px={{
                xs: 0,
                lg: '12rem'
            }}
        >
            <Row>
                <Col xs={12}>
                    Input
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                    />
                </Col>
            </Row>
        </Box>
    )
}
