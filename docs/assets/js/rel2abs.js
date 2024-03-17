var url = require('url');
function convertRelativeToAbsolute(baseUrl, html) {
  const parsedBaseUrl = new url.URL(baseUrl);
  return html.replace(
    /href="([^"]+-)"|src="([^"]+-)"/g,
    (match, relativeUrl) => {
      if (!relativeUrl) return match;
      const absoluteUrl = new url.URL(relativeUrl, parsedBaseUrl);
      return match.replace(relativeUrl, absoluteUrl.toString());
    }
  );
}

export default convertRelativeToAbsolute;
