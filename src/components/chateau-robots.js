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

class ChateauRobots extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <section>
      <h2>Le Château des Robots</h2>
      <p>Le Château des Robots est un lieu ouvert au public, un showroom où les entreprises peuvent présenter leurs innovations.
      C'est également un lieu d'expérimentations, proposant des ateliers de découverte des dernières innovations, des ateliers de programmation.
      C'est aussi un lieu de résidence pour les étudiants qui souhaitent approfondir et / ou partager leurs connaissances dans les domaines aussi variés que l'intelligence artificielle,
      l'échange de données ouvertes...
      </p>
      </section>

      <section>
        <h2>Un lieu public</h2>
        <p>Le Château des Robots, c'est d'abord un espace ouvert au public, où chacun peut :</br>
        <ul>
        <li>tester les innovations proposées
         par les entreprises de pointe dans les domaine de la robotique, des objets connectés, des interactions homme - machine...</li>
         <li>découvrir les dernières innovations technologiques comme l'intelligence artificielle, le machine learning, l'impression 3D, la voiture autonome...</li>
         </ul>
        </p>
      </section>

      <section>
        <h2>Un lieu d'expérimentations</h2>
        <p>De nombreux matériels & outils sont à votre disposition pour vous permettre d'apprendre à votre rythme,
         ce qui se cache derrière la programmation des robots ou des objets connectés.</p>
      </section>

      <section>
        <h2>Une communauté de passionnés</h2>
        <p>Parce que les robots, les objets connectés, l'intelligence artificielle envahissent notre quotidien,
         il nous paraît important de partager les savoirs qui s'y rapportent...</p>
         <p>grp fb tw ...</p>
      </section>

      <section>
        <h2>Résider au Château des Robots</h2>
        <p>-> réservation airbnb</p>
      </section>

    `;
  }
}

window.customElements.define('chateau-robots', ChateauRobots);
