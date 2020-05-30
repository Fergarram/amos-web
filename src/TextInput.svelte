<script>
    export let placeholder = '';
    export let value = '';
    export let type = 'text';
    export let size = '';
    export let behavior = '';
</script>

{#if type === 'password'}
    <input 
        type="password"
        non-draggable
        placeholder={placeholder}
        bind:value={value}/>
{:else if type === 'email'}
    <input 
        type="email"
        non-draggable
        placeholder={placeholder}
        bind:value={value}/>
{:else if type === 'url'}
    <input 
        type="url"
        non-draggable
        placeholder={placeholder}
        bind:value={value}/>
{:else if type === 'search'}
    <input 
        type="search"
        non-draggable
        placeholder={placeholder}
        bind:value={value}/>
{:else}
    <input 
        type="text"
        non-draggable
        class={`${size} ${behavior}`}
        placeholder={placeholder}
        bind:value={value}/>
{/if}

<style>
    .short {
        width: 100px;
    }
    .expand {
        flex-grow: 1;
    }
    input {
        display: block;
        margin: 0.5rem 0;
        outline: none;
        font-size: 14px;
        border-radius: 2px;
        cursor: auto;
        border: 3px solid transparent;
        padding: 6px 6px 6px 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    input:active {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transform: scale(1.025, 1.025);
    }
    input:focus {
        border: 3px solid #72AEFC;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    input:hover:not(:focus) {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
</style>