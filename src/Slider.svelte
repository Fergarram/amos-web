<script>
    export let min = 0;
    export let max = 100;
    export let value = '';
    export let size = '';
</script>

<input type="range"
       class={size}
       min={min}
       max={max}
       bind:value={value}/>

<style>
    .expand {
        flex-grow: 1;
    }
    input {
        -webkit-appearance: none;
        appearance: none;
        display: block;
        margin: 0.5rem 0;
        outline: none;
        border-radius: 2px;
        cursor: auto;
        padding: 6px 6px 6px 10px;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        cursor: pointer;
        padding: 0;
        margin: 1rem 0;
        height: 0.3rem;
        background: rgb(225, 225, 225);
    }
    input::-webkit-slider-thumb {
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        border: 3px solid #4a5b63dd;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        -webkit-appearance: none;
        appearance: none;
        border-radius: 50%;
        background: rgb(240, 240, 240);
        width: 1.25rem;
        height: 1.25rem;
        padding: 0;
        margin: 0;
    }
    input::-webkit-slider-thumb:active {
        transform: scale(1.05, 1.05);
    }
    input:not(:focus)::-webkit-slider-thumb:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    input:focus::-webkit-slider-thumb {
        background: #4a5b63;
        border: 3px solid #72AEFC;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
</style>