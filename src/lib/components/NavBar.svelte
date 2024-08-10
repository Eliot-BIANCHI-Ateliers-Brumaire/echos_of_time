<script lang="ts">
    import { page } from '$app/stores'
    import Button from './utils/Button.svelte'
    import Icon from './utils/Icon.svelte'

    import type { IconName } from '$lib/types'

    type Link = {
        name: string,
        href: string,
        iconName: IconName
    }

    const links: Link[] = [
        { name: 'Timelines', href: '/timelines', iconName: 'timelines' },
        { name: 'Quizzes', href: '/quizzes', iconName: 'question-mark' },
    ]

    let isOpen = false
</script>

<nav>
    <a href="/" class="logo">Echos Of Time</a>
    <div class="links" class:mobile-menu={isOpen}>
        <ul>
            {#each links as { name, href, iconName }}
                <li class="link" class:active="{$page.url.pathname === href}">
                    <a {href}>
                        <Icon name={iconName} />
                        <span>{name}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
    <Button classes={['round', 'hide-above-900']} on:click={() => isOpen =!isOpen}>
        {#if isOpen === false}
            <Icon name="hamburger-menu" />
        {:else}
            <Icon name="cross" />
        {/if}
    </Button>
</nav>

<style>
nav {
    background-color: var(--primary-bg);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    width: 100%;
}

.logo {
    color: var(--primary-text);
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
}

.links > ul {
    display: flex;
    gap: 40px;
    font-size: 1.25em;
    list-style: none;
}

.link {
    border-radius: 99px;
    padding: 10px 20px;
    transition: background-color 150ms;

    &:hover {
        background-color: var(--tertiary-bg);
    }

    &.active {
        background-color: var(--quaternary-bg);
    }
    
}

.link a {
    color: var(--primary-text);
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;

    &.active {
        color:#ED3C57;
    }
}

@media all and (width <= 900px) {
    nav {
        padding: 10px;
    }

    .links {
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100dvh;
        margin-left: -100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: margin-left 500ms ease;
        width: 100%;
    }

    .links.mobile-menu {
        margin-left: 0;
    }

    .links ul {
        flex-direction: column;
        gap: 40px;
    }
}
</style>