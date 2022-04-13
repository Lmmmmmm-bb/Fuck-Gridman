import { readFileSync } from 'fs';

// Wechat 解析正则
const WECHAT_REGEX = /[\d\r\n\ ]/g;

/**
 * 比对列表名单
 * @param {string[]} target 所有名单列表
 * @param {string[]} current 当前名单列表
 * @returns {string[], string[], string[]} 匹配到的名单, 未匹配到的名单, 重复的名单
 */
export const compare = (target = [], current = []) => {
  const match = []; // 对应的名单
  const dismatch = []; // 未对应的名单
  const duplicate = []; // 重复的名单
  current.forEach((item) =>
    match.includes(item)
      ? duplicate.push(item)
      : (
        target.includes(item)
          ? match.push(item)
          : dismatch.push(item)
      )
  );
  return {
    match,
    dismatch,
    duplicate,
  };
}

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
