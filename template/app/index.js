import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='<%= appName %>'>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('BillContainer'))
