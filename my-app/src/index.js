import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Form, Text } from 'react-form';

class BasicForm extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      userEmail:"",
      userFirstName:"",
      userLastName:"",
      opponentEmail:"",
      opponentFirstName:"",
      opponentLastName:""
    };

    this.setStateOnSubmit = this.setStateOnSubmit.bind(this);
  }

  setStateOnSubmit(state){
    console.log("setStateOnSubmit invoked with param 'state'>>>",state);

    //NOTE: this works but is hideous!
    let userEmail = state.userEmail ? state.userEmail : '';
    let userFirstName = state.userFirstName ? state.userFirstName : '';
    let userLastName = state.userLastName ? state.userLastName : '';
    let opponentEmail = state.opponentEmail ? state.opponentEmail : '';
    let opponentFirstName = state.opponentFirstName ? state.opponentFirstName : '';
    let opponentLastName = state.opponentLastName ? state.opponentLastName : '';

    //NOTE: WHY DOESN'T THIS WORK? --> this.setState({state:state})
    this.setState(
      {
        userEmail:userEmail,
        userFirstName:userFirstName,
        userLastName:userLastName,
        opponentEmail:opponentEmail,
        opponentFirstName:opponentFirstName,
        opponentLastName:opponentLastName,
      }
    )
  }

  render() {
    return (
      <div>
        <Form onSubmit={submittedValues => this.setStateOnSubmit(submittedValues)}>
          { formApi => (
            <form onSubmit={formApi.submitForm} id="form2">
              <label htmlFor="userEmail">Email</label>
              <br/>
              <Text field="userEmail" id="userEmail" />
              <br/>
              <label htmlFor="userFirstName">First Name</label>
              <br/>
              <Text field="userFirstName" id="userFirstName" />
              <br/>
              <label htmlFor="userLastName">Last Name</label>
              <br/>
              <Text field="userLastName" id="userLastName" />
              <br/>
              <label htmlFor="opponentEmail">Opponent Email</label>
              <br/>
              <Text field="opponentEmail" id="opponentEmail" />
              <br/>
              <label htmlFor="opponentFirstName">Opponent First Name</label>
              <br/>
              <Text field="opponentFirstName" id="opponentFirstName" />
              <br/>
              <label htmlFor="opponentLastName">Opponent Last Name</label>
              <br/>
              <Text field="opponentLastName" id="opponentLastName" />
              <br/>
              <button type="submit" className="mb-4 btn btn-primary">Submit</button>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <BasicForm/>
  </div>,
  document.getElementById('root')
);
