/* ============================================================
   VOS DONNÉES — modifiez ce fichier (ou utilisez le mode admin :
   ouvrez le site avec #admin à la fin de l’adresse).
   ============================================================ */
window.PORTFOLIO = {
  profile: {
    first: "Kader", last: "Savane",
    role: "Étudiant en BTS SIO option SISR",
    intro: "Je conçois, sécurise et supervise des infrastructures réseau.",
    email: "savanekader4@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/kader-savane-829658391" },
      { label: "GitHub", url: "https://github.com/kader-1x" }
    ]
  },
  about: {
    availability: "Disponible en alternance, septembre 2027",
    statement: "Futur technicien réseaux et systèmes, je transforme les besoins d’une organisation en infrastructures fiables, sécurisées et bien documentées.",
    photo: "images/photo.jpg",
    paragraphs: [
      "Étudiant en BTS SIO option SISR à l’IEF2I de Vincennes, je me forme à l’administration des systèmes, à la conception de réseaux et à la cybersécurité. Ce qui me motive : comprendre comment tout s’articule, du câble au service rendu à l’utilisateur.",
      "Au fil de mes projets de formation (VLAN et OSPF, Active Directory, GLPI), j’ai appris à travailler avec méthode : analyser un besoin, tester en laboratoire, documenter chaque étape et vérifier que la solution tient dans la durée.",
      "Je recherche une alternance à partir de septembre 2027, en Île-de-France, en administration systèmes et réseaux, infrastructure, cybersécurité ou support informatique. Elle me permettra de poursuivre en licence professionnelle tout en mettant mes acquis en pratique, au sein d’une équipe qui me transmettra son expérience et à qui j’apporterai ma rigueur et mon envie d’apprendre."
    ],
    values: [
      { title: "Rigueur", text: "Je teste avant de déployer et je documente chaque étape." },
      { title: "Curiosité", text: "Je me forme en continu grâce à ma veille en cybersécurité." },
      { title: "Esprit d’équipe", text: "Je travaille en mode projet et j’explique clairement mes choix." },
      { title: "Sens du service", text: "L’utilisateur est au centre de chacune de mes solutions." }
    ]
  },
  parcours: [
    { date: "2025 – 2027", title: "BTS SIO option SISR", logo: "images/logo-f2i.png",
      text: "IEF2I, Vincennes. Systèmes, réseaux et cybersécurité. Objectif : licence professionnelle en systèmes, réseaux, cybersécurité ou administration des infrastructures." },
    { date: "Stage d’un mois", title: "Cegid",
      text: "Travaux liés à l’administration et à la gestion d’infrastructures informatiques : mise en pratique de Linux et de Docker, découverte de la gestion d’environnements systèmes." },
    { date: "2025", title: "Baccalauréat", logo: "images/logo-college.jpg",
      text: "Obtenu au Collège privé La Vision Future, en Côte d’Ivoire." }
  ],
  certifications: [
    { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "12 janvier 2026", status: "Obtenue",
      text: "Certificat de réussite du cours, niveau étudiant. L’étudiant a démontré sa capacité à :",
      skills: [
        "expliquer les bases de la sécurité en ligne, ce qu’est la cybersécurité et son impact potentiel ;",
        "expliquer les menaces, attaques et vulnérabilités les plus courantes ;",
        "expliquer comment se protéger en ligne ;",
        "expliquer comment les organisations protègent leurs opérations contre ces attaques ;",
        "explorer les différents métiers de la cybersécurité."
      ],
      image: "images/cert-cisco-cybersecurity.jpg", file: "docs/Certification-Cisco-Introduction-to-Cybersecurity.pdf" },
    { title: "SecNumacadémie, MOOC de l’ANSSI", issuer: "SecNumacadémie (ANSSI)", date: "15 janvier 2026", status: "Attestation de suivi",
      text: "Quatre modules du MOOC suivis avec succès, avec les scores suivants aux évaluations :",
      skills: [
        "Panorama de la SSI : 92 %",
        "Sécurité de l’authentification : 88 %",
        "Sécurité sur Internet : 88 %",
        "Sécurité du poste de travail et nomadisme : 96 %"
      ],
      image: "images/cert-secnumacademie.jpg", file: "docs/Attestation-SecNumacademie-ANSSI.pdf" },
    { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "", status: "En préparation",
      text: "Certification d’initiation au cloud AWS, que je prépare actuellement.", skills: [], image: "", file: "" }
  ],
  skills: [
    { title: "Réseaux", text: "VLAN et trunk, routage inter-VLAN, DHCP, DNS, Cisco IOS, Packet Tracer" },
    { title: "Systèmes", text: "Linux (Debian), Windows Server, Active Directory, administration systèmes" },
    { title: "Virtualisation", text: "Proxmox, Docker, bases de Kubernetes" },
    { title: "Outils et sécurité", text: "pfSense, GLPI, bonnes pratiques de l’ANSSI" }
  ],
  projects: [
    { id: "vlan", title: "Réseau segmenté : VLAN, inter-VLAN, OSPF et DHCP", year: "2026", category: "Réseau",
      summary: "Six VLAN sur deux routeurs, routage OSPF et distribution automatique des adresses par un serveur DHCP.",
      context: "Segmenter le réseau en plusieurs VLAN, permettre leur communication grâce au routage inter-VLAN, assurer le routage entre deux routeurs avec OSPF et distribuer automatiquement les adresses IP aux postes avec un serveur DHCP.",
      work: "Création et configuration des VLAN, configuration des ports des switches, mise en place des trunks 802.1Q, du routage inter-VLAN par sous-interfaces, d’OSPF entre les deux routeurs, du serveur DHCP et du relais DHCP. Réalisé et testé sur Cisco Packet Tracer.",
      schema: "images/schema-vlan.svg",
      tables: [
        { title: "Plan d’adressage", head: ["VLAN", "Réseau", "Passerelle", "Routeur"], rows: [
          ["40", "192.168.37.0/29", "192.168.37.6", "R0"], ["50", "192.168.37.8/29", "192.168.37.14", "R0"], ["60", "192.168.37.16/29", "192.168.37.22", "R0"],
          ["30", "192.168.37.24/29", "192.168.37.30", "R1"], ["20", "192.168.37.32/29", "192.168.37.38", "R1"], ["10", "192.168.37.40/30", "192.168.37.42", "R1"] ] },
        { title: "Pools DHCP (Server0, 192.168.37.11/29 dans le VLAN 50)", head: ["Pool", "Passerelle", "Début", "Masque", "Utilisateurs max"], rows: [
          ["VLAN40", "192.168.37.6", "192.168.37.1", "/29", "5"], ["VLAN50", "192.168.37.14", "192.168.37.9", "/29", "2"], ["VLAN60", "192.168.37.22", "192.168.37.17", "/29", "5"],
          ["VLAN30", "192.168.37.30", "192.168.37.25", "/29", "5"], ["VLAN20", "192.168.37.38", "192.168.37.33", "/29", "5"], ["VLAN10", "192.168.37.42", "192.168.37.41", "/30", "1"] ] }
      ],
      steps: [
        { title: "Segmenter le réseau", text: "Six VLAN répartis sur deux routeurs : R0 gère les VLAN 40, 50 et 60, R1 gère les VLAN 30, 20 et 10. Les liaisons entre les switches et les routeurs sont en trunk 802.1Q. La liaison R0–R1 est un lien routé en /30." },
        { title: "Routage inter-VLAN", text: "Une sous-interface par VLAN sur chaque routeur, avec l’encapsulation 802.1Q et l’adresse de passerelle du VLAN. Configuration de R0 :", code: "interface g0/0.40\n encapsulation dot1Q 40\n ip address 192.168.37.6 255.255.255.248\ninterface g0/0.50\n encapsulation dot1Q 50\n ip address 192.168.37.14 255.255.255.248\ninterface g0/0.60\n encapsulation dot1Q 60\n ip address 192.168.37.22 255.255.255.248" },
        { title: "Routage dynamique OSPF", text: "Les deux routeurs utilisent le processus OSPF 1 en area 0 pour apprendre les réseaux situés derrière l’autre routeur. Configuration de R0 :", code: "router ospf 1\n router-id 1.1.1.1\n network 192.168.37.0 0.0.0.7 area 0\n network 192.168.37.8 0.0.0.7 area 0\n network 192.168.37.16 0.0.0.7 area 0\n network 192.168.37.44 0.0.0.3 area 0" },
        { title: "Serveur DHCP", text: "Server0 est placé dans le VLAN 50 avec l’adresse statique 192.168.37.11/29 et la passerelle 192.168.37.14. Son service DHCP distribue les adresses aux postes de tous les VLAN, avec un pool par VLAN." },
        { title: "Relais DHCP", text: "Le serveur étant dans le VLAN 50, les routeurs relaient les demandes des VLAN distants avec ip helper-address. Configuration de R1 :", code: "interface g0/0.30\n ip helper-address 192.168.37.11\ninterface g0/0.20\n ip helper-address 192.168.37.11\ninterface g0/0.10\n ip helper-address 192.168.37.11" },
        { title: "Tests et validation", text: "Les tests au ping confirment que les postes reçoivent automatiquement une adresse IP et une passerelle, et que la communication fonctionne entre tous les VLAN, y compris entre les réseaux situés derrière R0 et R1. Les commandes show ip ospf neighbor et show ip route montrent le voisinage OSPF et les routes apprises (lettre O)." }
      ],
      files: [ { label: "Documentation complète (PDF)", url: "docs/Documentation-reseau-VLAN-OSPF-DHCP.pdf" }, { label: "Fichier Packet Tracer (.pkt)", url: "docs/inter-vlan-ospf.pkt" } ],
      tags: ["Cisco Packet Tracer", "Cisco IOS", "VLAN et trunk", "Routage inter-VLAN", "OSPF", "DHCP et relais DHCP", "IPv4", "B2.1 Concevoir", "B2.2 Installer et déployer"], image: "images/cover-reseau.jpg", link: "" },
    { id: "glpi-debian", title: "GLPI et synchronisation LDAP avec Active Directory", year: "2026", category: "Système",
      summary: "GLPI interroge l’annuaire Active Directory en LDAP pour importer les comptes utilisateurs.",
      context: "Mettre en place une liaison entre un domaine Active Directory et GLPI afin que GLPI utilise l’annuaire LDAP pour rechercher et importer les comptes utilisateurs, et vérifier la communication entre GLPI et le contrôleur de domaine.",
      work: "Installation d’un serveur Debian et de GLPI, puis liaison avec l’Active Directory : création de l’annuaire LDAP DC1 dans GLPI, BaseDN limitée à l’OU glpi-users, compte de liaison, test de communication, import et synchronisation des utilisateurs.",
      image: "images/glpi-logo.png", contain: true,
      tables: [
        { title: "Environnement", head: ["Élément", "Configuration", "Rôle"], rows: [
          ["Contrôleur de domaine", "Windows Server, 172.16.1.1", "Active Directory et DNS"],
          ["Domaine", "ief2i.lan", "Domaine Active Directory"],
          ["Serveur GLPI", "172.16.1.4", "Gestion de parc et liaison LDAP"],
          ["LDAP", "Port 389", "Communication entre GLPI et l’AD"],
          ["OU ciblée", "OU=glpi-users,DC=ief2i,DC=lan", "Contient les utilisateurs à synchroniser"] ] }
      ],
      steps: [
        { title: "Vérifier le contrôleur de domaine", text: "Le Gestionnaire de serveur confirme que les rôles AD DS et DNS sont installés et fonctionnels, avec le rôle Services de fichiers et de stockage. La commande ipconfig montre l’adresse 172.16.1.1, le masque 255.255.255.0 et la passerelle 172.16.1.254.",
          shots: [ { src: "images/glpi-ldap-01.jpg", caption: "Gestionnaire de serveur : rôles AD DS et DNS" }, { src: "images/glpi-ldap-04.jpg", caption: "ipconfig sur le contrôleur de domaine" } ] },
        { title: "Organiser l’annuaire", text: "Dans la console Utilisateurs et ordinateurs Active Directory, le domaine ief2i.lan contient une unité d’organisation glpi-users. Elle sert de base au filtrage des comptes recherchés par GLPI et contient trois comptes : user1, user2 et user3.",
          shots: [ { src: "images/glpi-ldap-02.jpg", caption: "Le domaine ief2i.lan et ses unités d’organisation" }, { src: "images/glpi-ldap-03.jpg", caption: "L’OU glpi-users avec user1, user2 et user3" } ] },
        { title: "Configurer l’annuaire LDAP dans GLPI", text: "Depuis Configuration, Authentification, Annuaires LDAP, l’annuaire DC1 est créé et activé : serveur 172.16.1.1, port 389, BaseDN limitée à l’OU glpi-users, filtre de sélection des comptes et compte de liaison (bind) pour que GLPI puisse effectuer ses recherches.",
          code: "BaseDN : OU=glpi-users,DC=ief2i,DC=lan\nFiltre : (&(objectClass=user)(objectCategory=person)(!(userAccountControl:1.2.840.113556.1.4.803:=2)))\nIdentifiant : samaccountname\nChamp de synchronisation : objectguid",
          shots: [ { src: "images/glpi-ldap-05.jpg", caption: "Paramètres principaux de l’annuaire DC1" }, { src: "images/glpi-ldap-06.jpg", caption: "BaseDN, compte de liaison et champs de synchronisation" } ] },
        { title: "Tester la communication LDAP", text: "Le test lancé depuis GLPI valide successivement le flux TCP (connexion à 172.16.1.1 sur le port 389), la BaseDN, l’URI LDAP, l’authentification du compte de liaison et la recherche dans l’annuaire, qui retourne 3 entrées : les trois utilisateurs de l’OU.",
          shots: [ { src: "images/glpi-ldap-07.jpg", caption: "Test LDAP réussi, 3 entrées trouvées" }, { src: "images/glpi-ldap-08.jpg", caption: "L’annuaire DC1 actif dans la liste des annuaires LDAP" } ] },
        { title: "Importer et synchroniser les utilisateurs", text: "Dans Administration, Utilisateurs, GLPI propose l’importation de nouveaux utilisateurs et la synchronisation des utilisateurs déjà importés. Après la synchronisation, user1, user2 et user3 apparaissent dans la liste des utilisateurs GLPI, avec les comptes locaux déjà présents.",
          shots: [ { src: "images/glpi-ldap-09.jpg", caption: "Fonctions d’importation et de synchronisation LDAP" }, { src: "images/glpi-ldap-10.jpg", caption: "Utilisateurs présents dans GLPI après synchronisation" } ] },
        { title: "Résultat", text: "La liaison entre Active Directory et GLPI est fonctionnelle : le domaine est opérationnel, l’OU contient les trois comptes, GLPI communique avec le contrôleur de domaine en LDAP sur le port 389, la BaseDN est prise en compte et le test retourne 3 entrées. Les comptes se gèrent depuis Active Directory puis s’exploitent dans GLPI, sans recréer chaque utilisateur à la main." }
      ],
      tags: ["Debian", "GLPI", "LDAP", "Active Directory", "Windows Server", "Proxmox", "B1.1 Patrimoine informatique", "B2.2 Installer et déployer"] }
  ],
  veille: {
    text: "Sujet : cybersécurité et sécurité des infrastructures réseaux et systèmes. Je suis l’actualité des vulnérabilités et des bonnes pratiques à travers les publications officielles, des newsletters spécialisées et des sites dédiés à l’administration systèmes et réseaux.",
    sources: [
      { title: "CERT-FR", source: "Alertes et avis de sécurité", url: "https://www.cert.ssi.gouv.fr/" },
      { title: "ANSSI", source: "Guides et recommandations", url: "https://cyber.gouv.fr/" }
    ]
  }
};
