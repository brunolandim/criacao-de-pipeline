"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Name.ts
var Name_exports = {};
__export(Name_exports, {
  Name: () => Name
});
module.exports = __toCommonJS(Name_exports);
var Name = class {
  constructor(name, sobreNome) {
    this.name = name;
    this.sobreNome = sobreNome;
  }
  getName() {
    return this.name;
  }
  getFullName() {
    return `${this.name} ${this.sobreNome}`;
  }
};
console.log("aquiiii");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Name
});
