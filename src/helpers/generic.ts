import moment from "moment";

type FullNameProps = {
    name: string
    lastName: string
} & any

export const formatters = {
    date: (value?: Date, strFormat = 'DD/MM/YYYY') => moment(value).format(strFormat),
    fullName: (value: FullNameProps) => !value ? '' : `${value.name} ${value.lastName}`,
    numeric: (value?: number) => !value ? 0 : value.toLocaleString()
}

interface MaxProps {
    value: string
    length: number
}

export const validations = {
    maxArray: (param: MaxProps[]) => {
        return param.some(({ value, length }) => !!value && value.length <= length)
    }
}