import { ReactNode } from 'react';

import {
    AppBar,
    Box,
    Toolbar,
    Container,
    Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const pages = [
    {
        name: 'Blogs',
        path: '/blogs'
    },
    {
        name: 'Nuevo blog',
        path: '/editor'
    }
];

interface Props {
    children: ReactNode
}

export default function Navbar({ children }: Props) {
    const navigate = useNavigate();
    const handleCloseNavMenu = (path: string) => navigate(path)

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Box display='flex'>
                            {pages.map(({ name, path }, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handleCloseNavMenu(path)}
                                    sx={{ color: 'white' }}
                                >
                                    {name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container
                sx={{
                    mt: '2.8rem',
                    pb: '3.2rem'
                }}
            >
                {children}
            </Container>
        </>
    )
}
