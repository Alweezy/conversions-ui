import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../state';
import { setFromOption, setToOption } from '../../state/measumentOptions';
import { setUnitOption } from '../../state/unitOptions';
import DropDownMenu from './DropdownMenu';

interface IOptions {
  text: string;
  value: string;
}

interface ICategory {
  options: IOptions[];
  source: string;
}
const DropDown: React.FC<ICategory> = ({ options, source }) => {
  const {
    unitOptionsSliceReducer: { unitOption },
    measurementOptionsSliceReducer: { toOption, fromOption },
  } = useSelector((state: AppState) => state);

  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [pillText, setPillText] = useState<string>(
    source === 'units' ? unitOption.text : toOption.text
  );
  const dispatch = useDispatch();

  const handleSelect = (text: any, value: any) => {
    switch (source) {
      case 'units':
        setPillText(text);
        dispatch(setUnitOption({ ...unitOption, value: value, text: text }));
        break;
      case 'from':
        dispatch(setFromOption({ ...fromOption, value: value, text: text }));
        setPillText(text);
        break;
      case 'to':
        dispatch(setToOption({ ...toOption, value: value, text: text }));
        setPillText(text);
        break;
      default:
        setPillText(text);
        dispatch(setUnitOption({ ...unitOption, value: value, text: text }));
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClick = () => {
    toggleDropdown();
  };

  useEffect(() => {
    if (source === 'from') {
      setPillText(fromOption.text);
    }
    if (source === 'to') {
      setPillText(toOption.text);
    }
  }, [toOption, fromOption]);

  return (
    <div
      className={`relative flex justify-between items-center px-2 border b-1 bg-black text-gray-400 cursor-pointer ${
        source === 'units' ? 'rounded-lg' : 'rounded-b-lg'
      }`}
      onClick={() => handleClick()}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="flex justify-start items-center">
        <div className="whitespace-nowrap py-2">
          <span className="text-sm">{pillText}</span>
        </div>
      </div>
      <div className="ml-2 mr-3">
        <img src="/images/chevron-down.svg" alt="chevron-down" />
      </div>
      {showDropdown && (
        <div className="px-2 -mt-1 absolute top-10 -left-2 transition-all duration-500 ease-in-out z-10 w-full">
          <DropDownMenu options={options} onSelect={handleSelect} />
        </div>
      )}
    </div>
  );
};

export default DropDown;
