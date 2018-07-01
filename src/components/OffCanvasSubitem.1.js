import React, { Component } from 'react';
import OffCanvasItem from './OffCanvasItem';

class OffCanvasSubitem extends Component {
    render() {
        if (this.props.subitems === undefined) {
            return (
                <OffCanvasItem title={this.props.title} page={this.props.page} submenu="menu2"/>
            )
        } else {
            return (
                <div>
                    <OffCanvasItem title={this.props.title} page={this.props.page} submenu="menu2" toggleid={"collapse" + this.props.sub} />
                    <div className="collapse" id={"collapse" + this.props.sub}>
                    {
                        Object.keys(this.props.subitems).map((key) => {
                            return (
                                <OffCanvasItem title={this.props.subitems[key].title} content={this.props.subitems[key].content} page={this.props.page} submenu="menu3" />
                            )
                        })
                    }
                    </div>
                </div>
            )
        }
    }
}

export default OffCanvasSubitem;