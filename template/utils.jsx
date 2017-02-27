import flattendeep from 'lodash.flattendeep';

export function collectDocs(docs) {
  console.log('docs:', docs)
  // 返回每个 md 文件的 Promise 对象
  let docsList = Object.keys(docs)
    .filter(key => key !== 'demo')
    .map(key => {
      return docs[key];
    })
    .map(file => {
      if (typeof file === 'function') {
        return file();
      }
      if (typeof file === 'string') {
        return file;
      }
      return collectDocs(file);
    });

  return flattendeep(docsList);
}


/**
 * 获取url中的参数
 *
 * @param {String} name 参数名称
 * @param {String} url option
 */
export function getUrlParam(name, url) {
  const href = url || window.location.href;

  const hrefName = encodeURIComponent(name) + '=';
  const hrefStart = href.indexOf(hrefName);
  let hrefValue = null;

  if (hrefStart > -1) {

    let hrefEnd = href.indexOf('&', hrefStart);

    if (hrefEnd == -1) {
      hrefEnd = href.length;
    }
    hrefValue = decodeURIComponent(href.substring(hrefStart + hrefName.length, hrefEnd));
  }

  return hrefValue;
}
