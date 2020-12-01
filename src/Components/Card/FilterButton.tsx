import React from 'react';

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    value: string,
    name: string,
}
const FilterButton: React.FC<ButtonProps> = ({onClick, value, name}): JSX.Element => {
    return (
        <button onClick={onClick} name={name} value={value} className="card__filter-item">
        {value}
      </button>
    )
}
export default FilterButton;