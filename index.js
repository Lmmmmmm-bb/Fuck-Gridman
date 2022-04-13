import { readWechatTxt, compare } from "./file.js";
import { excelParser } from "./sheet.js";

// 有表头的 Excel 文件
const hasHeaderDemo = excelParser({
  index: '姓名',
  hasHeader: true,
  path: './header_demo.xlsx',
});

// 无表头的 Excel 文件
const notHeaderDemo = excelParser({
  index: '2',
  hasHeader: false,
  path: './no_header_demo.xlsx',
})

const [current] = readWechatTxt('./demo.txt');

const { match, dismatch, duplicate } = compare(hasHeaderDemo, current);
console.log({ match, dismatch, duplicate });
