/*
 * This file is part of justoverclock/flarum-ext-infocards.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import Modal from 'flarum/common/components/Modal';

export default class BannedWordModal extends Modal {
    static isDismissible = true;

    className() {
        return 'banned-word-modal';
    }
    title() {
        const ModalTitle = app.translator.trans('username-blacklist.forum.modal-title');
        return <p class="bannedwordTitle">{ModalTitle}</p>;
    }
    content() {
        const ModalBody = app.translator.trans('username-blacklist.forum.modal-body-first-line');
        const TextBlock = app.translator.trans('username-blacklist.forum.modal-body-second-line');
        const assetsFolder = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-username-blacklist/shield-warning-icon.png';
        return (
            <div className="warningmodal">
                <img className="warningimage" src={assetsFolder} alt="Italian Trulli"></img>
                <br />
                <p className="warningModalTitle">{ModalBody}</p>
                <p className="warningModalText">{TextBlock}</p>
            </div>
        );
    }
}
