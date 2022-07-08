import { LightningElement, api } from 'lwc';

export default class Bubble extends LightningElement {

    @api label;
    @api icon;
    handleButton(event) {
      this.dispatchEvent(new CustomEvent('buttonclick',{
        // bubbles: true
      }));
    }

}