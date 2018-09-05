/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import './spoggy-graph/spoggy-graph.js';
import './spoggy-input/spoggy-input.js';

class SmagAccueil extends PageViewElement {
  _render(props) {
    return html`
    ${SharedStyles}

    <section>
    <spoggy-input></spoggy-input>
    </section>

    <section>
    <spoggy-graph></spoggy-graph>
    </section>


    `;
  }
}

window.customElements.define('smag-accueil', SmagAccueil);
