import {ThemeContext} from './ThemeContext';
import React from 'react';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
        <div style={{display:'flex',justifyContent:'center',padding:'4px'}}>
          <button  {...props}style={{fontSize:'25px',backgroundColor: theme.background,color:theme.foreground}}> Change Theme</button>
      </div>
    
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;