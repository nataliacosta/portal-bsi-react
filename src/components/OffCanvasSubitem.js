import React, { Component } from 'react';
import OffCanvasItem from './OffCanvasItem';

class OffCanvasSubitem extends Component {
    render() {
        return (
            <aside className="">
                <ul className="menu">
                {Object.keys(this.props.items).map((key) => {
                        if (this.props.items[key].subs === undefined)
                            return (
                                <OffCanvasItem sub={this.props.items[key]} />
                            )
                        return (
                            <div>
                                <OffCanvasItem sub={this.props.items[key]} toggleid={"#collapse" + key}/>
                                <div className="collapse" id={"collapse" + key}>
                                {
                                    (this.props.items[key].subs !== undefined ?
                                        Object.keys(this.props.items[key].subs).map((i) => {
                                            return <OffCanvasItem classe="subitem" sub={this.props.items[key].subs[i]} />
                                        })
                                    : null )
                                }
                                </div>
                            </div>
                        )
                })}
                </ul>
            </aside>
        )
    }
}

export default OffCanvasSubitem;