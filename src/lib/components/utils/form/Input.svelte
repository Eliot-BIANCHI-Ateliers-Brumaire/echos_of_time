<script lang="ts">
    import type { InputType } from '$lib/types'

    export let text: string
    export let name: string
    export let value: string | number = ''
    export let type: InputType = 'text'
    export let placeholder = ''
    export let isDisabled = false
    export let autocomplete: 'off' | 'on' = 'on'
</script>

<div class="form-input">
    <label for={name}>{text}:</label>
    <input id={name} {type} {name} {value} {placeholder} disabled={isDisabled} {autocomplete} />
</div>

<style>
.form-input {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &:has(input:disabled) {
        cursor: not-allowed;
        opacity: var(--field-disabled-opacity);
    }
}

label {
    color: var(--primary-text);
    cursor: inherit;
    font-size: 1.5em;
}

input {
    background-color: var(--primary-bg);
    border: var(--field-border);
    border-radius: 10px;
    box-sizing: border-box;
    color: var(--primary-text);
    cursor: inherit;
    font-size: 2em;
    outline: none;
    padding: 10px 20px;
    transition: var(--field-transition) ;

    min-width: 100px;

    &:hover:not(:disabled), &:focus {
        border-color: var(--field-border-color-hover);
    }

    &[type="color"] {
        background-color: transparent;
        border-radius: 5px;
        height: 50px;
        padding: 10px;
    }
}
</style>