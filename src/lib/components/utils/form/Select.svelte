<script lang="ts">
    import { onMount } from 'svelte'
    import type { Option } from '$lib/types'

    export let name: string
    export let text: string
    export let options: Option[]
    export let isDisabled = false

    let selectElement: HTMLSelectElement
    let selected = ''
    let isOpen = false

    onMount(() => {
        updateSelected()
        
        const formElement = selectElement.closest('form')

        if (formElement !== null) {
            formElement.addEventListener('reset', handleReset)
        }

        return () => {
            if (formElement !== null) {
                formElement.removeEventListener('reset', handleReset)
            }
        }
    })

    function selectOption(value: string | number) {
        options = options.map(option => ({
            ...option,
            isSelected: option.value === value
        }))
        isOpen = false
        updateSelected()
    }

    function handleReset() {
        options = options.map((option, index) => ({
            ...option,
            isSelected: index === 0
        }))
        updateSelected()
    }

    function updateSelected() {
        const option = options.find(option => option.isSelected)
        if (option === undefined) return
        selected = option.text
    }
</script>

<div class="form-dropdown">
    <label for={name}>{text}:</label>
    <select bind:this={selectElement} {name} tabindex="-1" aria-hidden="true">
        {#each options as { value, isSelected, isDisabled }}
            <option {value} selected={isSelected} disabled={isDisabled}></option>
        {/each}
    </select>
    <div class="dropdown">
        <button type="button" class="select" class:active={isOpen} id={name} disabled={isDisabled}
            on:click={() => isOpen = !isOpen}>
            <span class="selected">{selected}</span>
            <span class="caret" class:rotate={isOpen}></span>
        </button>
        <ul class="menu" class:open={isOpen}>
            {#each options as { text, value, isSelected, isDisabled }}
                <li class="option">
                    <button type="button" class:active={isSelected} disabled={isDisabled}
                        on:click={() => selectOption(value)}>{text}</button>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
select {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: -999px;
    left: -999px;
}

.form-dropdown {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &:has(button.select:disabled) {
        cursor: not-allowed;
        opacity: var(--field-disabled-opacity);
    }
}

label {
    color: var(--primary-text);
    cursor: inherit;
    font-size: 1.5em;
}

.dropdown {
    position: relative;
    min-width: 100px;
}

.select {
    background-color: var(--primary-bg);
    border: var(--field-border);
    border-radius: 0.5em;
    cursor: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5em;
    outline: none;
    padding: 15px;
    transition: var(--field-transition) ;
    width: 100%;

    &:hover:not(:disabled), &:focus, &.active {
        border-color: var(--field-border-color-hover);
    }
}

.selected {
    color: var(--primary-text);
    height: 30px;
}

.caret {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid var(--primary-border);
    display: inline-block;
    height: 0;
    transition: rotate 300ms;
    width: 0;

    &.rotate {
        rotate: 180deg;
    }
}

.menu {
    background-color: var(--primary-bg);
    border: 2px solid var(--primary-border);
    border-radius: 0.5em;
    display: none;
    list-style: none;
    opacity: 0;
    padding: 0.2em 0.5em;
    position: absolute;
    top: 55px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    transition: 0.2s;
    z-index: 1;

    &.open {
        display: block;
        opacity: 1;
    }
}

.menu .option {
    margin: 0.3em 0;

    & button {
        background-color: transparent;
        border: none;
        border-radius: 0.5em;
        color: var(--primary-text);
        cursor: pointer;
        font-size: 1.25em;
        height: 100%;
        outline: none;
        padding: 0.7em 0.5em;
        width: 100%;

        &:disabled {
            cursor: not-allowed;
            opacity: var(--field-disabled-opacity);
        }
    
        &:hover:not(:disabled), &:focus, &.active {
            background-color: var(--quaternary-bg);
        }
    }
}
</style>