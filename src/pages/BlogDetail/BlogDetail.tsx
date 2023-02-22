
import {
    Avatar,
    Box,
    Card,
    CardHeader,
    Typography,
} from '@mui/material'
import {
    Col,
    Row
} from 'src/components'

export default function BlogDetail() {
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
                    The Rise of Artificial Intelligence and the Future of Humans
                </Typography>
                <Card
                    variant="outlined"
                    sx={{
                        border: 'none',
                        width: {
                            xs: '72%',
                            lg: '48%'
                        }
                    }}
                >
                    <CardHeader
                        avatar={<Avatar />}
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                </Card>
            </Box>
            <Row
                mt={{
                    xs: '2.4rem',
                    lg: '2.8rem'
                }}
            >
                <Col xs={12}>
                    <Box
                        component='img'
                        src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
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
            </Row>
        </>
    )
}
