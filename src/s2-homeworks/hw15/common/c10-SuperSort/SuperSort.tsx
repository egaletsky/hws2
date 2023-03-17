import React from 'react'
import {FaSortUp} from '@react-icons/all-files/fa/FaSortUp';
import {FaSortDown} from '@react-icons/all-files/fa/FaSortDown';
import {TiArrowUnsorted} from '@react-icons/all-files/ti/TiArrowUnsorted';
import {green} from '@mui/material/colors';


// добавить в проект иконки и импортировать
const downIcon = <FaSortUp/>
const upIcon = <FaSortDown/>
const noneIcon = <TiArrowUnsorted/>

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    if (sort === down ) return up
    if (sort === up ) return ''

    return down // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))

    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span style={{backgroundColor: green['500']}}
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon.props.src}
            />
        </span>
    )
}

export default SuperSort
