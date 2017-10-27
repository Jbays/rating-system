import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Form, Text } from 'react-form';

 class BasicForm extends React.Component {
    constructor( props ) {
      super( props );
      this.state = {};
    }

    render() {
      return (
        <div>
          <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
                <label htmlFor="userEmail">Email</label>
                <Text field="userEmail" id="userEmail" />
                <br/>
                <label htmlFor="userFirstName">First Name</label>
                <Text field="userFirstName" id="userFirstName" />
                <br/>
                <label htmlFor="userLastName">Last Name</label>
                <Text field="userLastName" id="userLastName" />
                <br/>
                <label htmlFor="opponentEmail">Opponent Email</label>
                <Text field="opponentEmail" id="opponentEmail" />
                <br/>
                <label htmlFor="opponentFirstName">Opponent First Name</label>
                <Text field="opponentFirstName" id="opponentFirstName" />
                <br/>
                <label htmlFor="opponentLastName">Opponent Last Name</label>
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
    {/* <NameForm /> */}
    <BasicForm/>
  </div>,
  document.getElementById('root')
);
