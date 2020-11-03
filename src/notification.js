import {defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';
import 'material-design-icons/iconfont/material-icons.css';
import { alert, notice, info, success, error } from '@pnotify/core';
defaults.styling = 'material';
defaults.icons = 'material';

defaultModules.set(PNotifyMobile, {});



