"use strict";

const arrGroups = [
  "FE2021-5",
  "Fe2020-2",
  "FD2021",
  "fD2022-1",
  "FE2020-3",
  "FD2020/2",
  "fe2021-3",
  "FD2020$5",
  "FE2008-52",
  "Fm2008-23",
  "FM2022-1",
];

const regExpresion = " ";

const checkNames = function (arr) {
  return arr.map(function(item) {
    let result;
    if (item.length === 8) {
      result = "Success";
    } else {
      result = "Error";
    }
    return `${item} - ${result}`;
  });
};

console.log(checkNames(arrGroups));
