// @flow
import React from 'react';
import getSheetData from './sheetdata.jsx';
import {Link} from 'react-router';
import css from '../css/style.css';
import {emojify} from 'react-emojione2';
import bowser from 'bowser';

type PropsWithChildren = {
  className?: string,
  children?: Element<any>,
};

type CharDataJson = {
  [key:string]: string,
};

const emojiOptions = {
    styles: {
        backgroundImage: 'url(/images/emojione.sprites.png)',
        // width: '1.5rem',
        // height: '1.5rem'
    },
};

function joinIgnoreFalsy(list: Array<any>, separator: string=",") {
  return list.filter((v)=>(v)).join(separator);
}

function Ryutable(props: PropsWithChildren) {
  return (
    <div className={"table " + (props.className || "")}>{props.children}</div>
  );
}

function Ryurow(props: PropsWithChildren) {
  return (
    <div className={"row " + (props.className || "")}>{props.children}</div>
  );
}

function Ryulabel(props: PropsWithChildren) {
  return (
    <div className={"cell label " + (props.className || "")}>{props.children}</div>
  );
}

function Ryudata(props: PropsWithChildren) {
  return (
    <div className={"cell data " + (props.className || "")}>{props.children}</div>
  );
}

function RyutamaSheetTitle(props: PropsWithChildren) {
  return (
    <div className={"title-area " + (props.className || "")}>{props.children}</div>
  );
}

function RyuCharFigure(props: PropsWithChildren) {
  return (
    <div className={"figure-area " + (props.className || "")}>{props.children}</div>
  );
}

function RyutamaClass(props: {data: CharDataJson}) {
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
      <Ryurow className="class-entry-spacer">
        <Ryudata className="class-entry-spacer-cell"/>
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

function RyutamaFeature(props: {data: CharDataJson}) {
  const d = props.data;

  let prof_equip: Array<string> = [];
  if (d.equip_tanken) {
    prof_equip.push("短剣");
  }
  if (d.equip_ken) {
    prof_equip.push("剣");
  }
  if (d.equip_yari) {
    prof_equip.push("槍");
  }
  if (d.equip_ono) {
    prof_equip.push("斧");
  }
  if (d.equip_yumi) {
    prof_equip.push("弓");
  }
  if (d.equip_sude) {
    prof_equip.push("素手");
  }

  let prof_topography: Array<string> = [];
  const topo_map = {
    "LS1":"草原",
    "LS2":"荒野",
    "LS3":"林",
    "LS4":"丘陵",
    "LS5":"岩場",
    "LS6":"森",
    "LS7":"湿地",
    "LS8":"山",
    "LS9":"砂漠",
    "LS10":"密林",
    "LS11":"高山",
    "LS12":"雨",
    "LS13":"強風",
    "LS14":"霧",
    "LS15":"暑い",
    "LS16":"寒い",
    "LS17":"豪雨",
    "LS18":"雪",
    "LS19":"濃霧",
    "LS20":"闇",
    "LS21":"大嵐",
    "LS22":"猛吹雪",
  }

  Object.keys(topo_map).map((key)=>{
    if (d[key]) {
      prof_topography.push(topo_map[key]);
    }
  });

  return (
    <Ryutable className="feature">
      <Ryurow>
        <Ryulabel className="feature-proficienty-weapon">習得武器</Ryulabel>
        <Ryudata className="feature-proficienty-weapon">
          {prof_equip.join(", ")}
        </Ryudata>
        <Ryulabel className="feature-weather">得意<br/>地形／天候</Ryulabel>
        <Ryudata className="feature-weather">
          {prof_topography.join(", ")}
        </Ryudata>
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

function RyutamaCheck(props: {data: CharDataJson}) {
  const d = props.data;
  return (
    <Ryutable className="check">
      <Ryurow className="check-ability">
        <Ryulabel className="check-ability">能力値</Ryulabel>
        <Ryudata className="check-ability-str">
          体力<br/>d{d.NP1}
        </Ryudata>
        <Ryudata className="check-ability-image nopadding">
          <div className="check-ability-image-str"></div>
        </Ryudata>
        <Ryudata className="check-ability-dex">
          敏捷<br/>d{d.NP2}
        </Ryudata>
        <Ryudata className="check-ability-image nopadding">
          <div className="check-ability-image-dex"></div>
        </Ryudata>
        <Ryudata className="check-ability-int">
          知力<br/>d{d.NP3}
        </Ryudata>
        <Ryudata className="check-ability-image nopadding">
          <div className="check-ability-image-int"></div>
        </Ryudata>
        <Ryudata className="check-ability-spi">
          精神<br/>d{d.NP4}
        </Ryudata>
        <Ryudata className="check-ability-image nopadding">
          <div className="check-ability-image-spi"></div>
        </Ryudata>
      </Ryurow>
      <Ryurow className="check-hp-mp">
        <Ryulabel className="check-hp">HP</Ryulabel>
        <Ryudata className="check-hp nopadding">
          <Ryurow className="check-hp-formula"><Ryudata className="center reverse-color">【最大HP＝体力×２】</Ryudata></Ryurow>
          <Ryurow className="check-hp-value"><Ryudata className="check-hp-value"><span className="hp-mp-mark">{emojify(':heart_decoration:', emojiOptions)}</span> &nbsp; {d.NP5}⇒</Ryudata></Ryurow>
        </Ryudata>
        <Ryulabel className="check-mp">MP</Ryulabel>
        <Ryudata className="check-mp nopadding">
          <Ryurow className="check-mp-formula"><Ryudata className="center reverse-color">【最大MP＝精神×２】</Ryudata></Ryurow>
          <Ryurow className="check-mp-value"><Ryudata className="check-mp-value"><span className="hp-mp-mark">{emojify(':star2:', emojiOptions)}</span> &nbsp; {d.NP6}⇒</Ryudata></Ryurow>
        </Ryudata>
      </Ryurow>
      <Ryurow className="check-condition">
        <Ryulabel className="check-condition small h2vr_10">コンディション</Ryulabel>
        <Ryudata className="check-condition nopadding">
          <Ryurow className="check-condition-formula"><Ryudata className="center reverse-color">【体力＋精神】<span className="small">★10以上は絶好調の日!&nbsp;好きな能力値ひとつを1段階上昇</span></Ryudata></Ryurow>
          <Ryurow className="check-condition-value"><Ryudata className="check-condition-value"><span className="condition-mark">{emojify(':bust_in_silhouette:', emojiOptions)}</span> 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20</Ryudata></Ryurow>
        </Ryudata>
        <Ryudata className="check-fumble nopadding">
          <Ryurow className="check-fumble-label"><Ryulabel className="center">1ゾロポイント</Ryulabel></Ryurow>
          <Ryurow className="check-fumble-value"><Ryudata><span className="fumble-mark">{emojify(':skull:', emojiOptions)}</span></Ryudata></Ryurow>
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

function RyutamaEquipment(props: {data: CharDataJson}) {
  const d = props.data;
  return (
    <div className="equipment">
      <div className="equipment-header">装備{emojify(':crossed_swords:', emojiOptions)}<span className="small">（装備中のアイテムのサイズは0になる）</span></div>
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
              <Ryudata className="relative">
                <div className="left-top-tip">防護点</div>
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
              <Ryudata className="relative">
                <div className="left-top-tip">ペナルティ</div>
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
              <Ryudata className="relative">
                <div className="left-top-tip">耐久度</div>
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
              <Ryudata className="relative">
                <div className="left-top-tip">効果など</div>
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
              <Ryudata className="relative">
                <div className="left-top-tip">効果・耐性など</div>
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
              <Ryudata className="relative">
                <div className="left-top-tip">効果・耐性など</div>
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

function RyutamaModifier(props: {data: CharDataJson}) {
  const d = props.data;
  return (
    <div className="modifier">
      <div className="modifier-header">「地形＋天候」を目標値とするチェックの、装備による修正値</div>
      <Ryutable className="modifier">
        <Ryurow className="modifier-label-row">
          <Ryulabel className="modifier-bonus-label">チェック<br/>ボーナス</Ryulabel>
          <Ryudata className="modifier-bonus-lv1 nopadding">
            <Ryurow><Ryudata className="center">LV1地形⇒6</Ryudata></Ryurow>
            <Ryurow>
              <Ryudata className="center">草原</Ryudata>
              <Ryudata className="center">荒野</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv2 nopadding">
            <Ryurow><Ryudata className="center">LV2地形⇒8</Ryudata></Ryurow>
            <Ryurow>
              <Ryudata className="center">林</Ryudata>
              <Ryudata className="center">丘陵</Ryudata>
              <Ryudata className="center">岩場</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv3 nopadding">
            <Ryurow><Ryudata className="center">LV3地形⇒10</Ryudata></Ryurow>
            <Ryurow>
              <Ryudata className="center">森</Ryudata>
              <Ryudata className="center">湿地</Ryudata>
              <Ryudata className="center">山</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv4 nopadding">
            <Ryurow><Ryudata className="center">LV4地形⇒12</Ryudata></Ryurow>
            <Ryurow>
              <Ryudata className="center">砂漠</Ryudata>
              <Ryudata className="center">密林</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv5 nopadding">
            <Ryurow><Ryudata className="small line-height-small center">LV5地形<br/>⇒14</Ryudata></Ryurow>
            <Ryurow>
              <Ryudata className="center">高山</Ryudata>
            </Ryurow>
          </Ryudata>
        </Ryurow>
        <Ryurow className="modifier-value-row">
          <Ryudata className="modifier-bonus-label-values"></Ryudata>
          <Ryudata className="modifier-bonus-lv1-values nopadding">
            <Ryurow>
              <Ryudata>{d.LP1}</Ryudata>
              <Ryudata>{d.LP2}</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv2-values nopadding">
            <Ryurow>
              <Ryudata>{d.LP3}</Ryudata>
              <Ryudata>{d.LP4}</Ryudata>
              <Ryudata>{d.LP5}</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv3-values nopadding">
            <Ryurow>
              <Ryudata>{d.LP6}</Ryudata>
              <Ryudata>{d.LP7}</Ryudata>
              <Ryudata>{d.LP8}</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv4-values nopadding">
            <Ryurow>
              <Ryudata>{d.LP9}</Ryudata>
              <Ryudata>{d.LP10}</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-bonus-lv5-values nopadding">
            <Ryurow>
              <Ryudata>{d.LP11}</Ryudata>
            </Ryurow>
          </Ryudata>
        </Ryurow>
        <Ryurow className="modifier-label-row">
          <Ryulabel className="modifier-penalty-label">チェック<br/>ペナルティ</Ryulabel>
          <Ryudata className="modifier-penalty-plus1 nopadding">
            <Ryurow>
              <Ryudata className="center">天候の修正値＋1</Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata className="center">雨</Ryudata>
              <Ryudata className="center">強風</Ryudata>
              <Ryudata className="center">霧</Ryudata>
              <Ryudata className="center">暑い</Ryudata>
              <Ryudata className="center">寒い</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-penalty-plus3 nopadding">
            <Ryurow>
              <Ryudata className="center">天候の修正値＋3</Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata className="center">豪雨</Ryudata>
              <Ryudata className="center">雪</Ryudata>
              <Ryudata className="center">濃霧</Ryudata>
              <Ryudata className="center">闇</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-penalty-plus5 nopadding">
            <Ryurow>
              <Ryudata className="small center">天候の修正値＋5</Ryudata>
            </Ryurow>
            <Ryurow>
              <Ryudata className="center">大嵐</Ryudata>
              <Ryudata className="center">猛吹雪</Ryudata>
            </Ryurow>
          </Ryudata>
        </Ryurow>
        <Ryurow className="modifier-value-row">
          <Ryudata className="modifier-penalty-label-values"></Ryudata>
          <Ryudata className="modifier-penalty-plus1-values nopadding">
            <Ryurow>
              <Ryudata>{d.LP12}</Ryudata>
              <Ryudata>{d.LP13}</Ryudata>
              <Ryudata>{d.LP14}</Ryudata>
              <Ryudata>{d.LP15}</Ryudata>
              <Ryudata>{d.LP16}</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-penalty-plus3-values nopadding">
            <Ryurow>
              <Ryudata>{d.LP17}</Ryudata>
              <Ryudata>{d.LP18}</Ryudata>
              <Ryudata>{d.LP19}</Ryudata>
              <Ryudata>{d.LP20}</Ryudata>
            </Ryurow>
          </Ryudata>
          <Ryudata className="modifier-penalty-plus5-values nopadding">
            <Ryurow>
              <Ryudata>{d.LP21}</Ryudata>
              <Ryudata>{d.LP22}</Ryudata>
            </Ryurow>
          </Ryudata>
        </Ryurow>
      </Ryutable>
    </div>
  );
}

function RyutamaBadStatus(props: {data: CharDataJson}) {
  const d = props.data;
  return (
    <div className="badstatus">
      <div className="badstatus-header">状態異常<span className="small">（翌日の[コンディション・チェック]の結果が状態異常の数値以上だった場合、回復する）</span></div>
      <Ryutable className="badstatus">
        <Ryurow>
          <Ryulabel className="badstatus-physical">肉体系</Ryulabel>
          <Ryudata className="badstatus-injury-label">
            <div className="badstatus-mark">{emojify(':hospital:', emojiOptions)}</div>
            <div className="badstatus-explanation">
              大ケガ<br/><span className="small">【敏捷】−1段階</span>
            </div>
          </Ryudata>
          <Ryudata className="badstatus-injury-value"></Ryudata>
          <Ryudata className="badstatus-poison-label">
            <div className="badstatus-mark">{emojify(':snake:', emojiOptions)}</div>
            <div className="badstatus-explanation">
              毒<br/><span className="small">【体力】−1段階</span>
            </div>
          </Ryudata>
          <Ryudata className="badstatus-poison-value"></Ryudata>
          <Ryudata className="badstatus-sick-label">
            <div className="badstatus-mark">{emojify(':mask:', emojiOptions)}</div>
            <div className="badstatus-explanation">
              病気<br/><span className="small">【全能力】−1段階</span>
            </div>
          </Ryudata>
          <Ryudata className="badstasus-sick-value"></Ryudata>
        </Ryurow>
        <Ryurow>
          <Ryulabel className="badstatus-mental">精神系</Ryulabel>
          <Ryudata className="badstatus-tired-label">
            <div className="badstatus-mark">{emojify(':weary:', emojiOptions)}</div>
            <div className="badstatus-explanation">
              だるい<br/><span className="small">【精神】−1段階</span>
            </div>
          </Ryudata>
          <Ryudata className="badstatus-tired-value"></Ryudata>
          <Ryudata className="badstatus-muddled-label">
            <div className="badstatus-mark">{emojify(':blossom:', emojiOptions)}</div>
            <div className="badstatus-explanation">
              ハイ<br/><span className="small">【知力】−1段階</span>
            </div>
          </Ryudata>
          <Ryudata className="badstatus-muddled-value"></Ryudata>
          <Ryudata className="badstatus-shock-label">
            <div className="badstatus-mark">{emojify(':broken_heart:', emojiOptions)}</div>
            <div className="badstatus-explanation">
              ショック<br/><span className="small">【全能力】−1段階</span>
            </div>
          </Ryudata>
          <Ryudata className="badstasus-shock-value"></Ryudata>
        </Ryurow>
      </Ryutable>
    </div>
  );
}

function RyutamaHeader() {
  return (
    <div className="ryutama-header">
      <RyutamaSheetTitle>
        <div className="ryutama-title">りゅう◇た&nbsp;ま</div>
        <div className="ryutama-title-english">natural fantasy R.P.G.</div>
        <div className={bowser.chrome ? 'traveler-character-sheet chrome' : 'traveler-character-sheet'}>旅人キャラクターシート</div>
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

function Copyright() {
  return (
    <div className="copyright">
      <div>「りゅうたま」は岡田篤宏およびテーブルトークカフェ・Daydreamの著作物です。</div>
      <div>Emoji provided free by http://emojione.com</div>
    </div>
  );
}

class RyutamaSheet extends React.Component {
  static TYPE() {
    return {
      '0': "",
      '1': "アタック",
      '2': "テクニック",
      '3': "マジック"
    }
  };

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
                <span className="data type_id">{RyutamaSheet.TYPE()[d.type_id]}</span>/<span className="data type2">{RyutamaSheet.TYPE()[d.type2]}</span>
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
          <Copyright />
        </div>
      </div>
      </div>
    );
  }
}

type CharSheetProps = {
  params: {charId: string},
  charId: string,
};

class CharSheet extends React.Component {
  state: {
    charId: string,
    data: CharDataJson,
    error: ?Error,
  };

  constructor(props: CharSheetProps) {
    super(props);
    this.state = {
      charId: "",
      data: {},
      error: null,
    };
  }
  retrieveSheetData(charId: string) {
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
  componentWillReceiveProps(nextProps: CharSheetProps) {
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
