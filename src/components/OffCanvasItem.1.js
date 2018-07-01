import React, { Component } from 'react';

class OffCanvasItem extends Component {
    render() {
        return (
            <li className={this.props.submenu}><a href={this.props.content}>{this.props.title}</a></li>
        )
    }
}

export default OffCanvasItem;