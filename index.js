/*
Ahmadiyya-History-Timeline Project by
Haseeb Sidhu

Notes by Sohail:
I have added the detialed comments about the logic, you can modify the app functionality ehre further, any question you can call or text me.

*/

// Initialize the Timeline Library
addEventListener("DOMContentLoaded", (event) => {

    // Get DIV container for embedding the timeline into embed Node
    var embed = document.getElementById("timeline-embed");

    // Adjust the container height to body height (wahtever is adjusted by Display Framework )
    embed.style.height = getComputedStyle(document.body).height;
    
    // Initilize the timeline Logic
    window.timeline = new TL.Timeline(
        "timeline-embed",
        "data/ahmadiyyabooks.json",
        {
            hash_bookmark: false,
        }
    );

    // Set Event Listener which triggers on window resize
    window.addEventListener("resize", function () {
        // Get container again
        var embed = document.getElementById("timeline-embed");

        // Adjust the height again to chenged one
        embed.style.height = getComputedStyle(document.body).height;
        
        // Update Timeline
        timeline.updateDisplay();
    });
});