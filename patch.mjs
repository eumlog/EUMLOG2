import fs from 'fs';
const html = fs.readFileSync('public/index.html', 'utf8');
const script = `<script type="text/javascript">(function(){var s=window.location.search;if(s&&s.startsWith("?/")){var p=s.slice(2).split("&")[0];if(p.startsWith("wooban")||p.startsWith("insta-links")||p.startsWith("survey")){window.location.replace("/app.html#/"+p);}}})();</script>`;
fs.writeFileSync('public/index.html', html.replace('<head>', '<head>' + script));
