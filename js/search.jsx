import React from 'react';
import {search} from './data.jsx';
import {Link} from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
    };
  }
  retrieveSearchResult(mode, searchString) {
    this.setState({
      data: null,
      error: null,
    });
    search(mode, searchString).then((res) => {
      if (res.body) {
        this.setState({data: res.body});
      }
    }).catch((err) => {
      console.error(err);
      this.setState({error: err});
    });
  }
  componentDidMount() {
    const {mode, searchString} = this.props.match.params;
    if (mode && searchString) {
      this.retrieveSearchResult(mode, searchString);
    }
  }
  render() {
    const d = this.state.data;
    if (this.state.error) {
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

export default Search;
