import { readWechatTxt, compare } from "./file.js";
import { excelParser } from "./sheet.js";

const hasHeaderDemo = excelParser({
  index: '姓名',
  hasHeader: true,
  path: './header_demo.xlsx',
});

const notHeaderDemo = excelParser({
  index: '2',
  hasHeader: false,
  path: './no_header_demo.xlsx',
})

const [current] = readWechatTxt('./demo.txt');

const [match, error] = compare(hasHeaderDemo, current);
console.log({ match, error });
