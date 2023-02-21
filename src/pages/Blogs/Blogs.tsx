import {
    Avatar,
    Box,
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
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                sx={{ color: '#273746' }}
                            >
                                The Rise of Artificial Intelligence and the Future of Humans
                            </Typography>
                            <Box
                                mt='1.6rem'
                                display='flex'
                                alignItems='center'
                            >
                                <Box mr='01.2rem'>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
                                            Angel Perez
                                        </Typography>
                                        <Typography
                                            variant="overline"
                                            sx={{ color: '#424949' }}
                                        >
                                            22/10/2022
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>
        </Row>
    )
}
