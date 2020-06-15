import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query : ''
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e){
    this.setState({
      query : e.target.value
    })
  }

  render(){
    return (
        <div className="search-bar form-inline">
          <input className="form-control" type="text" onChange={this.changeHandler} />
          <button className="btn hidden-sm-down">
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </div>
      )
  }


}


export default Search;