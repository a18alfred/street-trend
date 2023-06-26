import React from 'react';
import {Department, ProductSize, SneakerBrand} from '../../types';
import * as Styled from './FilterTextOption.styles';

export interface Props<T> {
    filterBy: string;
    filterOptions: Array<T>;
    setFilter: (name: string) => void;
    fixedWidth?: string;
}

/**
 * Dropdown component used to display filtering options in <Filter/>
 *@function FilterTextOption
 *@param {string} filterBy - Filter by this parameter
 *@param {string} filterOptions - List of available filtering options, such as product brand, size and department
 *@param {function} setFilter - callback that sets current filter
 *@param {string} fixedWidth - Width and height of the option
 *@returns {JSX.Element} - Rendered FilterTextOption component
 */
const FilterTextOption = ({
                              filterBy,
                              filterOptions,
                              setFilter,
                              fixedWidth
                          }: Props<SneakerBrand | Department | ProductSize>): JSX.Element => {
    const applyFilter = (filterValue: string) => {
        setFilter(filterValue);
    };

    return (
        <Styled.Container>
            <Styled.FilterOption>
                <summary>{filterBy}</summary>
                {filterOptions.map((option, id) => (
                    <Styled.FilterButton
                        key={id}
                        onClick={() => applyFilter(option)}
                        fixedWidth={fixedWidth}
                    >
                        {option}
                    </Styled.FilterButton>
                ))}
            </Styled.FilterOption>
        </Styled.Container>
    );
};
export default FilterTextOption;
