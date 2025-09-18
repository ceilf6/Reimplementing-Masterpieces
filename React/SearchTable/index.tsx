import { Filter, SearchTable, useSearchTable } from '@finfe/beetle-ui';
import React, { useMemo } from 'react';
import { mockSearchApi } from './utils/mockData';
import { renderFormItems } from './utils/renderFormItem';

const columns = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: '名称' },
  { accessorKey: 'status', header: '状态' },
  { accessorKey: 'createTime', header: '创建时间' },
];

export default function SearchTableBase() {
  const { config } = useSearchTable({
    onSearch: async (params) => {
      const res = await mockSearchApi({
        ...params.filters,
        page: params.pagination,
      });
      return {
        data: res.data,
        pagination: res.page,
      };
    },
  });

  const formItems = useMemo(() => renderFormItems(2), []);

  return (
    <SearchTable config={config}>
      <Filter.Root>
        <Filter.Panel>
          {formItems}
          <Filter.ButtonArea />
        </Filter.Panel>
      </Filter.Root>
      <SearchTable.Table columns={columns} />
    </SearchTable>
  );
}