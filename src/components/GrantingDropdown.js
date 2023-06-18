import { useState, useCallback } from 'react'

export const GrantingDropdown = ({id, value, onChange, items}) => {
    const [localValue, setLocalValue] = useState(value)

    const localOnChange = useCallback(
        (e) => {
            const newValue = e.target.value
            setLocalValue(newValue)
            onChange(newValue)
        }, [id, onChange]
    )

    return (
        <select name={localValue} value={localValue} onChange={localOnChange}>
            {items.map((e, key) => {
            return <option key={key} value={e.value}>{e.name}</option>;
            })}
        </select>
    )
}