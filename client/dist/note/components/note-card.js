"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var c,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(a=(n<3?c(a):n>3?c(t,o,a):c(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),NoteCard=function(){function e(){this.onChecked=new core_1.EventEmitter,this.showCheck=!1}return e.prototype.check=function(){this.onChecked.next(this.note._id)},e.prototype.toggle=function(){this.showCheck=!this.showCheck},__decorate([core_1.Input(),__metadata("design:type",Object)],e.prototype,"note",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],e.prototype,"onChecked",void 0),e=__decorate([core_1.Component({selector:"note-card",templateUrl:"note/templates/note-card.html",styleUrls:["note/styles/note-card.css"]}),__metadata("design:paramtypes",[])],e)}();exports.NoteCard=NoteCard;