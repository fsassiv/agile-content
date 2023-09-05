import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout'
import { Home } from './pages/home'
import { Results } from './pages/results'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index Component={Home} />
        <Route path='results' Component={Results} />
      </Routes>
    </Layout>
  )
}

export default App
