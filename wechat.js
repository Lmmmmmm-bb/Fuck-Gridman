import { readFileSync } from 'fs';

// Wechat 解析正则
const WECHAT_REGEX = /[\d\r\n\ ]/g;

/**
 * 读取 Wechat 文件转换为字符串数组
 * @param {string} str wechat txt
 * @returns {string[], number} [名单列表, 名单数量]
 */
const parseWechatToList = (str = '') => {
  const startIndex = str.indexOf('1. ');
  const list = str.slice(startIndex);
  const res = list.replace(WECHAT_REGEX, '').split('.').filter(Boolean);
  return [res, res.length];
}

/**
 *
 * @param {string} filePath Wechat 文件路径
 * @returns
 */
export const readWechatTxt = (filePath) => {
  const fileStr = readFileSync(filePath, 'utf-8');
  const [list, len] = parseWechatToList(fileStr);
  return [list, len];
}
