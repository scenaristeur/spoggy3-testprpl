/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/*
Module pour attrapper les parametres d'url :
    //http://127.0.0.1:8081/?endpoint=http://127.0.0.1:3030&source=http://test.json&graph=plop&query=SELECT * WHERE {?s ?p ?o}

    */

import { LitElement, html } from '@polymer/lit-element';

// These are the elements needed by this element.
import { plusIcon, minusIcon } from './../my-icons.js';

// These are the shared styles needed by this element.
import { ButtonSharedStyles } from './../button-shared-styles.js';
import  'evejs/dist/eve.min.js';
import { SocketAgent } from './agents/SocketAgent.js'
// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class SpoggySocket extends LitElement {
  _render(props) {
    return html`
    ${ButtonSharedStyles}
    <style>
    span { width: 20px; display: inline-block; text-align: center; font-weight: bold;}
    </style>
    <div>
    <p>
    SOCKET </br>

    </div>
    `;
  }

  static get properties() { return {
    socket: Object
  }};

  constructor() {
    super();
  }
  _firstRendered() {
    //  console.log("eve",eve);
    this.agentSocket = new SocketAgent('agentSocket', this);
    //  console.log(this.agentCatchurl);
    this.agentSocket.send('agentApp', {type: 'dispo', name: 'agentSocket' });

  }


}

window.customElements.define('spoggy-socket', SpoggySocket);
