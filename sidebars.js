// @ts-check
const Type = {
  // 链接到文档
  DOC: 'doc',
  // 链接到文档页面，并且不归属到当前侧边栏
  REF: 'ref',
  // 链接到任意页面
  LINK: 'link',
  // 创建层级结构
  CAT: 'category',
  // 生成侧边栏
  AUTO: 'autogenerated'
}

const createDoc = (id, label) => {
  return {
    type: Type.DOC,
    // 文档 id
    id, 
    // 显示在侧边栏上的标题或标签（label）
    label, 
  }
}

const createRef = (id) => {
  return {
    type: Type.REF,
    id, // 文档 id （字符串类型）。
  }
}

const createLink = (label, href, className) => {
  const linkItem = {
    type: Type.LINK,
    label, // 为此链接设置的标题（label）
    href // 站外链接（URL）http://www.baidu.com   // 站内路径
  }
  if (className) {
    linkItem.className = className
  }
  return linkItem
}

class Category {
  /** 
   * @param {String} label 
   * @param {Object} items  sidebar items
   */
  constructor(label, items) {
    this.type = Type.CAT
    this.label = label
    this.items = items || []
    this.collapsed = true
  }
  setClassName(className) {
    this.className = className
    return this
  }
  setCollapsible(collapsible) {
    this.collapsible = collapsible
    return this
  }
  setCollapsed(collapsed) {
    this.collapsed = collapsed
    return this
  }
  /**
   * @description 添加文档
   * @param {Array} itemIds 
   * @returns 
   */
  setItem( prefix,itemIds) {
    itemIds.forEach((item) => {
      this.items.push(`${this.label}/${prefix}/${item}`)
    })
    return this
  }
  /**
   * @description 添加文档
   * @param {Array} itemIds 
   * @returns 
   */
  setNoLabelItem( prefix,itemIds) {
    itemIds.forEach((item) => {
      this.items.push(`${prefix}/${item}`)
    })
    return this
  }
  setSubCategory(category) {
    this.items.push(category)
    return this
  }
}

const createAuto = (dir) => {
  return {
    type: Type.AUTO,
    dirName: dir||'.', // '.' 指的是当前的 docs 目录（也就是存放文档的根目录）
  }
}



// @ts-check
// 创建并发安全的分类
const ConcurrencyCode =  new Category('并发安全')
  .setNoLabelItem('并发编程/并发安全', [
    '线程安全',
    'jmm',
    'volatile',
    'dead_lock',
  ])
  .setNoLabelItem('并发编程/并发控制', [
    '线程池',
    'ThreadLocal',
    'Lock锁',
    'Atomic&CAS',
    'final',
    '并发集合与阻塞队列',
    '线程协作',
    'AQS',
    'FutureTask',
    '缓存实战'
  ])
  
  
const basicSiderBar = [
  createDoc('并发编程/currency_about', '简介'),
  // createDoc('concurrency/juc_basic', 'juc基础'),
  ConcurrencyCode
]

const sourceSiderBar = [
  createDoc('source/devSource', '资源分享'),
]

const sidebars = {
  basicSiderBar,
  sourceSiderBar
}

module.exports = sidebars;
