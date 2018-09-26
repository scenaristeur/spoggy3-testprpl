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

class SpoggyHelp extends PageViewElement {
  _render(props) {
    return html`
    ${SharedStyles}
    <section>
    <h2>Aide</h2>
    <!--<p>Le Château des Robots est un lieu ouvert au public, un showroom où les entreprises peuvent présenter leurs innovations.
    C'est également un lieu d'expérimentations, proposant des ateliers de découverte des dernières innovations, des ateliers de programmation.
    C'est aussi un lieu de résidence pour les étudiants qui souhaitent approfondir et / ou partager leurs connaissances dans les domaines aussi variés que l'intelligence artificielle,
    l'échange de données ouvertes...
    </p>-->
    </section>

    <section>
    <h2>Les commandes</h2>
    <p>
    <ul>
    <li>/n : nouveau graphe</li>
    <li>/i : importer un graphe</li>
    <li>/e : exporter un graphe</li>
    <li>/t : exporter un graphe au formet turtle / RDF (.ttl)</li>
    <li>. : rappeler la dernière commande (essayer aussi , et ;)</li>
    </ul>
    </p>
    </section>

    <section>
    <h2>Ajouter des noeuds et des liens</h2>

    </section>


    <section>
    <h2>Saisie rapide</h2>

    </section>

    <section>
    <h2>Commandes Expert</h2>

    </section>

    <section>
    <h2>Les graphes collaboratifs synchronisés</h2>

    </section>

    <section>
    <h2>Connexions à une source de données Sparql et visualisation de fichiers RDF</h2>

    </section>



    `;
  }
}

window.customElements.define('spoggy-help', SpoggyHelp);
