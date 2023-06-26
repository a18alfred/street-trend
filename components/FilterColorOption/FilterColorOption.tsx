import React from 'react';
import * as Styled from './FilterColorOptions.styles';
import {FilterColor} from '../Filters/filterOptions';

export interface Props {
    filterBy: string;
    filterOptions: Array<FilterColor>;
    setFilter: (name: string) => void;
}

/**
 * Dropdown component used to display filtering options in <Filter/>
 *@function FilterTextOption
 *@param {string} filterBy - Filter by this parameter
 *@param {string} filterOptions - List of available filtering options, such as product brand, size and department
 *@param {function} setFilter - callback that sets current filter
 *@returns {JSX.Element} - Rendered FilterTextOption component
 */
const FilterColorOption = ({
                               filterBy,
                               filterOptions,
                               setFilter,
                           }: Props): JSX.Element => {
    const applyFilter = (filterValue: string) => {
        setFilter(filterValue);
    };
    return (
        <Styled.Container>
            <Styled.FilterOption>
                <summary>{filterBy}</summary>
                <Styled.ColorsGrid>
                    {filterOptions.map((option, id) => (
                        <Styled.FilterButton
                            key={id}
                            bgColor={option.hex}
                            onClick={() => applyFilter(option.name)}
                        />
                    ))}
                </Styled.ColorsGrid>
            </Styled.FilterOption>
        </Styled.Container>
    );
};
export default FilterColorOption;
