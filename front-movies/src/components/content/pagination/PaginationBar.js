import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default class PaginationBar extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.passStateToParent = this.passStateToParent.bind(this);
  }

  handleClick(event) {
    this.passStateToParent(Number(event.target.id));
  }

  passStateToParent(pageNum) {
    this.props.sendPage(pageNum);
  }

  render() {
    const { pageNum, totalPages } = this.props;
    const range = 10;
    let start = 1;
    const pageNumbers = [];
    if (pageNum < range / 2 + 1) {
      start = 1;
    } else if (pageNum >= totalPages - range / 2) {
      start = Math.floor(totalPages - range + 1);
    } else {
      start = pageNum - Math.floor(range / 2);
    }
    pageNumbers.push(
      <Pagination.Item key={0} id={1} onClick={this.handleClick}>
        &#171;
      </Pagination.Item>
    );
    for (let num = start; num <= start + range - 1; num += 1) {
      pageNumbers.push(
        <Pagination.Item
          key={num}
          id={num}
          active={num === pageNum}
          onClick={this.handleClick}
        >
          {num}
        </Pagination.Item>
      );
    }
    pageNumbers.push(
      <Pagination.Item
        key={totalPages + 1}
        id={totalPages}
        onClick={this.handleClick}
      >
        &#187;
      </Pagination.Item>
    );

    return <Pagination>{pageNumbers}</Pagination>;
  }
}
