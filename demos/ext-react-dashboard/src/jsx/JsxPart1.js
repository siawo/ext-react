import React, { Component } from 'react';
import { ExtContainer, ExtPanel, ExtButton } from '@sencha/ext-react-classic';

class JsxPart1 extends Component {

  render() {
    console.log('render')
    return (
      <ExtContainer layout="fit" padding="0" fitToParent="true">
        <ExtPanel
          title={this.props.theTitle}
          border="true"
          layout="vbox"
        >
          <ExtButton text="button 1"/>
          <ExtButton text="button 2"/>
        </ExtPanel>
      </ExtContainer>
    )
  }

}
export default JsxPart1;