const express = require('express');
const commander = require('commander');
const app = express();

const program = new commander.Command();
program
  .version('1.0.0')
  .requiredOption('-h, --host <host>', 'server address')
  .requiredOption('-p, --port <port>', 'server port')
  .requiredOption('-c, --cache <cache>', 'cache directory')
  .parse(process.argv);

const { host, port, cache } = program.opts();

if (!host || !port || !cache) {
  console.error('All options -h, -p, and -c are required');
  process.exit(1);
}

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
