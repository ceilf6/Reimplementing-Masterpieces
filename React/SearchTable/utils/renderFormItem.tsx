/*
key 和 fieldName 的区别说明：

1. key 属性（React 内置）:
   - 作用：帮助 React 识别和跟踪组件，用于虚拟 DOM diff
   - 范围：React 框架层面
   - 数据收集：❌ 不参与表单数据收集
   - 示例：key="item1", key="item2"

2. fieldName 属性（表单框架）:
   - 作用：定义表单字段在数据对象中的键名
   - 范围：表单框架层面  
   - 数据收集：✅ 直接决定 params.filters 的结构
   - 示例：fieldName="name" -> params.filters.name

实际效果对比：
┌─────────────────────────────────────────────────────────────┐
│ <BeFormItem key="item1" fieldName="productName">            │
│   <BeMInput />                                              │ 
│ </BeFormItem>                                               │
├─────────────────────────────────────────────────────────────┤
│ key="item1"         -> React 用于组件识别，不影响数据        │
│ fieldName="productName" -> 用户输入会存到 params.filters.productName │
└─────────────────────────────────────────────────────────────┘
*/

import { BeFormItem, BeMInput } from '@finfe/beetle-ui';
import React from 'react';

export const renderFormItems = () => {
  return [
    // ✅ 正确示例：key 和 fieldName 可以不同
    <BeFormItem 
      key="form-item-1"        // React 识别用，可以是任意唯一值
      fieldName="name"         // 数据收集用，必须与 API 字段对应
      label="名称"
    >
      <BeMInput placeholder="请输入名称" />
    </BeFormItem>,
    
    <BeFormItem 
      key="form-item-2"        // React 识别用
      fieldName="status"       // 数据收集用，用户输入会存到 params.filters.status
      label="状态"
    >
      <BeMInput placeholder="请输入状态" />
    </BeFormItem>,
    
    // 📝 说明：也可以让 key 和 fieldName 相同（常见做法）
    <BeFormItem 
      key="category"           // 与 fieldName 相同，方便管理
      fieldName="category"     // 用户输入会存到 params.filters.category
      label="分类"
    >
      <BeMInput placeholder="请输入分类" />
    </BeFormItem>,
  ];
};