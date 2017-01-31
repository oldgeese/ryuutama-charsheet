import React from 'react';
import getSheetData from './sheetdata.jsx';

const type = {
  0: "",
  1: "アタック",
  2: "テクニック",
  3: "マジック"
};

function Ryutable(props) {
  return (
    <div className={"table " + (props.className || "")}>{props.children}</div>
  );
}

function Ryurow(props) {
  return (
    <div className={"row " + (props.className || "")}>{props.children}</div>
  );
}

function Ryulabel(props) {
  return (
    <div className={"cell label " + (props.className || "")}>{props.children}</div>
  );
}

function Ryudata(props) {
  return (
    <div className={"cell data " + (props.className || "")}>{props.children}</div>
  );
}

function RyutamaSheetTitle(props) {
  return (
    <div className={"title-area " + (props.className || "")}>{props.children}</div>
  );
}

function RyuCharFigure(props) {
  return (
    <div className={"figure-area " + (props.className || "")}>{props.children}</div>
  );
}

function RyutamaClass(props) {
  const d = props.data;
  return (
    <Ryutable className="class">
      <Ryurow className="class-header">
        <Ryulabel className="class-ability">クラス能力</Ryulabel>
        <Ryulabel className="class-check-ability">判定能力値</Ryulabel>
        <Ryulabel className="class-effect">効果</Ryulabel>
      </Ryurow>
    </Ryutable>
  );
}

function RyutamaHeader(props) {
  return (
    <div className="ryutama-header">
      <RyutamaSheetTitle>
        <div className="ryutama-title">りゅう◇たま</div>
        <div className="ryutama-title-english">natural fantasy R.P.G.</div>
        <div className="traveler-character-sheet">旅人キャラクターシート</div>
        <div>
          <Ryutable className="ryujin_name">
            <Ryurow className="ryujin_name">
              <Ryulabel className="ryujin_name">竜人名</Ryulabel>
              <Ryudata className="ryujin_name"></Ryudata>
            </Ryurow>
          </Ryutable>
          <Ryutable className="created_date">
            <Ryurow className="created_date">
              <Ryulabel className="created_date">作成日</Ryulabel>
              <Ryudata className="created_date"></Ryudata>
            </Ryurow>
          </Ryutable>
        </div>
      </RyutamaSheetTitle>
      <RyuCharFigure/>
    </div>
  );
}

class RyutamaSheet extends React.Component {
  render() {
    const d = this.props.data;
    return (
      <div className="page">
        <div className="container">
          <RyutamaHeader/>
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
              <div className="cell datagroup class_name">
                <span className="data class_name">{d.class_name}</span>/<span className="data class2_name">{d.class2_name}</span>
              </div>
              <div className="cell label type_id">タイプ</div>
              <div className="cell datagroup type_id">
                <span className="data type_id">{type[d.type_id]}</span>/<span className="data type2">{type[d.type2]}</span>
              </div>
            </div>
          </div>
          <RyutamaClass data={d}/>
        </div>
      </div>
    );
  }
}

class CharSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    getSheetData().then((res) => {
      if (res.body) {
        this.setState({data: res.body});
      }
    }).catch((err) => {
      console.error(err);
    });
  }
  render() {
    const d = this.state.data;
    if (d && d.game == 'ryutama') {
      document.title = "りゅうたまキャラシート/" + d.pc_name + "/レベル" + d.V_level;
      return (<RyutamaSheet data={d}/>);
    } else {
      return null;
    }
  }
}

export default CharSheet;
