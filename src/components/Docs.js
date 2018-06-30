import React, { Component } from 'react';

class Docs extends Component {
  state = {
  };

  componentDidMount() {
    const path = '/docs/' + this.props.match.params.id;
    this.setState({path});
  }

  render() {
    return (
        <div>
            <a href="/avaliacao_inep.pdf" download>oi</a>
        </div>
    );
  }
}/*
<div>
        <a href={pdf}>pdf aqi</a>
        <Document
          file={pdf}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>*/
export default Docs;