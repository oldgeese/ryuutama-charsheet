import React from 'react';
import getSheetData from './sheetdata.jsx';
import {Link} from 'react-router';
import css from '../css/style.css';

const type = {
  0: "",
  1: "アタック",
  2: "テクニック",
  3: "マジック"
};

function joinIgnoreFalsy(list, separator=",") {
  return list.filter((v)=>(v)).join(separator);
}

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
        <Ryulabel className="class-effect">効 果</Ryulabel>
      </Ryurow>
      <Ryurow className="class-entry">
        <Ryudata className="class-ability-entry">{d.cls_name[0]}</Ryudata>
        <Ryudata className="class-check-ability-entry">{d.cls_hantei[0]}</Ryudata>
        <Ryudata className="class-effect-entry">{d.cls_kouka[0]}</Ryudata>
      </Ryurow>
      <Ryurow className="class-entry">
        <Ryudata className="class-ability-entry">{d.cls_name[1]}</Ryudata>
        <Ryudata className="class-check-ability-entry">{d.cls_hantei[1]}</Ryudata>
        <Ryudata className="class-effect-entry">{d.cls_kouka[1]}</Ryudata>
      </Ryurow>
      <Ryurow className="class-entry">
        <Ryudata className="class-ability-entry">{d.cls_name[2]}</Ryudata>
        <Ryudata className="class-check-ability-entry">{d.cls_hantei[2]}</Ryudata>
        <Ryudata className="class-effect-entry">{d.cls_kouka[2]}</Ryudata>
      </Ryurow>
      <Ryurow className="class-entry">
        <Ryudata className="class-ability-entry">{d.cls_name[3]}</Ryudata>
        <Ryudata className="class-check-ability-entry">{d.cls_hantei[3]}</Ryudata>
        <Ryudata className="class-effect-entry">{d.cls_kouka[3]}</Ryudata>
      </Ryurow>
      <Ryurow className="class-entry">
        <Ryudata className="class-ability-entry">{d.cls_name[4]}</Ryudata>
        <Ryudata className="class-check-ability-entry">{d.cls_hantei[4]}</Ryudata>
        <Ryudata className="class-effect-entry">{d.cls_kouka[4]}</Ryudata>
      </Ryurow>
      <Ryurow className="class-entry">
        <Ryudata className="class-ability-entry">{d.cls_name[5]}</Ryudata>
        <Ryudata className="class-check-ability-entry">{d.cls_hantei[5]}</Ryudata>
        <Ryudata className="class-effect-entry">{d.cls_kouka[5]}</Ryudata>
      </Ryurow>
    </Ryutable>
  );
}

function RyutamaFeature(props) {
  const d = props.data;
  return (
    <Ryutable className="feature">
      <Ryurow>
        <Ryulabel className="feature-proficienty-weapon">習得武器</Ryulabel>
        <Ryudata className="feature-proficienty-weapon"></Ryudata>
        <Ryulabel className="feature-weather">得意<br/>地形／天候</Ryulabel>
        <Ryudata className="feature-weather"></Ryudata>
        <Ryulabel className="feature-favorite-item">お気に入りアイテム</Ryulabel>
        <Ryudata className="feature-favorite-item"></Ryudata>
      </Ryurow>
      <Ryurow className="feature-color-appearance">
        <Ryudata className="feature-color-appearance">イメージカラー／外見</Ryudata>
      </Ryurow>
      <Ryurow className="feature-homeland-reason">
        <Ryudata className="feature-homeland-reason">故郷／旅に出た理由</Ryudata>
      </Ryurow>
      <Ryurow className="feature-memo">
        <Ryudata className="feature-memo">ＭＥＭＯ</Ryudata>
      </Ryurow>
    </Ryutable>
  );
}

function RyutamaCheck(props) {
  const d = props.data;
  return (
    <Ryutable className="check">
      <Ryurow className="check-ability">
        <Ryulabel className="check-ability h2vr_10">能力値</Ryulabel>
        <Ryudata className="check-ability-str">体力</Ryudata>
        <Ryudata className="check-ability-dex">敏捷</Ryudata>
        <Ryudata className="check-ability-int">知力</Ryudata>
        <Ryudata className="check-ability-spi">精神</Ryudata>
      </Ryurow>
      <Ryurow className="check-hp-mp">
        <Ryulabel className="check-hp">HP</Ryulabel>
        <Ryudata className="check-hp nopadding">
          <Ryurow><Ryudata className="center reverse-color">【最大HP＝体力×２】</Ryudata></Ryurow>
          <Ryurow><Ryudata>💟</Ryudata></Ryurow>
        </Ryudata>
        <Ryulabel className="check-mp">MP</Ryulabel>
        <Ryudata className="check-mp nopadding">
          <Ryurow><Ryudata className="center reverse-color">【最大MP＝精神×２】</Ryudata></Ryurow>
          <Ryurow><Ryudata>✴️</Ryudata></Ryurow>
        </Ryudata>
      </Ryurow>
      <Ryurow className="check-condition">
        <Ryulabel className="check-condition small h2vr_10">コンディション</Ryulabel>
        <Ryudata className="check-condition nopadding">
          <Ryurow><Ryudata className="center reverse-color">【体力＋精神】<span className="small">★10以上は絶好調の日!&nbsp;好きな能力値ひとつを1段階上昇</span></Ryudata></Ryurow>
          <Ryurow><Ryudata>👤 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20</Ryudata></Ryurow>
        </Ryudata>
        <Ryudata className="check-fumble nopadding">
          <Ryurow><Ryulabel className="center">1ゾロポイント</Ryulabel></Ryurow>
          <Ryurow><Ryudata>💀</Ryudata></Ryurow>
        </Ryudata>
      </Ryurow>
      <Ryurow className="check-travel-initiative">
        <Ryudata className="check-travel center">
          ＜旅歩きルールの流れ＞<br/>
          <span className="small">
          (1)移動チェック【体＋敏】
          (2)方向チェック【知＋知】
          (3)野営チェック【敏＋知】
          </span>
        </Ryudata>
        <Ryulabel className="check-initiative">
          イニシアチブ<br/>
          【敏＋知】
        </Ryulabel>
        <Ryudata className="check-initiative"></Ryudata>
      </Ryurow>
    </Ryutable>
  );
}

function RyutamaEquipment(props) {
  const d = props.data;
  return (
    <div className="equipment">
      <div className="equipment-header">装備</div>
      <Ryutable className="equipment">
        <Ryurow>
          <Ryulabel className="weapon">武器</Ryulabel>
          <Ryudata className="weapon-name nopadding">
            <Ryurow>
              <Ryudata>
                {(d.AR_Tokucho + d.AR_name)}
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
              </Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="weapon-hit nopadding">
            <Ryurow>
              <Ryudata className="relative">
                <div className="left-top-tip">命中</div>
                {d.AR_hit}
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
              </Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="weapon-damage nopadding">
            <Ryurow>
              <Ryudata className="relative">
                <div className="left-top-tip">ダメージ</div>
                {d.AR_dmg}
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
              </Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="weapon-constitution nopadding">
            <Ryurow>
              <Ryudata className="relative">
                <div className="left-top-tip">耐久度</div>
                {d.AR_taikyu}
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
              </Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="weapon-effect nopadding">
            <Ryurow>
              <Ryudata className="relative">
                <div className="left-top-tip">効果など</div>
                {
                  joinIgnoreFalsy([
                    d.AR_eva ? "回避:" + d.AR_eva : "",
                    d.AR_penalty ? "ペナルティ:" + d.AR_penalty : "",
                    d.AR_kouka,
                  ],"/")
                }
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
              </Ryudata>
            </Ryurow>
          </Ryudata>
        </Ryurow>
        <Ryurow>
          <Ryulabel className="armor">盾・鎧</Ryulabel>
          <Ryudata className="armor-name nopadding">
            <Ryurow>
              <Ryudata>
                {(d.AL_Tokucho + d.AL_name)}
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
                {(d.AB_Tokucho + d.AB_name)}
              </Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="armor-defense nopadding">
            <Ryurow>
              <Ryudata>
                {d.AL_hit}
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
                {d.AB_def}
              </Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="armor-penalty nopadding">
            <Ryurow>
              <Ryudata>
                {d.AL_penalty}
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
                {d.AB_penalty}
              </Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="armor-constitution nopadding">
            <Ryurow>
              <Ryudata>
                {d.AL_taikyu}
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
                {d.AB_taikyu}
              </Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="armor-effect nopadding">
            <Ryurow>
              <Ryudata>
                {
                  joinIgnoreFalsy([
                    d.AL_eva ? "回避:" + d.AL_eva : "",
                    d.AL_penalty ? "ペナルティ:" + d.AL_penalty : "",
                    d.AL_kouka,
                  ],"/")
                }
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
                {d.AB_kouka}
              </Ryudata>
            </Ryurow>
          </Ryudata>
        </Ryurow>
        <Ryurow>
          <Ryulabel className="clothing">旅装</Ryulabel>
          <Ryudata className="clothing-name1 nopadding">
            <Ryurow>
              <Ryudata>
                {(d.AH_Tokucho + d.AH_name)}
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
                {(d.AM_Tokucho + d.AM_name)}
              </Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="clothing-effect1 nopadding">
            <Ryurow>
              <Ryudata>
                {
                  joinIgnoreFalsy([
                    d.AH_taikyu ? "耐久度:" + d.AH_taikyu : "",
                    d.AH_kouka  ? "効果:" + d.AH_kouka : "",
                  ],"/")
                }
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
                {
                  joinIgnoreFalsy([
                    d.AM_taikyu ? "耐久度:" + d.AM_taikyu : "",
                    d.AM_kouka  ? "効果:" + d.AM_kouka : "",
                  ],"/")
                }
              </Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="clothing-name2 nopadding">
            <Ryurow>
              <Ryudata>
                {(d.AT_Tokucho + d.AT_name)}
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
                {(d.AS_Tokucho + d.AS_name)}
              </Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="clothing-effect2 nopadding">
            <Ryurow>
              <Ryudata>
                {
                  joinIgnoreFalsy([
                    d.AT_taikyu ? "耐久度:" + d.AT_taikyu : "",
                    d.AT_kouka  ? "効果:" + d.AT_kouka : "",
                  ],"/")
                }
              </Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>
                {
                  joinIgnoreFalsy([
                    d.AS_taikyu ? "耐久度:" + d.AS_taikyu : "",
                    d.AS_kouka  ? "効果:" + d.AS_kouka : "",
                  ],"/")
                }
              </Ryudata>
            </Ryurow>
          </Ryudata>
        </Ryurow>
      </Ryutable>
    </div>
  );
}

function RyutamaModifier(props) {
  const d = props.data;
  return (
    <div className="modifier">
      <div className="modifier-header">「地形＋天候」を目標値とするチェックの、装備による修正値</div>
      <Ryutable className="modifier">
        <Ryurow>
          <Ryulabel className="modifier-bonus-label">チェック<br/>ボーナス</Ryulabel>
          <Ryudata className="modifier-bonus-lv1 nopadding">
            <Ryurow><Ryudata>LV1地形⇒6</Ryudata></Ryurow>
            <Ryurow>
              <Ryudata>草原</Ryudata>
              <Ryudata>荒野</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv2 nopadding">
            <Ryurow><Ryudata>LV2地形⇒8</Ryudata></Ryurow>
            <Ryurow>
              <Ryudata>林</Ryudata>
              <Ryudata>丘陵</Ryudata>
              <Ryudata>岩場</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv3 nopadding">
            <Ryurow><Ryudata>LV3地形⇒10</Ryudata></Ryurow>
            <Ryurow>
              <Ryudata>森</Ryudata>
              <Ryudata>湿地</Ryudata>
              <Ryudata>山</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv4 nopadding">
            <Ryurow><Ryudata>LV4地形⇒12</Ryudata></Ryurow>
            <Ryurow>
              <Ryudata>砂漠</Ryudata>
              <Ryudata>密林</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv5 nopadding">
            <Ryurow><Ryudata>LV5地形⇒14</Ryudata></Ryurow>
            <Ryurow>
              <Ryudata>高山</Ryudata>
            </Ryurow>
          </Ryudata>
        </Ryurow>
        <Ryurow>
          <Ryudata className="modifier-bonus-label-values"></Ryudata>
          <Ryudata className="modifier-bonus-lv1-values nopadding">
            <Ryurow>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv2-values nopadding">
            <Ryurow>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv3-values nopadding">
            <Ryurow>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv4-values nopadding">
            <Ryurow>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv5-values nopadding">
            <Ryurow>
              <Ryudata></Ryudata>
            </Ryurow>
          </Ryudata>
        </Ryurow>
        <Ryurow>
          <Ryulabel className="modifier-penalty-label">チェック<br/>ペナルティ</Ryulabel>
          <Ryudata className="modifier-penalty-plus1 nopadding">
            <Ryurow>
              <Ryudata>天候の修正値＋1</Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>雨</Ryudata>
              <Ryudata>強風</Ryudata>
              <Ryudata>霧</Ryudata>
              <Ryudata>暑い</Ryudata>
              <Ryudata>寒い</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-penalty-plus3 nopadding">
            <Ryurow>
              <Ryudata>天候の修正値＋2</Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>豪雨</Ryudata>
              <Ryudata>雪</Ryudata>
              <Ryudata>濃霧</Ryudata>
              <Ryudata>闇</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-penalty-plus5 nopadding">
            <Ryurow>
              <Ryudata>天候の修正値＋3</Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata>大嵐</Ryudata>
              <Ryudata>猛吹雪</Ryudata>
            </Ryurow>
          </Ryudata>
        </Ryurow>
        <Ryurow>
          <Ryudata className="modifier-penalty-label-values">
            <Ryurow>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-penalty-plus1-values nopadding">
            <Ryurow>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-penalty-plus3-values nopadding">
            <Ryurow>
              <Ryudata></Ryudata>
              <Ryudata></Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-penalty-plus5-values nopadding">
          </Ryudata>
        </Ryurow>
      </Ryutable>
    </div>
  );
}

function RyutamaBadStatus(props) {
  const d = props.data;
  return (
    <div className="badstatus">
      <div className="badstatus-header">状態異常</div>
      <Ryutable className="badstatus">
        <Ryurow>
          <Ryulabel className="badstatus-physical">肉体系</Ryulabel>
          <Ryudata className="badstatus-injury-label">大ケガ</Ryudata>
          <Ryudata className="badstatus-injury-value"></Ryudata>
          <Ryudata className="badstatus-poison-label">毒</Ryudata>
          <Ryudata className="badstatus-poison-value"></Ryudata>
          <Ryudata className="badstatus-disease-label">病気</Ryudata>
          <Ryudata className="badstasus-disease-value"></Ryudata>
        </Ryurow>
        <Ryurow>
          <Ryulabel className="badstatus-mental">精神系</Ryulabel>
          <Ryudata className="badstatus-sluggish-label">だるい</Ryudata>
          <Ryudata className="badstatus-sluggish-value"></Ryudata>
          <Ryudata className="badstatus-high-label">ハイ</Ryudata>
          <Ryudata className="badstatus-high-value"></Ryudata>
          <Ryudata className="badstatus-shocked-label">ショック</Ryudata>
          <Ryudata className="badstasus-shocked-value"></Ryudata>
        </Ryurow>
      </Ryutable>
    </div>
  );
}

function RyutamaHeader(props) {
  return (
    <div className="ryutama-header">
      <RyutamaSheetTitle>
        <div className="ryutama-title">りゅう◇た&nbsp;ま</div>
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
      <div className="sheet">
      <div className="page">
        <div className="container">
          <RyutamaHeader/>
          <div className="table character">
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
          <RyutamaClass data={d} />
          <RyutamaFeature data={d} />
        </div>
      </div>
      <div className="page">
        <div className="container">
          <RyutamaCheck data={d} />
          <RyutamaEquipment data={d} />
          <RyutamaModifier data={d} />
          <RyutamaBadStatus data={d} />
        </div>
      </div>
      </div>
    );
  }
}

class CharSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charId: "",
      data: {},
      error: null,
    };
  }
  retrieveSheetData(charId) {
    this.setState({
      charId: charId,
      data: {},
      error: null,
    });
    getSheetData(charId).then((res) => {
      if (res.body) {
        this.setState({data: res.body});
      }
    }).catch((err) => {
      console.error(err);
      this.setState({error: err});
    });
  }
  componentDidMount() {
    let charId = this.state.charId;
    if (this.props.params) {
      charId = this.props.params.charId;
    } else {
      charId = this.props.charId;
    }
    this.setState({charId: charId});
    this.retrieveSheetData(charId);
  }
  componentWillReceiveProps(nextProps) {
    let charId = this.state.charId;
    if (nextProps.charId) {
      charId = nextProps.charId;
    } else if (nextProps.params) {
      charId = nextProps.params.charId;
    }

    if (charId === this.state.charId) {
      return;
    }

    this.setState({charId: charId});
    this.retrieveSheetData(charId);
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
      if (Object.keys(d).length > 0) {
        if (d.game && d.game == 'ryutama') {
          document.title = "りゅうたまキャラシート/" + d.pc_name + "/レベル" + d.V_level;
          return (<RyutamaSheet data={d}/>);
        } else {
          return (
            <div>
              りゅうたまのキャラクターデータではありません。
              <Link to="/">戻る</Link>
            </div>
          );
        }
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

export default CharSheet;
