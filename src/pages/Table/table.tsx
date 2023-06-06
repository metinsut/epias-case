import { useState } from 'react';
import { defaultData } from './data';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

const options: SelectProps['options'] = [
  { label: 'id', value: 'id' },
  { label: 'kontrat', value: 'contract' },
  { label: 'teklif', value: 'offer' },
  { label: 'data', value: 'data' }
];

const defaultSelectedColumn = ['id', 'contract', 'offer', 'data'];

function Table() {
  const [data] = useState(() => [...defaultData]);
  const [selectedContract, setSelectedContract] = useState<number | null>();
  const [selectedColumn, setSelectedColumn] = useState<string[]>(defaultSelectedColumn);

  const handleContractChange = (value: number) => {
    setSelectedContract(value);
  };

  const handleChangeTableColumn = (selectedIds: string[]) => {
    setSelectedColumn(selectedIds);
  };

  const filteredData = selectedContract
    ? data.filter((item) => item.contract === selectedContract)
    : data;

  return (
    <div className="table">
      <div className="table-filter">
        <Select
          style={{ width: 200 }}
          onChange={handleContractChange}
          placeholder="Kontart Seçiniz"
          options={[
            { value: '', label: 'Hepsi' },
            { value: 2019, label: '2019' },
            { value: 2018, label: '2018' }
          ]}
        />
        <Select
          mode="multiple"
          allowClear
          style={{ width: '300px' }}
          placeholder="Please select"
          defaultValue={defaultSelectedColumn}
          onChange={handleChangeTableColumn}
          options={options}
        />
      </div>
      <table>
        <thead>
          <tr>
            {selectedColumn?.includes('id') && <th>Id</th>}
            {selectedColumn?.includes('contract') && <th>Kontrat</th>}
            {selectedColumn?.includes('offer') && <th>Teklif</th>}
            {selectedColumn?.includes('data') && <th>Data</th>}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              {selectedColumn?.includes('id') && <td>{item.id}</td>}
              {selectedColumn?.includes('contract') && <td>{item.contract}</td>}
              {selectedColumn?.includes('offer') && <td>{item.offer}</td>}
              {selectedColumn?.includes('data') && <td>{item.data}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
