import { excelParser } from "./sheet.js";

const hasHeaderDemo = excelParser({
  index: '姓名',
  hasHeader: true,
  path: './list.xlsx',
});

const notHeaderDemo = excelParser({
  index: '2',
  hasHeader: false,
  path: './list2.xlsx',
})

console.log(hasHeaderDemo, notHeaderDemo);
