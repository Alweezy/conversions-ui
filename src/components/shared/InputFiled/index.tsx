interface IInput {
  value?: string;
  disabled?: boolean;
  onChange?: any;
}
export const InputField: React.FC<IInput> = ({ value, disabled, onChange }) => {
  return (
    <>
      <input
        className={
          'block font-whyte text-base bg-transparent p-2 rounded-md w-full outline-none text-gray-400'
        }
        value={value}
        type={'number'}
        disabled={disabled}
        min={'1'}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};
