import { Button, Input } from 'antd';
import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

type DataItem = {
  no: string;
  contract: number;
  offer: number;
  data: string;
};

const defaultDataList: DataItem[] = [
  {
    no: 'ABC12345',
    contract: 234234,
    offer: 245,
    data: 'Alış'
  },
  {
    no: 'DEF12345',
    contract: 234234,
    offer: 6468,
    data: 'Satış'
  },
  {
    no: 'GHLC12345',
    contract: 234234,
    offer: 5020,
    data: 'Satış'
  }
];

function AddData() {
  const [dataList, setDataList] = useState(defaultDataList);
  const [isInputsOpen, setIsInputOpen] = useState(false);

  const { handleSubmit, control } = useForm<DataItem>();

  const openAddNewInputs = () => {
    setIsInputOpen((prevState) => !prevState);
  };

  const addNewData: SubmitHandler<DataItem> = (data) => {
    setDataList((prevState) => [...prevState, data]);
  };

  return (
    <div className="add-data">
      <table>
        <tbody>
          {dataList.map((item, index) => (
            <tr key={index}>
              <td>{item.no}</td>
              <td>{item.contract}</td>
              <td>{item.offer}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-data-action">
        {isInputsOpen && (
          <form onSubmit={handleSubmit(addNewData)} className="add-data-inputs">
            <Controller
              name="no"
              control={control}
              render={({ field }) => <Input placeholder="no giriniz..." {...field} required />}
            />
            <Controller
              name="contract"
              control={control}
              render={({ field }) => <Input placeholder="kontrat giriniz..." {...field} required />}
            />
            <Controller
              name="offer"
              control={control}
              render={({ field }) => <Input placeholder="teklif giriniz..." {...field} required />}
            />
            <Controller
              name="data"
              control={control}
              render={({ field }) => <Input placeholder="data giriniz..." {...field} required />}
            />
            <Input type="submit" value="Kaydet" />
          </form>
        )}
        <Button type="primary" onClick={openAddNewInputs}>
          Yeni Ekle
        </Button>
      </div>
    </div>
  );
}

export default AddData;
