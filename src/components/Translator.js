import React, { Component } from 'react';
import { Form, Select, TextArea } from 'react-form';
import languageList from './languageList';
// import {
//   Link
// } from 'react-router-dom';
import superagent from 'superagent';

import 'bootstrap/dist/css/bootstrap.css';


export default class Translator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textFrom: 'I have an Apple',
      translated: '',
      translating: false
    };
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount(){
  }



  submitForm(data){
    const _this = this;
    this.setState({translated:'', translating: true});
    superagent
    .post(`/api/translate`)
    .send(data) // sends a JSON post body
    .set('accept', 'json')
    .end((err, res) => {
      if (res.body && res.body.code === 200) {
        if (_this.refs.translator)
          _this.setState({translated:res.body.data.text});
      }
      _this.setState({translating: false})
    });
  }

  render() {
    const _this = this;
    const languagesOptions = languageList();

    return (
      <div>
        <div className="hero" ref="translator">
          <Form onSubmit={(data) => this.submitForm(data)}
                defaultValues={{from:'id',to:'en'}}
             >
            { formApi => (
              <form onSubmit={formApi.submitForm} id="form-translate" className="mb-4">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <Select field="from" id="from" className="form-control rounded-0" options={languagesOptions} disabled={_this.state.translating} />
                      </div>
                    </div>
                    <div className="col" style={{width: "58px", flexGrow:'0'}}><h3 className="arrow">&#8594;</h3></div>
                    <div className="col">
                      <div className="form-group">
                        <Select field="to" id="to" className="form-control rounded-0" options={languagesOptions} disabled={_this.state.translating} />
                      </div>
                    </div>
                  </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <TextArea field="text" id="text" cols="30" rows="10" className="form-control rounded-0" disabled={_this.state.translating} placeholder="Ketik kata / kalimat yang akan di-translate..." />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className="btn btn-success rounded-0 float-right" style={{minWidth:'200px', backgroundColor:'#66CC99'}} disabled={_this.state.translating} type="submit">
                      {_this.state.translating &&
                        <span>Translating....</span>
                      }
                      {!_this.state.translating &&
                        <span>Translate</span>
                      }
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Form>
          {this.state.translated &&
            <div className="row">
              <div className="col">
                <div className="translate-result">
                  <p>
                    {this.state.translated}
                  </p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

