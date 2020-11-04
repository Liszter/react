import React from 'react';
import './app.css'
import List from '../list/list'
import Add from '../add/add'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }
componentDidMount () {

}
render () {
    return (
        <div>
            <header className="header-box">
                welcome
            </header>
            <div className="container-box">
                <List />
                <Add />
            </div>
        </div>
    )
}
}

export default App