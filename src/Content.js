import React, { Component } from 'react';

class Content extends Component {
    state = {}

    componentDidMount() {
        const path = './assets/contents' + this.props.path;
        import(`${path}`)
            .then(page => (this.setState({page})));
    }

    render() {
        let htmlDoc = {__html: this.state.page};
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 p-r-5 p-xs-l-5 p-sm-l-3 p-md-l-1" dangerouslySetInnerHTML={htmlDoc}/>
        )
    }
}

export default Content;