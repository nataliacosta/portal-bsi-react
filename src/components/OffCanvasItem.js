import React, { Component } from 'react';

class OffCanvasItem extends Component {
    render() {
        if (this.props.toggleid === undefined)
            return (
                <li className={this.props.classe}>
                    <a href={this.props.sub.content} className="d-inline-flex align-items-center w-100 clearBackgroundImage">
                        {this.props.sub.title}
                        <i className="mdi mdi-2x mdi-chevron-right text-white ml-auto"></i>
                    </a>
                </li>
            )
        return (
            <li data-toggle="collapse" data-target={this.props.toggleid} aria-expanded="false">
                <a data-target={this.props.toggleid} href={this.props.toggleid} className="d-inline-flex align-items-center w-100 clearBackgroundImage">
                    {this.props.sub.title}
                    <i className="mdi mdi-2x mdi-expand-more text-white ml-auto"></i>
                    <i className="mdi mdi-2x mdi-expand-less text-white ml-auto"></i>
                </a>
            </li>
        )
    }
}

export default OffCanvasItem;