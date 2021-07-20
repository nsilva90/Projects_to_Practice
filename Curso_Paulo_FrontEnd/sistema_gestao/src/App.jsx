import React from 'react'

import Primeiro from './fundamentos/Primeiro'

const App = props => {
  return (
    // <React.Fragment or <> - Elimina a necessidade de uma TAG pai única.
    <>
      <h1>Component App</h1>
      <Primeiro />
    </>
    // </React.Fragment> or </> - Elimina a necessidade de uma TAG pai única.
  )
}

export default App





