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

class SmagSmagyun extends PageViewElement {
  _render(props) {
    return html`
    ${SharedStyles}
    <section>
    <section>
    <h2 id="top">SmagYun</h2>
    <p>Une console de jeux multijoueurs ET un objet connecté !</p>
    <p>
    SmagYun est une carte électronique "Arduino Yùn" préparé spécialement pour faciliter le développement d'objets connectés, et l'interaction avec ceux-ci.<br>
    La carte SmagYun regroupe :
    <ul>
    <li>Un composant Arduino pour brancher capteurs (boutons, capteurs d'humidité, de luminosité, de pression, accéléromètre...) et actionneurs (moteurs, rubans de leds.. ).</li>
    <li>Un composant Linux / Openwrt faisant office de routeur et système d'exploitation sur lequel est installé Nodejs...<br> Les développeurs Web en sont ravis !</li>
    <li>Une liaison entre la partie Arduino et l'installation Nodejs d'Openwrt (ou python pour ceux qui préfèrent) permet d'intreragir avec les capteurs et actionneurs directement depuis une interface Web !</li>
    <li>Un routeur Wifi offre la possibilité de se connecter à plusieurs utilisateurs pour interagir avec la partie Arduino depuis son smartphone et ainsi de créer des applications et des jeux agissant dan sle monde réel...</li>
    </ul>
    </p>
    <!--http://phmarduino.free.fr/-->
    </section>
    
    <section>
    <h2>Arduino</h2>
    <p>
    <small>
    <ul>
    <li><a href="https://store.arduino.cc/arduino-yun" target="_blank">Arduino Yùn</a> (retirée)</li>
    <li><a href="https://store.arduino.cc/arduino-yun-rev-2" target="_blank">Arduino Yùn</a> (revision 2)</li>
    <li><a href="https://www.arduino.cc/en/Guide/ArduinoYun" target="_blank">Guide démarrage Arduino Yùn</a> (officiel en anglais)</li>
    <li><a href="https://playground.arduino.cc/French/GuideDeDemarrageArduinoYun" target="_blank">Guide démarrage Arduino Yùn </a> (traduction en français)</li>
    </ul>
    </small></p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
    </section>

    <section>
    <h2>Linux / Openwrt / LininoOs</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
    </section>

    <section>
    <h2>Liaison Arduino - Linux / NodeJs</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
    </section>

    <section>
    <h2>Un routeur Wifi</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
    </section>

    <section>
    <h2>Applications et jeux installés sur SmagYun</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
    </section>

    <section>
    <h2>Participer</h2>
    <p>Vous pouvez vous aussi développer vos propres applications ou jeux multiutilisateurs pour la carte smagyun.
    </section>

    <section>
    <p>caroussel https://vaadin.com/blog/10-best</p>
    <p>Vestibulum at est ex. Aenean id ligula id nibh dictum laoreet. Etiam non semper erat. Pellentesque eu justo rhoncus diam vulputate facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat metus ex, vel fringilla massa tincidunt sit amet. Nunc facilisis bibendum tristique. Mauris commodo, dolor vitae dapibus fermentum, odio nibh viverra lorem, eu cursus diam turpis et sapien. Nunc suscipit tortor a ligula tincidunt, id hendrerit tellus sollicitudin.</p>
    </section>
    `;
  }
}

window.customElements.define('smag-smagyun', SmagSmagyun);
