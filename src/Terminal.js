import $ from 'jquery'
import Typed from 'typed.js';
import {getDateNow} from "./Script";



var Terminal =  function(cmdLineContainer, outputContainer) {
    window.URL = window.URL || window.webkitURL;
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

    var cmdLine_ = document.querySelector(cmdLineContainer);
    var output_ = document.querySelector(outputContainer);

    const CMDS_ = [
        'yarn','cat', 'clear', 'date', 'echo', 'help', 'uname', 'whoami'
    ];

    var history_ = [];
    var histpos_ = 0;
    var histtemp_ = 0;

    window.addEventListener('click', function(e) {

        if(cmdLine_){
            cmdLine_.focus();
        }
    }, false);

    if(cmdLine_) {


        //cmdLine_.addEventListener('click', inputTextClick_, false);
        cmdLine_.addEventListener('keydown', historyHandler_, false);
        cmdLine_.addEventListener('keydown', processNewCommand_, false);

    }


    //
    function historyHandler_(e) {
        if (history_.length) {
            if (e.keyCode === 38 || e.keyCode === 40) {
                if (history_[histpos_]) {
                    history_[histpos_] = this.value;
                } else {
                    histtemp_ = this.value;
                }
            }

            if (e.keyCode === 38) { // up
                histpos_--;
                if (histpos_ < 0) {
                    histpos_ = 0;
                }
            } else if (e.keyCode === 40) { // down
                histpos_++;
                if (histpos_ > history_.length) {
                    histpos_ = history_.length;
                }
            }

            if (e.keyCode === 38 || e.keyCode === 40) {
                this.value = history_[histpos_] ? history_[histpos_] : histtemp_;
                this.value = this.value; // Sets cursor to end of input.
            }
        }
    }

    //
    function processNewCommand_(e) {

        if (e.keyCode === 9) { // tab
            e.preventDefault();
            // TODO(ericbidelman): Implement tab suggest.
        } else if (e.keyCode === 13) { // enter

            // Save shell history.
            if (this.value) {
                history_[history_.length] = this.value;
                histpos_ = history_.length;
            }

            // Duplicate current input and append to output section.
            var line = this.parentNode.parentNode.cloneNode(true);
            line.removeAttribute('id')
            line.classList.add('line');
            var input = line.querySelector('input.cmdline');
            input.autofocus = false;
            input.readOnly = true;
            output_.appendChild(line);

            // Parse out command, args, and trim off whitespace.
            // TODO(ericbidelman): Support multiple comma separated commands.
            if (this.value && this.value.trim()) {
                var args = this.value.split(' ').filter(function(val, i) {
                    return val;
                });
                var cmd = args[0].toLowerCase();
                args = args.splice(1); // Remove cmd from arg list.
            }

            switch (cmd) {
                case 'cat':
                    var url = args.join(' ');
                    if (!url) {
                        output('Usage: ' + cmd + ' http://s.codepen.io/...');
                        output('Example: ' + cmd + ' http://s.codepen.io/AndrewBarfield/pen/LEbPJx.js');
                        break;
                    }
                    $.get( url, function(data) {
                        var encodedStr = data.replace(/[\u00A0-\u9999<>]/gim, function(i) {
                            return '&#'+i.charCodeAt(0)+';';
                        });
                        output('<pre>' + encodedStr + '</pre>');
                    });
                    break;
                case 'whoami' :
                    output(  );
                    break;
                case 'clear':
                    output_.innerHTML = '';
                    this.value = '';
                    return;
                case 'date':
                    output( 'Nous sommes le ' + getDateNow() );
                    break;
                case 'echo':
                    output( args.join(' ') );
                    break;
                case 'help':
                    output('<div class="ls-files">' + CMDS_.join('<br>') + '</div>');
                    break;
                case 'uname':
                    output(navigator.appVersion);
                    break;
                case 'yarn':
                    var typedContainer = $("#typed");
                    var typedContainer2 = $("#typed");
                    typedContainer.remove();
                    typedContainer2.remove();

                    output('<div id="typed"></div>');
                    output('<div id="typed2"></div>');

                    if($('#typed').length === 1){
                        var typed6 = new Typed('#typed', {
                            strings: ["<b>yarn install CV GD </b><br>" +
                            "^1500\n `Récupération des paquets ...`<br>" +
                            "^1000\n `Récupération depuis la source:compétences-personnelles-1.cv (100%)`<br>" +
                            "^500\n ` Récupération depuis la source: expériences-professionnelles-1-5.cv (100%)`<br>" +
                            "^500\n `Récupération depuis la source: formations-2.3.cv (100%)`<br>" +
                            "^500\n `Récupération depuis la source: outillage.cv (100%)`<br>" +
                            "^500\n `Récupération depuis la source: loisirs.cv (100%)`<br>" +
                            "^500\n `Récupération depuis la source: langue.cv (100%)`<br>" +
                            "^500\n `Récupération depuis la source: divers.cv (100%)`<br>"+
                            "^500\n `<div id='start-cv'>==== Expériences-professionnelles  ====</div>`"+
                            "`<table><tbody><tr></tr><tr> <td>2016 - Aujourd'hui </td> <td>Chargé de la conception, du développement et de l'intégration d'applications | Agence française pour la biodiversité<ul><li> Conception et maintenance des applications au sein du SI</li><li>Constitué majoritairement d’environnements Drupal , SPIP, Wordpress, des projets  particuliers du type Symfony(3), Limesurvey,  From scratch, composé sur des technologies du web : PHP, Javascript.: html, css, SQL, Postgres, Jquery, Ajax</li><li>Mise en place d'outils pour utilistraliser les preocécuss de développement</li> <li>Environnement de travail:  Linux, PHP, Javascript, Jquery, Drupal (6,7,8), Wordpress, équipe de 4 développeurs.</li></ul></td> </tr><tr><td>Au fil de l'eau</td><td>Développeur Web | Divers projets<ul><li>Conception et maintenance de sites éditoriaux sous CMS Wordpress, Drupal.</li><li>La aperçu de mes projets web sur : http://gerald-duveau.fr/projets</li><li><b>Environnement de travail:</b>  Windows, Drupal, Wordpress, contractualiser en prestataire de services. </li></ul></td></tr><tr><td>11/2015 - 03/2016</td><td>Développeur Web | Groupe IFG (stage)<ul><li>Conception et maintenance backend, templating mail, templating landing page, création de sites évenementiels.</li><b>Environnement de travail:</b>  Windows, Php, Javascript, Jquery, Wordpress, Marketo, équipe de 3 développeurs<li></ul></td></tr><tr><td>2006 - 2015</td><td><ul><li>Gestion d'un portefeuille, clientèle moyen/haut de gamme</li><li>Optimisation patrimoniale et fiscale,</li><li>Analyse des besoins clients et mise en avant d'une solution adaptée,</li><li>Analyse et anticipation des risques courts à long terme. Montage de dossiers de crédits immobiliers et personnels en adéquation des budgets client</li><li>Analyse et anticipation des risques court terme et long terme.</li><li>Respect des règles de contrepartie, procédure, déontologie et de blanchiment.</li></ul></td></id></tr></tbody> </table>`"+
                            "^1000\n `<div id='start-cv'>==== FORMATIONS ====</div>`"+
                            "<ul>" +
                            "`<li>2019 | Veille technologique – Veille technologique via forum, Github, ATTTTT</li>`" +
                            "`<li>2016 | Drupal 8 – Formation développeur, webmaster Drupal 8 (7 jours)</li>`" +
                            "`<li>2015 | Développeur intégrateur web – Titre de niveau II (BAC+4)  IFOCOP Rungis</li>`" +
                            "`<li>2005 | BTS Force de vente – Lycée Charles de Foucault Paris 18</li>`" +
                            "</ul>"

                            ],
                            typeSpeed: 40,
                            backSpeed: 0,
                            loop: false,
                            cursorChar: "$",
                            onComplete: function(self) {
                                console.log(self)
                                typed6.destroy()
                            }

                        });

                    }
                    var options = {
                        strings: ["<i>Please</i> Wait...", "...."],
                        typeSpeed: 40,
                        loop: true,
                        cursorChar: "",
                    };
                    // eslint-disable-next-line
                    var typed7 = new Typed('#typed2',options);
                    break;
                default:
                    if (cmd) {
                        output(cmd + ': command not found');
                    }
            };

            window.scrollTo(0, getDocHeight_());
            this.value = ''; // Clear/setup line for next input.
        }
    }

    //
  /*  function formatColumns_(entries) {
        let util = util || {};
        util.toArray = function(list) {
            return Array.prototype.slice.call(list || [], 0);
        };
        var maxName = entries[0].name;
        util.toArray(entries).forEach(function(entry, i) {
            if (entry.name.length > maxName.length) {
                maxName = entry.name;
            }
        });

        var height = entries.length <= 3 ?
            'height: ' + (entries.length * 15) + 'px;' : '';

        // 12px monospace font yields ~7px screen width.
        var colWidth = maxName.length * 7;

        return ['<div class="ls-files" style="-webkit-column-width:',
            colWidth, 'px;', height, '">'];
    }*/

    //
    function output(html) {
        output_.insertAdjacentHTML('beforeEnd', '<p>' + html + '</p>');
    }

    // Cross-browser impl to get document's height.
    function getDocHeight_() {
        var d = document;
        return Math.max(
            Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
            Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
            Math.max(d.body.clientHeight, d.documentElement.clientHeight)
        );
    }

    //
    return {
        initFS: function() {
            output('<img align="left" src="http://www.w3.org/html/logo/downloads/HTML5_Badge_128.png" style="padding: 0px 10px 30px 0px"><h2>HTML5 Web Terminal</h2><p>' + new Date() + '</p><p>Enter "help" for more information.</p>');
        },
        output: output
    }
};

export default Terminal;
