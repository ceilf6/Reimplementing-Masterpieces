import { BeFormItem, BeMInput } from '@finfe/beetle-ui';
import React from 'react';

let count = 0;

export const renderFormItems = (num: number) => {
  const items = [];
  for (let i = 0; i < num; i++) {
    count++;
    items.push(
      <BeFormItem key={i} fieldName={`field_${count}`} label={`字段${count}`}>
        <BeMInput placeholder="请输入" />
      </BeFormItem>,
    );
  }
  return items;
};