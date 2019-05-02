import React from 'react';
import {search} from './data.jsx';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchStart, searchSuccess, searchFail} from './actions';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  retrieveSearchResult(mode, searchString) {
    this.props.searchStart();
    search(mode, searchString).then((res) => {
      if (res.body) {
        this.props.searchSuccess(res.body);
      }
    }).catch((err) => {
      console.error(err);
      this.props.searchFail(err);
    });
  }
  componentDidMount() {
    const {mode, searchString} = this.props.match.params;
    if (mode && searchString) {
      this.retrieveSearchResult(mode, searchString);
    }
  }
  render() {
    const d = this.props.data;
    if (this.props.error) {
      return (
        <div>
          エラーが発生しました。
          <Link to="/">戻る</Link>
        </div>
      );
    } else {
      if (d != null) {
        document.title = "検索結果";
        return (
          <div className="container">
            <h1>検索結果</h1>
            <div>検索結果：{d.length}件</div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">PC名</th>
                </tr>
              </thead>
              <tbody>
              {d.map((d) => 
                <tr key={d.id}>
                  <th scope="row"><Link to={"/char/"+d.id}>{d.id}</Link></th>
                  <td>{d.title}</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        )
      } else {
        return (
          <div>
            Loading...
          </div>
        );
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    data : state.data,
    error : state.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchStart : () => {dispatch(searchStart())},
    searchSuccess : (data) => {dispatch(searchSuccess(data))},
    searchFail : (error) => {dispatch(searchFail(error))},
  }
}

const ConnectedSearch = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default ConnectedSearch;
