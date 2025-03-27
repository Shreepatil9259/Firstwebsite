import {BrowserRouter,Routes,Route} from "react-router-dom";
import Contact from './components/Contact'
// import Counter from './components/Counter'
import AllProducts from './components/AllProducts'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'
import Header from'./components/Header';

function App(){
    return(
        <div className="App">
        
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/'element={<Home/>} />
            <Route path='/about'element={<About/>} />
            <Route path='/allproducts'element={<AllProducts/>} />
            {/* <Route path='/counter'element={<Counter/>} /> */}
            <Route path='/contact'element={<Contact/>} />
        </Routes>
            < Footer/>
    </BrowserRouter>
    </div>
    );
}

export default App;


//{/* <Header />
//      <Home />
//      <About />
//      <AllProducts />
//      <Contact />
//      <Footer /> */}
