import { createBrowserRouter } from "react-router";
import HomePage from "../screens/home/homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        element : <HomePage/>
    }
])