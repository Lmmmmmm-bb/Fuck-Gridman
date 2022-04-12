import { readFileSync } from 'fs';

const WECHAT_REGEX = /[\d\r\n\ ]/g;

export const compare = (target = [], current = []) => {
  const r = []; // 对应的名单
  const e = []; // 未对应的名单
  current.forEach((item) =>
    target.includes(item) ? r.push(item) : e.push(item)
  );
  return [r, e];
}

const parseWechatToList = (str) => {
  const startIndex = str.indexOf('1.');
  const list = str.slice(startIndex);
  const res = list.replace(WECHAT_REGEX, '').split('.').filter(Boolean);
  return [res, res.length];
}

export const readWechatTxt = (filePath) => {
  const fileStr = readFileSync(filePath, 'utf-8');
  const [list, len] = parseWechatToList(fileStr);
  return [list, len];
}
