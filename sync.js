#!/usr/bin/env node

const syncDirectory = require('sync-directory');
const { join } = require('path');
const rimraf = require('rimraf');

const mainDir = join(__dirname, 'common');
const sync = (target, watch = true) => {
  const absoluteTarget = join(__dirname, target, 'src', 'common');
  rimraf.sync(absoluteTarget);

  const watcher = syncDirectory(mainDir, absoluteTarget, {
    watch,
    exclude: ['node_modules', 'package.json'],
  });

  const { log } = console;

  if (watcher)
    watcher
      .on('ready', () => log(`Initial scan complete for ${target}. Ready for changes...`))
      .on('change', (path) => log(`File ${path} has been changed`))
      .on('unlink', (path) => log(`File ${path} has been removed`))
      .on('unlinkDir', (path) => log(`Directory ${path} has been removed`))
      .on('error', (error) => log(`Watcher error: ${error}`));
  else console.log(`Done copping files for ${target}...`);
};

module.exports = sync;

const args = process.argv.slice(2);
if (args[0] === 'web' || args[0] === 'native') sync(args[0]);
