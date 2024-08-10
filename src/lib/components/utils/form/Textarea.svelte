<script lang="ts">
    export let name: string
    export let text: string
    export let value = ''
    export let placeholder = ''
    export let isDisabled = false
</script>

<div class="form-area">
    <label for={name}>{text}:</label>
    <textarea id={name} {name} {placeholder} disabled={isDisabled}>{value}</textarea>
</div>

<style>
.form-area {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &:has(textarea:disabled) {
        cursor: not-allowed;
        opacity: var(--field-disabled-opacity);
    }
}

label {
    color: var(--primary-text);
    cursor: inherit;
    font-size: 1.5em;
}

textarea {
    background-color: var(--primary-bg);
    border: var(--field-border);
    border-radius: 10px;
    cursor: inherit;
    font-size: 2em;
    height: 100px;
    line-height: 1.4;
    outline: none;
    padding: 15px;
    resize: none;
    transition: var(--field-transition);
    min-width: 100px;

    &:hover:not(:disabled), &:focus {
        border-color: var(--field-border-color-hover);
    }
}
</style>