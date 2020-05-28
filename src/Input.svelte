<script>
    export let placeholder = '';
    export let type = 'text';
    export let min;
    export let max;
    export let value = '';
</script>

<input type={type}
       placeholder={placeholder}
       min={min}
       max={max}
       value={value}/>

<style>

    input[type="range"] {
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
        /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */
    }
    input[type="range"]::-webkit-slider-thumb {
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        border: 3px solid #E7C396;
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
    input[type="range"]::-webkit-slider-thumb:active {
        transform: scale(1.05, 1.05);
    }
    input[type="range"]:not(:focus)::-webkit-slider-thumb:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    input[type="range"]:focus::-webkit-slider-thumb {
        background: #E7C396;
        border: 3px solid #72AEFC;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }

    input[type="text"],
         [type="password"],
         [type="email"] {
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
    input[type="text"]:active,
         [type="password"]:active,
         [type="email"]:active {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        transform: scale(1.025, 1.025);
    }
    input[type="text"]:focus ,
         [type="password"]:focus ,
         [type="email"]:focus {
        border: 3px solid #72AEFC;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    input[type="text"]:hover:not(:focus),
         [type="password"]:hover:not(:focus),
         [type="email"]:hover:not(:focus) {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
</style>