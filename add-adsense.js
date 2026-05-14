const fs = require('fs');
const path = require('path');

const adsScript = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4435032913873442"
      crossorigin="anonymous"></script>`;

function findHtmlFiles(dir) {
  let results = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      results = results.concat(findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  
  return results;
}

function addAdsToHtml(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 检查是否已经包含广告脚本
  if (content.includes('adsbygoogle.js')) {
    console.log(`⏭️  跳过（已存在）: ${filePath}`);
    return false;
  }
  
  // 在 <head> 标签后、<meta charset> 之后插入广告脚本
  // 查找 <head> 或 <meta charset 的位置
  const headIndex = content.indexOf('<head>');
  const metaCharsetIndex = content.indexOf('<meta charset');
  
  let insertPosition;
  if (metaCharsetIndex !== -1) {
    // 找到 <meta charset> 标签的结束位置
    const metaEndIndex = content.indexOf('>', metaCharsetIndex) + 1;
    insertPosition = metaEndIndex;
  } else if (headIndex !== -1) {
    // 找到 <head> 标签的结束位置
    insertPosition = headIndex + '<head>'.length;
  } else {
    console.log(`❌ 无法找到合适位置: ${filePath}`);
    return false;
  }
  
  // 在找到的位置插入广告脚本和换行
  content = content.slice(0, insertPosition) + '\n  ' + adsScript + '\n' + content.slice(insertPosition);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ 已添加: ${filePath}`);
  return true;
}

const rootDir = __dirname;
console.log('🔍 开始搜索HTML文件...\n');

const htmlFiles = findHtmlFiles(rootDir);
console.log(`📊 找到 ${htmlFiles.length} 个HTML文件\n`);
console.log('🚀 开始批量添加Google AdSense...\n');

let successCount = 0;
let skipCount = 0;

htmlFiles.forEach(file => {
  const result = addAdsToHtml(file);
  if (result) {
    successCount++;
  } else {
    skipCount++;
  }
});

console.log(`\n${'='.repeat(50)}`);
console.log(`✨ 完成！成功添加: ${successCount} 个文件`);
console.log(`⏭️  跳过: ${skipCount} 个文件`);
console.log(`📁 总计处理: ${htmlFiles.length} 个文件`);