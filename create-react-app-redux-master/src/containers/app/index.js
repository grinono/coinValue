import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Login from '../thema/views/Pages/Login/'
import FullRoutes from '../thema/containers/Full/Full'
import '../../scss/style.css'

// import Login from '../thema/views/Pages/Login/'
// import Register from '../thema/views/Pages/Register/'
// import Page404 from '../thema/views/Pages/Page404/'
// import Page500 from '../thema/views/Pages/Page500/'

const App = () => (
  <div>
    <Route exact path="/login" name="Login Page" component={Login}/>
    {/* <Route exact path="/register" name="Register Page" component={Register}/>
    <Route exact path="/404" name="Page 404" component={Page404}/>
    <Route exact path="/500" name="Page 500" component={Page500}/> */}
    <Route path="/" name="Home" component={FullRoutes}/>
    {/* <FullRoutes /> */}
    {/* <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/login">Login</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/login" name="Login Page" component={Login}/>
    </main> */}
  </div>
)

export default App
