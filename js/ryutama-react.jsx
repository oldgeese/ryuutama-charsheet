import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';

const url = "http://charasheet.vampire-blood.net/962930.json";

var data = {};

request.get(url).use(jsonp)
  .then(
    (obj) => {
      data = obj;
    }
  )
  .catch(
    (err)=> {console.error(err);}
  );
  
class RyutamaSheet extends React.Component {
  render() {
    return (
      <div>{this.props.data}</div>
    );
  }
}

ReactDOM.render(
  <RyutamaSheet data={data}/>,
  document.getElementById('root')
);
