import React from 'react';
import { Dispatch, bindActionCreators, AnyAction } from 'redux';
import { connect } from 'react-redux';

import { RootState } from './Reducers/RootReducer';
import { toggleProperty } from './Actions/AppActions';

import logo from './logo.svg';
import './App.css';

const App: React.FC<AppProps> = ({
  tempProperty,
  toggleProperty
}) => {

  const stringProperty: string = tempProperty
    ? "true"
    : "false";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          State Property: {stringProperty}
        </p>
        <button onClick={toggleProperty}>
          Change State Property
        </button>
      </header>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  tempProperty: state.app.tempProperty
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => 
  bindActionCreators(
    { toggleProperty }, dispatch
  );

type AppProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
