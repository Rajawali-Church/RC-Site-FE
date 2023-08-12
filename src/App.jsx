import { ToastContainer } from 'react-toastify';
import './App.css';
import Routers from './routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <div>
            <ToastContainer />
            <Routers />
        </div>
    )
}

export default App
