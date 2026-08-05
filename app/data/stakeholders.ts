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
        linkedin: "https://www.linkedin.com/in/satiprasad-sahoo-ph-d-a22b0831/",
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
        email: "tashina@cstep.in",
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
        email: "R.Puskur@cgiar.org",
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
        email: "M.Alvi@cgiar.org",
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
        phone: "+91-9740726121",
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
        email: "bhavanarln@gmail.com",
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
        linkedin: "https://www.linkedin.com/in/smita-sirohi-60183018/",
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
        linkedin: "https://www.linkedin.com/in/sanjit-maiti-8591a519/",
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
      },
      {
        number: "7",
        name: "Dr. Thirunavukkarasu D",
        title: "Professor, Dept. of Veterinary and Animal Husbandry Extension Education, Veterinary College and Research Institute, Namakkal",
        organisation: "Tamil Nadu Veterinary and Animal Sciences University (TANUVAS)",
        type: "State veterinary university (government)",
        city: "Namakkal, Tamil Nadu",
        sector_expertise: "Small-ruminant (sheep/goat) climate resilience; climate-smart goat farming; livestock extension delivery; AI-enabled heat-stress monitoring; smallholder/tribal livelihoods",
        ar_relevance: "Fills the sheep/goat production gap on the roster and brings farmer-extension-delivery expertise directly relevant to the TWG's MRV and smallholder-implementation questions.",
        key_projects: "Co-editor, Elsevier book 'Sustainable Goat Production in the Changing Climate'; co-author, book chapter on AI-enabled heat-stress monitoring for climate-resilient ruminants (2025/2026); co-author, 'Factors affecting livestock farmers' access and level of engagement with extension agencies in Tamil Nadu, India' (Development in Practice, 2025); Co-Coordinator, MEA-sponsored international training programme 'Smallholder Livestock and Commercial Poultry Farming' (Indo-African Forum); extension-delivery experience mobilising tribal farmers into sheep/goat commodity interest groups.",
        cbrt_twg_role: "Adaptation Generalist leaning Specialist (small-ruminant systems)",
        email: "dthirunavukkarasu@gmail.com",
        phone: "",
        linkedin: "https://www.linkedin.com/in/dthirunavukkarasu/",
        website: "https://tanuvas.irins.org/profile/302963",
        priority_tier: "Not yet tiered",
        notes: "CBRT relevance: performance metrics & MRV (AI-enabled monitoring platforms); smallholder/extension-delivery proxies; small-ruminant activity/measure definitions. Reasoning: extension & farmer-delivery specialist | small-ruminant climate-resilience research and extension practice | small-ruminant (sheep/goat) & smallholder-extension segment. Caveat: direct authorship not independently confirmed on every TANUVAS climate-resilience output surfaced in research (e.g. indigenous-chicken epigenetics study) — confirm contribution list directly. Proposed by Jay Shah. Tracking-sheet updates: reached out; received interest; said yes in a Teams meeting; headshot uploaded and shown on the webpage.",
        gender: "Male",
        photo: "/members/Thiru _Headshot image.jpg",
        status: "Yes, in principle (introductory call)",
        profiles: [
          { label: "LinkedIn", url: "https://www.linkedin.com/in/dthirunavukkarasu/", icon: "💼" },
          { label: "TANUVAS Profile", url: "https://tanuvas.irins.org/profile/302963", icon: "🏛" },
          { label: "Google Scholar", url: "https://scholar.google.com/citations?user=f-QR1pQAAAAJ&hl=en", icon: "🎓" }
        ],
        publications: [
          {
            title: "Sustainable Goat Production in the Changing Climate (co-editor)",
            url: "https://scholar.google.com/citations?user=f-QR1pQAAAAJ&hl=en",
            journal: "Elsevier (Book)"
          },
          {
            title: "AI-enabled heat-stress monitoring for climate-resilient ruminants (book chapter)",
            url: "https://scholar.google.com/citations?user=f-QR1pQAAAAJ&hl=en",
            year: "2025/2026"
          },
          {
            title: "Factors affecting livestock farmers' access and level of engagement with extension agencies in Tamil Nadu, India",
            url: "https://scholar.google.com/citations?user=f-QR1pQAAAAJ&hl=en",
            year: "2025",
            journal: "Development in Practice"
          }
        ]
      },
      {
        number: "8",
        name: "Silpa M.V.",
        title: "Assistant Professor",
        organisation: "Rajiv Gandhi Institute of Veterinary Education and Research (RIVER), Puducherry",
        type: "State veterinary institute (government, Puducherry)",
        city: "Puducherry",
        sector_expertise: "Genetics/epigenetics of heat-stress resilience; coastal-livestock vulnerability; poultry & goat heat physiology; animal genetics & epigenetics; heat-stress transcriptomics",
        ar_relevance: "Deepest genetics/molecular-science expertise identified for the roster — work sits at the epigenetic/transcriptomic mechanisms that could underpin a more rigorous, biomarker-based definition of 'climate-resilient breed' than the roster currently has access to.",
        key_projects: "636+ citations (Google Scholar: Animal Genetics / Climate Change / Livestock Production); co-author, 'Goat as the ideal climate-resilient animal model in tropical environment' (Int. J. Biometeorology, 2021, with V. Sejian et al.); co-author, 'Heat stress and poultry production: impact and amelioration' (2021); co-author, 'Impact of Climate Change on Livestock Production and Mitigation Strategies in Coastal Region' (Springer, 2025); corresponding/key author, 'Epigenetic Mechanisms Associated with Livestock Adaptation to Heat Stress' (MDPI Animals, 2025).",
        cbrt_twg_role: "Livestock Specialist (genetics/molecular science)",
        email: "mv.silpa@gmail.com",
        phone: "",
        linkedin: "https://www.linkedin.com/in/silpa-m-v-528512222/",
        website: "https://scholar.google.com/citations?user=zSGzDXsAAAAJ&hl=en",
        priority_tier: "Not yet tiered",
        notes: "CBRT relevance: performance metrics (breed/genetic resilience biomarkers); materiality (coastal exposure); indigenous-breed retention and genetic-diversity criteria. Reasoning: genetics/molecular-science specialist | peer-reviewed climate-stress genetics research since c. 2020 | dairy/goat/poultry genetics & coastal-systems segment. Note: frequent co-author and now institutional colleague of Dr. V. Sejian (RIVER's current Dean, also on this roster) — factor into TWG balance, as their expertise is complementary but networks overlap closely. Proposed by Jay Shah. Tracking-sheet updates: reached out; received interest; said yes in a Teams meeting; headshot uploaded and shown on the webpage.",
        gender: "Female",
        photo: "/members/Silpa M.V Photo.jpg",
        status: "Yes, in principle (introductory call)",
        profiles: [
          { label: "LinkedIn", url: "https://www.linkedin.com/in/silpa-m-v-528512222/", icon: "💼" },
          { label: "Google Scholar", url: "https://scholar.google.com/citations?user=zSGzDXsAAAAJ&hl=en", icon: "🎓" },
          { label: "Key Publication (MDPI)", url: "https://www.mdpi.com/2079-7737/14/9/1154", icon: "📄" }
        ],
        publications: [
          {
            title: "Goat as the ideal climate-resilient animal model in tropical environment (with V. Sejian et al.)",
            url: "https://scholar.google.com/citations?user=zSGzDXsAAAAJ&hl=en",
            year: "2021",
            journal: "International Journal of Biometeorology"
          },
          {
            title: "Heat stress and poultry production: impact and amelioration",
            url: "https://scholar.google.com/citations?user=zSGzDXsAAAAJ&hl=en",
            year: "2021"
          },
          {
            title: "Impact of Climate Change on Livestock Production and Mitigation Strategies in Coastal Region",
            url: "https://scholar.google.com/citations?user=zSGzDXsAAAAJ&hl=en",
            year: "2025",
            journal: "Springer"
          },
          {
            title: "Epigenetic Mechanisms Associated with Livestock Adaptation to Heat Stress",
            url: "https://www.mdpi.com/2079-7737/14/9/1154",
            year: "2025",
            journal: "MDPI Animals"
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
    id: "energy-infrastructure",
    label: "Energy\nInfrastructure",
    mfa: "MFA-4",
    color: "#dc2626",
    icon: "⚡",
    members: [
      {
        number: "1",
        name: "Amit Tripathi",
        title: "Director",
        organisation: "Dravya, the IIHS Centre for Materials and Sustainable Development (Indian Institute for Human Settlements)",
        type: "Academic / Research Institute (IIHS is a university-status institution)",
        city: "India",
        sector_expertise: "Climate-resilient power infrastructure; low-carbon energy transitions and renewable energy grid integration; cross-country power system strengthening (multilateral bank-financed); critical minerals and materials governance for energy infrastructure supply chains; energy policy and regulatory design; disaster-resilient infrastructure standards (former CDRI)",
        ar_relevance: "CONFIRMED directly from Dravya's own official team page bio: 'Amit Tripathi is an energy sector expert with nearly two decades of experience. His work focuses on advancing low-carbon transitions, renewable energy integration, and climate-resilient infrastructure.' As former Advisor, Power Sector at CDRI (Coalition for Disaster Resilient Infrastructure — the global coalition India itself launched in 2019), he worked directly with governments, regulators, and multilateral development banks across multiple countries to strengthen power systems and shape energy policy. He now directs Dravya, IIHS's centre explicitly tasked with embedding 'equity and climate resilience' into India's materials/minerals strategy for decarbonisation — directly relevant to the supply-chain/component-availability dimension of energy infrastructure resilience (e.g. critical mineral security for grid, storage, and renewable hardware).",
        key_projects: "Specialisms: energy sector policy, low-carbon transitions, renewable energy integration, climate-resilient infrastructure, power system strengthening across countries, critical minerals/materials governance for the energy transition, climate governance and energy policy. Experience: nearly 20 years in the energy sector; former Advisor, Power Sector, CDRI (worked with governments, regulators and multilateral banks across countries); Bachelor's degree in Mechanical Engineering; Master's in Globalisation and Corporate Development, SOAS, University of London, with a specialisation in climate governance and energy policy; earlier career included Associate Director-Business Development, Terracon Ecotech Pvt Ltd (CleanTech/Environment, London/India).",
        cbrt_twg_role: "Energy Specialist",
        email: "amit.tripathi@iihs.ac.in",
        phone: "",
        linkedin: "https://linkedin.com/in/amitripathi",
        website: "https://dravya.iihs.co.in/people",
        priority_tier: "Not yet tiered",
        notes: "CBRT relevance: direct, hands-on multi-country climate-resilient power infrastructure advisory experience (via former CDRI role) — a strong complement to the more research/academic-oriented candidates already in the TWG pool; brings the critical-minerals/materials-supply-chain angle to energy infrastructure resilience (component and hardware availability for grid, storage, and renewables); also positioned to speak to how CBRT criteria would need to interoperate with CDRI's own global standards. Reasoning: TWG Role — climate-resilient power infrastructure and critical-minerals/materials supply-chain resilience lead | A&R Experience — nearly 2 decades in energy sector; former CDRI Power Sector Advisor with direct multi-country, multilateral-bank-engaged climate-resilient infrastructure advisory work; now directs a centre explicitly embedding climate resilience into India's materials/minerals strategy | Energy Profile/CBRT Segment — cross-cutting: Power System Strengthening (via CDRI background) and Materials/Critical Minerals Supply Chain Resilience for energy infrastructure hardware (grid, storage, renewables). Time zone: IST (New Delhi). Tracking-sheet updates: reached out 21/07/2026; received interest — yes (21/07/2026); also part of the Global TWG.",
        gender: "Male",
        photo: "/members/Amit Tripathi_Photo.jpg",
        status: "Interest received 21 July 2026; also confirmed as part of the Global TWG",
        profiles: [
          { label: "LinkedIn", url: "https://linkedin.com/in/amitripathi", icon: "💼" },
          { label: "Dravya / IIHS People Page", url: "https://dravya.iihs.co.in/people", icon: "🏛" },
          { label: "CDRI Team Page (former Advisor, Power Sector)", url: "https://cdri.world/team", icon: "🌍" }
        ]
      },
      {
        number: "2",
        name: "Sonali Gokhale",
        title: "Research Associate",
        organisation: "Prayas Energy Group",
        type: "NGO / Independent policy research",
        city: "Mumbai, India",
        sector_expertise: "Climate risk finance for financial institutions and energy infrastructure lenders; parametric insurance for extreme heat; DISCOM financial resilience; ESG/climate risk disclosure (RBI, SEBI); counterparty and collateral climate risk assessment tools",
        ar_relevance: "Combines a rare dual background: 18+ years as a career financial-risk professional in Indian and international banking/infrastructure finance (Kotak Mahindra Bank, IDFC FIRST Bank, L&T Infrastructure Finance, Mizuho Financial Group, IDBI Bank), now applied specifically to climate risk assessment for India's energy and financial sectors at Prayas. She is the direct financial-risk counterpart to Shantanu Dixit's operational/engineering-side extreme-heat work: the two co-author together and jointly represented Prayas alongside CDRI at the 'Power Sector Resilience to Extreme Heat: Learning from Practice' session (GHCF2026), the same body of CDRI-linked work already informing this TWG's shortlist. Has a direct, publicly downloadable, named body of technical output: concept papers and working Excel-based risk-assessment tools she helped build.",
        key_projects: "Specialisms: climate risk finance, project finance, credit/counterparty risk assessment, financial risk modelling, parametric insurance, ESG/sustainability disclosure, DISCOM financial health analysis. Experience: 18+ years in financial risk management across Indian and international banking before joining Prayas as Research Associate; MSc, University of Mumbai; roles included Project Finance Specialist (Kotak Mahindra Bank), Associate Director-Risk Solutions (IDFC FIRST Bank), Group Senior Manager-Risk & Asset Management (L&T Infrastructure Finance), Senior Risk Analyst (Mizuho Financial Group Global), Assistant Manager (IDBI Bank).",
        cbrt_twg_role: "Energy Finance and Climate risk (A&R) specialist",
        email: "sonali@prayaspune.org",
        phone: "",
        linkedin: "https://www.linkedin.com/in/sonali-gokhale-54677ba/",
        website: "https://energy.prayaspune.org/our-work/research-report/climate-based-risk-assessment-for-reserve-bank-of-indias-regulated-entities",
        priority_tier: "Not yet tiered",
        notes: "CBRT relevance: financial materiality and bankability criteria for climate-adapted energy infrastructure; counterparty/collateral climate risk assessment methodology directly transferable to lender-facing CBRT criteria; parametric insurance design guidance for extreme-heat adaptation; DISCOM financial resilience under climate stress. Reasoning: TWG Role — climate risk finance & bankability lead for Energy Infrastructure, the lender/financial-institution-facing counterpart to the sector's technical/engineering resilience criteria | A&R Experience — built and published actual working climate risk assessment tools (CCRAT, CoCRAT, CCRAQ) aligned to RBI's 2024 Draft Disclosure Framework on Climate-related Financial Risks; co-authored a dedicated parametric insurance for extreme heat paper; jointly represented Prayas at the CDRI-linked GHCF2026 power sector heat resilience session | Energy Profile/CBRT Segment — cross-cutting Financial Materiality, Bankability & Risk-Transfer Instruments for Climate-Adapted Energy Infrastructure. Proposed by Jay. Time zone: IST (based in Mumbai). Tracking-sheet updates: reached out 21/07/2026; introductory call 27/7/2026 at 11:30am UK time.",
        gender: "Female",
        photo: "/members/Sonali Gokhale.jpg",
        status: "Yes, in principle (introductory call)",
        profiles: [
          { label: "LinkedIn", url: "https://www.linkedin.com/in/sonali-gokhale-54677ba/", icon: "💼" },
          { label: "PEG Comments on SEBI Green Bonds Consultative Paper", url: "https://energy.prayaspune.org/images/pdf/PEG_Comments-SEBI_Consultative_Paper_on_Green_Bonds_Aug28_2024.pdf", icon: "📄" },
          { label: "Climate-Based Risk Assessment for RBI's Regulated Entities", url: "https://energy.prayaspune.org/our-work/research-report/climate-based-risk-assessment-for-reserve-bank-of-indias-regulated-entities", icon: "📚" },
          { label: "Parametric Insurance for Extreme Heat", url: "https://energy.prayaspune.org/our-work/article-and-blog/parametric-insurance-for-extreme-heat", icon: "🌡" },
          { label: "Comments on India's Draft Climate Finance Taxonomy", url: "https://energy.prayaspune.org/our-work/policy-regulatory-engagements/comments-on-indias-draft-climate-finance-taxonomy", icon: "🏛" }
        ]
      },
      {
        number: "5",
        name: "Sandhya Sundararagavan",
        title: "Senior Advisor, Climate and Energy Resilient Innovation",
        organisation: "Vasudha Foundation",
        type: "NGO / Independent policy research",
        city: "India",
        sector_expertise: "Heat-proofing of critical power/road/rail infrastructure; sub-district heat risk mapping and utility infrastructure failure prediction; renewable grid integration and energy storage technology; power sector planning and electricity market/distribution reform; energy finance",
        ar_relevance: "Rare combination of deep energy-sector technical grounding and an explicit current climate-resilience mandate. Her career spans four organisations already identified as top-tier in this TWG research process: TERI, CSTEP, Climate Policy Initiative (Manager, Energy Finance), and World Resources Institute India (Lead, Energy Transitions) — before her current role at Vasudha Foundation. Her recent published work is directly on point: 'Precision Resilience: Why Local Heat Intelligence Matters?' (2026, with Dr Kala Nair K) explicitly argues for sub-district heat risk mapping to proactively heat-proof critical power, road, and rail networks against thermal stress, and to enable predictive identification of utility infrastructure failure points and electricity demand spikes. A companion piece, 'When the Heat Doesn't End at Sunset in Karnataka,' examines night-time heat stress and compounding infrastructure/health effects, citing IPCC AR6.",
        key_projects: "Specialisms: renewable grid integration, energy storage technology evaluation, power sector planning, electricity market and distribution sector reform, climate-energy resilience strategy, heat risk intelligence for infrastructure. Experience: MS, University of Massachusetts Amherst; Mechanical Engineering degree, University of Pune; led power sector programmes across TERI, CSTEP, CPI, and WRI India focused on renewable grid integration, power sector planning, electricity market reforms, and distribution sector reform at both national and state level; authored 'Evaluating Energy Storage Technologies for Wind Power Integration' (2012, with Erin Baker) — technical cost analysis of eleven storage technologies for renewable integration.",
        cbrt_twg_role: "Energy Specialist (with an explicit current climate-resilience mandate)",
        email: "ragavan.sandhya@gmail.com; ssvan2013@gmail.com",
        phone: "",
        linkedin: "https://linkedin.com/in/sandhyaragavan",
        website: "https://vasudha-foundation.org/precision-resilience-why-local-heat-intelligence-matters/",
        priority_tier: "Not yet tiered",
        notes: "CBRT relevance: direct methodology for heat-proofing critical power infrastructure (generation, transmission, distribution) using sub-district climate hazard data; predictive infrastructure-failure and demand-spike forecasting approach transferable to CBRT's Energy Infrastructure resilience criteria; deep cross-institutional network across TERI/CSTEP/CPI/WRI likely to ease TWG coordination with other candidates from those organisations. Reasoning: TWG Role — energy infrastructure heat-resilience and grid-integration lead | A&R Experience — published 2026 work on heat-proofing critical power networks and predictive infrastructure-failure mapping; explicit 'Climate and Energy Resilient Innovation' mandate at current role | Energy Profile/CBRT Segment — cross-cutting: Generation (renewable grid integration, storage), Transmission & Distribution (heat-proofing, failure prediction), and Power Sector Planning/Market Reform. Time zone: IST. Tracking-sheet updates: reached out 21/07/2026; interest and introductory call not yet recorded — awaiting response.",
        gender: "Female",
        photo: "/members/Sandhya_Vasudha_Photo.png",
        status: "Yes, in principle (introductory call)",
        profiles: [
          { label: "LinkedIn", url: "https://linkedin.com/in/sandhyaragavan", icon: "💼" },
          { label: "Vasudha Foundation Team Page", url: "https://vasudha-foundation.org", icon: "🏛" },
          { label: "ResearchGate", url: "https://researchgate.net/profile/Sandhya-Sundararagavan", icon: "🔬" },
          { label: "WRI Profile (prior role)", url: "https://wri.org/profile/sandhya-sundararagavan", icon: "🌍" },
          { label: "Precision Resilience: Why Local Heat Intelligence Matters?", url: "https://vasudha-foundation.org/precision-resilience-why-local-heat-intelligence-matters/", icon: "📄" },
          { label: "Landscape Review of Cooling Action in Urban India", url: "https://vasudha-foundation.org/landscape-review-of-cooling-action-in-urban-india/", icon: "📚" }
        ],
        publications: [
          {
            title: "Evaluating Energy Storage Technologies for Wind Power Integration (with Erin Baker)",
            url: "https://www.sciencedirect.com/science/article/abs/pii/S0038092X12002253",
            year: "2012"
          },
          {
            title: "Precision Resilience: Why Local Heat Intelligence Matters? (with Dr Kala Nair K)",
            url: "https://vasudha-foundation.org/precision-resilience-why-local-heat-intelligence-matters/",
            year: "2026",
            journal: "Vasudha Foundation"
          }
        ]
      },
      {
        number: "6",
        name: "Harsha Meenawat",
        title: "Head, Energy and Development",
        organisation: "WRI India",
        type: "Think tank",
        city: "New Delhi, India",
        sector_expertise: "Climate resilience of decentralized renewable energy (DRE) systems; disaster-vulnerable-region energy access; Himalayan GLOF risk reduction; energy-healthcare synergies; energy and environmental governance policy",
        ar_relevance: "Co-author of two of the most directly relevant reports found in this entire TWG research process: 'Built to Last: Making Renewable Energy Systems Climate Resilient' (WRI, 2021, with Namrata Ginoya) and 'Powering Development in Climate Vulnerable Areas: The Role of Decentralized Solar Solutions in India' (WRI, with Ginoya, Amala Devi, Pamli Deka, Bharath Jairaj) — the latter cites real disaster-damage data (Cyclone Fani caused 20% of all public property loss in the power sector in 2019, with 8+ days of grid outage during a simultaneous heatwave; Kochi airport's solar installation took 11 days to repair after 2018 floods). Also worked on two UNDP/GEF-funded Glacial Lake Outburst Flood (GLOF) risk-reduction projects in Bhutan ($7.7M and $730K), directly parallel to the Himalayan GLOF work already informing this TWG (Er. Revati Raman, Dr Akshaya Verma). Co-authored 'A Spoonful of Solar to Help the Medicine Go Down: Exploring Synergies Between Health Care and Energy' (WRI India, 2025) examining DRE interventions for healthcare across six Indian states.",
        key_projects: "Specialisms: clean energy transition policy, energy access, decentralized renewable energy resilience, energy and environmental governance, systems modelling. Experience: MPP, Lee Kuan Yew School of Public Policy, National University of Singapore; Post Graduate Diploma in Business Management, NMIMS University Mumbai; prior roles at TERI (energy and environmental governance research) and one of India's largest infrastructure financing companies (policy advisory and strategy); authored book chapters, reports and journal articles on energy access, environmental governance and climate adaptation.",
        cbrt_twg_role: "Energy Specialist",
        email: "Harsha.Meenawat@wri.org",
        phone: "",
        linkedin: "https://linkedin.com/in/harsha-meenawat-01a0b227",
        website: "https://wri-india.org/profile/harsha-meenawat",
        priority_tier: "Not yet tiered",
        notes: "CBRT relevance: decentralized renewable energy resilience design methodology (technological, organisational, financial considerations) directly transferable to CBRT's Generation Asset resilience criteria; Himalayan GLOF project experience for Hydropower segment; real disaster-damage data points (Cyclone Fani, Kochi floods) usable for CBRT hazard-impact justification. Reasoning: TWG Role — decentralized/renewable energy climate resilience lead | A&R Experience — co-authored WRI's flagship DRE climate resilience reports; Himalayan GLOF project experience in Bhutan | Energy Profile/CBRT Segment — Generation Asset Resilience (decentralized solar/DRE), Hydropower (GLOF), Energy Access in climate-vulnerable regions. If WRI representation is wanted on the TWG, source notes she is a good candidate. Time zone: IST (New Delhi). Tracking-sheet updates: reached out 21/07/2026; received interest — yes; introductory call 29/07/2026 at 9:30am UK time.",
        gender: "Female",
        photo: "/members/harsha meenavat_Photo.jpg",
        status: "Yes, in principle (introductory call)",
        profiles: [
          { label: "LinkedIn", url: "https://linkedin.com/in/harsha-meenawat-01a0b227", icon: "💼" },
          { label: "WRI India Profile", url: "https://wri-india.org/profile/harsha-meenawat", icon: "🏛" },
          { label: "Built to Last: Making Renewable Energy Systems Climate Resilient", url: "https://www.wri.org/insights/built-last-making-renewable-energy-systems-climate-resilient", icon: "📄" }
        ],
        publications: [
          {
            title: "Built to Last: Making Renewable Energy Systems Climate Resilient (with Namrata Ginoya)",
            url: "https://www.wri.org/insights/built-last-making-renewable-energy-systems-climate-resilient",
            year: "2021",
            journal: "WRI"
          },
          {
            title: "Powering Development in Climate Vulnerable Areas: The Role of Decentralized Solar Solutions in India (with Ginoya, Amala Devi, Pamli Deka, Bharath Jairaj)",
            url: "https://www.wri.org/research/powering-development-climate-vulnerable-areas-role-decentralized-solar-solutions-india",
            year: "2021",
            journal: "WRI"
          },
          {
            title: "Energy for Development in Climate Vulnerable Areas (with Bharath Jairaj)",
            url: "https://wri-india.org/blogs/energy-development-climate-vulnerable-areas",
            year: "2020",
            journal: "WRI India Blog"
          },
          {
            title: "A Spoonful of Solar to Help the Medicine Go Down: Exploring Synergies Between Health Care and Energy (lead author Lanvin Concessao, with Meenawat, Ginoya et al.)",
            url: "https://www.wri.org/research/spoonful-solar-medicine-energy-healthcare-india",
            year: "2023",
            journal: "WRI India"
          }
        ]
      },
      {
        number: "7",
        name: "Namrata Ginoya",
        title: "Strategic Policy Lead",
        organisation: "Global Resilience Partnership (recently transitioned from WRI India)",
        type: "International NGO / Partnership network",
        city: "India / UK (Global Resilience Partnership has international presence — confirm current base)",
        sector_expertise: "Climate resilience and disaster risk reduction across agriculture, water-sanitation, land use, forestry, health and energy access sectors; adaptation finance tracking tools; decentralized energy resilience; food systems adaptation",
        ar_relevance: "Co-author of 'Built to Last: Making Renewable Energy Systems Climate Resilient' and 'Powering Development in Climate Vulnerable Areas' (both with Harsha Meenawat) — her author bio at WRI explicitly described her role as 'mainstreaming resilience in energy access and development policy and projects.' Spent five years on WRI's global Climate Resilience Practice (CRP) team, contributing to 'Food Systems at Risk: Transformative Adaptation for Long-Term Food Security' (WRI, with Rebecca Carter, Richard Choularton, Tyler Ferdinand, Helen Ding, Parvathi Preethan). Helped build a tracking tool for adaptation projects for India's National Adaptation Fund for Climate Change — genuine hands-on adaptation-finance-monitoring experience. Spoke at CDRI's own ICDRI 2022 conference as a named climate resilience and disaster risk reduction expert. Prior to WRI, built low-carbon climate-resilient water and sanitation infrastructure in India and Bangladesh.",
        key_projects: "Specialisms: climate resilience, disaster risk reduction, climate equity, energy access, adaptation policy and knowledge management, climate-resilient infrastructure (water, sanitation, energy). Experience: B.Tech Civil Engineering + M.Tech Climate Change and Sustainable Development, CEPT University, Ahmedabad; progressed through WRI roles of increasing seniority (Vulnerability & Adaptation Initiative Research Analyst → Senior Project Associate → Program Manager → Senior Program Manager, Resilience and Energy); most recent WRI research examined climate change, gender and nutritional security linkages.",
        cbrt_twg_role: "Adaptation Generalist",
        email: "nrginoya.grp@gmail.com",
        phone: "",
        linkedin: "https://linkedin.com/in/namrataginoya",
        website: "https://app.cdri.world/icdri2022/public/speaker-detail/ms-namrata-ginoya",
        priority_tier: "Not yet tiered",
        notes: "CBRT relevance: cross-sectoral adaptation mainstreaming methodology (energy, water, agriculture) directly transferable to CBRT; adaptation-finance tracking-tool-building experience (National Adaptation Fund for Climate Change) relevant to CBRT's monitoring/criteria-verification design; existing direct CDRI conference engagement. Reasoning: TWG Role — cross-sectoral adaptation mainstreaming and adaptation-finance-tracking lead | A&R Experience — 5 years on WRI's global Climate Resilience Practice team; built National Adaptation Fund project-tracking tool; CDRI conference speaker | Energy Profile/CBRT Segment — cross-cutting: Generation Asset Resilience (co-authored with Meenawat), plus broader adaptation-mainstreaming methodology applicable across CBRT sectors, not energy-exclusive. Source notes: good candidate exposure from GRP (Harsha and Namrata worked together during WRI time); strong technical work across energy and resilience, but not exclusively energy-focused. Tracking-sheet updates: reached out 21/07/2026; received interest — yes; introductory call 27/07/2026 at 10:30am UK time.",
        gender: "Female",
        photo: "/members/Namarta Ginoya_Photo.jpg",
        status: "Yes, in principle (introductory call)",
        profiles: [
          { label: "LinkedIn", url: "https://linkedin.com/in/namrataginoya", icon: "💼" },
          { label: "CDRI ICDRI 2022 Speaker Profile", url: "https://app.cdri.world/icdri2022/public/speaker-detail/ms-namrata-ginoya", icon: "🌍" },
          { label: "Built to Last: Making Renewable Energy Systems Climate Resilient", url: "https://www.wri.org/insights/built-last-making-renewable-energy-systems-climate-resilient", icon: "📄" }
        ],
        publications: [
          {
            title: "Built to Last: Making Renewable Energy Systems Climate Resilient (with Harsha Meenawat)",
            url: "https://www.wri.org/insights/built-last-making-renewable-energy-systems-climate-resilient",
            year: "2021",
            journal: "WRI"
          },
          {
            title: "Powering Development in Climate Vulnerable Areas: The Role of Decentralized Solar Solutions in India",
            url: "https://d30mzt1bxg5llt.cloudfront.net/public/uploads/PDFs/powering-development-climate-vulnerable-areas.pdf",
            year: "2021",
            journal: "WRI"
          },
          {
            title: "Food Systems at Risk: Transformative Adaptation for Long-Term Food Security (with Rebecca Carter, Richard Choularton, Tyler Ferdinand, Helen Ding, Parvathi Preethan)",
            url: "https://www.wri.org/research/powering-development-climate-vulnerable-areas-role-decentralized-solar-solutions-india",
            journal: "WRI"
          }
        ]
      }
    ]
  },
  {
    id: "gef-1",
    label: "GEF Project 1\n(sector TBD)",
    mfa: "GEF-1",
    color: "#7c3aed",
    icon: "🌐",
    members: []
  },
  {
    id: "gef-2",
    label: "GEF Project 2\n(sector TBD)",
    mfa: "GEF-2",
    color: "#0891b2",
    icon: "🌎",
    members: []
  }
];

export const totalMembers = sectors.reduce((sum, s) => sum + s.members.length, 0);
