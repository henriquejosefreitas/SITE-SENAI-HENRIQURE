// Cria a lista de rotas com o Router Dom
import { createBrowserRouter } from "react-router-dom"

// Importação das páginas utilizadas
import App from "./App.jsx"
import PaginaErro from "./pages/PaginaErro.jsx"
import Home from "./pages/Home.jsx"
import Cadastrar from "./components/Cadastrar.jsx"

import Login from "./pages/Login.jsx"
import Historia from "./pages/Historia.jsx"
import Cursos from "./pages/Cursos.jsx"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <PaginaErro />,
        children:[
            {
                path:"/",
                element:<Login />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/home",
                element:<Home />
            },
            {
                path:"/cadastra",
                element:<Cadastrar/>
            },
            {
                path:"/historia",
                element:<Historia />
            },
            {
                path:"/cursos",
                element:<Cursos />
            },
        ]
    }
])

export default router;