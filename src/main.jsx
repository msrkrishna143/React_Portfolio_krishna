import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Form } from './components/ui/form'
import { FormControl } from './components/ui/form'
import { FormDescription } from './components/ui/form'
import { FormField } from './components/ui/form'
import { FormInput } from 'lucide-react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <BrowserRouter>
      <App />
    </BrowserRouter>  
    </Provider>
  </StrictMode>,
)
