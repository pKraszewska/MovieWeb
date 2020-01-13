import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default class PaginationBar extends Component {
  constructor() {
    super();
    this.state = {
      page_number: 1,
    };

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
    const { limit, count } = this.props;
    const pageNumbers = [];
    for (let num = 1; num <= 7; num += 1) {
      pageNumbers.push(
        <Pagination.Item key={num} id={num} onClick={this.handleClick}>
          {num}
        </Pagination.Item>
      );
    }

    return (
      <Pagination>
        {pageNumbers}
        <Pagination.Ellipsis />
      </Pagination>
    );
  }
}
