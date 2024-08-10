<script lang="ts">
    export let text = ''
    export let type: 'button' | 'reset' | 'submit' = 'button'
    export let classes: ('' | 'primary' | 'success' | 'danger' | 'warning' | 'round' |
        'hide-above-900' | 'hide-below-900')[] = []
    export let isDisabled = false
</script>

<button {type} class={classes.join(' ')} disabled={isDisabled} on:click>
    <slot />
    {#if text.length > 0}
        <span class="text">{text}</span>
    {/if}
</button>

<style>
button {
    --button-background: var(--quaternary-bg);
    --button-background-hover: var(--tertiary-bg);

    background-color: var(--button-background);
    border: none;
    border-radius: 5px;
    color: var(--primary-text);
    cursor: pointer;
    font-size: 1.5em;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    justify-content: center;
    outline: none;
    padding: 6px 12px;
    transition: background-color 200ms;
    z-index: 1;

    &:hover:not(:disabled), &:focus {
        background-color: var(--button-background-hover);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    &.round {
        aspect-ratio: 1 / 1;
        border-radius: 99px;
    }
}

.text {
    padding: 10px;
}

button.primary {
    --button-background: #2772DB;
    --button-background-hover: #1459BA;
}

button.success {
    --button-background: #43A277;
    --button-background-hover: #009578;
}

button.danger {
    --button-background: #FF3846;
    --button-background-hover: #EB2632;
}

button.warning {
    --button-background: #EFD510;
    --button-background-hover: #DBC414;
}

@media all and (width > 900px) {
    button.hide-above-900 {
        display: none;
    }
}

@media all and (width < 900px) {
    button.hide-below-900 {
        display: none;
    }
}
</style>