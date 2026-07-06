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
        notes: "Strong technical expert for heat stress, livestock adaptation and climate-resilient small ruminant systems. Confirmed member — introductory call 30 June 2026.",
        gender: "Male",
        photo: "/members/sejian.jpg",
        status: "Confirmed — introductory call 30 June 2026",
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
        notes: "Strong specialist for resilient livestock systems in difficult agro-ecologies. Published on mithun health, integrated hill farming systems, and indigenous livestock disease issues. Introductory call scheduled 6 July 2026.",
        gender: "Male",
        photo: "/members/borkotoky.jpg",
        status: "Interest confirmed — introductory call 6 July 2026",
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
      }
    ]
  },
  {
    id: "urban-systems",
    label: "Urban\nSystems",
    mfa: "MFA-2",
    color: "#2563eb",
    icon: "🏙️",
    members: [
      {
        number: "1",
        name: "Jaya Dhindaw",
        title: "Executive Program Director, Sustainable Cities",
        organisation: "WRI India",
        type: "Think Tank",
        city: "New Delhi",
        sector_expertise: "Urban climate action plans; NbS for cities; urban flood resilience; urban heat",
        ar_relevance: "WRI India has supported Mumbai, Bengaluru, Kochi, Jaipur, and Chennai on climate action plans and flood resilience. Jaya Dhindaw leads the urban cities programme and is the CBI India TWG 1 anchor representative.",
        key_projects: "Mumbai, Bengaluru, Kochi, Chennai, Jaipur Climate Action Plans; NIUA-WRI India MoU on urban climate adaptation financing (Sept 2024); 30 urban NbS projects across Indian cities",
        cbrt_twg_role: "Co-Anchor — Urban systems",
        email: "jaya.dhindaw@wri.org",
        phone: "011-40070900",
        linkedin: "Search: Jaya Dhindaw WRI India LinkedIn",
        website: "india.wri.org",
        priority_tier: "Tier 1 — Anchor",
        notes: "WRI India is confirmed co-anchor for Urban Systems India TWG. Key relationship for Jay Shah."
      },
      {
        number: "2",
        name: "Sarath Babu MG",
        title: "Urban Practitioner, Climate Centre for Cities",
        organisation: "National Institute of Urban Affairs (NIUA)",
        type: "Government Research",
        city: "New Delhi",
        sector_expertise: "Urban climate resilience; Climate Action Plans; urban heat action plans; AMRUT implementation",
        ar_relevance: "NIUA signed MoU with WRI India (Sept 2024) on urban climate adaptation financing. NIUA leads India's Climate Centre for Cities which supports 100+ Indian cities on climate action.",
        key_projects: "NIUA Climate Centre for Cities; India's National Action Plan on Climate Change urban implementation; AMRUT 2.0 city-level support; NIUA-RMI heat-resilient buildings report (May 2025)",
        cbrt_twg_role: "Co-Anchor — Urban policy",
        email: "sarathbabu@niua.org",
        phone: "011-24643374",
        linkedin: "Search: Sarath Babu NIUA LinkedIn",
        website: "www.niua.org",
        priority_tier: "Tier 1 — Anchor",
        notes: "NIUA is the government-linked research anchor for Urban Systems TWG. Essential for AMRUT alignment."
      },
      {
        number: "3",
        name: "Dr. Rajiv Sharma",
        title: "Professor, Urban Flood Research Group",
        organisation: "IIT Bombay — Urban Flood Research Group",
        type: "Academic",
        city: "Mumbai",
        sector_expertise: "Urban hydrology; flood modelling; stormwater management; CPHEEO standards",
        ar_relevance: "IIT Bombay's Urban Flood Research Group has developed India's most comprehensive urban flood risk models. Their work on Mumbai's drainage system provides the technical evidence base for CBRT Urban Systems stormwater criteria (CPHEEO 2019 standards).",
        key_projects: "Mumbai flood modelling; CPHEEO 2019 stormwater design standards technical input; urban flood early warning systems",
        cbrt_twg_role: "Lead technical expert — hydrology",
        email: "rajiv.sharma@iitb.ac.in",
        phone: "022-25764000",
        linkedin: "Search: Rajiv Sharma IIT Bombay LinkedIn",
        website: "www.iitb.ac.in",
        priority_tier: "Tier 1 — Core",
        notes: "Key technical expert for CBRT urban flood and stormwater criteria — IIT Bombay Urban Flood group."
      },
      {
        number: "4",
        name: "Debolina Kundu",
        title: "Senior Fellow",
        organisation: "National Institute of Urban Affairs (NIUA)",
        type: "Government Research",
        city: "New Delhi",
        sector_expertise: "Urban planning; housing policy; informal settlements; urban vulnerability",
        ar_relevance: "Dr. Kundu's research on informal settlements and urban vulnerability provides the equity check for CBRT Urban Systems criteria — ensuring thresholds do not exclude informal settlements that house 65 million urban residents in India.",
        key_projects: "NIUA urban vulnerability index; slum upgrading and climate adaptation; housing policy for informal settlements",
        cbrt_twg_role: "Senior government representative",
        email: "dkundu@niua.org",
        phone: "011-24643374",
        linkedin: "Search: Debolina Kundu NIUA LinkedIn",
        website: "www.niua.org",
        priority_tier: "Tier 1 — Core",
        notes: "Important equity representative — informal settlement inclusion in CBRT urban criteria."
      },
      {
        number: "5",
        name: "Dr. P. Harikrishna",
        title: "Chief Scientist",
        organisation: "CSIR-Structural Engineering Research Centre (SERC)",
        type: "Government Research",
        city: "Chennai",
        sector_expertise: "Wind engineering; structural resilience; cyclone-resistant structures",
        ar_relevance: "CSIR-SERC is India's apex structural engineering research institution. Their wind load and cyclone resistance standards (IS 875 series) are the mandatory codes for CBRT Urban Systems structural resilience criteria in coastal cities.",
        key_projects: "IS 875 Part 3 wind load standards; cyclone-resistant structure research for coastal India; Chennai cyclone exposure assessment",
        cbrt_twg_role: "Structural resilience expert",
        email: "director@serc.res.in",
        phone: "044-22542225",
        linkedin: "Search: P Harikrishna SERC CSIR LinkedIn",
        website: "www.serc.res.in",
        priority_tier: "Tier 2 — Technical",
        notes: "Structural code expert — IS 875 standards are mandatory for CBRT urban structural criteria."
      },
      {
        number: "6",
        name: "Amit Prothi",
        title: "Regional Director, South Asia",
        organisation: "C40 Cities — South Asia",
        type: "International Network",
        city: "New Delhi",
        sector_expertise: "Urban climate action; city climate pledges; C40 network India cities",
        ar_relevance: "C40 provides the international benchmark for CBRT Urban Systems criteria — linking India's urban climate action to global city networks. Their data on Mumbai, Delhi, and Kolkata's climate actions provide comparator benchmarks.",
        key_projects: "C40 India city climate action plans; Megacities Climate Leadership Group; Urban Climate Action Plans for C40 South Asia cities",
        cbrt_twg_role: "International benchmark link",
        email: "amit.prothi@c40.org",
        phone: "",
        linkedin: "Search: Amit Prothi C40 Cities LinkedIn",
        website: "www.c40.org",
        priority_tier: "Tier 2 — Advisory",
        notes: "C40 link — international benchmark for urban climate action criteria."
      },
      {
        number: "7",
        name: "Shashank Bhargava",
        title: "Senior Programme Manager",
        organisation: "WRI India",
        type: "Think Tank",
        city: "New Delhi",
        sector_expertise: "Urban climate finance; green bonds for cities; AMRUT finance",
        ar_relevance: "WRI India's finance team bridges the Urban Systems TWG to the India IWG — connecting CBRT urban criteria to municipal bond markets, green bond issuers, and AMRUT programme finance.",
        key_projects: "WRI India urban climate finance advisory; green bonds for Indian cities; AMRUT financing assessment",
        cbrt_twg_role: "Finance bridge — TWG to IWG",
        email: "shashank.bhargava@wri.org",
        phone: "011-40070900",
        linkedin: "Search: Shashank Bhargava WRI India LinkedIn",
        website: "india.wri.org",
        priority_tier: "Tier 1 — Core",
        notes: "Finance bridge — essential link between Urban TWG technical criteria and IWG bond market application."
      },
      {
        number: "8",
        name: "Dr. Murari Lal",
        title: "IPCC WG2 India contributing author; Consultant",
        organisation: "IPCC WG2 India contributing author; currently consultant",
        type: "Academic / Advisory",
        city: "New Delhi",
        sector_expertise: "Urban climate projections; IPCC AR6 urban chapter; India urban climate impacts",
        ar_relevance: "Dr. Lal has contributed to multiple IPCC assessment reports on India urban climate impacts. His expertise provides the science bridge — ensuring CBRT Urban Systems criteria are grounded in IPCC AR6 science.",
        key_projects: "IPCC AR6 WG2 urban chapter contributions; India urban climate impact assessment; heat and flood projection studies",
        cbrt_twg_role: "IPCC/science bridge",
        email: "murari.lal@gmail.com",
        phone: "",
        linkedin: "Search: Murari Lal IPCC Urban LinkedIn",
        website: "",
        priority_tier: "Tier 2 — Advisory",
        notes: "IPCC science bridge — validates CBRT urban criteria against AR6 science."
      },
      {
        number: "9",
        name: "Mrinalini Shrivastava",
        title: "Deputy Director",
        organisation: "National Disaster Management Authority (NDMA)",
        type: "Government",
        city: "New Delhi",
        sector_expertise: "Urban disaster risk; NDMA guidelines; flood and heat wave preparedness",
        ar_relevance: "NDMA's urban disaster risk guidelines are the government's primary framework for urban resilience in India. CBRT Urban Systems criteria must align with NDMA heat action plan and flood preparedness standards.",
        key_projects: "NDMA Heat Action Plans; Urban Flood Disaster Management Guidelines; National Disaster Management Plan 2019",
        cbrt_twg_role: "Government representative — disaster risk",
        email: "ndma@nic.in",
        phone: "011-26701700",
        linkedin: "Search: Mrinalini Shrivastava NDMA LinkedIn",
        website: "www.ndma.gov.in",
        priority_tier: "Tier 1 — Core",
        notes: "NDMA government anchor — mandatory for CBRT urban criteria alignment with national disaster standards."
      },
      {
        number: "10",
        name: "R. Srinivasan",
        title: "Director, South Asia",
        organisation: "ICLEI South Asia",
        type: "International Network",
        city: "New Delhi",
        sector_expertise: "City sustainability networks; local government climate action; India-global city bridge",
        ar_relevance: "ICLEI South Asia supports 70+ Indian cities on climate action and sustainability. Their network provides the implementation bridge for CBRT Urban Systems criteria at city government level.",
        key_projects: "ICLEI India city climate action network; Carbonn Climate Registry India cities; Green City Development programme",
        cbrt_twg_role: "India-global bridge — city networks",
        email: "info.southasia@iclei.org",
        phone: "080-41132284",
        linkedin: "Search: R Srinivasan ICLEI South Asia LinkedIn",
        website: "southasia.iclei.org",
        priority_tier: "Tier 2 — Advisory",
        notes: "City network bridge — links CBRT urban criteria to 70+ Indian city governments."
      }
    ]
  },
  {
    id: "buildings-construction",
    label: "Buildings &\nConstruction",
    mfa: "COOP-1",
    color: "#7c3aed",
    icon: "🏗️",
    members: [
      {
        number: "1",
        name: "Dr. Shailesh Kumar Agrawal",
        title: "Executive Director",
        organisation: "Building Materials and Technology Promotion Council (BMTPC)",
        type: "Government",
        city: "New Delhi",
        sector_expertise: "Climate-resilient building materials; disaster-resistant construction; NBC 2016 implementation",
        ar_relevance: "BMTPC publishes India's Vulnerability Atlas and leads the Global Housing Technology Challenge (GHTC-India) which has identified 54 cyclone/flood/earthquake-resistant construction systems.",
        key_projects: "BMTPC Vulnerability Atlas of India; GHTC-India (54 disaster-resistant construction systems); IHTM/IUHC construction innovation programmes; NBC 2016 technical support",
        cbrt_twg_role: "Anchor — Technical lead",
        email: "ed.bmtpc@gmail.com",
        phone: "011-26100585",
        linkedin: "Search: Shailesh Agrawal BMTPC LinkedIn",
        website: "www.bmtpc.org",
        priority_tier: "Tier 1 — Anchor",
        notes: "BMTPC is the primary institutional anchor for Construction TWG. Their Vulnerability Atlas is a mandatory data source."
      },
      {
        number: "2",
        name: "M. Keerthana",
        title: "Senior Scientist",
        organisation: "CSIR-Structural Engineering Research Centre (SERC)",
        type: "Government Research",
        city: "Chennai",
        sector_expertise: "Wind load design; earthquake-resistant structures; disaster-resistant building design",
        ar_relevance: "Dr. Keerthana has published research on 'Disaster resistant design of buildings — Wind and Earthquake aspects' (IBMCTE-2025 conference). Her expertise on IS 875 Part 3 application is directly relevant to CBRT Construction cyclone resilience criteria.",
        key_projects: "Wind and earthquake resistant building design for Indian conditions; IS 875 Part 3 application; Cyclone-resistant design for coastal Indian buildings",
        cbrt_twg_role: "Core technical — structural design",
        email: "keerthana@serc.res.in",
        phone: "044-22542224",
        linkedin: "Search: M Keerthana SERC CSIR LinkedIn",
        website: "www.serc.res.in",
        priority_tier: "Tier 1 — Core",
        notes: "Key expert for cyclone and wind structural criteria."
      },
      {
        number: "3",
        name: "Dr. Mahesh Tandon",
        title: "Managing Director",
        organisation: "Tandon Consultants Pvt. Ltd. / Former IIT Delhi",
        type: "Private / Academic",
        city: "New Delhi",
        sector_expertise: "Structural engineering; earthquake-resistant design; bridge and infrastructure resilience",
        ar_relevance: "Dr. Tandon is India's most senior structural engineer on seismic and disaster resilient design. His consultancy has implemented resilient infrastructure for NHAI, railways, and urban development. His expertise provides the private sector structural engineering bridge.",
        key_projects: "Seismic design standards for India; bridge resilience design; NHAI infrastructure resilience assessment",
        cbrt_twg_role: "Structural engineering expert",
        email: "tandonconsultants@gmail.com",
        phone: "011-26854547",
        linkedin: "Search: Mahesh Tandon structural engineer LinkedIn",
        website: "www.tandonconsultants.com",
        priority_tier: "Tier 2 — Technical",
        notes: "Senior structural engineering expert — peer review of CBRT construction structural criteria."
      },
      {
        number: "4",
        name: "Dr. Mili Majumdar",
        title: "Managing Director",
        organisation: "GBCI India (formerly TERI-GRIHA)",
        type: "NGO / Standards Body",
        city: "New Delhi",
        sector_expertise: "Green building rating; GRIHA; ECBC implementation; thermal comfort in buildings",
        ar_relevance: "GBCI India manages GRIHA (Green Rating for Integrated Habitat Assessment) — India's national green building rating system. GRIHA integrates climate resilience criteria and ECBC compliance. Their rating data provides the benchmark for CBRT Buildings heat resilience criteria.",
        key_projects: "GRIHA green building rating system; ECBC compliance assessment; thermal comfort research for Indian climatic zones",
        cbrt_twg_role: "Green rating and ECBC bridge",
        email: "griha@teri.res.in",
        phone: "011-24682100",
        linkedin: "Search: Mili Majumdar GBCI GRIHA LinkedIn",
        website: "www.grihaindia.org",
        priority_tier: "Tier 1 — Core",
        notes: "GRIHA rating system bridge — essential for CBRT Buildings criteria alignment with ECBC and India's green building market."
      },
      {
        number: "5",
        name: "Aditya Bhatt",
        title: "India Director",
        organisation: "Rocky Mountain Institute (RMI) India",
        type: "Think Tank",
        city: "New Delhi",
        sector_expertise: "Heat-resilient building design; cool roof programme; passive cooling; ECBC Plus",
        ar_relevance: "RMI India has published 'Heat-resilient buildings in India' (May 2025 with NIUA) — the most recent comprehensive guide to building heat resilience criteria in Indian conditions. This directly provides the technical evidence base for CBRT Buildings heat stress criteria.",
        key_projects: "RMI-NIUA Heat-Resilient Buildings report (May 2025); Cool Roof Programme India; Passive cooling design standards for Indian climates; ECBC+ implementation",
        cbrt_twg_role: "Heat resilience criteria expert",
        email: "abhatt@rmi.org",
        phone: "",
        linkedin: "Search: Aditya Bhatt RMI India LinkedIn",
        website: "rmi.org/india",
        priority_tier: "Tier 1 — Core",
        notes: "RMI-NIUA Heat-Resilient Buildings report (May 2025) is the key evidence document for CBRT Buildings heat criteria."
      },
      {
        number: "6",
        name: "Sanjay Seth",
        title: "CEO",
        organisation: "Energy Efficiency Services Ltd.",
        type: "Government PSU",
        city: "New Delhi",
        sector_expertise: "ECBC implementation; energy efficiency in buildings; BEE Star rating",
        ar_relevance: "EESL implements the Energy Conservation Building Code (ECBC) at scale across India. ECBC compliance is a key CBRT Buildings DNSH criterion (energy efficiency). EESL's data on building energy performance across Indian climate zones is essential.",
        key_projects: "ECBC implementation across India; BEE star label for buildings; UJALA programme; SLNP (Street Lighting National Programme)",
        cbrt_twg_role: "ECBC and operational energy criteria",
        email: "info@eeslindia.org",
        phone: "011-45568400",
        linkedin: "Search: Sanjay Seth EESL LinkedIn",
        website: "www.eeslindia.org",
        priority_tier: "Tier 2 — Technical",
        notes: "ECBC compliance data essential for DNSH energy criteria in CBRT Buildings."
      },
      {
        number: "7",
        name: "Dr. Ambika Bhatt",
        title: "CEO",
        organisation: "SEEDS (Sustainable Environment and Ecological Development Society)",
        type: "NGO",
        city: "New Delhi",
        sector_expertise: "Disaster-resilient housing; post-disaster reconstruction; informal settlement adaptation",
        ar_relevance: "SEEDS works on disaster-resilient housing for informal settlements in India. Their experience ensures CBRT Buildings criteria do not exclude low-income housing and informal settlements — a critical equity check.",
        key_projects: "Post-cyclone and flood reconstruction programmes; disaster-resilient housing designs for informal settlements; community-based DRR",
        cbrt_twg_role: "Equity and informal settlement check",
        email: "info@seedsindia.org",
        phone: "011-26040064",
        linkedin: "Search: Ambika Bhatt SEEDS India LinkedIn",
        website: "www.seedsindia.org",
        priority_tier: "Tier 2 — Advisory",
        notes: "Equity voice — informal settlements represent 25% of urban India housing stock."
      },
      {
        number: "8",
        name: "Dr. Anand Patwardhan",
        title: "Professor, School of Public Policy",
        organisation: "University of Maryland (former IIT Bombay)",
        type: "Academic",
        city: "New Delhi (affiliated)",
        sector_expertise: "Climate risk assessment; IPCC WG2 contributions; India climate impacts",
        ar_relevance: "Dr. Patwardhan is a leading India IPCC author who has contributed to multiple IPCC reports on climate impacts on infrastructure. His science bridge role ensures CBRT Buildings criteria are grounded in IPCC AR6 evidence.",
        key_projects: "IPCC AR6 WG2 India chapter contributions; climate risk assessment for Indian infrastructure; building climate vulnerability assessment",
        cbrt_twg_role: "Science bridge — IPCC India",
        email: "apatwardhan@umd.edu",
        phone: "",
        linkedin: "Search: Anand Patwardhan IPCC LinkedIn",
        website: "www.umd.edu",
        priority_tier: "Tier 2 — Advisory",
        notes: "IPCC science bridge for CBRT Buildings criteria."
      },
      {
        number: "9",
        name: "Himanshu Kulkarni",
        title: "Executive Director",
        organisation: "Advanced Centre for Water Resources Development and Management (ACWADAM)",
        type: "NGO / Research",
        city: "Pune",
        sector_expertise: "Groundwater; waterlogging; urban water resources; building foundation risks",
        ar_relevance: "CBRT Buildings criteria require assessment of groundwater flooding and waterlogging risks for building foundations. ACWADAM's hydrogeology expertise provides the technical basis for CBRT Buildings groundwater criteria.",
        key_projects: "Groundwater management for Indian cities; waterlogging assessment for urban areas; ACWADAM training programmes for hydrogeology",
        cbrt_twg_role: "Groundwater and waterlogging criteria",
        email: "acwadam@vsnl.net",
        phone: "020-25654062",
        linkedin: "Search: Himanshu Kulkarni ACWADAM LinkedIn",
        website: "www.acwadam.org",
        priority_tier: "Tier 2 — Advisory",
        notes: "Groundwater criteria — important for CBRT Buildings foundation and basement waterlogging thresholds."
      },
      {
        number: "10",
        name: "Dr. Piyush Tiwari",
        title: "Professor, Real Estate",
        organisation: "IIM Ahmedabad",
        type: "Academic",
        city: "Ahmedabad",
        sector_expertise: "Real estate finance; green building investment; climate risk pricing in property",
        ar_relevance: "Dr. Tiwari's research on real estate finance and climate risk pricing bridges CBRT Buildings criteria to India's property bond and mortgage market — connecting TWG criteria to the IWG real estate finance pathway.",
        key_projects: "Climate risk pricing in Indian real estate; green building investment assessment; RERA and climate disclosure",
        cbrt_twg_role: "Finance-construction bridge — IWG link",
        email: "piyush.tiwari@iima.ac.in",
        phone: "079-66324000",
        linkedin: "Search: Piyush Tiwari IIM Ahmedabad LinkedIn",
        website: "www.iima.ac.in",
        priority_tier: "Tier 2 — Advisory",
        notes: "Finance bridge — connects CBRT Buildings criteria to real estate bond and mortgage finance market."
      }
    ]
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
        name: "S.K. Soonee",
        title: "Former CEO / Senior Advisor",
        organisation: "Power System Operation Corporation (POSOCO) / Grid Controller of India",
        type: "Government PSU",
        city: "New Delhi",
        sector_expertise: "Power grid operations; extreme weather grid resilience; SCADA and grid monitoring",
        ar_relevance: "India's power grid resilience to climate events (cyclones, floods, heat waves) is POSOCO's domain. Grid operational data on outage patterns during climate events is essential for CBRT Energy Infrastructure criteria.",
        key_projects: "Grid operations during Cyclone Amphan (2020), Cyclone Yaas (2021), and extreme heat events; Power restoration protocols after climate events; Grid resilience standards for coastal substations",
        cbrt_twg_role: "Anchor — Grid operations",
        email: "info@posoco.in",
        phone: "011-26583619",
        linkedin: "Search: SK Soonee POSOCO LinkedIn",
        website: "www.grid-india.in",
        priority_tier: "Tier 1 — Anchor",
        notes: "POSOCO/Grid India is the most important government body for energy infrastructure resilience criteria."
      },
      {
        number: "2",
        name: "Shirish Garud",
        title: "Senior Fellow",
        organisation: "TERI (The Energy and Resources Institute)",
        type: "Think Tank",
        city: "New Delhi",
        sector_expertise: "Renewable energy; wind and solar policy; energy resilience; MNRE programme support",
        ar_relevance: "TERI's energy research team has studied the impact of climate hazards on India's renewable energy infrastructure. Shirish Garud has extensive experience with India's wind energy sector.",
        key_projects: "India wind energy site assessment studies; Solar energy resilience in extreme heat zones; MNRE renewable energy policy research; Climate impacts on India's energy sector",
        cbrt_twg_role: "Anchor — Renewable energy",
        email: "shirish.garud@teri.res.in",
        phone: "011-24682100",
        linkedin: "Search: Shirish Garud TERI LinkedIn",
        website: "www.teriin.org",
        priority_tier: "Tier 1 — Anchor",
        notes: "TERI is a confirmed TWG partner. Shirish Garud should anchor the Energy Infrastructure TWG."
      },
      {
        number: "3",
        name: "Dr. C. Rajendran",
        title: "Professor",
        organisation: "Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR)",
        type: "Academic / Research",
        city: "Bengaluru",
        sector_expertise: "Seismic hazard; multi-hazard risk assessment; earthquake and climate interaction",
        ar_relevance: "Energy infrastructure faces multi-hazard risk in India — cyclones, floods, earthquakes, and extreme heat. Dr. Rajendran's multi-hazard expertise provides the risk basis for CBRT Energy Infrastructure siting criteria.",
        key_projects: "Seismic hazard maps for India; multi-hazard risk assessment for energy infrastructure; JNCASR natural hazard research",
        cbrt_twg_role: "Multi-hazard expert",
        email: "rajendran@jncasr.ac.in",
        phone: "080-22082780",
        linkedin: "Search: C Rajendran JNCASR LinkedIn",
        website: "www.jncasr.ac.in",
        priority_tier: "Tier 2 — Technical",
        notes: "Multi-hazard siting expert — particularly for energy infrastructure in seismic zones."
      },
      {
        number: "4",
        name: "Arunabha Ghosh",
        title: "CEO",
        organisation: "Council on Energy, Environment and Water (CEEW)",
        type: "Think Tank",
        city: "New Delhi",
        sector_expertise: "Energy transition; climate policy; energy resilience; India's NDC implementation",
        ar_relevance: "CEEW is CBI's confirmed India IWG partner. Arunabha Ghosh provides the senior policy bridge between CBRT Energy Infrastructure TWG and India's energy transition policy — essential for connecting criteria to the green bond market.",
        key_projects: "CEEW India energy transition research; climate risk and energy security assessment; India NDC analysis; G20 energy resilience work",
        cbrt_twg_role: "Senior advisory — energy policy",
        email: "arunabha.ghosh@ceew.in",
        phone: "011-40733300",
        linkedin: "Search: Arunabha Ghosh CEEW LinkedIn",
        website: "www.ceew.in",
        priority_tier: "Tier 2 — Advisory",
        notes: "CEEW IWG partner senior voice — important for legitimacy but Shirish Garud is operational anchor."
      },
      {
        number: "5",
        name: "R. Karthikeyan",
        title: "Director General",
        organisation: "National Institute of Wind Energy (NIWE)",
        type: "Government",
        city: "Chennai",
        sector_expertise: "Wind energy resource assessment; IEC Class S turbine standards; cyclone-resilient wind turbine design",
        ar_relevance: "NIWE is India's apex institution for wind energy resource assessment and turbine standards. Their IEC Class S site-specific turbine design standards are the primary technical basis for CBRT Energy Infrastructure wind turbine resilience criteria.",
        key_projects: "India Wind Atlas; IEC Class S turbine site-specific design standards for cyclone-prone areas; Offshore wind energy assessment; Wind turbine certification for extreme weather",
        cbrt_twg_role: "Anchor — Wind energy technical",
        email: "dg@niwe.res.in",
        phone: "044-23615400",
        linkedin: "Search: R Karthikeyan NIWE LinkedIn",
        website: "www.niwe.res.in",
        priority_tier: "Tier 1 — Anchor",
        notes: "NIWE is the mandatory technical authority for wind turbine resilience criteria — IEC Class S standards are cited in CBRT Energy criteria."
      },
      {
        number: "6",
        name: "Diptiman Roy",
        title: "Professor / Former BHEL Technical Director",
        organisation: "Shanthi Business School / Former BHEL",
        type: "Academic / Industry",
        city: "Bengaluru",
        sector_expertise: "Power substation design; grid infrastructure; electrical equipment under extreme weather",
        ar_relevance: "Substation and grid infrastructure resilience (flood, cyclone, heat) is a core CBRT Energy Infrastructure criterion. Dr. Roy's BHEL experience on substation design and flooding provides the technical basis for CBRT substation elevation and underground cabling criteria.",
        key_projects: "BHEL substation design for Indian grid; high-voltage electrical equipment performance in extreme weather; underground cabling assessment",
        cbrt_twg_role: "Substation and grid infrastructure expert",
        email: "diptiman.roy@bhel.in",
        phone: "",
        linkedin: "Search: Diptiman Roy BHEL LinkedIn",
        website: "www.bhel.com",
        priority_tier: "Tier 2 — Technical",
        notes: "Substation flooding criteria expert — BHEL grid infrastructure experience."
      },
      {
        number: "7",
        name: "Rishi Kant Srivastava",
        title: "Chairman and Managing Director",
        organisation: "IREDA (Indian Renewable Energy Development Agency)",
        type: "Government DFI",
        city: "New Delhi",
        sector_expertise: "Renewable energy finance; green bonds; IREDA green bond issuance",
        ar_relevance: "IREDA is India's apex renewable energy finance institution and a key CBRT green bond issuer candidate. Their green bond framework and financing criteria for wind, solar, and grid projects are directly aligned with CBRT Energy Infrastructure criteria.",
        key_projects: "IREDA green bond issuance; renewable energy project financing; IREDA-World Bank green energy finance; Solar and wind project appraisal criteria",
        cbrt_twg_role: "Finance and DFI bridge — IWG anchor",
        email: "info@ireda.in",
        phone: "011-23715900",
        linkedin: "Search: Rishi Kant Srivastava IREDA LinkedIn",
        website: "www.ireda.in",
        priority_tier: "Tier 1 — Core",
        notes: "IREDA is the primary DFI green bond issuer for CBRT Energy criteria — critical IWG-TWG bridge."
      },
      {
        number: "8",
        name: "Kirtika Mishra",
        title: "India Lead",
        organisation: "IEEFA (Institute for Energy Economics and Financial Analysis) India",
        type: "Think Tank",
        city: "New Delhi",
        sector_expertise: "Energy finance; coal transition; climate risk in energy investments; India energy markets",
        ar_relevance: "IEEFA's analysis of climate risk in India's energy sector provides the investor perspective for CBRT Energy Infrastructure criteria — particularly climate risk disclosure and stranded asset risk for fossil fuel and grid assets.",
        key_projects: "India energy transition finance analysis; coal stranded asset risk assessment; climate risk in India energy sector; India DFI green finance review",
        cbrt_twg_role: "Climate risk data and IWG bridge",
        email: "kmishra@ieefa.org",
        phone: "",
        linkedin: "Search: Kirtika Mishra IEEFA India LinkedIn",
        website: "www.ieefa.org",
        priority_tier: "Tier 2 — Technical",
        notes: "Investor risk perspective — important for linking CBRT criteria to climate risk disclosure requirements."
      },
      {
        number: "9",
        name: "Dr. Pramod Deo",
        title: "Former Chairman",
        organisation: "Central Electricity Regulatory Commission (CERC)",
        type: "Government / Regulatory",
        city: "New Delhi",
        sector_expertise: "Electricity regulation; grid tariff; renewable energy policy; CERC regulations",
        ar_relevance: "CERC's regulatory framework for grid operations and renewable energy tariffs is the basis for CBRT Energy Infrastructure regulatory criteria — particularly grid interconnection standards and force majeure provisions for climate events.",
        key_projects: "CERC regulations for renewable energy grid connection; grid stability rules; tariff framework for climate resilient energy infrastructure",
        cbrt_twg_role: "Regulatory framework expert",
        email: "info@cercind.gov.in",
        phone: "011-23353503",
        linkedin: "Search: Pramod Deo CERC LinkedIn",
        website: "www.cercind.gov.in",
        priority_tier: "Tier 2 — Advisory",
        notes: "Regulatory framework expert — CERC regulations are the legal basis for grid resilience standards."
      },
      {
        number: "10",
        name: "Dr. Sunita Narain",
        title: "Director General",
        organisation: "Centre for Science and Environment (CSE)",
        type: "Think Tank / Advocacy",
        city: "New Delhi",
        sector_expertise: "Environmental policy; energy equity; renewable energy access; climate justice",
        ar_relevance: "Dr. Narain provides the equity and climate justice check for CBRT Energy Infrastructure criteria — ensuring criteria do not create barriers to energy access for rural and low-income communities, and preventing maladaptation in energy infrastructure investment.",
        key_projects: "CSE Energy policy advocacy; renewable energy access for rural India; climate justice in energy transition; CSE State of India's Environment reports",
        cbrt_twg_role: "Maladaptation and equity senior voice",
        email: "cse@cseindia.org",
        phone: "011-29955124",
        linkedin: "Search: Sunita Narain CSE LinkedIn",
        website: "www.cseindia.org",
        priority_tier: "Tier 2 — Advisory",
        notes: "Senior equity voice — important for legitimacy and maladaptation check in energy criteria."
      }
    ]
  }
];

export const totalMembers = sectors.reduce((sum, s) => sum + s.members.length, 0);
