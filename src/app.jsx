import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PenPage from "./containers/PenPage"

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={PenPage} />
    </Switch>
</BrowserRouter>
)

export default App
