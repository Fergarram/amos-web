<script>
    import { onMount, getContext } from 'svelte';
    import uuid from 'uuid';

    export let x = 0;
    export let y = 0;

    let card;
    let cardId = uuid.v4();
    const { addCard, moveCard, addListener, getStack } = getContext('cardStack');
    
    let cardIndex = addCard(cardId);
    addListener(() => {
        cardIndex = getStack().indexOf(cardId);
        card.style.zIndex = cardIndex;
    });

    let isDragging = false;
    let isTyping = false;
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    onMount(() => {
        card.onmousedown = dragMouseDown;
        card.style.transform = `translate3d(${(x)}px, ${(y)}px, 0)`;
    });

    const setPointerEventsFor = (element, option) => {
        element.style.pointerEvents = option;
    };

    const dragMouseDown = (e) => {
        pos3 = e.clientX;
        pos4 = e.clientY;
        let isDraggable = e.target.getAttribute('non-draggable') === null;

        moveCard(cardId);

        document.onmousemove = (e) => {

            if (isDraggable) {
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                let rect = card.getBoundingClientRect();
                card.style.transform = `translate3d(${(rect.left - pos1)}px, ${(rect.top - pos2)}px, 0)`;
                isDragging = true;
                setPointerEventsFor(card, "none");
            }

        }

        document.onmouseup = (e) => {
            isDragging = false;
            setPointerEventsFor(card, "initial")
            document.onmousemove = null
            document.onmouseup = null
        }
    }
</script>

<div bind:this={card}
     class="draggable"
     key={cardId}>
    <div class={`card ${isDragging && 'card--drag'}`}>
        <slot></slot>
    </div>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        font-family: "Heebo", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
        user-select: none;
    }
    .draggable {
        position: absolute;
        left: 0;
        top: 0;
    }
    .card {
        background: white;
        color: #404040;
        width: fit-content;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 
                    0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        padding: 1rem;
    }
    .card:hover {
        cursor: grab;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .card--drag {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
</style>