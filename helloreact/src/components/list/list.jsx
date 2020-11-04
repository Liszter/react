import React from 'react';
import './list.css'
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                {
                    id: '12312312',
                    username: 'Tom',
                    content: '你笑起来真好看1！'
                },
                {
                    id: '12312313',
                    username: 'Tom',
                    content: '你笑起来真好看2！'
                },
                {
                    id: '12312314',
                    username: 'Tom',
                    content: '你笑起来真33好看！'
                },
                {
                    id: '12312315',
                    username: 'Tom',
                    content: '你笑起444来真好看！'
                }
            ]
        }
    }

componentDidMount () {

}
render () {
    let { comments } = this.state
    let chatList = comments.map((item, index) => {
        return (
            <div className={'chat-item'}>
                {item.username}:
                {item.content}
            </div>
        )
    })
    return (
        <div className="list-box">
            {chatList}
        </div>
    )
}
}

export default List