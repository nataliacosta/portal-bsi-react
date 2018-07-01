import React, { Component } from 'react';

class OffCanvasItem extends Component {
    render() {
        if (this.props.toggleid === undefined)
            return (
                <li className={this.props.classe}><a href={this.props.sub.content}>{this.props.sub.title}</a></li>
            )
        return (
            <li data-toggle="collapse" data-target={this.props.toggleid} aria-expanded="false"><a href={this.props.toggleid}>{this.props.sub.title}</a></li>
        )
    }
}

export default OffCanvasItem;