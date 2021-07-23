/*
 * This file is part of justoverclock/flarum-ext-infocards.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import BannedWordModal from './component/ModalAlert';

app.initializers.add('justoverclock/username-blacklist', () => {
    extend(SignUpModal.prototype, 'oncreate', function () {
        const banned = ['admin', ...app.forum.attribute('blackList').split(',')];

        document.getElementsByName('username')[0].addEventListener(
            'keyup',
            function (e) {
                var text = document.getElementsByName('username')[0].value;
                for (var x = 0; x < banned.length; x++) {
                    if (text.search(banned[x]) !== -1) {
                        setTimeout(showAlert, 800);

                        function showAlert() {
                            app.modal.show(BannedWordModal);
                        }
                    }
                    var regExp = new RegExp(banned[x]);
                    text = text.replace(regExp, '');
                }
                if (BannedWordModal) {
                    return;
                } else {
                    document.getElementsByName('username')[0].value = text;
                }
            },
            false
        );
    });
});
