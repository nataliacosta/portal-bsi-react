import React, { Component } from 'react';

class AsideItem extends Component {
    render() {
        return (
            <li><a href={this.props.sub.content}>{this.props.sub.title}</a></li>
        )
    }
}

export default AsideItem;