import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: () => <h1>Home</h1>
            }
        ]
    }
])