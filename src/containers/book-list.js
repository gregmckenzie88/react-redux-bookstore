// THIS IS NOW A CONTAINER

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
        onClick={() => this.props.selectBook(book)}
        key={book.title}
        className="list-group-item">
        {book.title}
        </li>
      );
    });
  }
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //whatever gets returned will show up as props inside of Booklist
  return {
    books: state.books
  }
}

//anything returned form this function will end up as props on the booklist container
function mapDispatchToProps(dispatch){
  //whenever selectbook is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//promote booklist form a component to a caintainer
// it nees toknow about this new dispatch method 'selectBook'.  Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
