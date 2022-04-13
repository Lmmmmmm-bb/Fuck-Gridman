import { readWechatTxt, compare } from "./file.js";
import { excelParser } from "./sheet.js";

// 有表头的 Excel 文件
const hasHeaderDemo = excelParser({
  index: '姓名',
  hasHeader: true,
  path: './example/header_demo.xlsx',
});

// 无表头的 Excel 文件
const notHeaderDemo = excelParser({
  index: '2',
  hasHeader: false,
  path: './example/no_header_demo.xlsx',
})

// current 为接龙的名单
const [current] = readWechatTxt('./example/demo.txt');

const { match, dismatch, duplicate } = compare(hasHeaderDemo, current);
console.log({ match, dismatch, duplicate });
