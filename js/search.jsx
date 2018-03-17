// @flow
import React from 'react';
import {search} from './data.jsx';
import {Link} from 'react-router-dom';
import css from '../css/style.css';

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
          <div>
            <div>検索結果：{d.length}件</div>
            <ul>
              {d.map((d) => 
                <li key={d.id}><Link to={"/char/"+d.id}>{d.id}</Link>, {d.title}</li>
              )}
            </ul>
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
