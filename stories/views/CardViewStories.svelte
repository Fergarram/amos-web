<script>
    import CardView from '../../src/CardView';
    import CardManager from '../../src/CardManager';
    import Input from '../../src/Input';
    import Button from '../../src/Button';
    
    export let story = 'multiple';
    let showStuff = false;

    const loginButtonPressed = (event) => {
        event.preventDefault();
    };
</script>

{#if story === 'multiple'}
<CardManager>
    <CardView x={50} y={50}>
        <section>
            <h1>Form Example</h1>
            <form>
                <Input type="email" placeholder="E-Mail" />
                <Input type="password" placeholder="Password" />
                <fieldset>
                    <Button click={loginButtonPressed}>Log in</Button>
                    <Button variant="secondary" click={loginButtonPressed}>Clear</Button>
                </fieldset>
            </form>
        </section>
    </CardView>
    <CardView x={100} y={40}>
        <section>
            <h1>Do not press the button</h1>
            <br>
            {#if showStuff}
            <div>
                <p>Why did you do it? Why did you do it? Why did you do it?</p>
                <p>Why did you do it? Why did you do it? Why did you do it?</p>
                <p>Why did you do it? Why did you do it? Why did you do it?</p>
                <p>Why did you do it? Why did you do it? Why did you do it?</p>
                <p>Why did you do it? Why did you do it? Why did you do it?</p>
                <p>Why did you do it? Why did you do it? Why did you do it?</p>
                <br>
            </div>
            {/if}
            <Button @click={() => showStuff = !showStuff}>Click me</Button>
        </section>
    </CardView>
    <CardView>
        <section>
            <h1>Nothing</h1>
            <p>Really special here.</p>
            <Input type="range" min="1" max="100" value="30"/>
        </section>
    </CardView>
</CardManager>
{/if}

<style>
    * {
        margin: 0;
        padding: 0;
    }
    h1 {
        font-size: 1.25rem;
        font-weight: bold;
    }
    fieldset {
        border: none;
        outline: none;
    }
</style>