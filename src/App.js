import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import CustomersEdit from './pages/customers/Edit'
import Home from './pages/Home'


const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>

        <Route path="/customers/edit/:id">
            <TemplatePage title="Editar cliente" Component={CustomersEdit} />
          </Route>

        <Route path="/customers/add">
            <TemplatePage title="Cadastro de clientes" Component={CustomersRegister} />
          </Route>

          <Route path="/customers">
            <TemplatePage title="Lista de clientes" Component={CustomersList} />
          </Route>

          <Route path="/">
          <TemplatePage title="Página inicial" Component={Home} />
          </Route>

        </Switch>
      </TemplateDefault>
    </Router>
  )
}

export default App
