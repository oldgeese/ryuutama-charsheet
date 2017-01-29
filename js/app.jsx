import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import jsonp from 'superagent-jsonp';

const baseUrl = "https://pure-anchorage-83238.herokuapp.com/";
const charId = "962930";
const postfix = ".json"
const url = baseUrl + charId + postfix;
const timeout = 8000;

const type = {
  0: "",
  1: "アタック",
  2: "テクニック",
  3: "マジック"
};

class RyutamaSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    request.get(this.props.url).use(jsonp({timeout: timeout}))
      .then(
        (res) => {
          if (res.body) {
            this.setState({data: res.body});
            document.title = "りゅうたまキャラシート/" + res.body.pc_name + "/レベル" + res.body.V_level;
          }
        }
      )
      .catch(
        (err)=> {console.error(err);}
      );
  }
  render() {
    const d = this.state.data;
    if (d) {
      return (
        <div className="table">
        <div className="row">
          <div className="cell label pc_name">キャラクター名</div>
          <div className="cell data pc_name">{d.pc_name}</div>
          <div className="cell label pl_name">プレイヤー名</div>
          <div className="cell data pl_name">{d.pl_name}</div>
        </div>
        <div className="row">
          <div className="cell label V_level">LV</div>
          <div className="cell data V_level">{d.V_level}</div>
          <div className="cell label exp_his_sum">EXP</div>
          <div className="cell data exp_his_sum">{d.exp_his_sum}</div>
          <div className="cell label sex">性別</div>
          <div className="cell data sex">{d.sex}</div>
          <div className="cell label age">年齢</div>
          <div className="cell data age">{d.age}</div>
        </div>
        <div className="row">
          <div className="cell label class_name">クラス</div>
          <div className="cell datagroup class_name"><span className="data class_name">{d.class_name}</span>/<span className="data class2_name">{d.class2_name}</span></div>
          <div className="cell label type_id">タイプ</div>
          <div className="cell datagroup type_id"><span className="data type_id">{type[d.type_id]}</span>/<span className="data type2">{type[d.type2]}</span></div>
        </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

ReactDOM.render(
  <RyutamaSheet url={url}/>,
  document.getElementById('root')
);
