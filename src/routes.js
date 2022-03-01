import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/Error';

function RoutesApp(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path = '/' element = {<Home/>}/>
           <Route path = '*' element = {<NotFound/>}/> {/*Página not found*/}
        </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;