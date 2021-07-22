/*
 * This file is part of justoverclock/flarum-ext-infocards.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';

app.initializers.add('justoverclock/username-blacklist', () => {
  app.extensionData
    .for('justoverclock-username-blacklist')
    .registerSetting({
      setting: 'justoverclock-username-blackList',
      name: 'blackList',
      type: 'text',
      label: app.translator.trans('username-blacklist.admin.blackList'),
      help: app.translator.trans('username-blacklist.admin.blackList-help'),
    })
});
