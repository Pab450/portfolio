<script>
    import TextSplitter from './lib/TextSplitter.svelte';

    const favicons = ['a', 'b', 'l', 'o', 'p'];
    const favicon = document.querySelector("link[rel*='icon']");

    setInterval(() => {
        favicon.href = `/favicons/${favicons[0]}.svg`;

        favicons.push(favicons.shift());
    }, 1000);
</script>
  
<main>
    <TextSplitter>
        <h1>Pablo</h1>
    </TextSplitter>
    <div id="pablo">
        <img id="beak" src="/pablo/beak.svg" alt=""/>
        <img id="left_leg" src="/pablo/left_leg.svg" alt=""/>
        <img id="right_leg" src="/pablo/right_leg.svg" alt=""/>
        <img id="body" src="/pablo/body.svg" alt=""/>
        <img id="eye" src="/pablo/eye.svg" alt=""/>
    </div>
    <TextSplitter>
        <h2>Full Stack Developer</h2>
    </TextSplitter>
</main>