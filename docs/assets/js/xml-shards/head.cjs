function headFragment() {
  return `<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./assets/css/huetiful.css" />
    <link rel="stylesheet" href="./assets/css/github-markdown-light.css" />
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/default.min.css'/>
    <style>
      .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
      }

      @media (max-width: 767px) {
        .markdown-body {
          padding: 15px;
        }
      }

      .progress{
        position:fixed;
        top:0;
        left:0;
        width:0%;
        height:4px;
        z-index:1000;
      }

    </style>
  </head>`;
}

module.exports = headFragment;
