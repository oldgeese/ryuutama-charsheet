// @flow
import React from 'react';
import {search} from './data.jsx';
import {Link} from 'react-router-dom';

type SearchResultJson = Array<SearchResult>;
type SearchResult = {
  [key:string]: string,
};

type SearchParams = {
  mode: string,
  searchString: string,
};

type Props = {
  params: SearchParams
};

class Search extends React.Component {
  state: {
    param: SearchParams,
    data: ?SearchResultJson,
    error: ?Error,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      param: {mode: "", searchString:""},
      data: null,
      error: null,
    };
  }
  retrieveSearchResult(mode: string, searchString: string) {
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
    const params = this.props.match.params;
    this.setState({param: params});
    const mode: string = params.mode;
    const searchString: string = params.searchString;
    if (mode && searchString) {
      this.retrieveSearchResult(mode, searchString);
    }
  }
  componentWillReceiveProps(nextProps: Props) {
    const params = nextProps.match.params;
    this.setState({param: params});
    const mode: string = params.mode;
    const searchString: string = params.searchString;
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
