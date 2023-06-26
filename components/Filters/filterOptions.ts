import {Department, ProductSize, SneakerBrand} from '../../types/index';
import {ProductColors} from './../../types/index';

export const filterBrands: SneakerBrand[] = [
    'Adidas',
    'Converse',
    'New Balance',
    'Nike',
    'Puma',
    'Timberland',
];

export const filterDepartment: Department[] = ['kid', 'men', 'women'];

export const filterSize: ProductSize[] = [
    '1',
    '1.5',
    '2',
    '2.5',
    '3',
    '3.5',
    '4',
    '4.5',
    '5',
    '5.5',
    '6',
    '6.5',
    '7',
    '7.5',
    '8',
    '8.5',
    '9',
    '9.5',
    '10',
    '10.5',
    '11',
    '11.5',
    '12',
    '13',
    '14',
    '15',
];

export type FilterColor = {
    name: ProductColors,
    hex: string
}
export const filterColors: FilterColor[] = [
    {name: 'beige', hex: '#F5F5DC'},
    {name: 'black', hex: '#000000'},
    {name: 'blue', hex: '#00A8FF'},
    {name: 'brown', hex: '#A66D4F'},
    {name: 'gold', hex: '#FFC312'},
    {name: 'green', hex: '#52BE80'},
    {name: 'grey', hex: '#95A5A6'},
    {name: 'ivory', hex: '#F8F1E9'},
    {name: 'orange', hex: '#FF7F50'},
    {name: 'pink', hex: '#FFC3A0'},
    {name: 'purple', hex: '#A569BD'},
    {name: 'red', hex: '#FF5252'},
    {name: 'silver', hex: '#D0D3D4'},
    {name: 'white', hex: '#FFFFFF'},
    {name: 'yellow', hex: '#FFD700'},
    {name: 'multi', hex: 'multi'},
];
