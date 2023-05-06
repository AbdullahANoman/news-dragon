import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../NewsLayout/NewsLayout";
import News from "../Pages/Home/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginLayout from "../LoginLayout/LoginLayout";
import PrivateRout from "./PrivateRout";
import Terms from "../Pages/Terms/Terms";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Category></Category>
        },
        {
          path : 'categories/:id',
          element : <Category></Category>,
          loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path:"/",
      element : <LoginLayout></LoginLayout>,
      children : [
        
        {
          path : "login",
          element: <Login></Login>
        },
        {
          path : "register",
          element : <Register></Register>
        },
        {
          path: 'terms',
          element : <Terms></Terms>
        }
      ]
    },
    {
      path: 'news',
      element: <NewsLayout></NewsLayout>,
      children : [
        {
          path : ':id',
          element : <PrivateRout><News></News></PrivateRout>,
          loader : ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ])

  export {router}