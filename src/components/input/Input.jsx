const Input = ({ type, placeholder, placeholder_styles, input_styles, value, onChange }) => {
    return (
      <div className="w-full">
        {type === "select" ? (
          <select
            className="w-[fit-content] min-w-full custom-input p-[10px]"
            value={value}
            onChange={onChange}
          >
            <option value="" disabled>
              Select your Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        ) : (
          <div className={`relative custom-input w-full ${input_styles}`}>
            <input
              type={type}
              value={value}
              className={"w-full"}
              onChange={onChange}
            />
            <span
              className={`placeholder ${placeholder_styles} ${
                value?.length > 0 ? "has-value" : ""
              }`}
            >
              {placeholder}
              <span className="text-red-800">*</span>
            </span>
          </div>
        )}
      </div>
    );
  };
  
  export default Input;
  