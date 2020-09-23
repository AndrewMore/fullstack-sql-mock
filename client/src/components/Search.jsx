import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    return (
        <div className="search-bar form-inline">
          <input className="form-control" type="text" onChange={this.props.search} />
          <button className="btn hidden-sm-down">
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </div>
      )
  }


}


export default Search;