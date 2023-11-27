import { Component, Input } from '@angular/core';
import {Results} from "../../../classes/results";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  @Input() displayResult:Results =new Results({ShowPage:false});

  constructor() {
    // console.log( "Display Results: " + this.displayResult.toString() );
  }

  toStringExecMethod(convert:any){
    return "[ "
        + convert.join()
        +", index: "  + convert["index"]
        + ", input: '"  + convert["input"] + "'"
        + ", groups: "+ convert["groups"]
        + "]" ;
  }

  setRowColor(index:number){

    if (this.displayResult.compareStates[index] ){
      return "row-color";
    }else{
      return "";
    }

    return "";

  };

}
