<script>
    import CardView from '../../src/CardView';
    import CardManager from '../../src/CardManager';
    import TextInput from '../../src/TextInput';
    import Slider from '../../src/Slider';
    import Button from '../../src/Button';
    import Checkbox from '../../src/Checkbox';
    
    export let story = 'multiple';
    let showStuff = false;
    let slideVal = 40;
    let email = '';
    let password = '';
</script>

{#if story === 'multiple'}
<CardManager>
    <CardView x={50} y={50}>
        <section>
            <h1>Form Example</h1>
            <form>
                <TextInput type="email" placeholder="E-Mail" bind:value={email} />
                <TextInput type="password" placeholder="Password" bind:value={password} />
                <div class="buttonset">
                    <Button behavior="expand" click={(e)=>e.preventDefault()}>
                        Log in
                    </Button>
                    <span aria-hidden="true" style="width: 0.5rem;"></span>
                    <Button behavior="expand"
                            variant="secondary"
                            click={(e) => {
                                e.preventDefault();
                                email = '';
                                password = '';
                            }}>
                        Clear
                    </Button>
                </div>
            </form>
        </section>
    </CardView>
    <CardView x={100} y={40}>
        <section>
            <h1>Do not press the button</h1>
            <br>
            {#if showStuff}
            <p>{slideVal * 665}</p>
            <br>
            {/if}
            <div style="display: flex;">
                <Button variant="danger" behavior="expand" click={() => showStuff = !showStuff}>Click me</Button>
            </div>
        </section>
    </CardView>
    <CardView>
        <section>
            <h1>regenerationRate</h1>
            <div class="labeledInput">
                <label>Value:</label>
                <TextInput size="short" behavior="expand" bind:value={slideVal} />
            </div>
            <div style="display: flex;">
                <Slider behavior="expand" bind:value={slideVal}/>
            </div>
            <div class="buttonset">
                <Button behavior="expand" variant="secondary">
                    Reset
                </Button>
                <span aria-hidden="true"
                    style="width: 0.5rem;">
                </span>
                <Button behavior="expand" click={(e)=>e.preventDefault()}>
                    Save
                </Button>
            </div>
        </section>
    </CardView>
    <CardView x={200}>
        <section>
            <Checkbox label="Bake lighting" />
            <Checkbox label="Enable shadows" />
            <Checkbox label="Scale" />
            <Checkbox label="Another toggle" />
        </section>
    </CardView>
</CardManager>
{/if}

<style>
    .labeledInput {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
    }
    .labeledInput label {
        margin-right: 1rem;
    }
    * {
        margin: 0;
        padding: 0;
    }
    h1 {
        font-size: 1.25rem;
        font-weight: bold;
    }
    .buttonset {
        display: flex;
        border: none;
        outline: none;
    }
</style>