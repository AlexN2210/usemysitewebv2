import React from 'react';

const LegalSection: React.FC = () => {
  return (
    <section className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Informations légales USEMY
          </h2>
          <p className="text-gray-600">
            Ces informations légales sont fournies à titre indicatif et devront être validées par un professionnel du droit avant une mise en production.
          </p>
        </div>

        <div className="space-y-12">
          {/* CGU */}
          <div id="cgu" className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Conditions Générales d&apos;Utilisation (CGU)
            </h3>

            <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                USEMY est une plateforme de mise en relation entre particuliers et professionnels, accessible via
                une application web et/ou mobile. Elle permet aux utilisateurs de rechercher des professionnels,
                de consulter leurs profils et d&apos;entrer en contact avec eux.
              </p>

              <p className="font-semibold">Acceptation des conditions</p>
              <p>
                En accédant au service USEMY, l&apos;utilisateur reconnaît avoir pris connaissance des présentes
                Conditions Générales d&apos;Utilisation et les accepter sans réserve. Si l&apos;utilisateur refuse
                tout ou partie des CGU, il doit cesser d&apos;utiliser la plateforme.
              </p>

              <p className="font-semibold">Inscription et compte utilisateur</p>
              <p>
                L&apos;utilisateur s&apos;engage à fournir des informations exactes, complètes et à jour. Il est
                responsable de la confidentialité de ses identifiants et de toute activité réalisée via son compte.
                USEMY se réserve le droit de suspendre ou supprimer tout compte en cas d&apos;utilisation
                frauduleuse, abusive ou contraire aux présentes CGU.
              </p>

              <p className="font-semibold">Rôle d&apos;USEMY</p>
              <p>
                USEMY agit comme un intermédiaire technique et ne fournit pas elle‑même les prestations proposées par
                les professionnels. Les contrats sont conclus directement entre particuliers et professionnels, qui
                restent seuls responsables de l&apos;exécution de la prestation. USEMY ne peut être tenue responsable
                de la qualité des prestations, des retards, annulations ou litiges entre utilisateurs.
              </p>

              <p className="font-semibold">Comportement des utilisateurs</p>
              <p>
                L&apos;utilisateur s&apos;engage notamment à ne pas publier de contenus illicites, diffamatoires,
                haineux, discriminatoires ou contraires aux bonnes mœurs, à ne pas usurper l&apos;identité d&apos;un
                tiers et à ne pas tenter de perturber le fonctionnement du service. USEMY pourra supprimer tout
                contenu contrevenant à ces règles et prendre les mesures appropriées (avertissement, suspension,
                suppression de compte).
              </p>

              <p className="font-semibold">Avis et notations</p>
              <p>
                Les avis publiés doivent refléter une expérience réelle avec un professionnel trouvé via USEMY et
                être rédigés de manière honnête et respectueuse. USEMY peut supprimer tout avis manifestement faux,
                injurieux ou sans lien avec une prestation réelle.
              </p>

              <p className="font-semibold">Disponibilité du service</p>
              <p>
                USEMY met en œuvre des moyens raisonnables pour assurer l&apos;accessibilité du service, mais ne
                garantit pas une disponibilité continue (maintenance, pannes, mises à jour). La responsabilité
                d&apos;USEMY ne saurait être engagée en cas d&apos;indisponibilité temporaire du service.
              </p>

              <p className="font-semibold">Propriété intellectuelle</p>
              <p>
                La marque USEMY, le logo, l&apos;interface, les textes, images et éléments graphiques sont protégés
                par le droit de la propriété intellectuelle. Toute reproduction, représentation ou exploitation non
                autorisée est interdite.
              </p>

              <p className="font-semibold">Données personnelles</p>
              <p>
                Le traitement des données personnelles est détaillé dans la Politique de confidentialité. En
                utilisant USEMY, l&apos;utilisateur accepte que certaines données soient collectées et traitées pour
                les besoins du service.
              </p>

              <p className="font-semibold">Modification des CGU</p>
              <p>
                USEMY peut modifier les présentes CGU à tout moment. En cas de modification substantielle, une
                information pourra être affichée sur l&apos;application. L&apos;utilisation du service après
                modification vaut acceptation des nouvelles CGU.
              </p>

              <p className="font-semibold">Droit applicable et litiges</p>
              <p>
                Les présentes CGU sont soumises au droit français. En cas de litige, l&apos;utilisateur est invité à
                contacter USEMY en priorité. À défaut de résolution amiable, les tribunaux français seront seuls
                compétents.
              </p>
            </div>
          </div>

          {/* Politique de confidentialité */}
          <div id="confidentialite" className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Politique de confidentialité
            </h3>

            <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <p className="font-semibold">Responsable du traitement</p>
              <p>
                Les données personnelles collectées via USEMY sont traitées par USEMY (structure en cours de
                formalisation) en qualité de responsable de traitement.
              </p>

              <p className="font-semibold">Données collectées</p>
              <p>
                Selon votre utilisation de la plateforme, nous pouvons collecter : données de compte (nom, prénom,
                email, éventuellement téléphone), données de profil professionnel (activité, spécialités, zone
                géographique, tarifs indicatifs), données d&apos;utilisation (recherches, favoris, interactions,
                logs techniques) et, si vous l&apos;autorisez, une localisation approximative pour proposer des
                professionnels proches.
              </p>

              <p className="font-semibold">Finalités du traitement</p>
              <p>
                Vos données sont utilisées pour créer et gérer votre compte, vous proposer des professionnels
                pertinents (matching, géolocalisation, filtres), permettre la mise en relation et les échanges entre
                utilisateurs, améliorer le service (statistiques d&apos;usage) et assurer la sécurité de la
                plateforme.
              </p>

              <p className="font-semibold">Base légale</p>
              <p>
                Les traitements sont fondés sur l&apos;exécution du contrat (utilisation de la plateforme),
                l&apos;intérêt légitime d&apos;USEMY (amélioration du service, lutte contre la fraude) et votre
                consentement lorsque celui‑ci est requis (par exemple pour certaines notifications ou la
                géolocalisation).
              </p>

              <p className="font-semibold">Destinataires des données</p>
              <p>
                Les données peuvent être accessibles à l&apos;équipe USEMY (personnel habilité), aux professionnels
                avec lesquels vous interagissez et à des prestataires techniques soumis à des obligations de
                confidentialité. Nous ne revendons pas vos données à des tiers à des fins commerciales.
              </p>

              <p className="font-semibold">Durée de conservation</p>
              <p>
                Les données de compte sont conservées pendant toute la durée d&apos;utilisation du service puis
                supprimées ou archivées au bout d&apos;un délai raisonnable après suppression du compte. Les données
                de logs sont conservées pour une durée limitée à des fins de sécurité et de maintenance.
              </p>

              <p className="font-semibold">Vos droits</p>
              <p>
                Conformément au RGPD, vous disposez de droits d&apos;accès, de rectification, d&apos;effacement, de
                limitation, d&apos;opposition et de portabilité (dans les cas prévus par la loi). Pour exercer vos
                droits, vous pouvez écrire à :{' '}
                <span className="font-mono">contact@usemy.fr</span>.
              </p>

              <p className="font-semibold">Sécurité des données</p>
              <p>
                USEMY met en œuvre des mesures techniques et organisationnelles appropriées (chiffrement, contrôle
                d&apos;accès, sauvegardes) pour protéger vos données. Aucun système n&apos;étant totalement
                infaillible, nous ne pouvons cependant garantir une sécurité absolue.
              </p>

              <p className="font-semibold">Transferts hors UE</p>
              <p>
                Si certains prestataires techniques sont situés hors de l&apos;Union européenne, USEMY
                s&apos;assurera que des garanties appropriées sont mises en place (clauses contractuelles types,
                pays reconnus adéquats, etc.).
              </p>

              <p className="font-semibold">Mise à jour de la politique</p>
              <p>
                Cette politique peut être mise à jour. En cas de modification importante, une information pourra être
                affichée sur la plateforme.
              </p>
            </div>
          </div>

          {/* Mentions légales */}
          <div id="mentions-legales" className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Mentions légales (version provisoire)
            </h3>

            <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <p className="font-semibold">Éditeur</p>
              <p>
                USEMY (structure juridique en cours de formalisation, par exemple &quot;SAS USEMY&quot; à créer),
                basé à Paris, France.  
                Email de contact : <span className="font-mono">contact@usemy.fr</span>.
              </p>

              <p className="font-semibold">Hébergement</p>
              <p>
                Le site et/ou l&apos;application sont hébergés par un prestataire à préciser (par exemple Vercel ou
                autre). Les informations détaillées sur l&apos;hébergeur (dénomination sociale, adresse, coordonnées)
                seront complétées ici.
              </p>

              <p className="font-semibold">Responsable de la publication</p>
              <p>
                Le nom du ou des responsables de la publication (fondateur, dirigeant) sera indiqué ici dès la
                finalisation de la structure juridique.
              </p>

              <p className="font-semibold">Propriété intellectuelle</p>
              <p>
                L&apos;ensemble du contenu du site (textes, images, logos, vidéos, design, structure) est la propriété
                d&apos;USEMY ou de ses partenaires, sauf mention contraire. Toute reproduction, représentation,
                modification ou diffusion non autorisée est interdite.
              </p>

              <p className="font-semibold">Limitation de responsabilité</p>
              <p>
                USEMY ne peut être tenue responsable des dommages directs ou indirects résultant de l&apos;utilisation
                du site ou de l&apos;impossibilité d&apos;y accéder. Les professionnels référencés sont seuls
                responsables des prestations qu&apos;ils fournissent.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div id="cookies" className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Cookies et traceurs
            </h3>

            <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <p className="font-semibold">Qu&apos;est-ce qu&apos;un cookie ?</p>
              <p>
                Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, mobile, tablette) lors de
                la consultation d&apos;un site. Il permet de mémoriser certaines informations pour améliorer votre
                expérience.
              </p>

              <p className="font-semibold">Cookies utilisés</p>
              <p>
                USEMY peut utiliser des cookies strictement nécessaires au fonctionnement du site (navigation,
                sécurité, session) et des cookies de mesure d&apos;audience pour comprendre comment le site est utilisé
                et l&apos;améliorer. Aucun cookie publicitaire tiers n&apos;est prévu à ce stade.
              </p>

              <p className="font-semibold">Gestion de vos cookies</p>
              <p>
                Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies et supprimer ceux déjà
                déposés. Le refus de certains cookies peut dégrader certaines fonctionnalités du site sans empêcher
                totalement son utilisation.
              </p>

              <p className="font-semibold">Évolution</p>
              <p>
                Si USEMY met en place des cookies supplémentaires (par exemple pour du ciblage publicitaire ou des
                partenaires), une bannière d&apos;information et de consentement spécifique sera ajoutée et cette
                politique sera mise à jour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;


