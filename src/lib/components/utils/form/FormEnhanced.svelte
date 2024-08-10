<script lang="ts">
    import { enhance } from '$app/forms'

    export let action: string = ''
    export let handleEnhance = () => {}
</script>

<form {action} method="post" on:submit use:enhance={handleEnhance}>
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