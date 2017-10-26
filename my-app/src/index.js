import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            first name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            last name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
      </div>
    );
  }
}

// class Page extends React.Component {
//   render() {
//     return (
//       <div className="">
//         <form onSubmit={this.handeSubmit}>
//           <label>
//             first name:
//             <input type="text"
//                    value={this.state.value}
//                    onChange={this.handleChange}/>
//           </label>
//           <input type="submit" name="Submit"/>
//         </form>
//         <form>
//           <label>last name
//             <input type="text" name="lastName"/>
//           </label>
//           <input type="submit" name="Submit"/>
//         </form>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
