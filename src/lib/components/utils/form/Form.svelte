<script lang="ts">
    export let action: string = ''
    export let method: 'dialog' | 'get' | 'post' = 'get'
</script>

<form {action} {method} on:submit>
    <slot />
</form>

<style>
form {
    border: 2px solid var(--secondary-border);
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-inline: auto;
    max-width: 600px;
    min-width: 200px;
    padding: 20px;
    width: 90%;
}
</style>