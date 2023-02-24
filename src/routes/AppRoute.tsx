import {
    BrowserRouter,
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import {
    BlogDetail,
    Blogs,
    EditorPage
} from "src/pages";
import { Navbar, PageNotFound } from "src/components";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/blogs'
                    element={
                        <Navbar>
                            <Blogs />
                        </Navbar>
                    }
                />
                <Route
                    path='/blog/:blogId'
                    element={
                        <Navbar>
                            <BlogDetail />
                        </Navbar>
                    }
                />
                <Route
                    path='/editor/:blogId?'
                    element={
                        <Navbar>
                            <EditorPage />
                        </Navbar>
                    }
                />
                <Route
                    path='/'
                    element={<Navigate to='/blogs' />}
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
