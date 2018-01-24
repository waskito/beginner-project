import React, { Component } from 'react';
import { Form, Select, Text } from 'react-form';
import moment from 'moment';
import money from 'money';
import numeral from 'numeral';
import * as _ from 'lodash';
import ls from 'local-storage';
// import {
//   Link
// } from 'react-router-dom';
import superagent from 'superagent';

import 'bootstrap/dist/css/bootstrap.css';


export default class Translator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currencyList: [],
      corverted: 0,
      from:'',
      to:'',
      loading: false
    };
    this.submitForm = this.submitForm.bind(this);
  }

  getCurrencies(){
    const _this = this;
    this.setState({loading: true})
    superagent
      .get('https://api.fixer.io/latest?base=TRY')
      .end((err, res) => {
        _this.setState({loading:false})
        if (res.status === 200) {
          money.rates = res.body.rates;
          money.base = res.body.base;
          _this.setState({currencyList: _.transform(res.body.rates, function(result, n,k){
            result.push({
              label: k,
              value: k
            })

          },[]) });
          ls('fixer',res.body)
        }
      })
  }

  componentDidMount(){
    const localFixer = ls.get('fixer');
    if(!_.isEmpty(localFixer) && (localFixer.date === moment().subtract(1,'day').format('YYYY-MM-DD') || localFixer.date === moment().format('YYYY-MM-DD'))){
      money.rates = localFixer.rates;
      money.base = localFixer.base;
      this.setState({currencyList: _.transform(localFixer.rates, function(result, n,k){
            result.push({
              label: k,
              value: k
            })
          },[])
          })
    }else{
      this.getCurrencies()
    }
  }



  submitForm(data){
    this.setState({converted:money.convert(Number(data.amount), {from: data.from, to: data.to}).toFixed(2), to: data.to, from: data.from})
  }

  render() {
    const {currencyList,loading} = this.state;

    return (
      <div>
        <div className="hero" ref="translator">
          <Form onSubmit={(data) => this.submitForm(data)}
                defaultValues={{from:'USD',to:'IDR', amount: 1}}
             >
            { formApi => (
              <form onSubmit={formApi.submitForm} id="form-translate" className="mb-4">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <Select field="from" id="from" className="form-control rounded-0" options={currencyList} disabled={loading} />
                      </div>
                    </div>
                    <div className="col" style={{width: "58px", flexGrow:'0'}}><h3 className="arrow">&#8594;</h3></div>
                    <div className="col">
                      <div className="form-group">
                        <Select field="to" id="to" className="form-control rounded-0" options={currencyList} disabled={loading} />
                      </div>
                    </div>
                  </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="amount" className="label-converter">{formApi.getValue('from')}</label>
                      <Text field="amount" id="amount" type="tel" className="form-control rounded-0 field-amount" disabled={loading} placeholder="1" autoComplete="off" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className="btn btn-success rounded-0 float-right" style={{minWidth:'200px', backgroundColor:'#66CC99'}} disabled={loading} type="submit">
                        <span>Convert</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Form>
          {this.state.converted &&
            <div className="row">
              <div className="col">
                <div className="convert-result text-center">
                  <label htmlFor="result" className="label-converter">{this.state.to}</label>
                  <h1>
                    {numeral( this.state.converted ).format(`0,0.00`)}
                  </h1>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

