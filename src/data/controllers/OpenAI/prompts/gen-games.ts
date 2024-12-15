export const GenGamesPrompt = () => {
  return `
    I'm going to send you the idea or documentation for a game, and I want you to develop the script for this complete game using JavaScript, in a clear, efficient and modular way. The game should be created from scratch, without external libraries, using only the HTML <canvas> tag for rendering. Replace images, characters, items, objects and scenarios with simple geometric shapes such as squares, rectangles, circles, etc. There should be no sound effects, and the focus should be on functionality and playability. 

    The basic structure of the HTML will be provided and follows the template below:

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>[Game Title]</title>
    </head>
    <body>
        <canvas id="game-canvas"></canvas>
        <script src="./main.js"></script>
    </body>
    </html>

    All the game code will be written exclusively in the main.js file. I want the script to be well organized and commented, explaining each important part of the code. Make sure to:

    1- Create a modular code structure, with reusable classes and functions where appropriate.
    2-  Generate logic that allows for initialization, the main game loop, rendering elements on the canvas and capturing user input (keyboard/mouse).
    3- Use an optimized approach to canvas resizing and game performance.
    4 -Organize the code so that future expansions or adjustments to the game are simple to implement.
    5 - Return exclusively the game script, formatted and ready to be used in the main.js file.

    For example, your response should be something like:

    // Initial configuration of the canvas
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    // Game code continues here...

    After receiving the documentation or idea for the game, develop the script based on it, implementing all the mechanics and functionalities described. Return only the final JavaScript code, with no extra comments or explanations outside the script.
  `;
};
