import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { AppState } from '../state';
import { setFromOption, setToOption } from '../state/measumentOptions';
import { setFromValue, setToValue } from '../state/inputValues';
import DropDown from './shared/DropDown';
import { InputField } from './shared/InputFiled';

import {
  lengthOptions,
  speedOptions,
  tempOptions,
  unitOptions,
} from './shared/constansts';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const Dashboard: React.FC = () => {
  const {
    unitOptionsSliceReducer: { unitOption },
    measurementOptionsSliceReducer: { fromOption, toOption },
    inputValuesSliceReducer: { fromValue, toValue },
  } = useSelector((state: AppState) => state);

  const mainOption = unitOption.text;
  const dispatch = useDispatch();

  const [subOptions, setSubOptions] = useState<any>(lengthOptions);

  useEffect(() => {
    // let's update what submenus are showing depending on main menu
    let option;
    let option1;
    switch (mainOption) {
      case 'Length':
        setSubOptions(lengthOptions);
        option = lengthOptions[0];
        option1 = lengthOptions[1];
        break;
      case 'Temperature':
        setSubOptions(tempOptions);
        option = tempOptions[0];
        option1 = tempOptions[1];
        break;
      case 'Speed':
        setSubOptions(speedOptions);
        option = speedOptions[0];
        option1 = speedOptions[1];
        break;
      default:
        setSubOptions(lengthOptions);
        option = lengthOptions[0];
        option1 = lengthOptions[1];
    }

    dispatch(
      setFromOption({
        ...fromOption,
        value: option.value,
        text: option.text,
      })
    );

    dispatch(
      setToOption({
        ...toOption,
        value: option1.value,
        text: option1.text,
      })
    );
  }, [mainOption]);

  const handleInputChange = (e: any) => {
    const inputValue = parseInt(e.target.value);
    dispatch(setFromValue(inputValue));
  };

  useEffect(() => {
    const baseUrl = `${serverUrl}/api/v1/conversions/convert`;

    const queryString = `fromOption=${fromOption.value}&toOption=${toOption.value}&inputValue=${fromValue}`;

    const convertUnit = async () => {
      const { data: convert } = await axios.get(`${baseUrl}?${queryString}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch(setToValue(convert.outPutValue));
    };

    const result = convertUnit().catch(console.error);
  }, [fromOption, toOption, fromValue]);
  return (
    <>
      <div className="px-10 py-3 border b-1 rounded-lg w-1/2 h-1/2">
        <div className="text-center p-2 bg-black rounded-lg mb-2 text-gray-400">
          Units Converter
        </div>
        <div className="w-full">
          <DropDown options={unitOptions} source={'units'} />
        </div>
        <div className="flex inline-flex w-full">
          <div className="mt-5 items-left w-1/2 mr-10 border b-1 rounded-lg">
            <InputField
              value={fromValue?.toString() || '0'}
              onChange={handleInputChange}
            ></InputField>
            <DropDown options={subOptions} source={'from'} />
          </div>
          <div className="font-whyte text-gray-400 py-10">=</div>
          <div className="mt-5 w-1/2 items-right ml-10 border b-1 rounded-lg">
            <InputField
              disabled={true}
              onChange={handleInputChange}
              value={toValue?.toString() || '0'}
            ></InputField>
            <DropDown options={subOptions} source={'to'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
