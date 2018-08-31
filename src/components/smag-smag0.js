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

class SmagSmag0 extends PageViewElement {
  _render(props) {
    return html`
    ${SharedStyles}
    <section>
    <h2 id="#top">Smag0</h2>
    <p>Smag0, c'est le coeur du projet, une vision systémique de la société, permettant d'optimiser le partage des ressources.
    Smag0 se base sur des technologies OpenSource comme le Web Sémantique pour décrire les ressources, ou les Systèmes Multi-Agents pour organiser l'architecture.</p>
    </section>
    <section>
    <h2>Système Multi-Agents</h2>
    <p><b>Qu'est-ce qu'un Système Multi-Agents ?</b></p>
    <p>Pour appréhender ce qu'est un système multi-agents, cher lecteur, partons de ce que tu connais le mieux : <b>TOI</b>!</p>
    <p>Où que tu sois, à tout moment, on peut considérer que tu fais partie de quelque chose, d'un groupe...
    Ce groupe peut être ta classe si tu es écolier, ta famille,
    ton service si tu travailles dans une entreprise, et même si tu es travailleur indépendant, vraiment en solo, on peut te catégoriser et considérer que tu fais partie
    d'un groupe virtuel de "travailleurs indépendants solos"... On peut aussi partir du groupe des "résidents de ton immeuble", peu importe, c'est pour trouver une image concrète...
    L'important est que ce groupe fait lui aussi partie de groupes plus larges...</p>
    <p>Restons sur l'exemple de l'écolier, cet exemple semble assez commun pour parler à tout le monde...</br>
    <ul>
    <li>Quand tu étais écolier, tu faisais donc partie d'une classe</li>
    <li>la classe est une partie de l'école</li>
    <li>l'école est un bâtiment d'un quartier</li>
    <li>le quartier est une portion de la ville</li>
    <li>la ville est une partie d'un département, qui est une partie d'une région,
    elle même partie d'un pays, qui fait partie d'un continent, qui est une partie de la Terre,
    qui une planète du système solaire, qui est un bout de la voie lactée,
    qui elle même est une toute partie de l'Univers... <br>mais on va s'arrêter là pour l'instant...</li>
    </ul>
    </p>
    <p>
    Dans l'autre sens, ça marche aussi : <br>
    <b>TOI</b>, lecteur, tu es un 'regroupement' de 'choses' plus petites : tu es une organisation de membres (bras, jambes, tête...)<br>
    Chacun de tes membres est à son tour 'composé'... <br>
    Prenons ton bras : il y a un avant-bras,
    une main,
    la main est composée de doigts,
    le doigt de phalanges,
    dans une phalange,
    on trouve des os,
    on peut descendre jusqu'à l'atome et à ses composants, mais on va s'arrêter là...
    </p>

    <p> Ce principe est applicable à 'à peu près tout' dans notre monde : <br>
    <b><u>"Chaque chose est à la fois composée d'autres choses plus petites et en même temps elle est un composant de multiples choses plus grandes."</u></b><br>
    Ce que l'on vient de décrire ici, c'est la notion de <a href="https://fr.wikipedia.org/wiki/Holon_(philosophie)" target="_blank">Holon</a>
    et c'est une des clés des <a href="https://fr.wikipedia.org/wiki/Syst%C3%A8me_multi-agents" target="_blank">systèmes multi-agents</a> (bien qu'il existe d'autres organisations de systèmes multiagents).<br>
    (https://www.irit.fr/~Chihab.Hanachi/Cours/SMA/CoursAgentsI.pdf)
    La deuxième clé est de considérer chacune de ces choses comme pouvant être une <b>entité autonome</b>, un <b><u>Agent</u></b>.<br>
    Et chacun de ces agents qui peut être composant de plusieurs groupes à la fois
    (famille, école, club sportif,... si on reprend notre écolier) et est (en partie) autonome possède ses propres croyances, ses objectifs et ses intentions...
    </p>
    <p>Pour en savoir plus sur <a href="http://www.lirmm.fr/~ferber/publications/LesSMA_Ferber.pdf" target="_blank">les systèmes multi-agents (PDF)</a></p>

    </section>
    <section>
    <h2>Un format de données ouvert</h2>
    <p>Afin de faciliter la communication entre les différents Agents du système,
    il est préférable d'utiliser un format d'information compréhensible par chacun de ces agents.</p>
    <p>Nous les humains, pour communiquer, nous utilisons des phrases, composées de mots... <br><small>(tiens ! encore un tout composé de trucs plus petits...)</small><br>
    Parce qu'un mot tout seul n'a pas beaucoup de signification : <br>
    Si je vous dis "roue", par exemple, vous voyez en gros ce que c'est mais ce n'est pas précis...
    roue de vélo ? de tracteur ? de la fortune ? grande roue ?
    Et puis comment faire comprendre à une machine le sens du mot "roue" ou "bras" ou "clavier"
    parce que rapellons-le, le but du projet Smag0 est de faciliter les interactions homme-machine...<br> Alors???<br>Une idée ???<br>
    En fait la solution, on l'a déjà depuis un bout de temps, et ceux qui se sont frottés à la programmation objet la maitrisent,
    on va utiliser un 'triplet', c'est à dire trois mots parce que c'est tout à fait compréhensible par un humain, et ça l'est aussi par une machine !
    De plus avec le système de triplets une machine (ou logiciel) va pouvoir inférer, comme nous,
    c'est à dire déduire des informations qui ne sont pas explicitement ennoncées !!! <br>
    Pour plus d'informations sur l'inférence, vous pouvez consulter l'exemple : <small>
    <a href="https://fr.wikiversity.org/wiki/SPARQL_Protocol_and_RDF_Query_Language/Syst%C3%A8me_d%27implication" target="_blank">
    Système d'inférence Sparql
    </a></small><br>
Cet exemple est assez basique, mais il a le mérite de monter les possibilités du format RDF/turtle, on indique les informations suivantes : <br>
<pre>Un chien est un animal
le chat1 est un chat
Les chats sont des animaux
les zoos hébergent uniquement des animaux
Le zoo1 héberge le chat2
</pre>
de la manière suivante :
<pre>
@prefix rdf:    < http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:   < http://www.w3.org/2000/01/rdf-schema#> .
@prefix ex:     < http://example.org/> .
@prefix zoo:    < http://example.org/zoo/> .
ex:dog1	   rdf:type	    ex:animal .      (1)
ex:cat1	   rdf:type	    ex:cat .         (2)
ex:cat	   rdfs:subClassOf  ex:animal .  (3)
zoo:host   rdfs:range	    ex:animal .    (4)
ex:zoo1	   zoo:host	    ex:cat2 .        (5)
</pre>

Et quand on pose au système la question "qui est un animal ?" : <br>
la réponse est :
<pre>
< http://example.org/dog1>
< http://example.org/cat1>
< http://example.org/cat2>
</pre>
car :
<ul>
<li>ex:dog1 est une réponse à cause du triplet (1)</li>
<li>ex:cat1 : le triplet 3 indique que les chats sont
 des animaux (subclass = sous-classe de) et le triplet 2 indique qu'ex:cat1 est un chat donc ex:cat1 est un animal</li>
<li>ex:cat2 : le triplet 4 indique que la propriété
 zoo:host attend uniquement des objets de type animal et le triplet 5
 indique qu'ex:cat2 est une valeur de la propriété
  zoo:host donc, si le graphe est bien formé, qu'ex:cat2 est un animal.</li>
</ul>
</p>
<p><b>Plutôt intéressant d'avoir un système d'échange d'informations à
 la fois lisible, compréhensible par un humain et par une machine ou un logiciel, et de surcroit où les deux peuvent déduire la même chose... Non ???</b></p>
 <p>C'est tout ce qu'il nous faut pour permettre à nos "Agents" qu'ils soient humains ou mécaniques pour "se comprendre"...</p>

    </section>





    `;
  }
}

window.customElements.define('smag-smag0', SmagSmag0);
