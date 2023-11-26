import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showBreadCrumbs:boolean = true;
  buttonLabel:string = "Collapse";

  changeMenu(){
    //Toggle button label between Collapse and Expand
    this.showBreadCrumbs = !this.showBreadCrumbs;

    if(this.showBreadCrumbs){
      this.buttonLabel = "Collapse";
    }else{
      this.buttonLabel = "Expand";

    }
  };

  home:string= "fs-5 fw-bold cos-bead-crumb";

  mainArray:string = "cos-bead-crumb";
  mainString:string = "cos-bead-crumb";
  mainRegExpr:string = "cos-bead-crumb";

  showMain(){
    this.mainArray = "cos-bead-crumb";
    this.mainString = "cos-bead-crumb";
    this.mainRegExpr =  "cos-bead-crumb";
  }
  hideMain(){
    this.mainArray =  "hidden";
    this.mainString =  "hidden";
    this.mainRegExpr =   "hidden";
  }

  hideTablesMenus(){
    this.showArrayMethodCalls = false;

  }

  arrayMethodCalls:string = "hidden";
  showArrayMethodCalls:boolean = false;
  arrayDataStructures:string = "hidden";
  arrayFunctionCalls:string = "hidden";

  showArray(){
    this.arrayMethodCalls = "cos-bead-crumb";
    this.arrayDataStructures = "cos-bead-crumb";
    this.arrayFunctionCalls = "cos-bead-crumb";
  }

  hideArray(){
    this.arrayMethodCalls = "hidden";
    this.arrayDataStructures = "hidden";
    this.arrayFunctionCalls = "hidden";
  }

  stringMethodCalls:string = "hidden";
  stringSearchCalls:string = "hidden";

  showString(){
    this.stringMethodCalls = "cos-bead-crumb";
    this.stringSearchCalls = "cos-bead-crumb";
  }

  hideString(){
    this.stringMethodCalls = "hidden";
    this.stringSearchCalls = "hidden";
  }


  regExprObjects:string = "hidden";
  regExprClasses:string = "hidden";
  regExprMethods:string = "hidden";
  regExprStringMethods:string = "hidden";
  regExprModifiers:string = "hidden";
  regExprGroupsAndRanges:string = "hidden";
  regExprMetaCharacters:string = "hidden";
  regExprQuantifiers:string = "hidden";

  showRegExpr(){
    this.regExprObjects = "cos-bead-crumb";
    this.regExprClasses = "cos-bead-crumb";
    this.regExprMethods = "cos-bead-crumb";
    this.regExprStringMethods = "cos-bead-crumb";
    this.regExprModifiers = "cos-bead-crumb";
    this.regExprGroupsAndRanges = "cos-bead-crumb";
    this.regExprMetaCharacters = "cos-bead-crumb";
    this.regExprQuantifiers = "cos-bead-crumb";
  }

  hideRegExpr(){
    this.regExprObjects  = "hidden";
    this.regExprClasses  = "hidden";
    this.regExprMethods  = "hidden";
    this.regExprStringMethods  = "hidden";
    this.regExprModifiers  = "hidden";
    this.regExprGroupsAndRanges  = "hidden";
    this.regExprMetaCharacters  = "hidden";
    this.regExprQuantifiers  = "hidden";
  }

  ListMenu(data:any){

    this.hideTablesMenus();

    if(data.Name == "Home"){
      this.showMain();
      this.hideArray();
      this.hideString();
      this.hideRegExpr();

      this.showArrayMethodCalls = false;
    }

    if( data.Name == "Array"){
      this.hideMain();
      this.showArray();
    }

    if( data.Name == "String"){
      this.hideMain();
      this.showString();
    }

    if( data.Name == "RegExpr"){
      this.hideMain();
      this.showRegExpr();
    }


    if( data.Name == "Array Method Calls"){this.showArrayMethodCalls = true;}

  };



}
