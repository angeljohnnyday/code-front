import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Container } from '@mui/material'
import { BlogDetail, Blogs } from "src/pages";

export default function AppRoute() {
    return (
        <Container sx={{ mt: '2.8rem' }}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/blogs'
                        element={
                            <Blogs />
                        }
                    />
                    <Route
                        path='/blogs/:id'
                        element={
                            <BlogDetail />
                        }
                    />
                    <Route
                        path='/'
                        element={<Navigate to='/blogs' />}
                    />
                </Routes>
            </BrowserRouter>
        </Container>
    )
}
