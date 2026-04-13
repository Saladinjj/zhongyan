/* ============================================================
   ZHONGYAN NEW ENERGY — Main JavaScript
   ============================================================ */

/* ── Translations ─────────────────────────────────────────── */
const T = {
  en: {
    // Nav
    nav_products: "Products",
    nav_about: "About",
    nav_equipment: "Equipment & Capacity",
    nav_quality: "Quality",
    nav_news: "News",
    nav_contact: "Contact",
    // Hero
    hero_tag: "Industry-Leading Manufacturer",
    hero_title_1: "Custom Flexible",
    hero_title_2: "Busbars",
    hero_title_3: "Tailored New Energy Solutions",
    hero_desc: "High-conductivity, low-resistance flexible busbars for EV, Energy Storage & Rail Transit, power transmission & distribution and new infrastructure.",
    hero_cta1: "Explore Products",
    hero_cta2: "Contact Us",
    hero_scroll: "Scroll",
    // Stats
    stat_founded: "Founded",
    stat_area: "Showroom Area m²",
    stat_personnel: "Technical Personnel",
    stat_clients: "Cooperative Clients",
    stat_products: "Product Categories",
    // Categories
    cat_tag: "Our Range",
    cat_title: "Product Category",
    cat_1: "Flexible Busbar",
    cat_2: "Rigid Busbar",
    cat_3: "Aluminum Busbar",
    cat_4: "Dip Coated / Spray Painted Busbar",
    cat_5: "Copper Braided Wires",
    cat_6: "Braided Wire",
    cat_7: "Composite Laminated Busbar",
    cat_8: "Cells Contact System (CCS) Integrated Busbar",
    cat_9: "Insulated Flexible Busbar",
    // Hot Products
    hot_tag: "Popular",
    hot_title: "Hot Products",
    hot_view: "View Details",
    hp1: "New Type Power Grid Soft Connection",
    hp2: "PI Winding Insulated Busbar",
    hp3: "Battery Pack Connector",
    hp4: "Processing Extruded Materials",
    hp5: "CCS Integrated Busbar",
    hp6: "Flexible Copper Braided",
    // About
    about_tag: "Company Introduction",
    about_title: "About Zhongyan",
    about_desc: "Zhejiang Zhongyan New Energy Co., Ltd. focuses on the manufacturing of new energy conductive components, specializing in high-voltage electrical copper-foil soft connectors, special-shaped soft connections and other products. We serve power transmission & distribution, new energy electric vehicles, rail transit and communication.",
    about_f1_title: "Advanced Manufacturing",
    about_f1_desc: "State-of-the-art production lines",
    about_f2_title: "Quality Assured",
    about_f2_desc: "ISO certified processes",
    about_f3_title: "R&D Innovation",
    about_f3_desc: "Dedicated technical team",
    about_f4_title: "Global Export",
    about_f4_desc: "Serving clients worldwide",
    about_years: "Years",
    about_years_label: "Since Established",
    about_cta: "Learn More About Us",
    // Process
    proc_tag: "Workmanship",
    proc_title: "Production Process",
    proc_1: "Material Selection & Preparation",
    proc_2: "Precision Cutting",
    proc_3: "Stacking & Fixing",
    proc_4: "Core Welding",
    // Services
    srv_tag: "Why Choose Us",
    srv_title: "Service & Support",
    srv_1_t: "Quality Assurance",
    srv_1_d: "We have a comprehensive quality management system with advanced testing equipment ensuring every product meets the highest standards.",
    srv_2_t: "Process Standard",
    srv_2_d: "Strictly following manufacturing standards, we use high-quality raw materials and precision processes to ensure reliable products.",
    srv_3_t: "Customization",
    srv_3_d: "We have a professional R&D team and are the first in the industry to provide highly customized solutions tailored to client requirements.",
    srv_4_t: "Cost & Supply Chain",
    srv_4_d: "By optimizing the internal supply chain we achieve high quality at competitive prices with fast delivery capabilities.",
    srv_cta_text: "Let's start something great together.",
    srv_cta_btn: "Contact Us",
    // News
    news_tag: "Information",
    news_title: "Events & News",
    news_cat: "Company",
    news_1_t: "Zhongyan New Energy Launches New Generation of Irregular Soft Connection Series",
    news_1_d: "Our latest innovation in flexible busbar technology brings unprecedented performance for EV applications.",
    news_2_t: "Zhongyan Achieves ISO 9001:2015 Quality Management Certification",
    news_2_d: "A major milestone in our commitment to delivering world-class products and services to our global clients.",
    news_3_t: "Expanding Production Capacity to Meet Growing Market Demand",
    news_3_d: "New 10,000 m² production facility to support growing demand across Asia-Pacific and Middle East markets.",
    news_more: "View More",
    // CTA
    cta_eyebrow: "Partner with us",
    cta_title_1: "Start Your Cooperation Journey",
    cta_title_2: "With Zhongyan",
    cta_sub: "Join 3,000+ satisfied clients worldwide. Get in touch for a custom solution.",
    cta_btn1: "Get in Touch",
    cta_btn2: "Download Catalogue",
    // Footer
    footer_desc: "Leading manufacturer of flexible busbars, rigid busbars and new energy conductive components. Trusted by clients worldwide since 2022.",
    footer_col1: "Products",
    footer_col2: "Company",
    footer_col3: "Contact",
    footer_about: "About Us",
    footer_equipment: "Equipment",
    footer_quality: "Quality",
    footer_news: "News",
    footer_careers: "Careers",
    footer_copy: "© 2025 Zhejiang Zhongyan New Energy Co., Ltd. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",
    // About page
    about_banner_sub: "Pioneering new energy conductive components since 2022.",
    about_desc2: "The company has an experienced technical team and professional equipment, with mature technical accumulation and systematic quality management. With modern production and quality management systems, we ensure stable processes, rapid response and provide customers with highly reliable products.",
    about_stat_exp: "Years Experience",
    about_stat_facility: "m² Facility",
    about_stat_tech: "Tech Personnel",
    about_foundation_tag: "Our Foundation",
    about_mvv_title: "Mission, Vision &amp; Values",
    about_mission_title: "Mission",
    about_mission_text: "To provide the world's most reliable and innovative new energy conductive components, enabling a cleaner and more efficient energy future.",
    about_vision_title: "Vision",
    about_vision_text: "To become the global leader in flexible busbar technology, driving the electrification of transportation and the adoption of renewable energy worldwide.",
    about_values_title: "Values",
    about_values_text: "Quality first, innovation-driven, customer-centered, and sustainability-focused. We build long-term partnerships through trust and excellence.",
    about_journey_tag: "Our Journey",
    about_milestones_title: "Company Milestones",
    about_journey_desc: "From a focused startup to a recognized industry leader — our journey is defined by continuous innovation and relentless pursuit of quality.",
    about_tl_2022: "Zhejiang Zhongyan New Energy Co., Ltd. officially established. First production line commissioned.",
    about_tl_2023: "Expanded product range to include CCS integrated busbars for EV battery packs. Signed first major OEM agreement.",
    about_tl_2024: "ISO 9001:2015 certification achieved. Production capacity doubled with new automated cutting lines. Entered Middle East market.",
    about_tl_2025: "3,000+ cooperative clients worldwide. New 10,000 m² expansion completed. Launch of next-generation composite laminated busbar series.",
    about_trusted_tag: "Trusted By",
    about_partners_title: "Our Partners &amp; Clients",
    about_partners_sub: "Serving leading manufacturers in EV, energy storage, rail transit and power distribution.",
    // News page
    news_banner_sub: "Latest updates, industry insights and company announcements.",
    news_featured_title: "Zhongyan Launches New Generation Aluminum Busbar Series for Energy Storage",
    news_featured_excerpt: "Our latest aluminum busbar range brings a 20% weight reduction while maintaining identical current-carrying capacity — a breakthrough for large-scale BESS installations where weight-to-power ratio is critical. The new series is certified to GB/T 5585 and fully RoHS compliant.",
    news_read_full: "Read Full Article",
    news_view_more: "View More",
    news_c1_title: "Zhongyan New Energy Launches New Generation of Irregular Soft Connection Series",
    news_c2_title: "Zhongyan Achieves IATF 16949 Automotive Quality Management Certification",
    news_c3_title: "New 10,000 m² Production Facility Commissioned to Meet Growing Global Demand",
    news_c4_title: "Zhongyan Enters Middle East Market with First Major Distribution Partnership",
    news_c5_title: "High-Frequency Inverter Busbar Series — Now Available for Solar &amp; Wind Applications",
    news_c6_title: "CCS Integrated Busbar with Embedded NTC Sensors Launched for Battery Management",
    news_sidebar_cat_title: "Categories",
    news_cat_company: "Company News",
    news_cat_product: "Product Launches",
    news_cat_cert: "Certifications",
    news_cat_industry: "Industry",
    news_cat_expansion: "Expansion",
    news_cat_exhibitions: "Exhibitions",
    // Equipment page
    equip_banner_sub: "State-of-the-art manufacturing equipment and 30,000+ m² production facility.",
    equip_facility_tag: "Our Facility",
    equip_facility_title: "Manufacturing at Scale",
    equip_facility_sub: "Zhongyan's production facility is equipped with the latest automation technology, enabling precise, high-volume manufacturing with consistent quality.",
    equip_stat_area: "m² Production Area",
    equip_stat_lines: "Production Lines",
    equip_stat_personnel: "Technical Personnel",
    equip_stat_shift: "Shift Operations (24/7)",
    equip_key_tag: "Machinery",
    equip_key_title: "Key Equipment",
    equip_key_sub: "Advanced machinery enabling precision manufacturing across all product lines.",
    equip_1_name: "Hydraulic Precision Press",
    equip_1_desc: "Computer-controlled hydraulic pressing for consistent busbar lamination with ±0.02mm tolerance.",
    equip_2_name: "CNC Laser Cutting System",
    equip_2_desc: "High-speed fiber laser cutting for precise copper and aluminum sheet processing with minimal waste.",
    equip_3_name: "Ultrasonic Welding Machine",
    equip_3_desc: "Automated ultrasonic welding for reliable cold-pressure bonding of copper foil stacks without thermal damage.",
    equip_4_name: "Dip Coating Line",
    equip_4_desc: "Automated insulation coating system for uniform dielectric protection across all busbar surfaces.",
    equip_5_name: "Hi-Pot Testing System",
    equip_5_desc: "Full-automated high-voltage dielectric withstand testing on 100% of produced busbars.",
    equip_6_name: "CMM Inspection Center",
    equip_6_desc: "Coordinate measuring machine for precise dimensional verification of complex busbar geometries.",
    // Quality page
    qual_banner_sub: "IATF16949 · ISO9001 · ISO14001 · ISO45001 — Four international certifications, zero compromise.",
    qual_commitment_tag: "Our Commitment",
    qual_commitment_title: "Quality First, Always",
    qual_commitment_desc1: "At Zhongyan, quality is not a department — it's our culture. Every busbar that leaves our facility passes through a rigorous multi-stage inspection process, backed by internationally recognized management systems.",
    qual_commitment_desc2: "We maintain 100% electrical testing on all products, with traceability from raw material to final delivery. Our zero-defect philosophy ensures that our clients receive only the highest-performing components.",
    qual_check1: "100% Hi-Pot electrical testing on every unit",
    qual_check2: "Full raw material traceability per batch",
    qual_check3: "CMM dimensional inspection on complex parts",
    qual_check4: "IATF 16949 automotive-grade quality control",
    qual_cert_tag: "Accreditations",
    qual_cert_title: "International Certifications",
    qual_cert_sub: "Four globally recognized management system certifications ensuring our products meet the highest international standards.",
    qual_iatf_desc: "Automotive Quality Management System — the highest standard for automotive component suppliers globally.",
    qual_iso9001_desc: "Quality Management System ensuring consistent product quality, customer satisfaction and continuous improvement.",
    qual_iso14001_desc: "Environmental Management System demonstrating our commitment to sustainable, eco-responsible manufacturing.",
    qual_iso45001_desc: "Occupational Health &amp; Safety Management System protecting our workforce and ensuring safe production environments.",
    // Contact page
    contact_banner_sub: "Get in touch — our team responds within 24 hours.",
    contact_phone_label: "Phone",
    contact_whatsapp_label: "WhatsApp",
    contact_email_label: "Email",
    contact_address_label: "Address",
    contact_getintouch_tag: "Get In Touch",
    contact_form_title: "Send Us a Message",
    contact_form_desc: "Whether you need a custom busbar solution, a product sample, pricing information or just have a question — our team is ready to help. Fill in the form and we'll get back to you within 24 hours.",
    contact_factory_loc: "Factory Location",
    contact_factory_addr_lbl: "Factory Address",
    contact_phone_wa_lbl: "Phone / WhatsApp",
    contact_email_lbl: "Email",
    contact_hours_lbl: "Working Hours",
    contact_hours_val: "24 Hours / 7 Days",
    contact_hours_sub: "Always available · Factory tours available by appointment",
    contact_quote_title: "Request a Quote or Sample",
    contact_firstname: "First Name",
    contact_lastname: "Last Name",
    contact_email_field: "Email Address",
    contact_company: "Company",
    contact_product_interest: "Product of Interest",
    contact_message: "Message",
    contact_submit: "Send Message",
  },
  fr: {
    nav_products: "Produits",
    nav_about: "À Propos",
    nav_equipment: "Équipement & Capacité",
    nav_quality: "Qualité",
    nav_news: "Actualités",
    nav_contact: "Contact",
    hero_tag: "Fabricant Leader du Secteur",
    hero_title_1: "Barres Collectrices",
    hero_title_2: "Flexibles Sur Mesure",
    hero_title_3: "Solutions Énergie Nouvelle Sur Mesure",
    hero_desc: "Barres collectrices flexibles haute conductivité et faible résistance pour véhicules électriques, stockage d'énergie, transport ferroviaire et distribution d'énergie.",
    hero_cta1: "Explorer les Produits",
    hero_cta2: "Contactez-Nous",
    hero_scroll: "Défiler",
    stat_founded: "Fondée",
    stat_area: "m² Superficie de Production",
    stat_personnel: "Personnel Technique",
    stat_clients: "Clients Coopératifs",
    stat_products: "Catégories de Produits",
    cat_tag: "Notre Gamme",
    cat_title: "Catégorie de Produits",
    cat_1: "Barre Collectrice Flexible",
    cat_2: "Barre Collectrice Rigide",
    cat_3: "Barre Collectrice en Aluminium",
    cat_4: "Barre Collectrice Enduite / Peinte",
    cat_5: "Fils Tressés en Cuivre",
    cat_6: "Fil Tressé",
    cat_7: "Barre Collectrice Composite Laminée",
    cat_8: "Barre Collectrice CCS Intégrée",
    cat_9: "Barre Collectrice Flexible Isolée",
    hot_tag: "Populaire",
    hot_title: "Produits Phares",
    hot_view: "Voir les Détails",
    hp1: "Connexion Flexible pour Nouveau Réseau Électrique",
    hp2: "Barre Collectrice Isolée à Enroulement PI",
    hp3: "Connecteur de Pack de Batteries",
    hp4: "Traitement des Matériaux Extrudés",
    hp5: "Barre Collectrice CCS Intégrée",
    hp6: "Cuivre Tressé Flexible",
    about_tag: "Présentation de l'Entreprise",
    about_title: "À Propos de Zhongyan",
    about_desc: "Zhejiang Zhongyan New Energy Co., Ltd. se spécialise dans la fabrication de composants conducteurs pour les nouvelles énergies, notamment les connecteurs flexibles en feuille de cuivre haute tension et les connexions flexibles de formes spéciales. Nous servons la distribution d'énergie, les véhicules électriques, le transport ferroviaire et les télécommunications.",
    about_f1_title: "Fabrication Avancée",
    about_f1_desc: "Lignes de production de dernière génération",
    about_f2_title: "Qualité Garantie",
    about_f2_desc: "Processus certifiés ISO",
    about_f3_title: "Innovation R&D",
    about_f3_desc: "Équipe technique dédiée",
    about_f4_title: "Export Mondial",
    about_f4_desc: "Au service de clients dans le monde entier",
    about_years: "Ans",
    about_years_label: "Depuis la Fondation",
    about_cta: "En Savoir Plus Sur Nous",
    proc_tag: "Savoir-Faire",
    proc_title: "Processus de Production",
    proc_1: "Sélection et Préparation des Matériaux",
    proc_2: "Découpe de Précision",
    proc_3: "Assemblage et Fixation",
    proc_4: "Soudage du Noyau",
    srv_tag: "Pourquoi Nous Choisir",
    srv_title: "Service & Support",
    srv_1_t: "Assurance Qualité",
    srv_1_d: "Nous disposons d'un système complet de gestion de la qualité avec des équipements de test avancés garantissant que chaque produit répond aux normes les plus élevées.",
    srv_2_t: "Norme de Processus",
    srv_2_d: "En respectant strictement les normes de fabrication, nous utilisons des matières premières de haute qualité et des processus de précision pour garantir des produits fiables.",
    srv_3_t: "Personnalisation",
    srv_3_d: "Nous disposons d'une équipe R&D professionnelle et sommes les premiers dans l'industrie à proposer des solutions hautement personnalisées adaptées aux exigences des clients.",
    srv_4_t: "Coût & Chaîne d'Approvisionnement",
    srv_4_d: "En optimisant la chaîne d'approvisionnement interne, nous atteignons une haute qualité à des prix compétitifs avec des capacités de livraison rapides.",
    srv_cta_text: "Commençons quelque chose de grand ensemble.",
    srv_cta_btn: "Contactez-Nous",
    news_tag: "Information",
    news_title: "Événements & Actualités",
    news_cat: "Entreprise",
    news_1_t: "Zhongyan New Energy Lance la Nouvelle Génération de la Série de Connexions Flexibles",
    news_1_d: "Notre dernière innovation en technologie de barres collectrices flexibles apporte des performances sans précédent pour les applications de véhicules électriques.",
    news_2_t: "Zhongyan Obtient la Certification ISO 9001:2015 de Gestion de la Qualité",
    news_2_d: "Une étape majeure dans notre engagement à fournir des produits et services de classe mondiale à nos clients mondiaux.",
    news_3_t: "Extension de la Capacité de Production pour Répondre à la Demande Croissante",
    news_3_d: "Nouvelle installation de production de 10 000 m² pour soutenir la demande croissante en Asie-Pacifique et au Moyen-Orient.",
    news_more: "Voir Plus",
    cta_eyebrow: "Associez-vous avec nous",
    cta_title_1: "Commencez Votre Voyage de Coopération",
    cta_title_2: "Avec Zhongyan",
    cta_sub: "Rejoignez plus de 3 000 clients satisfaits dans le monde. Contactez-nous pour une solution personnalisée.",
    cta_btn1: "Prendre Contact",
    cta_btn2: "Télécharger le Catalogue",
    footer_desc: "Fabricant leader de barres collectrices flexibles, rigides et de composants conducteurs pour les nouvelles énergies. Approuvé par des clients du monde entier depuis 2022.",
    footer_col1: "Produits",
    footer_col2: "Entreprise",
    footer_col3: "Contact",
    footer_about: "À Propos de Nous",
    footer_equipment: "Équipement",
    footer_quality: "Qualité",
    footer_news: "Actualités",
    footer_careers: "Carrières",
    footer_copy: "© 2025 Zhejiang Zhongyan New Energy Co., Ltd. Tous droits réservés.",
    footer_privacy: "Politique de Confidentialité",
    footer_terms: "Conditions d'Utilisation",
    // About page
    about_banner_sub: "Pionniers des composants conducteurs pour les nouvelles énergies depuis 2022.",
    about_desc2: "L'entreprise dispose d'une équipe technique expérimentée et d'équipements professionnels, avec une accumulation technique mature et un système de gestion de la qualité systématique. Grâce à des systèmes modernes de production et de gestion, nous garantissons des processus stables, une réponse rapide et des produits hautement fiables.",
    about_stat_exp: "Ans d'Expérience",
    about_stat_facility: "m² d'Usine",
    about_stat_tech: "Personnel Technique",
    about_foundation_tag: "Notre Fondation",
    about_mvv_title: "Mission, Vision &amp; Valeurs",
    about_mission_title: "Mission",
    about_mission_text: "Fournir les composants conducteurs pour les nouvelles énergies les plus fiables et innovants au monde, permettant un avenir énergétique plus propre et plus efficace.",
    about_vision_title: "Vision",
    about_vision_text: "Devenir le leader mondial de la technologie des barres collectrices flexibles, en favorisant l'électrification des transports et l'adoption des énergies renouvelables dans le monde entier.",
    about_values_title: "Valeurs",
    about_values_text: "La qualité en premier, axé sur l'innovation, centré sur le client et soucieux du développement durable. Nous construisons des partenariats à long terme fondés sur la confiance et l'excellence.",
    about_journey_tag: "Notre Parcours",
    about_milestones_title: "Étapes Clés de l'Entreprise",
    about_journey_desc: "D'une startup ciblée à un leader industriel reconnu — notre parcours est défini par une innovation continue et une poursuite incessante de la qualité.",
    about_tl_2022: "Zhejiang Zhongyan New Energy Co., Ltd. officiellement fondée. Première ligne de production mise en service.",
    about_tl_2023: "Gamme élargie pour inclure des barres CCS intégrées pour batteries de VE. Premier accord OEM majeur signé.",
    about_tl_2024: "Certification ISO 9001:2015 obtenue. Capacité doublée avec nouvelles lignes de découpe automatisées. Entrée sur le marché du Moyen-Orient.",
    about_tl_2025: "Plus de 3 000 clients coopératifs dans le monde. Nouvelle extension de 10 000 m² achevée. Lancement de la prochaine génération de barres laminées composites.",
    about_trusted_tag: "Ils Nous Font Confiance",
    about_partners_title: "Nos Partenaires &amp; Clients",
    about_partners_sub: "Au service des principaux fabricants dans les domaines des véhicules électriques, du stockage d'énergie, du transport ferroviaire et de la distribution d'énergie.",
    // News page
    news_banner_sub: "Dernières actualités, insights sectoriels et annonces de l'entreprise.",
    news_featured_title: "Zhongyan Lance la Nouvelle Génération de Barres Collectrices en Aluminium pour le Stockage d'Énergie",
    news_featured_excerpt: "Notre nouvelle gamme offre une réduction de poids de 20% tout en maintenant une capacité de transport de courant identique — une percée pour les installations BESS à grande échelle.",
    news_read_full: "Lire l'Article Complet",
    news_view_more: "Voir Plus",
    news_c1_title: "Zhongyan Lance la Nouvelle Génération de la Série de Connexions Flexibles Irrégulières",
    news_c2_title: "Zhongyan Obtient la Certification IATF 16949 de Gestion de la Qualité Automobile",
    news_c3_title: "Nouvelle Usine de 10 000 m² Mise en Service pour Répondre à la Demande Mondiale",
    news_c4_title: "Zhongyan Entre sur le Marché du Moyen-Orient avec un Premier Partenariat de Distribution",
    news_c5_title: "Série de Barres pour Onduleurs Haute Fréquence — Disponible pour Applications Solaires et Éoliennes",
    news_c6_title: "Barre CCS Intégrée avec Capteurs NTC Embarqués pour la Gestion de Batterie",
    news_sidebar_cat_title: "Catégories",
    news_cat_company: "Actualités Entreprise",
    news_cat_product: "Lancements de Produits",
    news_cat_cert: "Certifications",
    news_cat_industry: "Industrie",
    news_cat_expansion: "Expansion",
    news_cat_exhibitions: "Expositions",
    // Equipment page
    equip_banner_sub: "Équipements de fabrication de pointe et installation de production de plus de 30 000 m².",
    equip_facility_tag: "Notre Installation",
    equip_facility_title: "Fabrication à Grande Échelle",
    equip_facility_sub: "L'installation de Zhongyan est équipée des dernières technologies d'automatisation, permettant une fabrication précise et à haut volume avec une qualité constante.",
    equip_stat_area: "m² Surface de Production",
    equip_stat_lines: "Lignes de Production",
    equip_stat_personnel: "Personnel Technique",
    equip_stat_shift: "Équipes (24/7)",
    equip_key_tag: "Machinerie",
    equip_key_title: "Équipements Clés",
    equip_key_sub: "Machinerie avancée permettant une fabrication de précision sur toutes les lignes de produits.",
    equip_1_name: "Presse Hydraulique de Précision",
    equip_1_desc: "Pressage hydraulique à commande informatique pour une lamination constante avec tolérance ±0,02 mm.",
    equip_2_name: "Système de Découpe Laser CNC",
    equip_2_desc: "Découpe laser à fibre haute vitesse pour un traitement précis des feuilles de cuivre et d'aluminium.",
    equip_3_name: "Machine à Souder par Ultrasons",
    equip_3_desc: "Soudage automatisé par ultrasons pour une liaison fiable par pression à froid des empilements de feuilles de cuivre.",
    equip_4_name: "Ligne de Revêtement par Trempage",
    equip_4_desc: "Système de revêtement isolant automatisé pour une protection diélectrique uniforme sur toutes les surfaces.",
    equip_5_name: "Système de Test Hi-Pot",
    equip_5_desc: "Test automatisé de tenue diélectrique haute tension sur 100% des barres collectrices produites.",
    equip_6_name: "Centre d'Inspection CMM",
    equip_6_desc: "Machine à mesurer tridimensionnelle pour la vérification dimensionnelle des géométries complexes.",
    // Quality page
    qual_banner_sub: "IATF16949 · ISO9001 · ISO14001 · ISO45001 — Quatre certifications internationales, zéro compromis.",
    qual_commitment_tag: "Notre Engagement",
    qual_commitment_title: "La Qualité en Premier, Toujours",
    qual_commitment_desc1: "Chez Zhongyan, la qualité n'est pas un département — c'est notre culture. Chaque barre collectrice passe par un processus d'inspection rigoureux en plusieurs étapes, soutenu par des systèmes de gestion reconnus internationalement.",
    qual_commitment_desc2: "Nous maintenons des tests électriques à 100% sur tous les produits, avec traçabilité de la matière première jusqu'à la livraison finale. Notre philosophie zéro défaut garantit les composants les plus performants.",
    qual_check1: "Tests électriques Hi-Pot à 100% sur chaque unité",
    qual_check2: "Traçabilité complète des matières premières par lot",
    qual_check3: "Inspection dimensionnelle CMM sur les pièces complexes",
    qual_check4: "Contrôle qualité automobile IATF 16949",
    qual_cert_tag: "Accréditations",
    qual_cert_title: "Certifications Internationales",
    qual_cert_sub: "Quatre certifications de système de gestion reconnus mondialement garantissant les normes internationales les plus élevées.",
    qual_iatf_desc: "Système de Gestion de la Qualité Automobile — la norme la plus élevée pour les fournisseurs de composants automobiles.",
    qual_iso9001_desc: "Système de Gestion de la Qualité garantissant une qualité constante, la satisfaction client et l'amélioration continue.",
    qual_iso14001_desc: "Système de Management Environnemental démontrant notre engagement envers une fabrication durable et éco-responsable.",
    qual_iso45001_desc: "Système de Management de la Santé et Sécurité au Travail protégeant notre personnel.",
    // Contact page
    contact_banner_sub: "Contactez-nous — notre équipe répond dans les 24 heures.",
    contact_phone_label: "Téléphone",
    contact_whatsapp_label: "WhatsApp",
    contact_email_label: "Email",
    contact_address_label: "Adresse",
    contact_getintouch_tag: "Nous Contacter",
    contact_form_title: "Envoyez-Nous un Message",
    contact_form_desc: "Que vous ayez besoin d'une solution personnalisée, d'un échantillon, d'informations tarifaires ou d'une question — notre équipe est prête à vous aider. Remplissez le formulaire, nous répondrons dans les 24 heures.",
    contact_factory_loc: "Emplacement de l'Usine",
    contact_factory_addr_lbl: "Adresse de l'Usine",
    contact_phone_wa_lbl: "Téléphone / WhatsApp",
    contact_email_lbl: "Email",
    contact_hours_lbl: "Heures de Travail",
    contact_hours_val: "24 Heures / 7 Jours",
    contact_hours_sub: "Toujours disponible · Visites d'usine sur rendez-vous",
    contact_quote_title: "Demander un Devis ou un Échantillon",
    contact_firstname: "Prénom",
    contact_lastname: "Nom de Famille",
    contact_email_field: "Adresse Email",
    contact_company: "Entreprise",
    contact_product_interest: "Produit d'Intérêt",
    contact_message: "Message",
    contact_submit: "Envoyer le Message",
  },
  es: {
    nav_products: "Productos",
    nav_about: "Sobre Nosotros",
    nav_equipment: "Equipos y Capacidad",
    nav_quality: "Calidad",
    nav_news: "Noticias",
    nav_contact: "Contacto",
    hero_tag: "Fabricante Líder del Sector",
    hero_title_1: "Barras Colectoras",
    hero_title_2: "Flexibles",
    hero_title_3: "Soluciones de Nueva Energía a Medida",
    hero_desc: "Barras colectoras flexibles de alta conductividad y baja resistencia para vehículos eléctricos, almacenamiento de energía, tránsito ferroviario y distribución de energía.",
    hero_cta1: "Ver Productos",
    hero_cta2: "Contáctanos",
    hero_scroll: "Desplazar",
    stat_founded: "Fundada",
    stat_area: "m² Área de Producción",
    stat_personnel: "Personal Técnico",
    stat_clients: "Clientes Cooperativos",
    stat_products: "Categorías de Productos",
    cat_tag: "Nuestra Gama",
    cat_title: "Categorías de Productos",
    cat_1: "Barra Colectora Flexible",
    cat_2: "Barra Colectora Rígida",
    cat_3: "Barra Colectora de Aluminio",
    cat_4: "Barra Colectora con Recubrimiento",
    cat_5: "Cables Trenzados de Cobre",
    cat_6: "Cable Trenzado",
    cat_7: "Barra Colectora Laminada Compuesta",
    cat_8: "Barra Colectora CCS Integrada",
    cat_9: "Barra Colectora Flexible Aislada",
    hot_tag: "Popular",
    hot_title: "Productos Destacados",
    hot_view: "Ver Detalles",
    hp1: "Conexión Flexible para Nueva Red Eléctrica",
    hp2: "Barra Colectora Aislada con Bobinado PI",
    hp3: "Conector de Pack de Baterías",
    hp4: "Procesamiento de Materiales Extruidos",
    hp5: "Barra Colectora CCS Integrada",
    hp6: "Cobre Trenzado Flexible",
    about_tag: "Introducción a la Empresa",
    about_title: "Sobre Zhongyan",
    about_desc: "Zhejiang Zhongyan New Energy Co., Ltd. se especializa en la fabricación de componentes conductores de nueva energía. Servimos a la distribución de energía, vehículos eléctricos, tránsito ferroviario y telecomunicaciones.",
    about_f1_title: "Fabricación Avanzada",
    about_f1_desc: "Líneas de producción de última generación",
    about_f2_title: "Calidad Garantizada",
    about_f2_desc: "Procesos certificados ISO",
    about_f3_title: "Innovación I+D",
    about_f3_desc: "Equipo técnico dedicado",
    about_f4_title: "Exportación Global",
    about_f4_desc: "Sirviendo a clientes mundialmente",
    about_years: "Años",
    about_years_label: "Desde la Fundación",
    about_cta: "Más Sobre Nosotros",
    proc_tag: "Artesanía",
    proc_title: "Proceso de Producción",
    proc_1: "Selección y Preparación de Materiales",
    proc_2: "Corte de Precisión",
    proc_3: "Apilamiento y Fijación",
    proc_4: "Soldadura del Núcleo",
    srv_tag: "¿Por Qué Elegirnos?",
    srv_title: "Servicio y Soporte",
    srv_1_t: "Garantía de Calidad",
    srv_1_d: "Contamos con un sistema integral de gestión de calidad con equipos de prueba avanzados.",
    srv_2_t: "Estándar de Proceso",
    srv_2_d: "Seguimos estrictamente los estándares de fabricación usando materias primas de alta calidad.",
    srv_3_t: "Personalización",
    srv_3_d: "Equipo profesional de I+D ofreciendo soluciones altamente personalizadas para cada cliente.",
    srv_4_t: "Costo y Cadena de Suministro",
    srv_4_d: "Cadena de suministro optimizada logrando alta calidad a precios competitivos con entrega rápida.",
    srv_cta_text: "Comencemos algo grande juntos.",
    srv_cta_btn: "Contáctanos",
    news_tag: "Información",
    news_title: "Eventos y Noticias",
    news_cat: "Empresa",
    news_1_t: "Zhongyan New Energy Lanza Nueva Generación de Serie de Conexiones Flexibles",
    news_1_d: "Nuestra última innovación en barras colectoras flexibles para aplicaciones de vehículos eléctricos.",
    news_2_t: "Zhongyan Obtiene la Certificación ISO 9001:2015",
    news_2_d: "Un hito en nuestro compromiso de ofrecer productos y servicios de clase mundial.",
    news_3_t: "Ampliación de la Capacidad de Producción",
    news_3_d: "Nueva instalación de 10.000 m² para apoyar la creciente demanda global.",
    news_more: "Ver Más",
    cta_eyebrow: "Asóciate con nosotros",
    cta_title_1: "Comienza tu Viaje de Cooperación",
    cta_title_2: "Con Zhongyan",
    cta_sub: "Únete a más de 3.000 clientes satisfechos. Contáctanos para una solución personalizada.",
    cta_btn1: "Ponerse en Contacto",
    cta_btn2: "Descargar Catálogo",
    footer_desc: "Fabricante líder de barras colectoras flexibles y componentes conductores de nueva energía.",
    footer_col1: "Productos",
    footer_col2: "Empresa",
    footer_col3: "Contacto",
    footer_about: "Sobre Nosotros",
    footer_equipment: "Equipos",
    footer_quality: "Calidad",
    footer_news: "Noticias",
    footer_careers: "Carreras",
    footer_copy: "© 2025 Zhejiang Zhongyan New Energy Co., Ltd. Todos los derechos reservados.",
    footer_privacy: "Política de Privacidad",
    footer_terms: "Términos de Uso",
  },
  ar: {
    nav_products: "المنتجات",
    nav_about: "عن الشركة",
    nav_equipment: "المعدات والطاقة الإنتاجية",
    nav_quality: "الجودة",
    nav_news: "الأخبار",
    nav_contact: "اتصل بنا",
    hero_tag: "شركة رائدة في الصناعة",
    hero_title_1: "قضبان توصيل",
    hero_title_2: "مرنة مخصصة",
    hero_title_3: "حلول طاقة جديدة متكاملة",
    hero_desc: "قضبان توصيل مرنة عالية التوصيل ومنخفضة المقاومة لمركبات السيارات الكهربائية وتخزين الطاقة والنقل بالسكك الحديدية وتوزيع الطاقة.",
    hero_cta1: "استعرض المنتجات",
    hero_cta2: "تواصل معنا",
    hero_scroll: "تمرير",
    stat_founded: "تأسست عام",
    stat_area: "م² مساحة التصنيع",
    stat_personnel: "كادر تقني متخصص",
    stat_clients: "عميل متعاون",
    stat_products: "فئات المنتجات",
    cat_tag: "تشكيلتنا",
    cat_title: "فئات المنتجات",
    cat_1: "قضبان التوصيل المرنة",
    cat_2: "قضبان التوصيل الصلبة",
    cat_3: "قضبان الألومنيوم",
    cat_4: "قضبان مطلية بالغمس / الرش",
    cat_5: "أسلاك نحاسية مضفرة",
    cat_6: "سلك مضفر",
    cat_7: "قضبان مركبة متعددة الطبقات",
    cat_8: "قضبان CCS متكاملة لخلايا البطاريات",
    cat_9: "قضبان توصيل مرنة معزولة",
    hot_tag: "الأكثر طلباً",
    hot_title: "المنتجات الرائجة",
    hot_view: "عرض التفاصيل",
    hp1: "وصلة مرنة لشبكة الطاقة الجديدة",
    hp2: "قضيب توصيل معزول بلفائف PI",
    hp3: "موصل حزمة البطاريات",
    hp4: "معالجة المواد المبثوقة",
    hp5: "قضيب CCS متكامل",
    hp6: "نحاس مضفر مرن",
    about_tag: "نبذة عن الشركة",
    about_title: "عن جونغيان",
    about_desc: "تتخصص شركة جيجيانغ جونغيان للطاقة الجديدة في تصنيع المكونات الموصلة للطاقة الجديدة، بما فيها موصلات رقائق النحاس عالية الجهد والوصلات المرنة وغيرها. نخدم قطاعات نقل الطاقة وتوزيعها، والمركبات الكهربائية الجديدة، والنقل بالسكك الحديدية والاتصالات.",
    about_f1_title: "تصنيع متطور",
    about_f1_desc: "خطوط إنتاج حديثة المستوى",
    about_f2_title: "جودة مضمونة",
    about_f2_desc: "عمليات معتمدة بشهادة ISO",
    about_f3_title: "ابتكار بحث وتطوير",
    about_f3_desc: "فريق تقني متخصص",
    about_f4_title: "تصدير عالمي",
    about_f4_desc: "خدمة عملاء حول العالم",
    about_years: "سنوات",
    about_years_label: "منذ التأسيس",
    about_cta: "اعرف أكثر عنا",
    proc_tag: "الحرفية والجودة",
    proc_title: "عملية الإنتاج",
    proc_1: "اختيار المواد والتحضير",
    proc_2: "القطع الدقيق",
    proc_3: "التجميع والتثبيت",
    proc_4: "اللحام الأساسي",
    srv_tag: "لماذا تختارنا",
    srv_title: "الخدمة والدعم",
    srv_1_t: "ضمان الجودة",
    srv_1_d: "لدينا نظام شامل لإدارة الجودة مع معدات اختبار متطورة تضمن أن كل منتج يلبي أعلى المعايير.",
    srv_2_t: "معايير العمليات",
    srv_2_d: "نلتزم بصرامة بمعايير التصنيع، ونستخدم مواد خام عالية الجودة وعمليات دقيقة لضمان منتجات موثوقة.",
    srv_3_t: "التخصيص",
    srv_3_d: "لدينا فريق متخصص في البحث والتطوير وكنا أوائل في الصناعة لتقديم حلول مخصصة عالية الجودة.",
    srv_4_t: "التكلفة وسلسلة التوريد",
    srv_4_d: "من خلال تحسين سلسلة التوريد الداخلية، نحقق جودة عالية بأسعار تنافسية مع قدرات توصيل سريعة.",
    srv_cta_text: "لنبدأ شيئاً عظيماً معاً.",
    srv_cta_btn: "تواصل معنا",
    news_tag: "معلومات",
    news_title: "الأحداث والأخبار",
    news_cat: "الشركة",
    news_1_t: "جونغيان للطاقة الجديدة تطلق الجيل الجديد من سلسلة الوصلات المرنة غير المنتظمة",
    news_1_d: "يجلب أحدث ابتكاراتنا في تكنولوجيا القضبان المرنة أداءً غير مسبوق لتطبيقات المركبات الكهربائية.",
    news_2_t: "جونغيان تحصل على شهادة ISO 9001:2015 لإدارة الجودة",
    news_2_d: "إنجاز رئيسي في التزامنا بتقديم منتجات وخدمات عالمية المستوى لعملائنا حول العالم.",
    news_3_t: "توسيع طاقة الإنتاج لتلبية الطلب المتزايد في السوق",
    news_3_d: "منشأة إنتاج جديدة بمساحة 10,000 م² لدعم الطلب المتزايد في منطقة آسيا والمحيط الهادئ والشرق الأوسط.",
    news_more: "عرض المزيد",
    cta_eyebrow: "تعاون معنا",
    cta_title_1: "ابدأ رحلة تعاونك",
    cta_title_2: "مع جونغيان",
    cta_sub: "انضم إلى أكثر من 3,000 عميل راضٍ حول العالم. تواصل معنا للحصول على حل مخصص.",
    cta_btn1: "تواصل معنا",
    cta_btn2: "تحميل الكتالوج",
    footer_desc: "شركة رائدة في تصنيع القضبان المرنة والصلبة ومكونات الطاقة الجديدة. موثوقة من قبل عملاء حول العالم منذ عام 2022.",
    footer_col1: "المنتجات",
    footer_col2: "الشركة",
    footer_col3: "تواصل معنا",
    footer_about: "عن الشركة",
    footer_equipment: "المعدات",
    footer_quality: "الجودة",
    footer_news: "الأخبار",
    footer_careers: "الوظائف",
    footer_copy: "© 2025 شركة جيجيانغ جونغيان للطاقة الجديدة. جميع الحقوق محفوظة.",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الاستخدام",
  }
};

/* ── Language Manager ─────────────────────────────────────── */
let currentLang = localStorage.getItem('zy_lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('zy_lang', lang);
  const t = T[lang];

  // Keep layout direction always LTR regardless of language
  document.documentElement.setAttribute('dir', 'ltr');
  document.documentElement.setAttribute('lang', lang);

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });
  applyLang(currentLang);
}

/* ── Header Scroll ────────────────────────────────────────── */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Menu ──────────────────────────────────────────── */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-close');
  if (!hamburger || !menu) return;
  hamburger.addEventListener('click', () => menu.classList.add('open'));
  if (close) close.addEventListener('click', () => menu.classList.remove('open'));
  menu.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => menu.classList.remove('open'));
  });
}

/* ── Parallax Hero ────────────────────────────────────────── */
function initParallax() {
  const heroContent = document.querySelector('.hero-content');
  const heroBg = document.querySelector('.hero-video-wrap');
  if (!heroContent) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      heroContent.style.transform = `translateY(${y * 0.25}px)`;
      if (heroBg) heroBg.style.transform = `translateY(${y * 0.12}px)`;
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
}

/* ── Scroll Animations ────────────────────────────────────── */
function initScrollAnim() {
  const els = document.querySelectorAll('.anim');
  if (!els.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
  );
  els.forEach(el => observer.observe(el));
}

/* ── Counter Animation ────────────────────────────────────── */
function animCount(el, target, duration = 2000) {
  const start = performance.now();
  const isFloat = target % 1 !== 0;
  const update = (time) => {
    const elapsed = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 3);
    const current = Math.round(eased * target);
    el.textContent = current.toLocaleString();
    if (elapsed < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const target = parseInt(e.target.getAttribute('data-count'));
          animCount(e.target, target);
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(c => observer.observe(c));
}

/* ── Product Carousel ─────────────────────────────────────── */
function initCarousel() {
  const track = document.querySelector('.products-track');
  if (!track) return;
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let idx = 0;
  const cards = track.querySelectorAll('.product-card');
  const visibleCount = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 900) return 2;
    return 4;
  };
  const maxIdx = () => Math.max(0, cards.length - visibleCount());
  const update = () => {
    idx = Math.max(0, Math.min(idx, maxIdx()));
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${idx * cardWidth}px)`;
  };
  if (nextBtn) nextBtn.addEventListener('click', () => { idx++; update(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { idx--; update(); });
  window.addEventListener('resize', update);
}

/* ── Product Filter ───────────────────────────────────────── */
function initFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-full-card');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        card.style.display = (filter === 'all' || cat === filter) ? 'block' : 'none';
      });
    });
  });
}

/* ── Active Nav Link ──────────────────────────────────────── */
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.getAttribute('data-page') === path) {
      link.classList.add('active');
    }
  });
}

/* ── Smooth Reveal Lines ──────────────────────────────────── */
function initLineReveal() {
  document.querySelectorAll('.reveal-line').forEach(el => {
    el.style.overflow = 'hidden';
    const inner = document.createElement('span');
    inner.style.display = 'block';
    inner.style.transform = 'translateY(100%)';
    inner.style.transition = 'transform 0.7s cubic-bezier(0.4,0,0.2,1)';
    inner.innerHTML = el.innerHTML;
    el.innerHTML = '';
    el.appendChild(inner);
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        inner.style.transform = 'translateY(0)';
        obs.unobserve(el);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
  });
}

/* ── Contact Form ─────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = currentLang === 'ar' ? 'إرسال الرسالة' : currentLang === 'es' ? 'Enviar Mensaje' : 'Send Message';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initParallax();
  initScrollAnim();
  initCounters();
  initCarousel();
  initFilter();
  initActiveNav();
  initLineReveal();
  initContactForm();
  initLang();
});
