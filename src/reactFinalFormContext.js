import * as React from 'react'

export const ReactFinalFormContext = React.createContext(null)

export const withReactFinalForm = Component => props => {
  const reactFinalForm = React.useContext(ReactFinalFormContext)
  return React.createElement(Component, { reactFinalForm, ...props })
}
