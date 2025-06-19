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
  "FD2022-12",
  "FE2000-1",
  "fm2008",
];

const checkNames = function (arr) {
  const regExpresion = /^(F[DEM]|f[dem])20\d{2}(-\d+)?$/;

  return arr.forEach((item) => {
    if (regExpresion.test(item)) {
      console.log(`${item} - Success`);
    } else console.log(`${item} - Error`);
  });
};

checkNames(arrGroups);
