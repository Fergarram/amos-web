<script>
    export let click = () => {};
    export let variant = 'primary';
    export let size = 'medium';
</script>

<button class={`${variant} ${size}`} on:click={click}>
    <slot></slot>
</button>

<style>
    .expand {
        font-size: 0.85rem;
        padding: 0.25rem 1.125rem;
        flex-grow: 1;
    }
    .medium {
        font-size: 0.85rem;
        padding: 0.25rem 1.125rem;
    }
    .danger {
        background: #B34849;
        color: #ffffff;
    }
    .danger:active {
        background: #962426;
    }
    .primary {
        background: #4a5b63;
        color: #ffffff;
    }
    .primary:active {
        background: #2e363a;
    }
    .secondary {
        background: rgb(218, 218, 218);
        color: #222222;
    }
    .secondary:active {
        background: rgb(180, 180, 180);
    }
    button {
        cursor: pointer;
        font-weight: 400;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 
                    0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        border: 3px solid transparent;
        user-select: none;
        outline: none;    
    }
    button:active {
        transform: scale(1.025, 1.025);
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    button:focus {
        border: 3px solid #72AEFC;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    button:hover:not(:focus) {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
</style>