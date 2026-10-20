import { CONTACT_DETAILS } from "./socialMediaData";

export interface ProductItem {
  id: string;
  name: string;
  categoryTag: string;
  type: string;
  description: string;
  features: string[];
  image: string;
}

export interface ProductCategory {
  id: string;
  number: string;
  name: string;
  tagline: string;
  overview: string;
  image: string;
  systemTypes: string[];
  metrics: { label: string; value: string }[];
  products: ProductItem[];
}

export interface ProductsPageData {
  title: string;
  breadcrumbs: { label: string; href: string }[];
  companyName: string;
  eyebrow: string;
  headline: string;
  leadParagraph: string;
  kpis: { label: string; value: string; description: string }[];
  categories: ProductCategory[];
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
  };
}

export const PRODUCTS_PAGE_DATA: ProductsPageData = {
  title: "Products | Reflex Industrial Solutions",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
  ],
  companyName: "Reflex Industrial Solutions",
  eyebrow: "Reflex Industrial Solutions • Chemical Formulation Portfolio",
  headline: "Specialty Industrial Formulations & Process Systems",
  leadParagraph:
    "Reflex Industrial Solutions manufactures high-performance chemical formulations and turnkey water management technologies engineered to optimize heat transfer efficiency, arrest corrosion and scale precipitation, and maintain uninterrupted uptime across heavy utility assets.",
  kpis: [
    {
      label: "Disciplines",
      value: "7 Core Sectors",
      description:
        "From low to high-pressure boilers, cooling loops to RO membranes",
    },
    {
      label: "Formulations",
      value: "Custom Compounded",
      description:
        "Formulated specifically to feed water analysis and metallurgy",
    },
    {
      label: "Protection",
      value: "Zero Scale & Rust",
      description:
        "Maximizes thermal transfer rates and prevents unscheduled shutdowns",
    },
    {
      label: "Engineering",
      value: "24/7 Field Support",
      description:
        "On-site dosing calibration, sampling, and analytical surveillance",
    },
  ],
  categories: [
    {
      id: "boiler-water",
      number: "01",
      name: "Boiler Water Treatment",
      tagline: "Total Deposition & Corrosion Control for Steam Generators",
      overview:
        "Comprehensive boiler chemistry programs designed for low-pressure fire-tube boilers up to supercritical high-pressure power generation units, preventing tube failures, scale accumulation, and steam purity carryover.",
      image: "/images/services/refinery-and-gas-processing.jpg",
      systemTypes: [
        "Low & Medium Pressure Fire-tube Boilers",
        "High-Pressure Water-tube Boilers",
        "Co-generation & Supercritical Steam Plants",
        "Waste Heat Recovery Boilers (WHRB)",
      ],
      metrics: [
        { label: "Pressure Range", value: "Up to 180+ Bar" },
        { label: "Protection Gate", value: "Zero Tube Failure" },
        { label: "Purity Standard", value: "High-Purity Steam" },
      ],
      products: [
        {
          id: "boiler-corrosion-inhibitors",
          name: "Corrosion Inhibitors (Low Pressure to High Pressure Boilers)",
          categoryTag: "Corrosion Control",
          type: "Multi-Metal Passivating Inhibitor",
          description:
            "Neutralizing and filming amine chemistries that elevate feedwater pH and generate continuous protective magnetite films across economizers, drums, and superheaters.",
          features: [
            "Prevents acidic attack and pitting corrosion",
            "Effective across wide operating pressure gradients",
            "Protects both carbon steel and copper alloy metallurgy",
          ],
          image: "/images/products/items/pro-a.jpg",
        },
        {
          id: "oxygen-scavengers",
          name: "Customized Oxygen Scavengers for all types of Boilers",
          categoryTag: "Deoxygenation",
          type: "Catalyzed & Non-Volatile Formulations",
          description:
            "Rapid-reaction oxygen scavengers that instantaneously eliminate dissolved oxygen in feedwater systems before entering the boiler vessel.",
          features: [
            "Rapid reaction kinetics at ambient and elevated temperatures",
            "Eliminates localized dissolved oxygen pitting",
            "Provides passive metal oxide stabilization",
          ],
          image: "/images/products/items/pro-b.jpg",
        },
        {
          id: "sludge-dispersants",
          name: "Sludge Dispersants",
          categoryTag: "Scale Prevention",
          type: "High-Thermal Polymeric Conditioner",
          description:
            "Synthetic terpolymers that condition calcium, magnesium, and iron precipitates into fluid, non-adherent sludge easily evacuated during standard boiler blowdown.",
          features: [
            "Thermal stability in excess of 300°C",
            "Prevents crystal lattice adhesion on heat exchange surfaces",
            "Optimizes blowdown rates and saves energy",
          ],
          image: "/images/products/items/pro-c.jpg",
        },
        {
          id: "all-organic-polyamine",
          name: "All Organic Polyamine based treatment for HP Boilers",
          categoryTag: "HP Metallurgy",
          type: "Advanced Volatile Film-Forming Amine (FFA)",
          description:
            "Modern volatile polyamine formulation creating a molecular monomolecular hydrophobic barrier across the entire steam-water-condensate circuit without adding solids.",
          features: [
            "Zero dissolved solids addition to boiler water",
            "Comprehensive protection against two-phase erosion-corrosion",
            "Exceptional protection during wet or dry boiler layup",
          ],
          image: "/images/products/items/pro-d.jpg",
        },
        {
          id: "boiler-precommission",
          name: "Boiler pre commission chemicals and Idle Boiler layup chemicals",
          categoryTag: "Commissioning & Layup",
          type: "Passivation & Preservation Formulations",
          description:
            "Chemical degreasers, acid wash inhibitors, and vapor-phase corrosion inhibitors for seasonal idle boilers and pre-commission passivation.",
          features: [
            "Removes mill scale, protective oils, and fabrication debris",
            "Establishes uniform base magnetite layer prior to steaming",
            "Preserves idle boilers without drain requirements",
          ],
          image: "/images/products/items/pro-e.jpg",
        },
        {
          id: "boiler-offline-cleaning",
          name: "Boiler off line cleaning Chemicals",
          categoryTag: "Restoration",
          type: "Chelating & Descaling Formulations",
          description:
            "Inhibited chemical descaling agents that safely dissolve hard calcium carbonate, sulfate, and silicate encrustations without etching base parent metal.",
          features: [
            "High dissolution rate of stubborn inorganic scales",
            "Built-in corrosion inhibitors safeguard vessel wall thickness",
            "Rapidly restores heat transfer and reduces fuel consumption",
          ],
          image: "/images/products/items/pro-f.jpg",
        },
        {
          id: "alkalinity-builder",
          name: "Alkalinity Builder",
          categoryTag: "pH Optimization",
          type: "High-Purity Hydroxide Formulation",
          description:
            "Precision alkaline buffer maintaining recommended boiler water pH levels to safeguard silica solubility and prevent acidic stress corrosion cracking.",
          features: [
            "Maintains critical pH 10.5–11.5 operating range",
            "Facilitates precipitation of calcium as soft hydroxyapatite",
            "Neutralizes acid contaminants in makeup water inflow",
          ],
          image: "/images/products/items/pro-g.jpg",
        },
        {
          id: "sludge-conditioners",
          name: "Sludge Conditioners",
          categoryTag: "Crystal Modification",
          type: "High-Flux Crystal Distorter",
          description:
            "Engineered polymeric conditioners that modify crystal morphology of calcium salts into light, non-adhering precipitates easily removed in bottom blowdown.",
          features: [
            "Prevents baked-on sludge baking onto high-heat transfer tubes",
            "Maintains mobility of heavy suspended mineral solids",
            "Safe and compatible with all boiler chemistries",
          ],
          image: "/images/products/items/pro-h.jpg",
        },
        {
          id: "boiler-descaling",
          name: "Descaling",
          categoryTag: "Scale Dissolution",
          type: "Inhibited Scale Dissolver",
          description:
            "Formulated blend of acid cleaners, wetting agents, and metal passivators that rapidly dissolve established scales with zero base metal corrosion.",
          features: [
            "Penetrates dense magnetite, calcium, and silica scales",
            "Contains specialized multi-metal inhibitors",
            "Safe for copper, mild steel, and stainless alloys",
          ],
          image: "/images/products/items/pro-1.jpg",
        },
        {
          id: "boiler-scale-inhibitor",
          name: "Scale Inhibitor",
          categoryTag: "Scale Prevention",
          type: "High-Temperature Threshold Dispersant",
          description:
            "Advanced synthetic polymers that sequester hardness ions and interrupt crystal growth on boiler internal heat exchange surfaces.",
          features: [
            "Functions at high pressures and thermal flux rates",
            "Prevents blister formation and localized tube overheating",
            "Significantly reduces boiler tube cleanout frequency",
          ],
          image: "/images/products/items/pro-j.jpg",
        },
        {
          id: "condensate-treatment",
          name: "Condensate Treatment",
          categoryTag: "Steam Line Protection",
          type: "Neutralizing & Filming Amine Formulation",
          description:
            "Volatile neutralizing amines formulated to travel with steam, condense simultaneously with water, and neutralize acidic carbonic acid.",
          features: [
            "Neutralizes dissolved carbon dioxide across entire distribution loop",
            "Prevents severe grooving and pinhole corrosion in condensate pipes",
            "Dramatically reduces boiler feedwater iron contamination",
          ],
          image: "/images/products/items/pro-k.jpg",
        },
        {
          id: "boiler-oxygen-scavenger-secondary",
          name: "Oxygen Scavenger",
          categoryTag: "Oxygen Pitting Control",
          type: "Catalyzed Deoxygenation Blend",
          description:
            "Fast-acting deoxygenating chemical agent ensuring zero dissolved oxygen residual in high-pressure feedwater and boiler drums.",
          features: [
            "Instantaneous reaction kinetics across low and high temperatures",
            "Eliminates oxygen pitting in economizer tubes",
            "Promotes uniform passivating magnetite formation",
          ],
          image: "/images/products/items/pro-l.jpg",
        },
        {
          id: "neutralizing-amine",
          name: "Neutralizing Amine",
          categoryTag: "Condensate pH Elevation",
          type: "Balanced Volatility Amine Complex",
          description:
            "A precision blend of varying volatility amines providing uniform pH elevation from initial steam condensation to the furthest return lines.",
          features: [
            "Balanced distribution ratios for multi-story or sprawling piping",
            "Maintains optimal condensate pH of 8.5 to 9.2",
            "Minimizes makeup chemical replenishment needs",
          ],
          image: "/images/products/items/pro-m.jpg",
        },
        {
          id: "deposit-control-agent",
          name: "Deposit Control Agent",
          categoryTag: "Deposit Mitigation",
          type: "High-Performance Terpolymer",
          description:
            "High-performance terpolymer and iron dispersant engineered to keep metal oxides and suspended mineral fines in suspension under severe boiler conditions.",
          features: [
            "Effective dispersion of iron oxide and colloidal silica",
            "Prevents deposit-induced localized tube wall overheating",
            "Improves overall thermal efficiency and reduces fuel costs",
          ],
          image: "/images/products/items/pro-n.jpg",
        },
      ],
    },
    {
      id: "cooling-water",
      number: "02",
      name: "Cooling Water Treatment",
      tagline:
        "Corrosion, Scaling & Microbiological Defense for Evaporative Loops",
      overview:
        "Engineered chemical programs for open recirculating, closed loop, and once-through cooling tower installations, preventing biofilm proliferation, mineral scaling, and galvanic metal degradation.",
      image: "/images/services/power-and-desalination.jpg",
      systemTypes: [
        "Induced & Forced Draft Cooling Towers",
        "HVAC Central Chilled Water & Condenser Circuits",
        "Industrial Shell & Tube Heat Exchangers",
        "Barometric Condensers & Adiabatic Coolers",
      ],
      metrics: [
        { label: "Cycles of Concentration", value: "Up to 6–8 COC" },
        { label: "Corrosion Rate", value: "< 1.0 MPY" },
        { label: "Biofilm Control", value: "99.9% Suppression" },
      ],
      products: [
        {
          id: "cooling-corrosion-inhibitors",
          name: "Corrosion Inhibitors",
          categoryTag: "Metal Protection",
          type: "Synergistic Organic & Inorganic Inhibitor",
          description:
            "Phosphate, zinc, and organic polycarboxylate blends establishing instantaneous anodic and cathodic barrier films over mild steel, copper, and stainless steel.",
          features: [
            "Maintains corrosion rates well below 1.0 MPY on mild steel",
            "Prevents pitting attack and microbiological-induced corrosion (MIC)",
            "Stable under high stress and extreme chlorination regimes",
          ],
          image: "/images/products/items/b1.jpg",
        },
        {
          id: "dispersants-antiscalants",
          name: "Dispersants and Antiscalant",
          categoryTag: "Scale Prevention",
          type: "Threshold Polymer Matrix",
          description:
            "Polyacrylic, polymaleic, and phosphonate formulations that distort crystal nucleation of calcium carbonate, calcium sulfate, and colloidal silt.",
          features: [
            "Allows operation at elevated cycles of concentration",
            "Reduces blowdown water consumption significantly",
            "Keeps condenser tubes pristine for optimal heat transfer",
          ],
          image: "/images/products/items/b2.jpg",
        },
        {
          id: "bio-dispersants",
          name: "Bio dispersants",
          categoryTag: "Biofilm Removal",
          type: "Surfactant & Slime Penetrant",
          description:
            "Non-foaming penetrants that break down extracellular polymeric substances (EPS) and biofilm slime layers, exposing underlying bacteria to biocides.",
          features: [
            "Penetrates anaerobic slime and algal masses",
            "Loosens and disperses dead biomass during biocide dosing",
            "Prevents under-deposit corrosion under stagnant conditions",
          ],
          image: "/images/products/items/b3.jpg",
        },
        {
          id: "micro-biocides",
          name: "Micro biocides",
          categoryTag: "Disinfection",
          type: "Broad-Spectrum Oxidizing & Non-Oxidizing Biocides",
          description:
            "Comprehensive antimicrobial agents including isothiazolinones, glutaraldehyde, quaternary ammonium, and stabilized halogens controlling algae and Legionella.",
          features: [
            "Rapid bacterial kill across wide pH spectrum",
            "Destroys sulfate-reducing bacteria (SRB) and iron bacteria",
            "Non-persistent and environmentally degradable formulations",
          ],
          image: "/images/products/items/b4.jpg",
        },
        {
          id: "chlorine-dioxide",
          name: "Chlorine Dioxide",
          categoryTag: "Advanced Oxidation",
          type: "Selective Dissolved Gas Disinfectant",
          description:
            "High-efficiency ClO2 precursor chemistry delivering powerful disinfection independent of cooling water pH without producing hazardous chlorinated byproducts.",
          features: [
            "Effective across pH 6.0 to 10.0 without efficacy loss",
            "Exceptional penetration of sessile bacterial biofilms",
            "Zero trihalomethane (THM) or chlorophenol formation",
          ],
          image: "/images/products/items/b5.jpg",
        },
        {
          id: "evaporator-antiscalant",
          name: "Evaporator Antiscalant",
          categoryTag: "Thermal Desalination",
          type: "High-TDS Polymeric Dispersant",
          description:
            "Specialized high-thermal polymer engineered specifically for multi-effect distillation (MED) and mechanical vapor recompression (MVR) evaporators.",
          features: [
            "Prevents heavy calcium sulfate and silica scale formation",
            "Maintains high heat transfer coefficients in vapor chambers",
            "Reduces chemical clean-in-place (CIP) turnaround frequency",
          ],
          image: "/images/products/items/b6.jpg",
        },
        {
          id: "chlorine-activator",
          name: "Chlorine Activator",
          categoryTag: "Chemical Catalyst",
          type: "Halogen Efficacy Enhancer",
          description:
            "Catalytic activator that accelerates hypochlorite dissociation and reinforces free available chlorine residual in high organic loading cooling circuits.",
          features: [
            "Reduces total chlorine consumption up to 40%",
            "Improves residual stability under direct solar UV exposure",
            "Enhanced disinfection across variable cooling load conditions",
          ],
          image: "/images/products/items/b7.jpg",
        },
      ],
    },
    {
      id: "reverse-osmosis",
      number: "03",
      name: "Reverse Osmosis Membrane Treatment",
      tagline: "Ultra-High Flux Preservation & Membrane Longevity Programs",
      overview:
        "Advanced membrane chemical technologies formulated to protect thin-film polyamide reverse osmosis (RO), nanofiltration (NF), and ultrafiltration (UF) elements from mineral fouling and bio-fouling.",
      image: "/images/products/products-hero.jpg",
      systemTypes: [
        "Industrial Brackish Water RO (BWRO)",
        "Seawater Desalination Plants (SWRO)",
        "Effluent Recycling & Zero Liquid Discharge (ZLD) RO Skids",
        "Commercial Hollow-Fiber Ultrafiltration Systems",
      ],
      metrics: [
        { label: "Silica Tolerance", value: "Up to 250–300 ppm" },
        { label: "Recovery Boost", value: "+10% to 15%" },
        { label: "CIP Extension", value: "3x Longer Cycles" },
      ],
      products: [
        {
          id: "membrane-antiscalant",
          name: "Membrane Antiscalant",
          categoryTag: "Scale Prevention",
          type: "High-Recovery Dendritic Polymer",
          description:
            "Broad-spectrum threshold scale inhibitors protecting spiral-wound membrane channels against calcium carbonate, barium sulfate, calcium fluoride, and reactive silica.",
          features: [
            "Controls silica concentrations up to 300 ppm LSI > +2.5",
            "Compatible with all leading polyamide thin-film composite membranes",
            "Eliminates acid dosing requirements in most feedwater streams",
          ],
          image: "/images/products/items/c1.jpg",
        },
        {
          id: "membrane-biocide",
          name: "Membrane Biocide",
          categoryTag: "Sanitization",
          type: "Non-Oxidizing Broad Spectrum Formulation",
          description:
            "DBNPA and isothiazoline-based biocides engineered specifically to sanitize membrane feedwaters without causing oxidative degradation to polyamide layers.",
          features: [
            "100% safe for thin-film composite membrane polymers",
            "Rapid kill rate of slime-forming biofilm bacteria",
            "Ideal for periodic shock dosing or continuous online feed",
          ],
          image: "/images/products/items/c2.jpg",
        },
        {
          id: "ro-ph-booster",
          name: "pH Booster",
          categoryTag: "Permeate Conditioning",
          type: "High-Purity Neutralization Chemistry",
          description:
            "Food and pharmaceutical grade alkaline buffers used to calibrate permeate pH downstream of RO arrays to prevent piping network corrosion.",
          features: [
            "Eliminates post-membrane carbonic acidity",
            "Food-grade purity compliant with potable water standards",
            "Low-conductivity addition for high-purity water requirements",
          ],
          image: "/images/products/items/c3.jpg",
        },
        {
          id: "acidic-cleaners",
          name: "Acidic Cleaners",
          categoryTag: "CIP Restoration",
          type: "Low-pH Chelation Cleaner",
          description:
            "Specialized acid CIP formulations that dissolve stubborn calcium carbonate scale, iron oxide fouls, and metal phosphate deposits from membrane sheets.",
          features: [
            "Restores normalized permeate flow and pressure drops",
            "Formulated with membrane-safe organic chelating agents",
            "Gentle on glue lines and polyester backing fabrics",
          ],
          image: "/images/products/items/c4.jpg",
        },
        {
          id: "alkaline-cleaners",
          name: "Alkaline Cleaners",
          categoryTag: "CIP Restoration",
          type: "High-pH Surfactant Cleaner",
          description:
            "Buffered alkaline formulations containing advanced surfactants that emulsify organic matters, humic acids, silt particles, and biological slime.",
          features: [
            "Dissolves stubborn bio-fouling and colloidal organic matrices",
            "Maintains controlled pH to protect membrane flux stability",
            "Rapidly disperses dead biomass and slime complexes",
          ],
          image: "/images/products/items/c5.jpg",
        },
        {
          id: "organic-cleaners",
          name: "Organic Cleaners",
          categoryTag: "CIP Restoration",
          type: "Enzymatic & Solubilizing Detergent",
          description:
            "Heavy-duty cleaning chemistry formulated specifically for industrial wastewater effluent RO units suffering from synthetic polymer and oil contamination.",
          features: [
            "Removes complex chemical polymers and industrial oils",
            "Effective on difficult COD and hydrocarbon foulants",
            "Significantly reduces differential pressure across pressure vessels",
          ],
          image: "/images/products/items/c6.jpg",
        },
        {
          id: "membrane-preservatives",
          name: "Membrane Off line preservatives",
          categoryTag: "Storage & Protection",
          type: "Antimicrobial Storage Solution",
          description:
            "Sodium bisulfite and non-oxidizing preservation chemicals used to prevent biological proliferation and element dry-out during plant turnarounds.",
          features: [
            "Protects elements during standby and transport for months",
            "Prevents bacterial growth and anaerobic stagnation",
            "Readily rinses clean with RO permeate upon plant startup",
          ],
          image: "/images/products/items/c7.jpg",
        },
        {
          id: "trutrack-software",
          name: "TruTrack Membrane treatment software",
          categoryTag: "Digital Diagnostics",
          type: "Projection & Antiscalant Dosage Engine",
          description:
            "Proprietary computational software that analyzes feedwater mineral saturation indices (LSI, SDI, CCDC) to calculate optimum antiscalant dosing and maximum recovery.",
          features: [
            "Accurate projection of scaling potentials for 12+ minerals",
            "Calculates precise chemical consumption and operating cost",
            "Normalizes daily RO operating data to detect fouling trends early",
          ],
          image: "/images/products/items/c8.jpg",
        },
      ],
    },
    {
      id: "chilled-water",
      number: "04",
      name: "Chilled Water Treatment",
      tagline:
        "Closed-Loop Corrosion & Microbial Protection for HVAC & Process Loops",
      overview:
        "Specialized protective formulations for closed chilled water networks, secondary refrigeration circuits, and thermal energy storage systems, ensuring zero galvanic corrosion and long-term fluid stability.",
      image: "/images/services/petrochemicals-and-polymers.jpg",
      systemTypes: [
        "Commercial & Industrial Chiller Closed Loops",
        "Brine & Glycol Secondary Refrigeration",
        "District Cooling Underground Distribution Mains",
        "Fan Coil Units (FCU) & Air Handling Units (AHU)",
      ],
      metrics: [
        { label: "Dissolved Oxygen Attack", value: "Zero Pitting" },
        { label: "Copper Leaching", value: "< 0.1 ppm" },
        { label: "Nitrite Residual", value: "Automated Control" },
      ],
      products: [
        {
          id: "iron-dispersant",
          name: "Iron Dispersant",
          categoryTag: "Particulate Management",
          type: "High-Capacity Chelation Dispersant",
          description:
            "Specialized dispersant that keeps microscopic iron oxide and rust particles suspended in flow, preventing heavy sedimentation in chiller tubes and fan coils.",
          features: [
            "Eliminates mud and iron sludge settle-out in chilled coils",
            "Assists sidestream filtration units in particulate removal",
            "Restores thermal conductivity across chilled exchangers",
          ],
          image: "/images/products/items/d1.jpg",
        },
        {
          id: "chilled-corrosion-scale",
          name: "Corrosion and Scale Inhibitors",
          categoryTag: "Closed Circuit Inhibitor",
          type: "Nitrite, Molybdate & Silicate Formulations",
          description:
            "Engineered multi-metal protective blends forming unyielding passivation layers over carbon steel, yellow metals, cast iron, and aluminum alloys.",
          features: [
            "Long-lasting protection requiring minimal makeup replenishment",
            "Zero scale formation in heat exchangers and heat pumps",
            "Compatible with ethylene and propylene glycol solutions",
          ],
          image: "/images/products/items/d2.jpg",
        },
        {
          id: "chilled-oxidising-biocide",
          name: "Oxidising Biocide",
          categoryTag: "Shock Disinfection",
          type: "Rapid-Action Oxidant",
          description:
            "Controlled oxidizer formulation utilized during pre-commission flushing and periodic system clean-outs to eradicate established bio-slime colonies.",
          features: [
            "Destroys microbiological reservoirs in closed piping",
            "Rapid reaction with immediate microbial population drop",
            "Rinses cleanly without leaving corrosive residues",
          ],
          image: "/images/products/items/d3.jpg",
        },
        {
          id: "chilled-non-oxidising-biocide",
          name: "Non Oxidising Biocide",
          categoryTag: "Long-Term Preservation",
          type: "Non-Corrosive Antimicrobial Biostat",
          description:
            "Sustained-action biocide specifically tailored for chilled water loops, preventing anaerobic bacterial proliferation and microbiologically influenced corrosion.",
          features: [
            "Effective against sulfate-reducing bacteria (SRB)",
            "Does not degrade or consume nitrite corrosion inhibitors",
            "Provides protection in stagnant and low-flow piping branches",
          ],
          image: "/images/products/items/d4.jpg",
        },
        {
          id: "closed-system-corrosion",
          name: "Closed system Corrosion Inhibitor",
          categoryTag: "System Passivation",
          type: "Heavy-Duty Multi-Metal Passivator",
          description:
            "Comprehensive closed-circuit formulation providing robust buffer capacity and total electrochemical insulation against stray current and galvanic corrosion.",
          features: [
            "Protects mixed-metallurgy networks (steel, brass, copper, bronze)",
            "Non-staining formulation safe for building environments",
            "Maintains stable protection through thermal expansion cycles",
          ],
          image: "/images/products/items/d5.jpg",
        },
      ],
    },
    {
      id: "fuel-fireside",
      number: "05",
      name: "Fuel/Fireside Treatment",
      tagline:
        "Combustion Efficiency, Slag Inhibition & Acid Dew Point Mitigation",
      overview:
        "Specialized chemical additives for solid fuels (coal, lignite, petcoke, biomass, briquettes) and heavy fuel oils, reducing slagging, clinker formation, soot deposits, and cold-end sulfuric corrosion.",
      image: "/images/services/power-industries.jpg",
      systemTypes: [
        "Pulverized Coal & Fluidized Bed Boilers (CFBC/AFBC)",
        "Stoker-Fired Industrial Boilers & Kilns",
        "Heavy Fuel Oil (HFO / Furnace Oil) Combustors",
        "Biomass, Bagasse & Agricultural Waste Boilers",
      ],
      metrics: [
        { label: "Unburnt Carbon Reduction", value: "Up to 30%" },
        { label: "Slag Friability", value: "Easy Sootblowing" },
        { label: "Cold-End Corrosion", value: "Arrested" },
      ],
      products: [
        {
          id: "fuel-additive-solid",
          name: "Fuel additive for Coal, Briquettes and all Solid Fuels",
          categoryTag: "Solid Fuel Conditioning",
          type: "Catalytic Combustion & Anti-Clinkering Powder",
          description:
            "Proprietary dry and slurry additives that condition inorganic ash, elevate ash fusion temperatures, and catalyze carbon burnout in solid fuel furnaces.",
          features: [
            "Prevents hard vitreous clinker formation on boiler furnace walls",
            "Converts bonded slag into friable, easily dislodged deposits",
            "Lowers unburnt carbon in bottom ash and fly ash, improving boiler efficiency",
          ],
          image: "/images/products/items/e1.jpg",
        },
        {
          id: "fuel-additive-liquid",
          name: "Fuel additive for Furnace Oil Liquid fuel.",
          categoryTag: "Liquid Fuel Optimization",
          type: "Organo-Metallic Combustion Catalyst",
          description:
            "Multifunctional liquid additive designed for heavy furnace oil, LDO, and diesel fuels, dispersing sludge and modifying vanadium-sodium eutectic slag.",
          features: [
            "Improves fuel atomization and prevents burner tip carbonization",
            "Inhibits high-temperature vanadium slagging on superheater tubes",
            "Suppresses SO3 generation to mitigate cold-end air preheater acid corrosion",
          ],
          image: "/images/products/items/e2.jpg",
        },
      ],
    },
    {
      id: "raw-wastewater",
      number: "06",
      name: "Raw Water and Waste Water Treatment",
      tagline:
        "Clarification, Coagulation, Flocculation & Industrial Effluent Polish",
      overview:
        "Comprehensive portfolio of coagulants, synthetic polyelectrolytes, defoamers, and biological conditioners engineered to maximize solid-liquid separation, reduce turbidity, and ensure pollution board discharge compliance.",
      image: "/images/services/municipal-water-treatment.jpg",
      systemTypes: [
        "Raw Water Clarifiers & Flocculators",
        "Effluent Treatment Plants (ETP) & Common Effluent Treatment (CETP)",
        "Sewage Treatment Plants (STP) & MBR / SBR Systems",
        "Sludge Dewatering Centrifuges & Filter Presses",
      ],
      metrics: [
        { label: "Turbidity Reduction", value: "> 95% Clarity" },
        { label: "Sludge Cake Solids", value: "Up to 25–35%" },
        { label: "Discharge Compliance", value: "100% Guaranteed" },
      ],
      products: [
        {
          id: "ww-coagulants",
          name: "Coagulants",
          categoryTag: "Colloidal Destabilization",
          type: "Inorganic & Polyaluminum Chloride (PAC) Blends",
          description:
            "High-charge density primary coagulants that rapidly neutralize negative surface charges on suspended colloids, generating dense pin-flocs.",
          features: [
            "Effective across broad turbidity and raw water pH ranges",
            "Produces dense, rapidly settling micro-flocs with low sludge volume",
            "Significantly reduces chemical consumption compared to conventional alum",
          ],
          image: "/images/products/items/f1.jpg",
        },
        {
          id: "ww-defoamer",
          name: "Defoamer",
          categoryTag: "Foam Control",
          type: "Silicone & Polyether Emulsions",
          description:
            "Rapid-knockdown antifoam agents eliminating surface and entrained foam in aeration basins, ETP sumps, biological reactors, and cooling cascades.",
          features: [
            "Immediate foam knockdown and long-lasting foam suppression",
            "Does not interfere with biological active sludge bacteria",
            "Effective in surfactant-rich and high-temperature waste streams",
          ],
          image: "/images/products/items/f2.jpg",
        },
        {
          id: "ww-disinfectant",
          name: "Disinfectant",
          categoryTag: "Pathogen Elimination",
          type: "Advanced Water Disinfectant Formulation",
          description:
            "High-efficacy oxidizing and non-oxidizing germicides providing absolute terminal pathogen destruction in treated municipal and industrial effluents.",
          features: [
            "Guarantees compliance with discharge fecal coliform standards",
            "Rapid contact time requirements in retention channels",
            "Low residual odor and non-residual persistence",
          ],
          image: "/images/products/items/f3.jpg",
        },
        {
          id: "ww-descalent",
          name: "Descalent",
          categoryTag: "Pipeline Maintenance",
          type: "Industrial Scale Dissolver",
          description:
            "Heavy-duty chemical descaling compounds designed to clear mineral encrustation and calcium deposits from ETP piping, clarifier weirs, and pumps.",
          features: [
            "Dissolves stubborn calcium, magnesium, and carbonate deposits",
            "Inhibited against corrosive attack on cast iron and steel pipework",
            "Rapidly restores gravity drainage and pump suction capacity",
          ],
          image: "/images/products/items/f4.jpg",
        },
        {
          id: "ww-flocculants",
          name: "Flocculants / Polyelectrolytes of various ionic characteristics",
          categoryTag: "Flocculation",
          type: "Cationic, Anionic & Non-Ionic Polyacrylamides",
          description:
            "High-molecular-weight synthetic polymers creating strong molecular bridges between pin-flocs to generate massive, rapid-settling macro-flocs.",
          features: [
            "Available in tailored charge densities (Cationic, Anionic, Non-Ionic)",
            "Exceptional performance in centrifuge and belt filter press dewatering",
            "Leaves crystal-clear supernatant water suitable for tertiary recycling",
          ],
          image: "/images/products/items/f5.jpg",
        },
        {
          id: "ww-specialty-additives",
          name: "Specialty additives for Liquid / Liquid and Solids / Liquid separation",
          categoryTag: "Emulsion Breaking",
          type: "Demulsifiers & Coalescing Agents",
          description:
            "Custom-engineered surface-active agents designed to break stubborn oil-in-water emulsions and accelerate heavy phase separation in oil-water separators.",
          features: [
            "Rapidly cracks oily wastewater emulsions in DAF units",
            "Produces sharp, clean phase interface separation",
            "Reduces oil and grease content to compliant single-digit ppm levels",
          ],
          image: "/images/products/items/f6.jpg",
        },
        {
          id: "ww-color-odor",
          name: "Colour and Odor Removers",
          categoryTag: "Effluent Polishing",
          type: "Decolorizing Polymers & H2S Scavengers",
          description:
            "Advanced quaternary polymers and oxidizing agents eliminating synthetic dye color residues and neutralizing noxious hydrogen sulfide / mercaptan odors.",
          features: [
            "Decolorizes stubborn reactive, disperse, and acid textile dyes",
            "Eliminates offensive sewer and biological septic odors instantly",
            "Essential for Zero Liquid Discharge (ZLD) RO feed preparation",
          ],
          image: "/images/products/items/f7.jpg",
        },
        {
          id: "ww-bod-cod",
          name: "BOD / COD Controlling Chemicals",
          categoryTag: "Regulatory Compliance",
          type: "Bio-Augmentation & Advanced Oxidants",
          description:
            "Bio-catalytic enzymes, selected bacterial consortia, and specialty chemical oxidants targeted at degrading recalcitrant organic contaminants.",
          features: [
            "Accelerates biological oxidation kinetics in aeration basins",
            "Breaks down refractory COD molecules resistant to standard biology",
            "Guarantees discharge compliance with state pollution control boards",
          ],
          image: "/images/products/items/f8.jpg",
        },
      ],
    },
    {
      id: "special-services",
      number: "07",
      name: "Special Utility Systems & Services",
      tagline: "Turnkey Pretreatment, Engineering, Commissioning & Site Audits",
      overview:
        "Comprehensive turnkey engineering capabilities providing the complete physical equipment, spare parts, chemical dosing skids, and on-site operation and maintenance (O&M) services.",
      image: "/images/about/water-treatment-engineers.jpg",
      systemTypes: [
        "Pretreatment Media Filtration & Softening Units",
        "Demineralization (DM) & Mixed Bed Ion Exchange Skids",
        "Industrial Clarifiers & Dissolved Air Flotation (DAF)",
        "Turnkey Operation & Maintenance (O&M) Contracts",
      ],
      metrics: [
        { label: "Turnkey Scope", value: "Design to O&M" },
        { label: "Field Availability", value: "24/7 Rapid Response" },
        { label: "Analytical Support", value: "ISO Lab Diagnostics" },
      ],
      products: [
        {
          id: "supply-pretreatment",
          name: "Supply of pretreatment systems like Filters, Softeners, Demineralisers, Clarifiers and RO Systems.",
          categoryTag: "Equipment Supply",
          type: "Custom Engineered Water Treatment Plants",
          description:
            "Turnkey design, fabrication, and supply of robust water purification skids tailored directly to site water chemistry and flow rate requirements.",
          features: [
            "Dual media filters, activated carbon filters, and auto-backwash softeners",
            "Two-bed and mixed-bed ion exchange demineralization (DM) plants",
            "Single-pass and two-pass reverse osmosis skids with energy recovery",
          ],
          image: "/images/products/items/pro-e1.jpg",
        },
        {
          id: "erection-commissioning",
          name: "Erection, Commissioning, Operation and Maintenance of the above systems. Supply of spares of the above systems",
          categoryTag: "Turnkey Engineering",
          type: "Field Execution & O&M Contracts",
          description:
            "Complete on-site mechanical erection, piping, electrical hookup, plant commissioning, long-term O&M staffing, and certified replacement spare supply.",
          features: [
            "Experienced field engineers overseeing turnkey civil and mechanical installation",
            "Performance guarantee testing and operator training programs",
            "Comprehensive inventory of genuine membranes, resins, valves, and pumps",
          ],
          image: "/images/products/items/pro-e2.jpg",
        },
        {
          id: "regular-technical-support",
          name: "Regular technical support / services",
          categoryTag: "Technical Services",
          type: "Field Monitoring & Chemical Dosing Optimization",
          description:
            "Dedicated service engineers conducting scheduled site visits to calibrate dosing skids, inspect heat transfer equipment, and review log sheets.",
          features: [
            "Routine on-site titration, residual testing, and cycle adjustments",
            "Inventory management to ensure zero chemical stock-outs",
            "Emergency 24/7 technical troubleshooting for plant anomalies",
          ],
          image: "/images/products/items/pro-e3.jpg",
        },
        {
          id: "water-scale-analysis",
          name: "Water and Scale Analysis",
          categoryTag: "Laboratory Analytics",
          type: "Accredited Laboratory Diagnostics",
          description:
            "Full metallurgical, deposit, and water characterization in our accredited analytical testing laboratory to pinpoint exact root causes of plant issues.",
          features: [
            "Complete water analysis (cations, anions, silica, organic loading)",
            "X-ray diffraction and chemical digestion of boiler and cooling scales",
            "Comprehensive written technical diagnostic reports with corrective action plans",
          ],
          image: "/images/products/items/pro-d9.jpg",
        },
        {
          id: "periodic-technical-audits",
          name: "Regular and periodic technical audit and review of systems and programs",
          categoryTag: "System Audits",
          type: "Energy, Mass & Water Balance Reviews",
          description:
            "Formal executive technical audits evaluating plant water consumption, energy efficiency, cycles of concentration, and opportunities for wastewater reuse.",
          features: [
            "Comprehensive water balance modeling across all utility loops",
            "Identification of water conservation and Zero Liquid Discharge (ZLD) pathways",
            "Direct cost-reduction recommendations backed by quantifiable data",
          ],
          image: "/images/products/items/pro-d10.jpg",
        },
      ],
    },
  ],
  contact: {
    phone: CONTACT_DETAILS.phone,
    phoneHref: `tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`,
    email: CONTACT_DETAILS.email,
  },
};
