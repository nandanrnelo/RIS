import { CONTACT_DETAILS } from "./socialMediaData";

export interface QualityDirective {
  id: string;
  ruleNumber: string;
  title: string;
  description: string;
  category: "raw-material" | "production" | "analysis" | "dispatch";
}

export interface QualityLifecycleStage {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  protocols: string[];
}

export interface QualityKpiItem {
  label: string;
  value: string;
  description: string;
}

export interface AnalyticalTestingParameter {
  parameter: string;
  method: string;
  purpose: string;
}

export interface QualityPageData {
  title: string;
  breadcrumbs: { label: string; href: string }[];
  companyName: string;
  eyebrow: string;
  headline: string;
  leadParagraph: string;
  missionStatement: string;
  kpis: QualityKpiItem[];
  lifecycleStages: QualityLifecycleStage[];
  directives: QualityDirective[];
  testingParameters: AnalyticalTestingParameter[];
  image: {
    src: string;
    alt: string;
    badge: string;
    telemetryTag: string;
  };
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
  };
}

export const QUALITY_PAGE_DATA: QualityPageData = {
  title: "Quality Assurance & Quality Policy",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Quality", href: "/quality" },
  ],
  companyName: "Reflex Industrial Solutions",
  eyebrow: "Reflex Industrial Solutions • Corporate Quality Policy",
  headline: "Quality Policy & Analytical Assurance",
  leadParagraph:
    "It is absolutely essential to ensure that the goods produced are of the right quality to guarantee trouble-free operation at site. It is also essential that the inputs used meet stringent quality requirements, which is a prerequisite for meeting the finished product specifications. To fulfill this critical requirement, Reflex Industrial Solutions operates an uncompromising, multi-tiered quality management system spanning raw material qualification, formulation discipline, analytical testing, and outbound certification.",
  missionStatement:
    "Our quality commitment is anchored in a zero-tolerance standard: zero substandard inputs, zero unverified batches, and 100% batch-specific documentation accompanied by certified analytical verification.",
  kpis: [
    {
      label: "Input Compliance",
      value: "100%",
      description: "Mandatory raw material verification & COA validation",
    },
    {
      label: "Rejection Gate",
      value: "Zero-Defect",
      description: "Immediate quarantine of any non-compliant component",
    },
    {
      label: "Batch Traceability",
      value: "Archived",
      description: "Retained reference sample from every cleared batch",
    },
    {
      label: "Certification",
      value: "COA Mandatory",
      description: "Certificate of Quality issued with every consignment",
    },
  ],
  lifecycleStages: [
    {
      id: "stage-inward",
      stepNumber: "01",
      title: "Inward Raw Material Verification",
      tagline: "Rigorous Supplier Qualification & Inspection",
      description:
        "Every single incoming raw material must satisfy strictly laid-down physical and chemical specifications before entering our production chain.",
      protocols: [
        "Every raw material purchased has strictly laid-down physical and chemical specifications.",
        "Vendors must provide an authenticated Certificate of Quality with each consignment.",
        "Vendors that consistently provide certified quality documentation are given preference.",
        "Inputs not meeting our specifications are immediately rejected and quarantined.",
      ],
    },
    {
      id: "stage-production",
      stepNumber: "02",
      title: "Production SOP Compliance",
      tagline: "Precision Manufacturing SOP Protocols",
      description:
        "Manufacturing is governed strictly by the approved Production Manual, enforcing standardized temperature, mixing, and reaction kinetics.",
      protocols: [
        "Production manufactures products strictly as per the procedure laid down in the Production Manual.",
        "Raw materials with minor deviations are evaluated under rigorous engineering scrutiny and used only with formal approvals.",
        "Precision metering and automated chemical blending to eliminate batch-to-batch variation.",
        "In-process intermediate checks to ensure reaction equilibrium and phase stability.",
      ],
    },
    {
      id: "stage-analytics",
      stepNumber: "03",
      title: "Finished Product Total Analytics",
      tagline: "Exhaustive Laboratory Verification",
      description:
        "Finished formulations undergo comprehensive analytical evaluation against the Finished Products Quality Manual before release.",
      protocols: [
        "Finished product is analyzed in totality as per the specifications laid down in the Finished Products manual.",
        "Full testing matrix covering active polymer content, specific gravity, pH, viscosity, and flash point.",
        "Only products that meet specifications in all respects are authorized for packaging and dispatch clearance.",
        "Calibrated instruments verified regularly against certified reference standards.",
      ],
    },
    {
      id: "stage-dispatch",
      stepNumber: "04",
      title: "Traceability & Outbound Assurance",
      tagline: "Batch Retention & Certified Release",
      description:
        "Complete lifecycle traceability is maintained from the factory gate to customer site, backed by retained batch archives and authenticated COAs.",
      protocols: [
        "A sample from every batch cleared for dispatch is retained in our archive for future reference and technical audits.",
        "Random sampling of packed inventory and analytical re-evaluations are conducted periodically in our warehouse.",
        "Every single consignment is accompanied by an official, authenticated Certificate of Quality (COA).",
        "Dedicated technical field support available to assist with on-site dosing calibration and analytical confirmation.",
      ],
    },
  ],
  directives: [
    {
      id: "dir-1",
      ruleNumber: "Directive 01",
      title: "Laid Down Specifications",
      description:
        "Every raw material purchased has strictly laid down physical and chemical specifications.",
      category: "raw-material",
    },
    {
      id: "dir-2",
      ruleNumber: "Directive 02",
      title: "Mandatory Vendor Certificates",
      description:
        "Vendors must provide an authentic quality certificate with each of their consignments.",
      category: "raw-material",
    },
    {
      id: "dir-3",
      ruleNumber: "Directive 03",
      title: "Certified Vendor Preference",
      description:
        "Vendors that consistently provide verified quality certificates are actively preferred.",
      category: "raw-material",
    },
    {
      id: "dir-4",
      ruleNumber: "Directive 04",
      title: "Zero-Defect Inflow Rejection",
      description:
        "Goods and chemical inputs not meeting our specifications are strictly rejected and never used.",
      category: "raw-material",
    },
    {
      id: "dir-5",
      ruleNumber: "Directive 05",
      title: "Controlled Deviation Protocol",
      description:
        "Raw materials that exhibit minor deviations are used only with formal, multi-sign-off engineering approvals.",
      category: "production",
    },
    {
      id: "dir-6",
      ruleNumber: "Directive 06",
      title: "Production Manual SOPs",
      description:
        "Production manufactures the products strictly as per the procedures laid down in the official Production Manual.",
      category: "production",
    },
    {
      id: "dir-7",
      ruleNumber: "Directive 07",
      title: "Total Product Analytics",
      description:
        "Every finished product is analyzed in totality as per the specifications laid down in the Finished Products manual.",
      category: "analysis",
    },
    {
      id: "dir-8",
      ruleNumber: "Directive 08",
      title: "Unconditional Dispatch Authorization",
      description:
        "Only products that meet specifications in all respects without exception are cleared for further dispatch.",
      category: "analysis",
    },
    {
      id: "dir-9",
      ruleNumber: "Directive 09",
      title: "Retained Reference Sample Archive",
      description:
        "A sample from every batch cleared for dispatch is systematically retained for future reference, investigations, and technical audits.",
      category: "dispatch",
    },
    {
      id: "dir-10",
      ruleNumber: "Directive 10",
      title: "Periodic Warehouse Sampling",
      description:
        "Random sampling of packed inventory batches and comprehensive re-analysis are conducted periodically in our storage facilities.",
      category: "dispatch",
    },
    {
      id: "dir-11",
      ruleNumber: "Directive 11",
      title: "Mandatory Certificate of Quality",
      description:
        "Every outbound consignment is accompanied by an official, authenticated Certificate of Quality (COA).",
      category: "dispatch",
    },
  ],
  testingParameters: [
    {
      parameter: "Active Polymer & Solids %",
      method: "Oven Desiccation & Gravimetric Analysis",
      purpose:
        "Ensures precise chemical concentration for antiscalants and dispersants.",
    },
    {
      parameter: "pH & Electrolytic Conductivity",
      method: "Digital Temperature-Compensated Probes",
      purpose:
        "Validates solution balance and ionic integrity across operating temperatures.",
    },
    {
      parameter: "Specific Gravity & Density",
      method: "Hydrometric Pycnometry @ 25°C",
      purpose:
        "Confirms batch uniformity and accurate volumetric dosing skids.",
    },
    {
      parameter: "Viscosity & Rheology",
      method: "Rotational Brookfield Viscometry",
      purpose:
        "Ensures smooth pumping through industrial chemical dosing pumps.",
    },
    {
      parameter: "Inhibitor Efficacy & Corrosion Rate",
      method: "Electrochemical Linear Polarization Resistance",
      purpose:
        "Verifies metallurgical protection against corrosion in cooling and boiler loops.",
    },
    {
      parameter: "Phase Stability & Flash Point",
      method: "Thermal Cycling & Closed Cup Tester",
      purpose:
        "Guarantees safe transportation, bulk storage, and operational stability.",
    },
  ],
  image: {
    src: "/images/quality/quality-lab.jpg",
    alt: "Certified chemical quality analysts conducting analytical testing & titration in accredited laboratory",
    badge: "ISO 9001:2015 Accredited Quality Standards",
    telemetryTag: "Continuous Analytical Testing Active",
  },
  contact: {
    phone: CONTACT_DETAILS.phone,
    phoneHref: `tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`,
    email: CONTACT_DETAILS.email,
  },
};
