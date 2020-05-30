<script>
    import uuid from 'uuid';

    export let checked = '';
    export let label = '';
    
    let inputId = uuid.v4();
    /*
        $(document).keydown(
            function(e)
            {    
                if (e.keyCode == 39) {      
                    $(".move:focus").next().focus();

                }
                if (e.keyCode == 37) {      
                    $(".move:focus").prev().focus();

                }
            }
        );
    */
</script>

<div class="checkbox">
    <input type="checkbox"
           id={inputId}
           bind:checked={checked}/>
    <label for={inputId}>{label}</label>
</div>

<style>
    .checkbox {
        margin: 0.75rem 0;
    }
    input {
        opacity: 0;
        cursor: pointer;
    }
    label {
        cursor: pointer;
        padding-left: 0.25rem;
        padding-top: 10px;
    }
    label::before {
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        content: "";
        position: absolute;
        left: 1rem;
        margin-top: -1px;

        border: 3px solid #79899250;
        box-shadow: 0 1px 3px rgba(240, 180, 180, 0.12), 0 1px 2px rgba(0,0,0,0.24);
        border-radius: 0.4rem;
        background: rgb(240, 240, 240);
        width: 0.85rem;
        height: 0.85rem;
    }
    label::after {
        transition: opacity 0.15s cubic-bezier(.25,.8,.25,1);
        position: absolute;
        content: "";
        opacity: 0;

        border-left: 3px solid #4a5b63;
        border-bottom: 3px solid #4a5b63;
        
        transform: rotate(-45deg);
        left: 1.25rem;
        margin-top: 0.15rem;
        height: 5px;
        width: 13px;
    }
    input:checked + label::after {
        opacity: 1;
    }
    label:active::before {
        transform: scale(1.05, 1.05);
    }
    label:focus {
        outline: none;
    }
    input:focus + label::before {
        border-color: #72AEFC;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    label:not(:focus):hover::before {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
</style>