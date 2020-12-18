import Application from 'emberjs-task/app';
import config from 'emberjs-task/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
