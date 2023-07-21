
import React,{Fragment} from "react";
import Avatar from "./Avatar";
import Axios from "axios";
class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          profile: null,
          repos: null
        };
    
        // Bind the methods to the correct context
        this.updateInput = this.updateInput.bind(this);
        this.searchUser = this.searchUser.bind(this);
      }
    
      updateInput(msg) {
        this.setState({
          ...this.state,
          username: msg.target.value
        });
      }
    
      searchUser(msg) {
        msg.preventDefault();
        this.searchProfile();
      }
    
      searchProfile() {
        Axios.get(`https://api.github.com/users/${this.state.username}`).then(
          (response) => {
            this.setState({
              profile: response.data
            });
          }
        ).catch((err) => {
          console.error(err);
        });
      }



  render() {
    return (
      <Fragment>
      <pre>{JSON.stringify(this.state)}</pre>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header bg-secondary text-wite">
               <h3>Github Profile Search</h3>
                </div>
                <div className="card-body">
                <form className="form-inline" onSubmit={this.searchUser}>
                <div className="form-group">
<input 
value={this.state.username}
onChange={this.updateInput}
size="40" 
type="text" 
className="form-control" 
placeholder="user Name"/>
                </div>
                <div>
                <input type="submit" value="Find" className="btn btn-secondary"/></div>
                </form>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-3">
        <div className="row">
        <div className="col">
        {
            this.state.profile ?<Avatar profile={this.state.profile}/>:null
        }
        </div>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default Api;
