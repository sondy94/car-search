import React from "react";

class Searchbar extends React.Component {
state = {
  term:''
} 

onFormSubmit = e => {
  e.preventDefault();
}
 
  render(){
    return(
      
  <div className="ui segment">
    <form onSubmit={this.onFormSubmit} class="ui form">
  <div class="field">
    <label>Image Search</label>
    <input value={this.state.term} onChange={e => this.setState({term:e.target.value})} type="text"/>
  </div>
</form>
    </div>

    );
  };
}
export default Searchbar;