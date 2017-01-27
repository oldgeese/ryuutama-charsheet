import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import jsonp from 'superagent-jsonp';

const url = "http://charasheet.vampire-blood.net/962930.json";

class RyutamaSheet extends React.Component {
  componentDidMount() {
    request.get(this.props.url).use(jsonp)
      .then(
        (res) => {
          this.setProps({data: res.body});
        }
      )
      .catch(
        (err)=> {console.error(err);}
      );
  }
  render() {
    const d = this.props.data;
    if (d) {
      return (
        <div>{d.pc_name}</div>
      );
    }
  }
}

ReactDOM.render(
  <RyutamaSheet url={url}/>,
  document.getElementById('root')
);
