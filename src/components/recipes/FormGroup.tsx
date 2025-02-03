"use client";

import { useState } from "react";

type Props = {
  title: string;
  values: { emoji: string; label: string }[];
  inputName: string;
  otherOption?: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormGroup = (props: Props) => {
  const { title, values, handleInputChange, inputName, otherOption } = props;
  const [ other, setOther ] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);

    console.log(e.target.value);

    if (e.target.id === `${inputName}-other`) {
      setOther(true);
    } else {
      setOther(false);
    }
  };

  return (
    <div className="mb-4">
      <div className="font-extrabold text-sm mb-2 lg:text-lg">{title}</div>
      <div className="flex items-center flex-wrap gap-2">
        {values.map((item, index) => (
          <div key={index} className="flex items-center">
            <input
              onChange={handleRadioChange}
              type="radio"
              id={`${inputName}-${index}`}
              name={inputName}
              value={item.label}
              className="hidden peer"
            />
            <label
              htmlFor={`${inputName}-${index}`}
              className="font-bold text-xs px-2 py-1 bg-white border border-gray-300 rounded-md cursor-pointer transition-all duration-300 peer-checked:border-green-500 peer-checked:bg-green-50 relative lg:text-sm"
            >
              {item.emoji} {item.label}
            </label>
          </div>
        ))}

        {otherOption && (
          <>
            <div className="flex items-center">
              <input
                onChange={handleRadioChange}
                type="radio"
                id={`${inputName}-other`}
                name={inputName}
                value=""
                className="hidden peer"
              />
              <label
                htmlFor={`${inputName}-other`}
                className="font-bold text-xs px-2 py-1 bg-white border border-gray-300 rounded-md cursor-pointer transition-all duration-300 peer-checked:border-green-500 peer-checked:bg-green-50 relative lg:text-sm"
              >
                Other...
              </label>
            </div>

            {other && (
              <input
                onChange={handleInputChange}
                name={inputName}
                className="w-full bg-white border border-gray-300 rounded-md text-xs px-2 py-1  focus:outline-none lg:text-sm"
                type="text"
                placeholder="Type your other preferences..."
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
