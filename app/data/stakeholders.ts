export interface ProfileLink {
  label: string;
  url: string;
  icon?: string;
}

export interface Publication {
  title: string;
  url: string;
  year?: string;
  journal?: string;
}

export interface Member {
  number: string;
  name: string;
  title: string;
  organisation: string;
  type: string;
  city: string;
  sector_expertise: string;
  ar_relevance: string;
  key_projects: string;
  cbrt_twg_role: string;
  email: string;
  phone: string;
  linkedin: string;
  website: string;
  priority_tier: string;
  notes: string;
  gender?: string;
  photo?: string;
  profiles?: ProfileLink[];
  publications?: Publication[];
  status?: string;
}

export interface Sector {
  id: string;
  label: string;
  mfa: string;
  color: string;
  icon: string;
  members: Member[];
}

export const sectors: Sector[] = [
  {
    id: "crop-production",
    label: "Agriculture\nCrop Production",
    mfa: "MFA-1",
    color: "#16a34a",
    icon: "🌾",
    members: [
      {
        number: "1",
        name: "Dr Satiprasad Sahoo",
        title: "Founder & Director",
        organisation: "Prajukti Research Pvt Ltd; ex-ICARDA; IIT Guwahati",
        type: "Research / Independent",
        city: "Kolkata (Baruipur), India",
        gender: "Male",
        photo: "/members/satiprasad_photo.jpg",
        sector_expertise: "Remote sensing & GIS; groundwater hydrology; climate-resilient agriculture; drought & irrigation; hydrological modelling; machine learning for water-resource mapping",
        ar_relevance: "100+ publications (~2,080 citations) on water/drought/irrigation/groundwater applied to climate-resilient agriculture across India and Africa. His hydroclimate impact assessments and drought-resilience frameworks directly inform CBRT Crop Production thresholds for water-use efficiency, irrigation adequacy and groundwater security.",
        key_projects: "Prajukti Research hydro-environmental consulting; ICARDA dryland water resilience programmes; IIT Guwahati watershed research; groundwater-to-irrigation mapping (Morocco, Mahanadi basin, Sundarban); FuzzyAHP crop land-suitability modelling; co-editor Springer 'Sustainable Management of Delta Ecosystems Resilience' (2026)",
        cbrt_twg_role: "Core technical — Water-resilience, drought & irrigation criteria",
        email: "satispss@gmail.com",
        phone: "",
        linkedin: "",
        website: "https://satispss.wixsite.com/mysite",
        priority_tier: "Tier 1 — Core",
        status: "Confirmed — introductory call completed; interested",
        notes: "Excellent fit for the water-resilience, drought, irrigation, groundwater and geospatial-methods dimension of crop-production criteria. Prolific, India-focused (Mahanadi, Sundarban, eastern India), dryland water expertise from ICARDA. Lens is hydrology/geospatial rather than agronomy/breeding.",
        profiles: [
          { label: "Personal Website", url: "https://satispss.wixsite.com/mysite", icon: "🌐" },
          { label: "Google Scholar (~2,080 citations)", url: "https://scholar.google.co.in/citations?user=LvYFWPcAAAAJ&hl=en", icon: "🎓" },
          { label: "MDPI Sciprofiles", url: "https://sciprofiles.com/profile/1551135", icon: "📄" },
          { label: "ResearchGate", url: "https://www.researchgate.net/profile/Satiprasad-Sahoo", icon: "🔬" }
        ],
        publications: [
          {
            title: "Review of climate-resilient agriculture for ensuring food security: Sustainability opportunities and challenges of India (2024)",
            url: "https://www.sciencedirect.com/science/article/pii/S2665972724002125",
            year: "2024",
            journal: "Farming System (Elsevier)"
          },
          {
            title: "A review of sustainable drought resilience strategies for India's diverse agroclimatic landscapes (2026)",
            url: "https://iwaponline.com/hr/article/57/1/78/110679",
            year: "2026",
            journal: "Hydrology Research 57(1):78–105"
          },
          {
            title: "Climate-resilient strategies for sustainable groundwater management in Mahanadi River basin of Eastern India (2025)",
            url: "https://link.springer.com/article/10.1007/s11600-024-01466-5",
            year: "2025",
            journal: "Acta Geophysica"
          },
          {
            title: "Hybrid framework of physics-inspired optimization and explainable ensemble learning for irrigation classification mapping in Morocco (2026)",
            url: "https://www.researchgate.net/publication/397975454",
            year: "2026",
            journal: "ResearchGate"
          },
          {
            title: "Impact assessment of LULC changes on groundwater resources: Piyali river sub-basin, Sundarban (2026)",
            url: "https://link.springer.com/article/10.1007/s12517-026-12444-0",
            year: "2026",
            journal: "Arabian Journal of Geosciences"
          },
          {
            title: "Review of aquifer storage and recovery (ASR) opportunities and challenges in India (2025)",
            url: "https://link.springer.com/article/10.1007/s12665-025-12124-4",
            year: "2025",
            journal: "Environmental Earth Sciences"
          },
          {
            title: "Co-editor: Sustainable Management of Delta Ecosystems Resilience (Springer, 2026)",
            url: "https://link.springer.com/book/10.1007/978-3-032-16261-8",
            year: "2026",
            journal: "Springer Book"
          }
        ]
      },
      {
        number: "2",
        name: "Tashina Madappa Cheranda",
        title: "Senior Associate, Adaptation & Risk Analysis",
        organisation: "CSTEP (Centre for Study of Science, Technology and Policy)",
        type: "Think Tank / Policy Research",
        city: "India",
        gender: "Female",
        photo: "/members/Tashina M C.jpg",
        sector_expertise: "Multi-hazard climate-risk & vulnerability assessment (IPCC AR5 framework); climate-smart agriculture; watershed development; rural economies; climate law & policy; state/district climate action plans",
        ar_relevance: "Leads multi-hazard climate risk assessments (drought, heatwave, flood, sea-level rise) across agriculture, fisheries, livestock and water sectors using the IPCC AR5 hazard–exposure–vulnerability framework. MGNREGS climate co-benefits work on soil-water conservation and drought/flood resilience directly feeds into CBRT criteria on adaptation effectiveness. Also publishes as 'Tashina Esteves'.",
        key_projects: "Climate Risk Assessment Tool (CRAT) for Puducherry UT (CSTEP-RR-2025-03); MGNREGS climate co-benefits framework; Promoting Climate-Smart Agriculture for a Resilient Odisha (CSTEP); State/district climate risk & vulnerability assessments for State Action Plans; climate-resilience capacity-building for district officials",
        cbrt_twg_role: "Policy Specialist — Climate risk assessment, CSA & adaptation-programme design",
        email: "",
        phone: "",
        linkedin: "https://www.linkedin.com/in/tashinamadappa/",
        website: "https://cstep.in/our_team/tashina-madappa-cheranda/",
        priority_tier: "Tier 1 — Core",
        status: "Confirmed — introductory call scheduled 22 June 2026",
        notes: "Useful contributor on climate-risk/vulnerability-assessment methodology, climate-smart-agriculture policy, and watershed/adaptation-programme design. Strongest for assessment-and-policy framing of crop criteria and India state-government linkages. Earlier-career (MSc); team contributor rather than senior lead.",
        profiles: [
          { label: "CSTEP Profile", url: "https://cstep.in/our_team/tashina-madappa-cheranda/", icon: "🏛" },
          { label: "Google Scholar", url: "https://scholar.google.com/citations?user=px4cHMMAAAAJ", icon: "🎓" },
          { label: "ResearchGate", url: "https://www.researchgate.net/scientific-contributions/Tashina-Madappa-Cheranda-2216249107", icon: "🔬" },
          { label: "LinkedIn", url: "https://www.linkedin.com/in/tashinamadappa/", icon: "💼" },
          { label: "ORCID", url: "https://orcid.org/0000-0001-7581-8956", icon: "🆔" }
        ],
        publications: [
          {
            title: "Visualising Climate Change Risks: The Climate Risk Assessment Tool (CRAT) for Puducherry UT (CSTEP-RR-2025-03)",
            url: "https://cstep.in/publication/visualising-climate-change-risks-the-climate-risk-assessment-tool-crat-for-puducherry-ut/",
            year: "2025",
            journal: "CSTEP Research Report"
          },
          {
            title: "Realigning Developmental Programmes for Reducing Climate Vulnerability: Case Study of MGNREGS in India",
            url: "https://scholar.google.com/citations?user=px4cHMMAAAAJ",
            year: "2022",
            journal: "Book Chapter (via CSTEP / ResearchGate)"
          },
          {
            title: "Promoting Climate-Smart Agriculture for a Resilient Odisha (CSTEP project report)",
            url: "https://cstep.in/drupal/node/1665",
            year: "2023",
            journal: "CSTEP Policy Report"
          },
          {
            title: "Reflections from a Climate Training Workshop — Ground Realities and Sectoral Insights",
            url: "https://cstep.in/reflections-from-a-climate-training-workshop-ground-realities-and-sectoral-insights/",
            year: "2024",
            journal: "CSTEP Blog"
          }
        ]
      },
      {
        number: "3",
        name: "Dr. Arjuna Srinidhi",
        title: "Senior Scientist, Futures Research",
        organisation: "WELL Labs (formerly WOTR; PhD Wageningen University)",
        type: "Research Institute / Think Tank",
        city: "India",
        gender: "Male",
        photo: "/members/Arjuna-Srinidhi-scaled.jpg",
        sector_expertise: "Climate resilience assessment of semi-arid/rainfed farming systems; adaptation pathways; ecosystem-based adaptation (EbA) and NbS; farmer producer organisation (FPO) climate finance pathways; critical climate-stress moment identification; retrospective resilience assessment",
        ar_relevance: "PhD from Wageningen on 'climate-resilient development pathways for semi-arid farming systems in India.' His peer-reviewed methods for identifying location-specific climate stresses (hazard mapping), retrospective resilience assessment frameworks, and FPO climate-finance pathways map directly onto CBRT Crop Production criteria design for hazard screening, adaptation effectiveness and the finance-to-farmer link. India-specific: Maharashtra, Karnataka dryland agriculture.",
        key_projects: "CLARITY — Climate Adaptation and Resilience In Tropical drYlands (WELL Labs); PI 4-year EbA project Maharashtra; ECOBARI Collaborative (National Anchor); Climate-resilient FPO pathways (WOTR/Wageningen); WRI Watershed Development India; WOTR ecosystem-based adaptation programme",
        cbrt_twg_role: "Technical lead — Semi-arid farming resilience, adaptation pathways & FPO finance criteria",
        email: "arjuna.srinidhi@ifmr.ac.in",
        phone: "",
        linkedin: "https://www.linkedin.com/in/arjuna-srinidhi-37736211/",
        website: "https://welllabs.org/arjuna-srinidhi/",
        priority_tier: "Tier 1 — Core",
        status: "Confirmed — interest received; introductory call 1 July 2026",
        notes: "Most directly relevant resilience-framework researcher for CBRT Crop Production criteria. Methods map onto: location-specific hazard mapping, retrospective resilience assessment, climate-resilient development pathways for FPOs. India-specific, rainfed/dryland-focused, bridges research, practice and policy. Lens is farming-systems and water/landscape rather than single-crop agronomy.",
        profiles: [
          { label: "WELL Labs Profile", url: "https://welllabs.org/arjuna-srinidhi/", icon: "🏛" },
          { label: "Google Scholar", url: "https://scholar.google.com/citations?user=4Kdws-wAAAAJ&hl=en", icon: "🎓" },
          { label: "ResearchGate", url: "https://www.researchgate.net/profile/Arjuna-Srinidhi", icon: "🔬" },
          { label: "LinkedIn", url: "https://www.linkedin.com/in/arjuna-srinidhi-37736211/", icon: "💼" },
          { label: "Wageningen PhD Thesis", url: "https://research.wur.nl/en/publications/advancing-climate-resilient-development-for-semi-arid-farming-sys/", icon: "📚" },
          { label: "Adaptation Research Alliance", url: "https://www.adaptationresearchalliance.org/about-us/team/arjunasrinidhi/", icon: "🌍" }
        ],
        publications: [
          {
            title: "Critical climate-stress moments for semi-arid farming systems in India (2024)",
            url: "https://link.springer.com/article/10.1007/s10113-024-02281-w",
            year: "2024",
            journal: "Regional Environmental Change 24:122"
          },
          {
            title: "Climate resilient development pathways for farmer producer organizations in semi-arid India (2025)",
            url: "https://www.tandfonline.com/doi/full/10.1080/17565529.2025.2459063",
            year: "2025",
            journal: "Climate and Development 17(9)"
          },
          {
            title: "Retrospective climate resilience assessment of semi-arid farming systems in India (2023)",
            url: "https://www.tandfonline.com/doi/full/10.1080/07900627.2023.2207680",
            year: "2023",
            journal: "International Journal of Water Resources Development"
          },
          {
            title: "Top 100 questions for the sustainable intensification of agriculture in India's rainfed drylands",
            url: "https://ouci.dntb.gov.ua/en/works/4wx5O0Zl/",
            year: "2023",
            journal: "Horizon-scanning study (cross-disciplinary)"
          },
          {
            title: "Watershed Development in India: Economic Valuation and Adaptation Considerations (WRI Working Paper)",
            url: "https://www.wri.org/research/watershed-development-india-economic-valuation-and-adaptation-considerations",
            year: "2013",
            journal: "World Resources Institute"
          },
          {
            title: "Climate Pathways for FPOs in India (WELL Labs project)",
            url: "https://welllabs.org/climate-pathways-fpos-india/",
            year: "2024",
            journal: "WELL Labs"
          }
        ]
      },
      {
        number: "4",
        name: "Dr Ranjitha Puskur",
        title: "Principal Scientist; Gender and Livelihoods Research Leader; CGIAR GENDER Evidence Module Leader",
        organisation: "International Rice Research Institute (IRRI) / CGIAR GENDER Impact Platform",
        type: "International Research Institute / CGIAR",
        city: "New Delhi, India",
        gender: "Female",
        photo: "/members/Ranjitha Puskur.png",
        sector_expertise: "Gender-responsive climate-smart agriculture; women's climate resilience; systematic evidence synthesis; agricultural innovation systems; gender × social-inclusion × crop-systems intersection; pro-poor and pro-women outcomes across South and Southeast Asia",
        ar_relevance: "Leads the CGIAR GENDER Evidence Module synthesising what works for gender-equitable, climate-resilient agri-food systems. The Campbell Systematic Review on climate-smart agriculture for women farmers (2024) directly informs gender-responsive CBRT Crop Production criteria and safeguards. West Bengal 'Learning Labs' training women farmer leaders for climate-resilient farming (India-specific). Previously led CGIAR Research Program on Aquatic Agricultural Systems and WorldFish gender strategy.",
        key_projects: "CGIAR GENDER Impact Platform — Evidence Module lead; IRRI Gender & Livelihoods Research Program; CGIAR GENDER Accelerator (West Bengal Learning Labs, North & South 24 Parganas, 2025); gender-responsive climate/nutrition-smart rice systems; gendered trait preferences for breeding; gender-responsive extension in South/Southeast Asia",
        cbrt_twg_role: "Gender & equity specialist — gender-responsive criteria, safeguards & CSA evidence synthesis",
        email: "r.puskur@irri.org",
        phone: "",
        linkedin: "https://in.linkedin.com/in/ranjitha-puskur",
        website: "https://www.irri.org/about-us/our-people/ranjitha-puskur",
        priority_tier: "Tier 2 — Technical",
        status: "Confirmed — interest received; introductory call 7 July 2026",
        notes: "Strongest, most citable contribution: Campbell systematic review on CSA for women farmers, and West Bengal climate-resilient-farming / women-leaders work. Best fit for gender-responsive, socially-inclusive adaptation criteria and evidence synthesis for rice/crop systems. Not crop agronomy or breeding — gender and livelihoods lens.",
        profiles: [
          { label: "IRRI Profile", url: "https://www.irri.org/about-us/our-people/ranjitha-puskur", icon: "🏛" },
          { label: "CGIAR GENDER Platform", url: "https://gender.cgiar.org/experts/ranjitha-puskur", icon: "🌍" },
          { label: "ResearchGate", url: "https://www.researchgate.net/profile/Ranjitha-Puskur", icon: "🔬" },
          { label: "LinkedIn", url: "https://in.linkedin.com/in/ranjitha-puskur", icon: "💼" },
          { label: "CGSpace Publications", url: "https://cgspace.cgiar.org/search?query=puskur+ranjitha", icon: "📚" }
        ],
        publications: [
          {
            title: "Interventions promoting resilience through climate-smart agricultural practices for women farmers: A systematic review (2024)",
            url: "https://onlinelibrary.wiley.com/doi/10.1002/cl2.1426",
            year: "2024",
            journal: "Campbell Systematic Reviews"
          },
          {
            title: "Protocol: Interventions promoting resilience through CSA for women farmers (2022)",
            url: "https://onlinelibrary.wiley.com/doi/10.1002/cl2.1274",
            year: "2022",
            journal: "Campbell Systematic Reviews"
          },
          {
            title: "What influences women's participation in water governance? Learning from polder zones of Bangladesh (2025)",
            url: "https://www.tandfonline.com/journals/rgtd20",
            year: "2025",
            journal: "Gender, Technology and Development"
          },
          {
            title: "Bundling agri-food systems innovations for women's resilience and empowerment: Building the evidence base (2023)",
            url: "https://www.researchgate.net/publication/375766890",
            year: "2023",
            journal: "IIED Shaping Sustainable Markets Group"
          },
          {
            title: "Realizing Women's Potential in Agri-Food Systems (2024)",
            url: "https://cgspace.cgiar.org/items/cb9dbfa8-b99c-4351-b3d9-c203e6c8cb2e",
            year: "2024",
            journal: "CGIAR GENDER Impact Platform"
          },
          {
            title: "Enabling women farmers in Odisha to combat heat stress (CGIAR, 2025)",
            url: "https://www.cgiar.org/news-events/news/enabling-women-farmers-in-odisha-to-combat-heat-stress",
            year: "2025",
            journal: "CGIAR News"
          },
          {
            title: "Social and Gender Equity and Rice Agri-Food Systems Transformation — 6th International Rice Congress 2023",
            url: "https://www.irri.org/news-and-events/news/social-gender-equity-and-rice-agri-food-systems-transformation-catalysing",
            year: "2023",
            journal: "IRRI / International Rice Congress"
          }
        ]
      },
      {
        number: "5",
        name: "Dr Muzna Alvi",
        title: "Research Fellow, Natural Resources & Resilience (NRR)",
        organisation: "IFPRI (International Food Policy Research Institute) — New Delhi",
        type: "International Research Institute / CGIAR",
        city: "New Delhi, India",
        gender: "Female",
        photo: "/members/alvi_muzna-768x614.jpg",
        sector_expertise: "Climate adaptation & climate-smart agriculture (India/South Asia); digital/climate advisory services; gender & social identity in agriculture; collective action; women's empowerment (WEAI/pro-WEAI); India Climate Finance Taxonomy — agriculture sectoral group member; smallholder-inclusive criteria design",
        ar_relevance: "Sits on the agriculture sectoral group of India's Climate Finance Taxonomy (DEA/MoF, released May 2025) — uniquely valuable for CBRT–India taxonomy interoperability, adaptation-finance eligibility logic and smallholder-inclusive criteria design. Her CSA/gender research (Agricultural Systems 2023; CGIAR Climate Action grant 2026 on AI climate-advisory services) provides the social-inclusion evidence base for CBRT Crop Production criteria. Also publishes as 'Muzna Fatima Alvi' / 'Muzna Fatima'.",
        key_projects: "CGIAR Climate Action grant (2026): 'Climate Information and Women's Empowerment — Digital Advisory Services for Informal Women Workers in India' (Gujarat; 1,500 women; SEWA/Gram Vaani); CGIAR Multifunctional Landscapes Program (resilient agricultural landscapes); Government of Odisha–IFPRI Gender Responsive Cell (Dec 2025); IFPRI NRR climate adaptation and CSA research",
        cbrt_twg_role: "Finance & taxonomy specialist — India Climate Finance Taxonomy (agriculture), CSA policy & smallholder-inclusive criteria",
        email: "m.alvi@cgiar.org",
        phone: "",
        linkedin: "https://in.linkedin.com/in/muznafatima",
        website: "https://www.ifpri.org/profile/muzna-alvi/",
        priority_tier: "Tier 1 — Core",
        status: "Confirmed — agreed to participate; invitation sent 18 June 2026",
        notes: "High-value fit: brings climate-smart-agriculture and adaptation expertise, India focus, gender/social-inclusion depth, and (uniquely) hands-on experience with India's national Climate Finance Taxonomy process for agriculture. Lens is socio-economic/policy rather than crop agronomy. Mid-career Research Fellow — credible given IFPRI's role.",
        profiles: [
          { label: "IFPRI Profile", url: "https://www.ifpri.org/profile/muzna-alvi/", icon: "🏛" },
          { label: "Google Scholar", url: "https://scholar.google.com/citations?user=30hZ7iAAAAAJ&hl=en", icon: "🎓" },
          { label: "CGIAR GENDER Platform", url: "https://gender.cgiar.org/experts/muzna-alvi", icon: "🌍" },
          { label: "LinkedIn", url: "https://in.linkedin.com/in/muznafatima", icon: "💼" }
        ],
        publications: [
          {
            title: "Gender, agriculture policies, and climate-smart agriculture in India (2023)",
            url: "https://www.sciencedirect.com/science/article/pii/S0308521X23001567",
            year: "2023",
            journal: "Agricultural Systems"
          },
          {
            title: "CGIAR Climate Action Grant: Climate Information and Women's Empowerment — Digital Advisory Services (2026)",
            url: "https://www.cgiar.org/news-events/news/cgiar-climate-action-awards-six-research-grants-deepen-research-gesi-across",
            year: "2026",
            journal: "CGIAR Climate Action"
          },
          {
            title: "Centring Women in Climate-Resilient Farming — Odisha–IFPRI Gender Responsive Cell (Mongabay, 2026)",
            url: "https://india.mongabay.com/2026/01/centring-women-in-climate-resilient-farming/",
            year: "2026",
            journal: "Mongabay India"
          },
          {
            title: "IFPRI NRR Natural Resources & Resilience Unit research portfolio",
            url: "https://www.ifpri.org/profile/muzna-alvi/#:~:text=Muzna%20Alvi%20is%20a%20Research,climate%20resilience%2C%20and%20agriculture%20policies.",
            year: "2023–2026",
            journal: "IFPRI"
          }
        ]
      }
    ]
  },
  {
    id: "livestock",
    label: "Agriculture\nLivestock",
    mfa: "MFA-3",
    color: "#d97706",
    icon: "🐄",
    members: [
      {
        number: "1",
        name: "Dr Veerasamy Sejian",
        title: "Principal Scientist",
        organisation: "ICAR–National Institute of Animal Nutrition and Physiology, Bengaluru",
        type: "Research institute",
        city: "Bengaluru",
        sector_expertise: "Climate change and livestock production; heat stress; animal physiology; small ruminant adaptation; climate-resilient livestock breeds",
        ar_relevance: "Strong fit for India livestock adaptation criteria — work focuses on climate change and livestock production, heat-stress adaptation, indigenous goat resilience, multiple environmental stressors and molecular/physiological markers for thermo-tolerance.",
        key_projects: "THI threshold studies for Indian livestock species; heat stress physiology in small ruminants; climate-resilient livestock breeds; NIANP research programme",
        cbrt_twg_role: "Agri livestock specialist",
        email: "drsejian@gmail.com",
        phone: "",
        linkedin: "https://www.linkedin.com/in/sejian-veerasamy-74781a3b/",
        website: "https://nianp.irins.org/profile/61806",
        priority_tier: "Tier 1 — Anchor",
        notes: "Strong technical expert for heat stress, livestock adaptation and climate-resilient small ruminant systems. Internal approval process going on; shown interest in principle.",
        gender: "Male",
        photo: "/members/sejian.jpg.png",
        status: "Internal approval process going on; shown interest in principle — introductory call 30 June 2026",
        profiles: [
          { label: "NIANP Profile", url: "https://nianp.irins.org/profile/61806", icon: "🏛" },
          { label: "LinkedIn", url: "https://www.linkedin.com/in/sejian-veerasamy-74781a3b/", icon: "💼" },
          { label: "ResearchGate", url: "https://www.researchgate.net/profile/Veerasamy-Sejian", icon: "🔬" }
        ],
        publications: [
          {
            title: "Deiodinase gene expression profiles underlie breed-specific thyroid metabolism and heat stress resilience in cattle",
            url: "https://www.researchgate.net/profile/Veerasamy-Sejian",
            year: "2023",
            journal: "Journal of Thermal Biology"
          },
          {
            title: "Molecular and Gut–Immune Basis of Heat Stress Resilience in Small Ruminants",
            url: "https://www.researchgate.net/profile/Veerasamy-Sejian",
            year: "2022",
            journal: "Frontiers in Veterinary Science"
          },
          {
            title: "Climate change and livestock: impacts, adaptation, and mitigation",
            url: "https://link.springer.com/book/9789811090325",
            year: "2017",
            journal: "Springer (Book)"
          },
          {
            title: "Heat stress and livestock adaptation: physiological and molecular mechanisms",
            url: "https://www.researchgate.net/profile/Veerasamy-Sejian",
            year: "2021",
            journal: "Animal"
          },
          {
            title: "Multiple stressor effects on livestock: synergistic impacts of heat, nutritional and disease stress",
            url: "https://www.researchgate.net/profile/Veerasamy-Sejian",
            year: "2020",
            journal: "Journal of Animal Science"
          }
        ]
      },
      {
        number: "2",
        name: "Dr. Debojyoti Borkotoky",
        title: "Livestock Specialist / Rural Development & Extension / Capacity Building",
        organisation: "ICAR / KVK North 24 Parganas (Addl.), ICAR-CRIJAF",
        type: "Public research / extension",
        city: "West Bengal",
        sector_expertise: "Livestock pathology; mithun systems; indigenous livestock health; hill farming systems; extension",
        ar_relevance: "Adds underrepresented northeast and mithun/hill-livestock expertise with field-based extension experience. Research and extension track across ICAR-linked institutions; strong fit for regional diversity and indigenous livestock resilience criteria.",
        key_projects: "Mithun health and integrated hill farming systems; indigenous livestock disease management; extension and capacity building in northeast India",
        cbrt_twg_role: "Agri-livestock specialist",
        email: "debojyoti.borkotoky@gmail.com",
        phone: "",
        linkedin: "https://www.linkedin.com/in/dr-debojyoti-borkotoky-phd-3716ab37",
        website: "https://scholar.google.com/citations?user=Tbu32sMAAAAJ&hl=en",
        priority_tier: "Tier 2 — Core",
        notes: "Strong specialist for resilient livestock systems in difficult agro-ecologies. Published on mithun health, integrated hill farming systems, and indigenous livestock disease issues. Internal approval process going on; shown interest in principle.",
        gender: "Male",
        photo: "/members/borkotoky.jpg.png",
        status: "Internal approval process going on; shown interest in principle — introductory call 6 July 2026",
        profiles: [
          { label: "Google Scholar", url: "https://scholar.google.com/citations?user=Tbu32sMAAAAJ&hl=en", icon: "🎓" },
          { label: "LinkedIn", url: "https://www.linkedin.com/in/dr-debojyoti-borkotoky-phd-3716ab37", icon: "💼" }
        ],
        publications: [
          {
            title: "Mithun (Bos frontalis) health management and indigenous livestock systems in northeast India",
            url: "https://scholar.google.com/citations?user=Tbu32sMAAAAJ&hl=en",
            year: "2021",
            journal: "Indian Journal of Animal Sciences"
          },
          {
            title: "Integrated hill farming systems and indigenous livestock resilience in eastern Himalayan agro-ecologies",
            url: "https://scholar.google.com/citations?user=Tbu32sMAAAAJ&hl=en",
            year: "2020",
            journal: "Agricultural Systems"
          },
          {
            title: "Extension approaches for capacity building in livestock disease management among smallholders",
            url: "https://scholar.google.com/citations?user=Tbu32sMAAAAJ&hl=en",
            year: "2019",
            journal: "Indian Research Journal of Extension Education"
          }
        ]
      },
      {
        number: "3",
        name: "Dr. Bhavana Rao Kuchimanchi",
        title: "Coordinator — Rainfed Livestock Network",
        organisation: "Foundation for Ecological Security (FES)",
        type: "NGO / research network",
        city: "New Delhi",
        sector_expertise: "Crop-livestock systems; rainfed livestock; rural livelihoods; watershed development; climate adaptation; smallholder transitions",
        ar_relevance: "Strongest livestock-resilience crossover profile — direct work on rainfed livestock systems and smallholder adaptation. Includes Ambio paper on farming system transitions and climate adaptation principles. Coordinator of Rainfed Livestock Network (RLN) bridging practitioner and policy.",
        key_projects: "Rainfed Livestock Network (RLN) — rln.org.in; Foundation for Ecological Security (FES); WOTR watershed-livestock programmes; LIFE Network International; Wageningen-linked research",
        cbrt_twg_role: "Agri-livestock specialist",
        email: "delhi@fes.org.in",
        phone: "",
        linkedin: "https://www.linkedin.com/in/bhavana-rao-kuchimanchi-ph-d-4a58ab4",
        website: "https://fes.org.in",
        priority_tier: "Tier 1 — Core",
        notes: "Strongest livestock-resilience crossover profile in the list. 20+ years across FES, WOTR, LIFE Network, and Wageningen-linked research. Internal approval process going on; shown interest in principle.",
        gender: "Female",
        photo: "/members/Dr. Bhavana Rao Kuchimanchi..jpg",
        status: "Internal approval process going on; shown interest in principle — Teams meeting 08/07/2026",
        profiles: [
          { label: "LinkedIn", url: "https://www.linkedin.com/in/bhavana-rao-kuchimanchi-ph-d-4a58ab4", icon: "💼" },
          { label: "ORCID", url: "https://orcid.org/0000-0002-1335-5228", icon: "🔗" },
          { label: "FES Website", url: "https://fes.org.in", icon: "🌐" },
          { label: "Rainfed Livestock Network", url: "https://rln.org.in", icon: "🐄" }
        ],
        publications: [
          {
            title: "Farming system transitions and climate adaptation: evidence from rainfed livestock systems in India",
            url: "https://link.springer.com/article/10.1007/s13280-021-01523-z",
            year: "2021",
            journal: "Ambio"
          },
          {
            title: "Living Labs Report 2025 — Rainfed Livestock Network",
            url: "https://rln.org.in/wp-content/uploads/2025/12/Living-Labs-Report_2025.pdf",
            year: "2025",
            journal: "RLN / FES"
          }
        ]
      },
      {
        number: "4",
        name: "Dr. Ankaj Thakur",
        title: "Assistant Professor (Livestock Production Management)",
        organisation: "CSK Himachal Pradesh Krishi Vishvavidyalaya; CEC Member, Animal Nutrition Society of India",
        type: "University",
        city: "Himachal Pradesh",
        sector_expertise: "Pastoralism; small ruminants; animal welfare; animal behaviour; dairy science; livestock housing; transhumant systems",
        ar_relevance: "Direct livestock specialist for pastoral and small-ruminant resilience dimensions often missed in taxonomy design. Strong specialist for resilient grazing, pastoralism, and small-ruminant criteria. Publications on organic goat production, transhumant pastoralism, water footprint and livestock-climate issues.",
        key_projects: "Organic goat production research; transhumant pastoralism in Himalayan systems; water footprint and livestock-climate issues; animal welfare in livestock housing",
        cbrt_twg_role: "Agri-livestock specialist",
        email: "ankajthakur27@gmail.com",
        phone: "",
        linkedin: "https://www.linkedin.com/in/dr-ankaj-thakur-90113071",
        website: "https://scholar.google.com/citations?user=amGm5KYAAAAJ&hl=en",
        priority_tier: "Tier 2 — Core",
        notes: "Strong specialist for resilient grazing, pastoralism, and small-ruminant criteria. Faculty since 2017 with active publication record. Internal approval process going on; shown interest in principle.",
        gender: "Male",
        photo: "/members/Dr. Ankaj Thakur.jpg",
        status: "Internal approval process going on; shown interest in principle — Teams meeting",
        profiles: [
          { label: "Google Scholar", url: "https://scholar.google.com/citations?user=amGm5KYAAAAJ&hl=en", icon: "🎓" },
          { label: "ORCID", url: "https://orcid.org/0000-0002-8467-9772", icon: "🔗" },
          { label: "LinkedIn", url: "https://www.linkedin.com/in/dr-ankaj-thakur-90113071", icon: "💼" }
        ],
        publications: [
          {
            title: "Organic goat production and climate resilience in Himalayan pastoral systems",
            url: "https://scholar.google.com/citations?user=amGm5KYAAAAJ&hl=en",
            year: "2022",
            journal: "Small Ruminant Research"
          },
          {
            title: "Transhumant pastoralism and climate change adaptation in the western Himalayas",
            url: "https://scholar.google.com/citations?user=amGm5KYAAAAJ&hl=en",
            year: "2021",
            journal: "Pastoralism"
          },
          {
            title: "Water footprint assessment of livestock production in hill agro-ecosystems",
            url: "https://scholar.google.com/citations?user=amGm5KYAAAAJ&hl=en",
            year: "2020",
            journal: "Journal of Cleaner Production"
          }
        ]
      },
      {
        number: "5",
        name: "Dr Smita Sirohi",
        title: "Principal Scientist & Head, Dairy Economics, Statistics & Management Division",
        organisation: "ICAR-National Dairy Research Institute (NDRI), Karnal",
        type: "Public research institute (ICAR)",
        city: "Karnal",
        sector_expertise: "Dairy/livestock economics; climate vulnerability & adaptation of dairy sector; livestock GHG emissions; carbon markets (CDM); mitigation costing",
        ar_relevance: "India's leading livestock-climate economist and strongest livestock+climate+finance fit. Anchors the finance/economics + dairy-adaptation dimension of criteria. Two decades on climate impacts, vulnerability and adaptation of the dairy sector; lead Indian voice on livestock GHG economics and carbon trading for dairy.",
        key_projects: "ICAR network project on climate impact/adaptation/vulnerability of dairy sector; livestock carbon markets / CDM for dairy; methane economics; HWWA climate-policy fellowship",
        cbrt_twg_role: "Agri-livestock specialist",
        email: "",
        phone: "",
        linkedin: "",
        website: "https://ndri.res.in/dr-smita-sirohi",
        priority_tier: "Tier 1 — Anchor",
        notes: "India's leading livestock-climate economist. Expertise in dairy/livestock economics, climate adaptation of dairy, livestock carbon markets/CDM, and mitigation costing. Internal approval process going on; shown interest in principle.",
        gender: "Female",
        photo: "/members/Dr Smita Sirohi.webp",
        status: "Internal approval process going on; shown interest in principle — Teams meeting 15/07/2026",
        profiles: [
          { label: "ICAR-NDRI Profile", url: "https://ndri.res.in/dr-smita-sirohi", icon: "🏛" },
          { label: "Google Scholar", url: "https://scholar.google.com/citations?user=n2gL414AAAAJ&hl=en", icon: "🎓" },
          { label: "Academia.edu", url: "https://ndri-in.academia.edu/SmitaSirohi", icon: "📚" }
        ],
        publications: [
          {
            title: "Climate change impacts on dairy sector in India: vulnerability and adaptation assessment",
            url: "https://scholar.google.com/citations?user=n2gL414AAAAJ&hl=en",
            year: "2020",
            journal: "Agricultural Systems"
          },
          {
            title: "Clean Development Mechanism (CDM) opportunities in Indian livestock sector",
            url: "https://scholar.google.com/citations?user=n2gL414AAAAJ&hl=en",
            year: "2018",
            journal: "Mitigation and Adaptation Strategies for Global Change"
          },
          {
            title: "Cost-effectiveness of methane mitigation options in Indian dairy systems",
            url: "https://scholar.google.com/citations?user=n2gL414AAAAJ&hl=en",
            year: "2019",
            journal: "Journal of Cleaner Production"
          },
          {
            title: "Climate finance for livestock adaptation: economics of dairy sector resilience",
            url: "https://scholar.google.com/citations?user=n2gL414AAAAJ&hl=en",
            year: "2021",
            journal: "Climate Policy"
          }
        ]
      },
      {
        number: "6",
        name: "Dr Sanjit Maiti",
        title: "Senior Scientist (Extension Education)",
        organisation: "ICAR-Indian Veterinary Research Institute (IVRI), Izatnagar",
        type: "Public research institute (ICAR)",
        city: "Izatnagar, Uttar Pradesh",
        sector_expertise: "Smallholder livestock climate adaptation; coastal/cyclone resilience; flood coping strategies; adoption behaviour; extension education",
        ar_relevance: "Best-fit specialist for cyclone/storm and flood resilience criteria in coastal livestock systems. Lead author on climate-adaptation strategies of smallholder livestock rearers in cyclone-prone coastal West Bengal, with direct work on cyclone and flood resilience and adoption determinants.",
        key_projects: "Determinants of climate change adaptation among smallholder livestock farmers in coastal West Bengal; adaptation strategies of livestock rearers in coastal Odisha; flood coping strategies for livestock systems",
        cbrt_twg_role: "Agri-livestock specialist",
        email: "Sanjit.Maiti@icar.gov.in",
        phone: "+91-184-2259216",
        linkedin: "",
        website: "https://scholar.google.com/citations?user=7q49UQwAAAAJ&hl=en",
        priority_tier: "Tier 2 — Core",
        notes: "Best-fit specialist for cyclone/storm and flood resilience criteria in coastal systems. ICAR internal approval in process. Internal approval process going on; shown interest in principle.",
        gender: "Male",
        photo: "/members/Dr Sanjit Maiti.jpg",
        status: "Internal approval process going on; shown interest in principle — ICAR internal approval in process; Teams meeting 13/07/2026",
        profiles: [
          { label: "Google Scholar", url: "https://scholar.google.com/citations?user=7q49UQwAAAAJ&hl=en", icon: "🎓" },
          { label: "IVRI Profile", url: "https://ndri.res.in/dr-sanjit-maiti", icon: "🏛" },
          { label: "IRINS Profile", url: "https://ndri.irins.org/profile/247441", icon: "🔬" },
          { label: "Academia.edu", url: "https://nrcy.academia.edu/SanjitMaiti/CurriculumVitae", icon: "📚" }
        ],
        publications: [
          {
            title: "Determinants of climate change adaptation among smallholder livestock farmers in coastal West Bengal, India: A double hurdle econometric approach",
            url: "https://www.nature.com/articles/s41598-025-32890-2",
            year: "2026",
            journal: "Scientific Reports"
          },
          {
            title: "Adaptation strategies followed by livestock rearers of coastal Odisha and West Bengal to cope with climate change",
            url: "https://www.nature.com/articles/s41598-026-48689-8#Abs1",
            year: "2026",
            journal: "Scientific Reports"
          },
          {
            title: "Flood resilience of livestock systems in eastern India: smallholder coping strategies and adoption behaviour",
            url: "https://link.springer.com/article/10.1007/s11250-026-05030-9",
            year: "2026",
            journal: "Tropical Animal Health and Production"
          }
        ]
      }
    ]
  },
  {
    id: "urban-systems",
    label: "Urban\nSystems",
    mfa: "MFA-2",
    color: "#2563eb",
    icon: "🏙️",
    members: []
  },
  {
    id: "buildings-construction",
    label: "Buildings &\nConstruction",
    mfa: "COOP-1",
    color: "#7c3aed",
    icon: "🏗️",
    members: []
  },
  {
    id: "energy-infrastructure",
    label: "Energy\nInfrastructure",
    mfa: "MFA-4",
    color: "#dc2626",
    icon: "⚡",
    members: []
  }
];

export const totalMembers = sectors.reduce((sum, s) => sum + s.members.length, 0);
