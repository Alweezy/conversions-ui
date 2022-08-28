import React from 'react';

interface IOptions {
  text: string;
  value: string;
}

interface IDropDownMenu {
  options: IOptions[];
  onSelect: any;
  customTextStyles?: string;
}
const DropDownMenu: React.FC<IDropDownMenu> = ({
  options,
  onSelect,
  customTextStyles,
}) => {
  return (
    <div className="rounded-custom bg-black py-2 px-2 space-y-1 text-sm text-gray-400 border b-1 rounded-lg">
      {options.length &&
        options.map(({ text, value }, idx) => {
          return (
            <div
              className={`flex justify-start ${
                customTextStyles ? customTextStyles : ``
              } items-center hover:bg-blue-600 hover:border b-1 rounded-lg w-full p-2`}
              key={idx}
              onClick={() => onSelect(text, value)}
              aria-hidden="true"
            >
              <p
                className={`whitespace-nowrap ${
                  text === 'Custom' && 'text-gray-400'
                }`}
              >
                {text}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default DropDownMenu;
