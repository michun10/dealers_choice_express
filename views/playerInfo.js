const playerInfo = (player) => {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
  <title> Players </title>
  <link rel="stylesheet", href = "/style.css">
  </head>
  <header>
  <img src="/logo.png">
  <h1> New Zealand Black Ferns </h1>
  </header>
  <body>
  <ul>
  ${player.name}
  </ul>
  </body>
  </html>
  `;
  return html;
};

module.exports = playerInfo;
