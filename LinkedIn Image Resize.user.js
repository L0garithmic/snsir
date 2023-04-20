// ==UserScript==
// @name         LinkedIn Image Resize
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Resize LinkedIn images and presence entity to 120px
// @author       You
// @match        https://www.linkedin.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function resizeImages() {
        const images = document.querySelectorAll('.artdeco-entity-lockup--size-4 .artdeco-entity-lockup__image--type-circle img');
        for (const img of images) {
            img.style.width = '100px';
            img.style.height = '100px';
        }
    }

    function resizePresenceEntities() {
        const presenceEntities = document.querySelectorAll('.presence-entity--size-4');
        for (const presenceEntity of presenceEntities) {
            presenceEntity.style.width = '100px';
            presenceEntity.style.height = '100px';
        }
    }

    // Resize images and presence entities on page load
    resizeImages();
    resizePresenceEntities();

    // Resize images and presence entities when the page content changes
    const observer = new MutationObserver(() => {
        resizeImages();
        resizePresenceEntities();
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
