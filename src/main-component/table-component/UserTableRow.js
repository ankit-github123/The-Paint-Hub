
import React from 'react';
import { slideDown, slideUp } from './anim';
import './styles.css';


export default class UserTableRow extends React.Component {
  state = { expanded: false }

  toggleExpander = (e) => {
    if (e.target.type === 'checkbox') return;

    if (!this.state.expanded) {
      this.setState(
        { expanded: true },
        () => {
          if (this.refs.expanderBody) {
            slideDown(this.refs.expanderBody);
          }
        }
      );
    } else {
      slideUp(this.refs.expanderBody, {
        onComplete: () => { this.setState({ expanded: false }); }
      });
    }
  }

  render() {
    
    return [
      <tr key="main" onClick={this.toggleExpander} className="rowheight">
        <td className="centerAlign"><input className="uk-checkbox" type="checkbox" /></td>
       
        <td className="centerAlign">1</td>
        <td className="centerAlign">Vendor</td>
        <td className="centerAlign">Another detail</td>
        <td className="centerAlign">Another detail</td>
        <td className="centerAlign">Another detail</td>
        <td className="centerAlign">Another detail</td>
        <td className="centerAlign">{this.props.index}</td>
      </tr>,
      this.state.expanded && (
        <div>
        <tr className="expandable" key="tr-expander" className="rowheight">
          <td className="uk-background-muted" colSpan={6}>
            <div ref="expanderBody" className="inner uk-grid" style={{display:"flex"}}>
           
            
              <div  className="centerAlign" style={{position: "absolute",
    right: "150px"}}>Warehouse 134</div>
              <div  className="centerAlign" style={{position: "absolute",
    right: "60px"}}>234 Sft</div>
           
            </div>
            
          </td>
        </tr>
         <tr className="expandable" key="tr-expander" className="rowheight">
         <td className="uk-background-muted" colSpan={6}>
           <div ref="expanderBody" className="inner uk-grid" style={{display:"flex"}}>
          
           
             <div  className="centerAlign" style={{position: "absolute",
   right: "150px"}}>Warehouse 134</div>
             <div  className="centerAlign" style={{position: "absolute",
   right: "60px"}}>234 Sft</div>
          
           </div>
           
         </td>
       </tr>
       </div>
      )
    ];
  }
}
