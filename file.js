/**
 * 比对名单
 * @param {string[]} target 所有名单列表
 * @param {string[]} current 当前名单列表
 * @returns {string[], string[]} 已接龙名单, 未接龙名单
 */
export const compare = (target = [], current = []) => {
  const match = []; // 已接龙名单
  const dismatch = []; // 未接龙名单
  target.forEach((item) =>
    current.includes(item)
      ? match.push(item)
      : dismatch.push(item)
  );
  return {
    match,
    dismatch,
  };
}
