import ReactDom from 'react-dom'
import App from './app'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDom.render(
<Router>
    <App/>
</Router>
,document.getElementById('root'))