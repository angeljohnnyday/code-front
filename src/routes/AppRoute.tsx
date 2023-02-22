import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Container } from '@mui/material'
import { BlogDetail, Blogs, EditorPage } from "src/pages";

export default function AppRoute() {
    return (
        <Container
            sx={{
                mt: '2.8rem',
                pb: '3.2rem'
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/blogs'
                        element={
                            <Blogs />
                        }
                    />
                    <Route
                        path='/blog/:id'
                        element={
                            <BlogDetail />
                        }
                    />
                    <Route
                        path='/editor'
                        element={
                            <EditorPage />
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
