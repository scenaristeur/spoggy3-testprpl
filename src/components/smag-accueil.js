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
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import { increment, decrement } from '../actions/counter.js';

// We are lazy loading its reducer.
import counter from '../reducers/counter.js';
store.addReducers({
  counter
});
// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
//import './spoggy-graph/spoggy-graph.js';
import './spoggy-graph.js';
//import './spoggy-input/spoggy-input.js';
// These are the elements needed by this element.
import './counter-element.js';

class SmagAccueil extends PageViewElement {
  _render(props) {
    return html`
    ${SharedStyles}

    <!--  <section>
    <spoggy-input></spoggy-input>
    test1
    </section>-->
    <!--one
    <section>
    <spoggy-graph>
    loo
    </spoggy-graph>
    </section>
    two-->
    <section>BOB</section>
    <section>BIB</section>

    one
    <section>
    <spoggy-graph>
    loo
    </spoggy-graph>
    </section>
    two
    <section>
      <p>
        <counter-element value="${props._value}" clicks="${props._clicks}"
            on-counter-incremented="${() => store.dispatch(increment())}"
            on-counter-decremented="${() => store.dispatch(decrement())}">
        </counter-element>
      </p>
    </section>
    tri

    `;
  }
}

window.customElements.define('smag-accueil', SmagAccueil);
