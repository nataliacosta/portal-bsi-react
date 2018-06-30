import React, { Component } from 'react';

class AsideItem extends Component {
    render() {
        return (
            <li><a href={this.props.content}>{this.props.title}</a></li>
        )
    }
}

export default AsideItem;