<script>
    let HTMLElement;

    $: {
        if (HTMLElement) {
            const tagName = HTMLElement.firstChild.tagName;

            HTMLElement.innerHTML = `<${tagName}> ${HTMLElement.innerText.split('').map(letter => `<span>${letter}</span>`).join('')} </${tagName}>`;
        }
    }
</script>

<div bind:this={HTMLElement} class='TextSplitter'>
    <slot/>
</div>