const fs = require("fs");
const og = require("open-graph");

const [id, url] = process.argv.slice(2, 4);
og(url, (_, meta) => {
  const json = JSON.stringify(meta, undefined, 2);
  fs.writeFile(`./src/sources/${id}.json`, json, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
