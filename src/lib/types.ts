export type IconName = 
    | 'chevron-left' 
    | 'chevron-right' 
    | 'chevron-up' 
    | 'chevron-down'
    | 'download' 
    | 'hamburger-menu' 
    | 'cross' 
    | 'timelines' 
    | 'question-mark'

export type InputType = 
    | 'button'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'

export type Box = {
    text: string
    value: string | number
    isChecked?: boolean
    isDisabled?: boolean
}

export type Option = {
    text: string
    value: string | number
    isSelected?: boolean
    isDisabled?: boolean
}