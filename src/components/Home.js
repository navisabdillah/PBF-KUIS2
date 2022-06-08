import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import './Home.css'

class Home extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
};
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('articles');
        this.unsubscribe = null;
        this.state = {
          articles: []
        };
}
onCollectionUpdate = (querySnapshot) => {
    const articles = [];
    querySnapshot.forEach((doc) => {
      const { title, body, author } = doc.data();
      articles.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        body,
        author,
      });
    });
    this.setState({
      articles
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    const { isLoggingOut, logoutError } = this.props;

    return (      
        <div>
            
            <button onClick={this.handleLogout}>Logout</button>
            {isLoggingOut && <p>Logging Out....</p>}
            {logoutError && <p>Error logging out</p>}
            
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Article LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create" class="btn btn-primary">Add Article</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.articles.map(article =>
                  <tr>
                    <td><Link to={`/show/${article.key}`}>{article.title}</Link></td>
                    <td>{article.body}</td>
                    <td>{article.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    );
  } 
    }
export default (Home)