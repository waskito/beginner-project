import React, { Component } from 'react';
import Key from './Key';

export default class Keyboard extends Component {
  render() {
  // for better readability of Key components - shorter lines
    const keyClick = this.props.keyClick;
    const x = <span key='x'>&#x1D4B3;</span>;
    const inv = <sup key='-1'>-1</sup>;
    const pow2 = <sup key='2'>2</sup>;
    const pow3 = <sup key='3'>3</sup>;

    return (
      <div className="keyboard-container">
        <div className="keyboard-left">

            <Key className="sm-button" Tag={[x, inv]} keyLog="^-1" math="inv" keyClick={keyClick} />
            <Key className="sm-button" Tag="&radic;" keyLog="&radic;(" math="sqrt" keyClick={keyClick} />
            <Key className="sm-button" Tag={[x, pow2]} keyLog="^2" math="sqr" keyClick={keyClick} />
            <Key className="sm-button" Tag="^" keyLog="^" math="power" keyClick={keyClick} />
            <Key className="sm-button" Tag="log" keyLog="log(" math="log" keyClick={keyClick} />
            <Key className="sm-button" Tag="ln" keyLog="ln(" math="log" keyClick={keyClick} />

            <Key className="sm-button" keyLog="-" Tag="(&minus;)" math="sub" keyClick={keyClick} />
            <Key className="sm-button" keyLog="^3" Tag={[x, pow3]} math="power" keyClick={keyClick} />
            <Key className="sm-button" keyLog="" Tag="hyp" math="log" keyClick={keyClick} />
            <Key className="sm-button" keyLog="sin(" Tag="sin" math="trig" keyClick={keyClick} />
            <Key className="sm-button" keyLog="cos(" Tag="cos" math="trig" keyClick={keyClick} />
            <Key className="sm-button" keyLog="tan(" Tag="tan" math="trig" keyClick={keyClick} />

            <Key className="sm-button" keyLog="" Tag="RCL" math="" keyClick={keyClick} />
            <Key className="sm-button" keyLog="" Tag="ENG" math="" keyClick={keyClick} />
            <Key className="sm-button" keyLog="(" Tag="(" math="prnths" keyClick={keyClick} />
            <Key className="sm-button" keyLog=")" Tag=")" math="prnths" keyClick={keyClick} />
            <Key className="sm-button" keyLog="" Tag="," math="log" keyClick={keyClick} />
            <Key className="sm-button" keyLog="" Tag="M+" math="log" keyClick={keyClick} />

        </div>
        <div className="keyboard-right">
          <div className="keyboard-row">
            <Key className="num-button" Tag="1" keyLog="1" math="number" keyClick={keyClick} />
            <Key className="num-button" Tag="2" keyLog="2" math="number" keyClick={keyClick} />
            <Key className="num-button" Tag="3" keyLog="3" math="number" keyClick={keyClick} />
            <Key className="num-button orange-button" Tag="DEL" math="delete" keyClick={keyClick} />
            <Key className="num-button orange-button" Tag="AC" math="clear" keyClick={keyClick} />
          </div>
          <div className="keyboard-row">
            <Key className="num-button" Tag="4" keyLog="4" math="number" keyClick={keyClick} />
            <Key className="num-button" Tag="5" keyLog="5" math="number"keyClick={keyClick} />
            <Key className="num-button" Tag="6" keyLog="6" math="number"keyClick={keyClick} />
            <Key className="num-button" Tag="&times;" keyLog="&times;" math="multiply" keyClick={keyClick} />
            <Key className="num-button" Tag="&divide;" keyLog="&divide;" math="divide" keyClick={keyClick} />
          </div>
          <div className="keyboard-row">
            <Key className="num-button" Tag="7" keyLog="7" math="number" keyClick={keyClick} />
            <Key className="num-button" Tag="8" keyLog="8" math="number" keyClick={keyClick} />
            <Key className="num-button" Tag="9" keyLog="9" math="number" keyClick={keyClick} />
            <Key className="num-button" Tag="+" keyLog="+" math="sum" keyClick={keyClick} />
            <Key className="num-button" Tag="&minus;" keyLog="-" math="subtract" keyClick={keyClick} />
          </div>
          <div className="keyboard-row">
            <Key className="num-button" Tag="0" keyLog="0" math="log" keyClick={keyClick} />
            <Key className="num-button" Tag="." keyLog="." math="comma" keyClick={keyClick} />
            <Key className="num-button" Tag="EXP" keyLog="E" math="exponent" keyClick={keyClick} />
            <Key className="num-button" Tag="Ans" keyLog="Ans" math="ans" keyClick={keyClick} />
            <Key className="num-button" Tag="=" math="equals" keyClick={keyClick} />
          </div>
        </div>
      </div>
    );
  }
}

