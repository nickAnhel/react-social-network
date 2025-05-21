import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Container from "./components/container/Container";
import NotFound from "./components/not-found/NotFound";

import Login from "./pages/login/Login";

import Chats from "./pages/chats/Chats";
import Feed from "./pages/feed/Feed";
import People from "./pages/people/People";



function Layout() {
    return (
        <>
            <Sidebar />
            <Container />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "chats",
                element: <Chats />,
            },
            {
                path: "people",
                element: <People />,
            },
            {
                path: "feed",
                element: <Feed />,
            },
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;
