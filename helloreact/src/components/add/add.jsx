import React from 'react';
import './add.css'
class Add extends React.Component {
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
        <div className="add-box">
            <input type="text"/>
            <button>发送</button>
        </div>
    )
}
}

export default Add