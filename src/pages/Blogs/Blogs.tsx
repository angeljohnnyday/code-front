import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import { Col, Row } from 'src/components';

export default function Blogs() {
    const handleCard = () => console.info('click')

    return (
        <Row>
            <Col xs={12} lg={4}>
                <Card>
                    <CardActionArea onClick={handleCard}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                Lizard
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
            <Col xs={12} lg={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 200 }}
                            image='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                Lizard
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
            <Col xs={12} lg={4}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 200 }}
                            image='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                Lizard
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
        </Row>
    )
}
