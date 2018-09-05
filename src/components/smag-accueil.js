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
    <h2 id="top">Smag0</h2>
    <p>"Ca serait bien, un robot qui range ma chambre !" -- Simon F. 2013</p>
    <p>Smag0 regroupe un ensemble de projets dont l'objectif principal est de faciliter les interactions entre les humains et les machines.</p>
    </section>

    <section>
    <spoggy-input></spoggy-input>
    </section>

    <section>
    <spoggy-graph></spoggy-graph>
    </section>

    <section>
    <h2>Le Château des Robots</h2>
    <p>Le Château des Robots est un lieu ouvert au public, un showroom où les entreprises peuvent présenter leurs innovations.
    C'est égalment un lieu d'expérimentations, proposant des ateliers de découverte des dernières innovations, des ateliers de programmation.
    C'est aussi un lieu de résidence pour les étudiants qui souhaitent approfondir et / ou partager leurs connaissances dans les domaines aussi variés que l'intelligence artificielle,
    l'échange de données ouvertes...
    </p>
    <p>Explorez <a href="/chateau-robots">Le Château des Robots</a></p>
    </section>

    <section>
    <h2>Smag0</h2>
    <p>Smag0, c'est le coeur du projet, une vision systémique de la société, permettant d'optimiser le partage des ressources.
    Smag0 se base sur des technologies OpenSource comme le Web Sémantique pour décrire les ressources, ou les Systèmes Multi-Agents pour organiser l'architecture.</p>
    <p>Explorez <a href="/smag-smag0">Smag0</a></p>
    </section>

    <section>
    <h2>SmagYun</h2>
    <p>Une console de jeux multijoueurs ET un objet connecté !</p>
    <p>
    SmagYun est une carte électronique "Arduino Yùn" préparé spécialement pour faciliter le développement d'objets connectés, et l'interaction avec ceux-ci.<br>
    La carte SmagYun regroupe :
    <ul>
    <li>Un composant Arduino pour brancher capteurs (boutons, capteurs d'humidité, de luminosité, de pression, accéléromètre...) et actionneurs (moteurs, rubans de leds.. ).</li>
    <li>Un composant Linux / Openwrt faisant office de routeur et système d'exploitation sur lequel est installé Nodejs... Les développeurs Web en sont ravis !</li>
    <li>Un pont entre les Arduino et l'installation Nodejs d'Openwrt permet d'intreragir avec les capteurs et actionneurs directement depuis une interface Web !</li>
    <li>Un routeur Wifi offre la possibilité de se connecter à plusieurs utilisateurs pour interagir avec la partie Arduino depuis son smartphone et ainsi de créer des applications et des jeux agissant dan sle monde réel...</li>
    </ul>
    </p>
    <p>Découvrez <a href="/smag-smagyun">SmagYun</a></p>
    </section>

    <section>
    <h2>Spoggy</h2>
    <p>
    Spoggy est une interface de partage d'informations.
    Basée sur le principe des cartes mentales (on créé un noeud pour chaque concept et établit ensuite les liens entre ces concepts),
    Spoggy permet d'enregistrer facilement les idées qui nous passent par la tête pour ensuite les exporter et les partager par mail.
    Parmi les autres possibilités qu'offre Spoggy : confection de cartes multi-utilisateurs en mode collaboratif
    Spoggy permet également d'interagir de visualiser des données issues d'enpoint Sparql... d'en insérer...
    </p>
    <p>Découvrez <a href="/smag-spoggy">Spoggy</a></p>
    </section>

    `;
  }
}

window.customElements.define('smag-accueil', SmagAccueil);
