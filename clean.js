#!/usr/bin/env node

const { promisify } = require('util');

const rimrafSync = require('rimraf');
const { exec: execSync } = require('child_process');

const exec = promisify(execSync);
const rimraf = promisify(rimrafSync);

const main = async () => {
  console.log('clean Android');
  await exec('cd ./native/android && ./gradlew clean');

  console.log('clean iOS');
  await rimraf('native/ios/Pods');

  console.log('clean sync');
  await rimraf('+(web|native)/src/common');

  console.log('clean node_modules');
  await rimraf('{*/,}node_modules');
};

main().finally(() => {
  console.log('Done...');
});
