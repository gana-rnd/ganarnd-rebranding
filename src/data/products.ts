// 제품 상세 — 2026 GANA 카탈로그(2026 GANA 카달로그_260616, 98쪽)의 Dermal fillers 장(6~29쪽)과 Clinic care의 GANA PATCH(94~96쪽)를 옮긴 것.
// 규칙:
//  - 사이트에 게시된 등재(registrations.json publish=true)가 있는 제품만 페이지를 만든다. MHS·PNS·PFS는 등재 미확인이라 없음.
//  - 만료·미확인 인증 문구(CE, FDA)와 경쟁사 상표명은 싣지 않는다. 카탈로그 안에서 서로 다른 수치는 넣지 않고 아래 주석에 남긴다.
//  - 본문은 카탈로그 영어 원문을 문법만 다듬어 옮겼다. UI 문자열은 i18n(t.product), 제품 본문은 모든 언어에서 영어.
import type { Reg } from './registry';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'kv'; items: [string, string][] }
  | { type: 'table'; caption?: string; head: string[]; rows: string[][] };

export type Section = { title: string; blocks: Block[] };

export type Patent = { number: string; title: string; holder: string; link?: string };

export type Product = {
  slug: string;
  /** 어느 목록 페이지에 속하는지 — 라우트(/aesthetics, /wound-care)와 '다른 제품' 목록을 가른다 */
  category: 'aesthetics' | 'wound-care';
  name: string;
  subtitle: string;
  /** registry.ts chemistryName 키 */
  family: 'HA' | 'PLLA' | 'PCL' | 'calcium' | 'PN/PDRN' | 'hydrogel';
  summary: string;
  presentation: string;
  composition: string[];
  image: string;
  imageAlt: string;
  cataloguePages: string;
  /** registrations.json id — 게시 상태가 바뀌면 byId()가 undefined를 돌려 페이지에서 조용히 빠진다 */
  regIds: string[];
  sections: Section[];
  dose?: string[];
  precautions?: string[];
  patents?: Patent[];
};

const collagenNote: Section = {
  title: 'Collagen-stimulating fillers in the GANA range',
  blocks: [
    { type: 'p', text: 'GANA V / GANA X, GANA PH and Filler X are all collagen-stimulating fillers. Do not use these products on the forehead, lips or periocular area.' },
  ],
};

const stimulatorPrecautions = [
  'All collagen-stimulating dermal fillers start to form collagen in 4–6 weeks; plan the treatment accordingly.',
  'Injected on the forehead or lips, a collagen-stimulating filler can form lumps. Do not use on the forehead, lips or periocular area.',
];

const faceDose = ['Both nasolabial folds: 1–2 ml', 'Both cheeks: 2–6 ml', 'Chin: 1–3 ml', 'Nose: 1–2 ml'];

const haCharacteristics = [
  'No addition of non-cross-linked HA',
  'Highest cross-linking ratio',
  'Highest HA concentration',
  'Small particle size, so the shape is easy to mould',
  'Higher viscosity than other dermal fillers',
  'Longest duration',
  'Low extrusion force',
];

const mesoPrecautions = [
  'This product contains cross-linked hyaluronic acid, not non-cross-linked HA. Injected into the epidermis it can cause nodules and papules, so inject at the dermis layer and set the mesotherapy gun needle depth to more than 1.5 mm.',
  'Do not inject too much at one point. Inject widely, deeply and evenly.',
];

export const products: Product[] = [
  {
    slug: 'filler-x',
    category: 'aesthetics',
    name: 'Filler X',
    subtitle: 'PCL + HA dermal filler',
    family: 'PCL',
    summary:
      'Polycaprolactone microspheres carried in a cross-linked hyaluronic acid gel: immediate volume from the HA, longer-lasting volume from new collagen, and correction with hyaluronidase remains possible.',
    presentation: '1.2 ml prefilled syringe × 1 per box, with needles',
    // 카탈로그 본문은 PCL 15 mg/cc(1.5 %), 사진 속 상자는 50 mg/cc — 수치가 갈려서 농도는 싣지 않음. 확인되면 아래에 추가.
    composition: [
      'Polycaprolactone (PCL) microspheres, average particle size 50 µm',
      'Cross-linked hyaluronic acid gel 20 mg/cc',
      'Lidocaine 3 mg/cc (as labelled on the carton)',
    ],
    image: '/images/catalogue/filler-x.webp',
    imageAlt: 'Filler X — carton, 1.2 ml prefilled syringe and needles',
    cataloguePages: '7–9',
    regIds: ['kr-23-426', 'ru-2025-26343', 'kr-22-52'],
    sections: [
      {
        title: 'A new generation of dermal filler',
        blocks: [
          { type: 'p', text: 'Filler X combines polycaprolactone microspheres with a cross-linked hyaluronic acid gel. The HA gel gives even, immediate volume; the PCL then stimulates the skin’s own collagen, so the result builds gradually and lasts longer than an HA-only filler. The product is fully resorbed by the body.' },
        ],
      },
      {
        title: 'What is PCL',
        blocks: [
          { type: 'p', text: 'Polycaprolactone (PCL) is a biodegradable polyester with a low melting point of around 60 °C and a glass transition temperature of about −60 °C. It is widely used in medical devices and is compatible with a range of other materials.' },
          {
            type: 'kv',
            items: [
              ['IUPAC name', '(1,7)-polyoxepan-2-one'],
              ['Other names', '2-oxepanone homopolymer · 6-caprolactone polymer'],
              ['CAS number', '24980-41-4'],
              ['Chemical formula', '(C₆H₁₀O₂)n'],
              ['Density', '1.145 g/cm³'],
              ['Melting point', '60 °C (140 °F)'],
            ],
          },
        ],
      },
      {
        title: 'How it works',
        blocks: [
          { type: 'p', text: 'Collagen is one of the main support structures of the skin, maintaining tightness, elasticity and suppleness. With age the skin gradually loses collagen, which leads to laxity, wrinkles and folds.' },
          { type: 'p', text: 'Filler X corrects lines and folds like a conventional filler and, in addition, stimulates collagen formation to treat an underlying cause of facial ageing. The effect is gradual and longer-lasting, for a natural result.' },
        ],
      },
      {
        title: 'Filler X compared with HA and PCL fillers',
        blocks: [
          {
            type: 'table',
            head: ['', 'HA fillers', 'PCL fillers', 'Filler X'],
            rows: [
              ['Duration', '1 year', '2–4 years', '2–4 years'],
              ['Migration', 'Yes', 'No', 'No'],
              ['Collagen stimulation', 'No', 'Yes', 'Yes'],
              ['Elimination by hyaluronidase', 'Yes', 'No', 'Yes'],
              ['Swelling', 'No', 'Yes', 'No'],
              ['Correction', 'Yes', 'No', 'Yes'],
            ],
          },
          { type: 'ul', items: ['Known drawbacks of conventional PCL fillers: initial swelling, initial volume loss, no possibility of correction.', 'The main complaint about HA fillers: short duration.'] },
        ],
      },
      {
        title: 'Merits of Filler X',
        blocks: [
          {
            type: 'ol',
            items: [
              'Even, long-lasting volume augmentation of more than four years: immediate volume from the cross-linked hyaluronic acid gel, later volume from the collagen formed around the PCL.',
              'Lower initial swelling, as the formulation contains no carboxymethyl cellulose.',
              'Immediate correction is possible with hyaluronidase.',
              'The injected PCL induces collagen synthesis, so the duration is much longer than HA fillers.',
              'Newly formed collagen prevents migration.',
            ],
          },
        ],
      },
      collagenNote,
    ],
    dose: faceDose,
    precautions: stimulatorPrecautions,
  },

  {
    slug: 'gana-ha',
    category: 'aesthetics',
    name: 'GANA HA',
    subtitle: 'Hyaluronic acid dermal filler — Types A, B, C and Booster',
    family: 'HA',
    summary:
      'Monophasic cross-linked hyaluronic acid with a 10 % cross-linking ratio and small, uniform particles: three filler types for different injection depths, plus a Booster type for mesotherapy.',
    presentation: '1.2 ml prefilled syringe × 1 per box (Types A, B and C); Booster type 2.5 ml',
    composition: [
      'Cross-linked hyaluronic acid (BDDE cross-linked), no non-cross-linked HA added',
      'HA concentration: Type A 24 mg/cc · Type B 22 mg/cc · Type C 20 mg/cc · Booster 6 mg/cc',
      'Cross-linking ratio 10 % (Booster 5 %)',
    ],
    image: '/images/catalogue/gana-ha.webp',
    imageAlt: 'GANA HA — Type A, B and C cartons with a 1.2 ml prefilled syringe',
    cataloguePages: '10–11',
    regIds: ['kr-15-1662', 'kr-23-128', 'ru-2021-14277'],
    sections: [
      {
        title: 'Characteristics of GANA HA',
        blocks: [
          { type: 'ol', items: haCharacteristics },
          {
            type: 'table',
            caption: 'Biphasic and monophasic HA fillers',
            head: ['', 'Biphasic HA fillers', 'Monophasic HA fillers'],
            rows: [
              ['Non-cross-linked HA', 'Added — disappears in 1–2 weeks', 'Not added'],
              ['Particle size', 'Large', '—'],
              ['Duration', 'Relatively short', 'Longer'],
              ['Cross-linking ratio', 'Low', 'Relatively high'],
              ['Shaping', 'Easy to mould', 'Difficult to mould'],
            ],
          },
        ],
      },
      {
        title: 'GANA HA compared with existing fillers',
        blocks: [
          {
            type: 'table',
            head: ['', 'Monophasic', 'Biphasic', 'GANA HA'],
            rows: [
              ['Cross-linking ratio', '6–8 %', '2–4 %', '10 %'],
              ['HA concentration (mg/cc)', '20–24', '20–24', '20–24'],
              ['Cross-linking agent', 'BDDE', 'BDDE', 'BDDE'],
              ['Duration (months)', '6–12', '6–18', '12–18'],
              ['Particle size', 'None', '100–2000 µm', '50–100 µm'],
              ['Viscosity (cPs)', '2–4 × 10⁶', '1–4 × 10⁶', '4–7 × 10⁶'],
            ],
          },
        ],
      },
      {
        title: 'Types and recommended use',
        blocks: [
          {
            type: 'table',
            head: ['Type', 'Volume', 'Injection layer', 'Needle', 'HA (mg/cc)', 'Cross-linking', 'Recommended use'],
            rows: [
              ['Type A', '1.2 ml', 'Subcutaneous', '25 G', '24', '10 %', 'Large-volume augmentation'],
              ['Type B', '1.2 ml', 'Deep dermis', '27 G', '22', '10 %', 'Moderate wrinkles'],
              ['Type C', '1.2 ml', 'Dermis', '30 G', '20', '10 %', 'Fine wrinkles'],
              ['Booster', '2.5 ml', 'Epidermis', '30 G', '6', '5 %', 'Mesotherapy'],
            ],
          },
          {
            type: 'ul',
            items: [
              'Forehead — Type A, Booster type',
              'Around the eyes — Type C, Booster type',
              'Nose — Type A, Booster type',
              'Nasolabial fold — Type B, Booster type',
              'Lips — Type B',
              'Chin — Type A, Booster type',
            ],
          },
        ],
      },
      {
        title: 'Specification',
        blocks: [
          {
            type: 'table',
            head: ['Test item', 'Standard', 'Result'],
            rows: [
              ['Appearance', 'Colourless, transparent; no visible foreign matter, no air bubbles', 'Qualified'],
              ['Hyaluronate content', '24 / 22 / 20 mg/ml', 'Qualified'],
              ['pH', '6.5–7.6', 'Qualified'],
              ['Osmotic pressure (mOsmol/L)', '0.9–1.1', 'Qualified'],
              ['Particle size distribution', 'Type A: 1 mm, 23 G · Type B: 200–500 µm, 27 G · Type C: 50–100 µm, 30 G · Booster: under 30 µm', 'Qualified'],
              ['Cross-linking agent (BDDE) residue', '≤ 2.0 µg/g', 'Qualified'],
              ['Protein', '≤ 1.0 %', 'Qualified'],
              ['Heavy metals', '≤ 20 ppm', 'Qualified'],
              ['Bacteria test', 'No bacterial growth', 'Qualified'],
              ['Bacterial endotoxin test', '≤ 0.5 EU/mL', 'Qualified'],
              ['Viscosity', '4–6 × 10⁶ cPs', 'Qualified'],
              ['Haemolysis', 'No haemolysis ring', 'Qualified'],
            ],
          },
          { type: 'p', text: 'The products were tested in conformity with the GANA R&D standard.' },
        ],
      },
    ],
    dose: [
      'Nose: 1–2 ml',
      'Nasolabial fold: 2–3 ml',
      'Forehead: 3–5 ml',
      'Lips: over 1 ml each side',
      'Cheek: 4–10 ml',
      'Short chin: 2–4 ml',
      'Sunken eye: 1 ml',
      'Temporal depression: over 2 ml each side',
    ],
  },

  {
    slug: 'gana-ph',
    category: 'aesthetics',
    name: 'GANA PH',
    subtitle: 'PLLA + HA dermal filler',
    family: 'PLLA',
    summary:
      'Poly-L-lactic acid microparticles (1 %) carried in a cross-linked hyaluronic acid gel: immediate volume from the HA, then collagen formation induced by the PLLA, with correction by hyaluronidase still possible.',
    presentation: '1.2 ml prefilled syringe × 1 per box',
    composition: [
      'Poly-L-lactic acid (PLLA) 10 mg/cc, average particle size 50 µm',
      'Cross-linked hyaluronic acid gel 20 mg/cc',
      'PLLA 1 % + HA 99 %',
    ],
    image: '/images/catalogue/gana-ph.webp',
    imageAlt: 'GANA PH — carton with a 1.2 ml prefilled syringe and needles',
    cataloguePages: '12–14',
    regIds: ['kr-22-304', 'ru-2024-22794', 'kr-22-53'],
    sections: [
      {
        title: 'What is PLLA',
        blocks: [
          { type: 'p', text: 'Poly(L-lactide) is a biodegradable material with good bio-absorbability and biocompatibility. After degradation in the body, PLLA is excreted through metabolism and leaves no harmful residue. For these reasons PLLA is widely used in medicine: single-use infusion equipment, surgical sutures, drug-delivery carriers, tissue-engineering scaffolds, bone anchors, injectable microcapsules and microspheres, implants and elastomers for organ support.' },
        ],
      },
      {
        title: 'Mechanism',
        blocks: [
          {
            type: 'ol',
            items: [
              'PLLA (poly-L-lactic acid) → immune reaction',
              'The polymer of lactic acid is taken up by macrophages',
              'Lactic acid → CO₂ + H₂O; the immune reaction activates fibroblasts to produce collagen',
            ],
          },
          { type: 'p', text: 'PLLA degradation: random enzymatic degradation reduces the molecular weight, then the low-molecular PLLA is phagocytosed by macrophages.' },
          {
            type: 'ul',
            items: [
              'Freeze-dried PLLA has micropores',
              'The micropores absorb water and the particles break down into small pieces',
              'The broken PLLA particles induce a controlled inflammation',
              'Which leads to collagen synthesis',
            ],
          },
          { type: 'p', text: 'PLLA replaces lost collagen and corrects the imperfection; the effect lasts more than two years.' },
        ],
      },
      {
        title: 'GANA PH compared with HA and PLLA fillers',
        blocks: [
          {
            type: 'table',
            head: ['', 'HA fillers', 'PLLA fillers', 'GANA PH'],
            rows: [
              ['Duration', '1 year', '3 years', '3 years'],
              ['Migration', 'Yes', 'No', 'No'],
              ['Collagen stimulation', 'No', 'Yes', 'Yes'],
              ['Elimination by hyaluronidase', 'Yes', 'No', 'Yes'],
              ['Swelling', 'No', 'Yes', 'No'],
              ['Correction', 'Yes', 'No', 'Yes'],
              ['Dissolution with water', 'Not needed', 'Many hours of waiting', 'Not needed'],
              ['Volume augmentation', 'Immediate', 'After 2 months', 'Immediate'],
            ],
          },
          {
            type: 'ul',
            items: [
              'Drawbacks of existing PLLA fillers: initial swelling, initial volume loss, impossibility of correction, long dissolution time, a two-month lag before volume augmentation.',
              'The main complaint about HA fillers: short duration.',
            ],
          },
        ],
      },
      {
        title: 'Merits of GANA PH',
        blocks: [
          {
            type: 'ol',
            items: [
              'Early and longer volume augmentation of more than two years: immediate volume from the cross-linked hyaluronic acid gel, later volume from the collagen formed around the PLLA.',
              'Lower initial swelling, as the formulation contains no carboxymethyl cellulose.',
              'Immediate correction is possible with hyaluronidase.',
              'The injected PLLA induces collagen synthesis, so the duration of GANA PH is much longer than HA fillers.',
              'Newly formed collagen prevents migration of GANA PH.',
            ],
          },
        ],
      },
      collagenNote,
    ],
    dose: faceDose,
    precautions: stimulatorPrecautions,
  },

  {
    slug: 'gana-pn',
    category: 'aesthetics',
    name: 'GANA PN',
    subtitle: 'PDRN with cross-linked HA — prefilled syringe',
    family: 'PN/PDRN',
    summary:
      'Salmon-derived polydeoxyribonucleotide (PDRN) with glutathione, carried in a cross-linked hyaluronic acid gel, so it can be used for skin regeneration and, unlike most PDRN products, for facial augmentation.',
    presentation: '2.5 ml prefilled syringe × 2 per box, with needles',
    composition: [
      'PDRN (polydeoxyribonucleotide from salmon sperm) 2 mg/cc',
      'Glutathione 0.5 mg/cc',
      'Cross-linked hyaluronic acid 6 mg/cc',
      'Other components: lidocaine, PBS q.s.',
    ],
    image: '/images/catalogue/gana-pn.webp',
    imageAlt: 'GANA PN — carton with two 2.5 ml prefilled syringes and needles',
    cataloguePages: '15–16',
    regIds: ['kr-22-305', 'kr-22-116'],
    sections: [
      {
        title: 'What is PDRN',
        blocks: [
          { type: 'p', text: 'Polydeoxyribonucleotide is a complex of low-molecular-weight DNA fragments extracted from salmon or trout sperm. It stimulates vascular endothelial growth factors and certain receptors that trigger new vessel formation, improves blood flow and reduces inflammation; most importantly, it supplies the nucleotides needed for cell regeneration. Beyond diabetic foot ulcers, PDRN has been studied in peripheral arterial disease, chronic wounds, limb ischaemia, osteoarthritis, coronary artery disease and burns.' },
          {
            type: 'ul',
            items: [
              'Safe and simple injection',
              'Protects against wrinkles',
              'Skin-lifting effect',
              'Skin brightening',
              'Improves elasticity, turgidity and tonicity of the skin',
              'Repairs damaged dermal cells',
              'High physical compatibility of the salmon-derived polynucleotide',
            ],
          },
        ],
      },
      {
        title: 'The PDRN range',
        blocks: [
          {
            type: 'table',
            head: ['', 'Volume', 'Package', 'PDRN', 'HA', 'Cross-linked HA', 'Glutathione'],
            rows: [
              ['GANA PN', '2.5 ml × 2', 'Syringes', '2 mg/cc', '6 mg/cc', 'Yes', '0.5 mg/cc'],
              ['GANA PNS', '1.2 ml × 1', 'Syringe', '2 mg/cc', '20 mg/cc', 'Yes', 'None'],
              ['GANA PNV', '3 ml × 5', 'Vials', '0.5 mg/cc', '6 mg/cc', 'Yes', '0.5 mg/cc'],
              ['GANA PNV plus', '3 ml × 5', 'Vials', '2 mg/cc', '6 mg/cc', 'Yes', '0.5 mg/cc'],
            ],
          },
          {
            type: 'table',
            caption: 'Prefilled syringe and prefilled vial',
            head: ['', 'GANA PN, prefilled syringe', 'GANA PNV, prefilled vial'],
            rows: [
              ['Volume', '2.5 cc filled in a 3 cc syringe', '2.5 cc filled in a 5 cc vial'],
              ['Packaging', '2 syringes in a box', '5 vials in a box'],
              ['Concentration of PDRN', '2 mg/cc', '0.5 mg/cc'],
              ['Other components', 'Cross-linked HA, glutathione, lidocaine, PBS q.s.', 'Same as GANA PN'],
            ],
          },
          { type: 'p', text: 'GANA PN contains cross-linked hyaluronic acid, so it can be used like a dermal filler for facial augmentation. This is the merit of GANA PN compared with other PDRN products.' },
        ],
      },
      {
        title: 'How to use',
        blocks: [
          {
            type: 'ol',
            items: [
              'Unpack the box',
              'Clean the application area',
              'Attach the enclosed needle',
              'Inject at the dermis layer',
              'If there is bleeding, compress for one minute',
              'A second session is needed in a month',
            ],
          },
          { type: 'p', text: 'Use a mesogun, a derma roller or the enclosed 30 G needles. Protocol: 2–3 sessions at one-month intervals; the effect can be seen after the second session.' },
          { type: 'p', text: 'Preparation: apply an ice pack and lidocaine cream to reduce pain. After injection, compress the treated area with dry gauze.' },
        ],
      },
      {
        title: 'Contraindications and side effects',
        blocks: [
          { type: 'ul', items: ['Any kind of active skin disease', 'Any kind of general illness', 'Hypersensitivity to this product', 'Bleeding disorder', 'Pregnancy and breastfeeding'] },
          { type: 'p', text: 'Possible side effects: bruising, haematoma, atrophy and skin hypertrophy, erythema, urticaria.' },
        ],
      },
    ],
    precautions: mesoPrecautions,
  },

  {
    slug: 'gana-fill',
    category: 'aesthetics',
    name: 'GANA FILL',
    subtitle: 'Injectable poly-L-lactic acid powder',
    family: 'PLLA',
    summary:
      'Freeze-dried PLLA powder, 520 mg per vial, reconstituted with sterile water before injection: a collagen stimulator for face and body volume, on the MFDS register since 2014 and registered in Russia and Brazil as GANA V and GANA X.',
    // 카탈로그의 "CE approved", "CE and ANVISA approved", KFDA 로고, "FDA approved materials"는 싣지 않음(CE 2024-05 만료, 등재 자료실 규칙). ANVISA·MFDS는 아래 등재 표가 대신한다.
    // 본문의 "GANA FILL-X Body 1560 mg"은 상자 표기(GANA X 630 mg/40 ml)와 달라 싣지 않음.
    presentation: 'GANA FILL: vial of 520 mg PLLA powder, reconstituted with 10–18 ml sterile water for injection. GANA V: 210 mg / 15 ml vial. GANA X: 630 mg / 40 ml vial.',
    composition: [
      'Injectable poly-L-lactic acid (PLLA) powder, 520 mg per vial',
      'Freeze-dried: the micropores absorb water on reconstitution',
      'Reconstitute with 10–18 ml sterile water for injection (distilled water only — not saline)',
    ],
    image: '/images/catalogue/gana-fill.webp',
    imageAlt: 'GANA FILL family — GANA V and GANA X cartons and powder vials',
    cataloguePages: '17–19',
    regIds: ['kr-14-652', 'ru-2021-13973', 'br-80781300005'],
    sections: [
      {
        title: 'What is PLLA',
        blocks: [
          { type: 'p', text: 'A biodegradable material decomposes through the action of bacteria, fungi and other living organisms; put simply, it can break down into the natural environment without causing harm. Well-known biodegradable materials used in medicine are PLLA, PLGA, PGA, PDO and PCL.' },
          { type: 'p', text: 'Poly(L-lactide) is a biodegradable material with good bio-absorbability and biocompatibility. After degradation in the body, PLLA is excreted through metabolism and leaves no harmful residue. It is widely used in medicine: single-use infusion equipment, surgical sutures, drug-delivery carriers, tissue-engineering scaffolds, bone anchors, injectable microcapsules and microspheres, implants and elastomers for organ support.' },
        ],
      },
      {
        title: 'Mechanism',
        blocks: [
          {
            type: 'ul',
            items: [
              'PLLA (poly-L-lactic acid) → polymer of lactic acid → lactic acid → CO₂ + H₂O',
              'Some of the PLLA is taken up by macrophages; the immune reaction activates fibroblasts to produce collagen',
              'The remaining PLLA stays in the body with a half-life of about three years',
            ],
          },
          { type: 'p', text: 'PLLA replaces lost collagen and corrects the imperfection; the effect lasts more than two years. Injectable PLLA, the main component of GANA FILL, works in the deep dermis to create collagen.' },
        ],
      },
      {
        title: 'GANA FILL for the face',
        blocks: [
          { type: 'p', text: 'GANA FILL induces the formation of collagen, which increases volume where the product was placed. Augmentation continues until about the eighth week and lasts for two years. The main areas of use are the temples and cheeks. GANA FILL uses the same main ingredient as the best-known PLLA filler.' },
          { type: 'p', text: 'Reconstitute with distilled water: minimum 10 cc, maximum 18 cc.' },
        ],
      },
      {
        title: 'Merits of GANA FILL compared with fat grafting',
        blocks: [
          {
            type: 'ol',
            items: [
              'Quicker dissolution, under one hour. If short of time, reconstitute and shake well for 10 minutes; with a vortex mixer, dissolution takes under 60 seconds.',
              'Lower cost.',
              'Larger quantity: 520 mg of PLLA per vial, compared with 150 mg in other PLLA fillers.',
              'Better contouring, because GANA FILL contains more PLLA.',
              'Less volume loss at the first injection. With other PLLA fillers the initial volume is lost within a few days and augmentation takes one to two months to appear; GANA FILL has lower initial volume loss.',
              'Low nodule formation: more water and higher dilution mean fewer granulomas.',
            ],
          },
          { type: 'p', text: 'Compared with other PLLA fillers: a quicker procedure (under one hour), lower cost (two or three vials of GANA FILL are enough for full-face augmentation) and faster recovery (under two days; recovery from fat grafting takes over a month).' },
        ],
      },
      {
        title: 'Procedure',
        blocks: [
          {
            type: 'ol',
            items: [
              'Reconstitute with 18 ml of sterile water at least one hour before injection. With a vortex mixer, dissolution takes under 60 seconds.',
              'Use a blunt needle (cannula) larger than 21 G.',
              'Inject subcutaneously; for better performance, inject deeper.',
              'Use a fan technique and avoid injecting too much in one area.',
              'Do not use on the forehead, lips, nose or near the eyes.',
              'Effects can be seen four weeks after treatment and build until eight weeks; volume augmentation lasts two years.',
              'Massage the treated area vigorously for 30 minutes every day during the first week.',
              'Two or three sessions are needed.',
            ],
          },
          {
            type: 'ul',
            items: [
              'Do not treat prohibited areas (lips, nose, forehead).',
              'Use distilled water only; do not use saline.',
              'Do not inject too much at one spot: inject widely and deeply to avoid granuloma formation.',
              'The patient must return for a second treatment to check progress.',
            ],
          },
          {
            type: 'table',
            caption: 'Dose by area — for the full face, one vial is the maximum in the first session',
            head: ['Area', 'First session', 'Second session', 'Depth of injection', 'Injection technique'],
            rows: [
              ['Temporal area', '0.5 vial max', 'One month later, half the first-session dose', 'Subcutaneous layer or periosteum', 'Fan-shaped injection using a cannula'],
              ['Nasolabial fold', '0.5 vial max', 'One month later, half the first-session dose', 'Subcutaneous layer or periosteum', 'Fan-shaped injection using a cannula'],
              ['Cheek', '1 vial max', 'One month later, half the first-session dose', 'Subcutaneous layer or periosteum', 'Fan-shaped injection using a cannula'],
              ['Anterior zygomatic area', '0.5 vial max', 'One month later, half the first-session dose', 'Subcutaneous layer or periosteum', 'Fan-shaped injection using a cannula'],
            ],
          },
        ],
      },
      {
        title: 'Applications',
        blocks: [
          { type: 'ul', items: ['Face augmentation', 'Face lifting', 'Breast and hip augmentation', 'Hand and neck wrinkle improvement', 'Scar improvement, including acne scars'] },
        ],
      },
    ],
    precautions: [
      'Collagen-stimulating fillers form collagen over 4–6 weeks; plan the treatment accordingly.',
      'Do not use on the forehead, lips, nose or periocular area, where lumps can form.',
    ],
  },

  {
    slug: 'gana-ch',
    category: 'aesthetics',
    name: 'GANA CH',
    subtitle: 'Calcium hydroxyapatite + HA dermal filler',
    family: 'calcium',
    summary:
      'Calcium hydroxyapatite (2 %) in a cross-linked hyaluronic acid gel: the merits of calcium and HA fillers without the main drawbacks of either.',
    presentation: '1.2 ml prefilled syringe × 1 per box, with needles',
    composition: ['Calcium hydroxyapatite 2 %', 'Cross-linked hyaluronic acid 98 %'],
    image: '/images/catalogue/gana-ch.webp',
    imageAlt: 'GANA CH — carton with a 1.2 ml prefilled syringe and needles',
    cataloguePages: '20',
    regIds: ['ru-2025-26344', 'kr-22-55'],
    sections: [
      {
        title: 'A new generation of dermal filler',
        blocks: [
          {
            type: 'ul',
            items: [
              'The main complaints about calcium fillers are initial swelling, initial volume loss and the impossibility of correction.',
              'The main complaint about HA fillers is short duration.',
              'GANA CH keeps the merits of calcium and HA fillers without their demerits.',
            ],
          },
        ],
      },
      {
        title: 'Merits of GANA CH',
        blocks: [
          {
            type: 'ol',
            items: [
              'Even and longer volume augmentation of more than two years: initial volume from the cross-linked hyaluronic acid gel, later volume from the collagen formed around the calcium hydroxyapatite.',
              'Lower initial swelling, as the formulation contains no carboxymethyl cellulose.',
              'Immediate correction is possible with hyaluronidase.',
              'GANA CH has the merits of both HA and calcium fillers.',
              'The injected calcium hydroxyapatite induces collagen synthesis, so the duration of GANA CH is much longer than HA fillers.',
              'Newly formed collagen prevents migration of GANA CH.',
            ],
          },
        ],
      },
      {
        title: 'GANA CH compared with HA and calcium fillers',
        blocks: [
          {
            type: 'table',
            head: ['', 'HA fillers', 'Calcium fillers', 'GANA CH'],
            rows: [
              ['Duration', '1 year', '3 years', '3 years'],
              ['Migration', 'Yes', 'No', 'No'],
              ['Collagen stimulation', 'No', 'Yes', 'Yes'],
              ['Elimination by hyaluronidase', 'Possible', 'Impossible', 'Possible'],
              ['Swelling', 'None', 'Mild swelling', 'None'],
              ['Correction', 'Possible', 'Impossible', 'Possible'],
            ],
          },
        ],
      },
      {
        title: 'Areas and injection layer',
        blocks: [
          { type: 'ul', items: ['Recommended areas: nose, chin, forehead', 'Do not use in the cheeks or lips', 'Injection layer: deep dermis'] },
        ],
      },
    ],
  },

  {
    slug: 'gana-booster',
    category: 'aesthetics',
    name: 'GANA BOOSTER',
    subtitle: 'Cross-linked HA skin booster for biorevitalization',
    family: 'HA',
    summary:
      'Most hyaluronic acid gels for mesotherapy are non-cross-linked. GANA BOOSTER is a cross-linked HA gel like a dermal filler, autoclave-sterilised and with glutathione, for longer duration and better safety.',
    presentation: '2.5 ml prefilled syringe × 1 per box, with needles',
    composition: ['Cross-linked hyaluronic acid 6 mg/cc', 'Glutathione 0.1 % for brightening', 'Autoclave sterilised'],
    image: '/images/catalogue/gana-booster.webp',
    imageAlt: 'GANA BOOSTER — carton with a 2.5 ml prefilled syringe and needles',
    cataloguePages: '28–29',
    regIds: ['ru-2024-22440', 'kr-21-236'],
    sections: [
      {
        title: 'Why cross-linked',
        blocks: [
          { type: 'p', text: 'Most hyaluronic acid gel products for mesotherapy are non-cross-linked HA. GANA BOOSTER is a cross-linked HA gel, the same type used in dermal fillers, so it has much better duration and safety: a non-cross-linked HA gel cannot be autoclave-sterilised.' },
          {
            type: 'ul',
            items: [
              'Cross-linked hyaluronic acid 6 mg/cc — longer duration and better efficacy',
              'Autoclave sterilised — better safety',
              'Glutathione 0.1 % for brightening',
            ],
          },
        ],
      },
      {
        title: 'GANA BOOSTER compared with other HA solutions',
        blocks: [
          {
            type: 'table',
            head: ['', 'GANA BOOSTER', 'Other HA solutions'],
            rows: [
              ['Duration', '6 months', '2 weeks'],
              ['Safety', 'Autoclave sterilisation', 'No sterilisation'],
              ['Pain', 'Less painful', 'Painful'],
              ['Brightening', 'Yes', 'No'],
            ],
          },
        ],
      },
      {
        title: 'Protocol',
        blocks: [
          { type: 'ol', items: ['2–3 sessions are needed', 'Interval of one month', 'The effect can be seen after the second session'] },
          { type: 'p', text: 'GANA BOOSTER is usually applied with a meso gun; without one, use the meso needle.' },
          { type: 'p', text: 'Preparation: apply an ice pack and lidocaine cream to reduce pain. After injection, compress the treated area with dry gauze.' },
        ],
      },
    ],
    precautions: mesoPrecautions,
  },

  {
    slug: 'gana-ha-body',
    category: 'aesthetics',
    name: 'GANA HA body',
    subtitle: 'Hyaluronic acid dermal filler for body contouring',
    family: 'HA',
    summary:
      'A 50 ml prefilled vial of cross-linked hyaluronic acid (20 mg/cc, 10 % cross-linking) made for body contouring, with removal by hyaluronidase and a short, minimally invasive procedure.',
    // 카탈로그 24~27쪽의 질 성형 시술법·시술 전후 사진·일본 신문 기사는 싣지 않음(사이트 규칙: 시술 전후·신체 증대 연출 금지).
    presentation: '50 ml prefilled vial; withdraw into 10 ml syringes (five syringes per vial)',
    composition: ['Cross-linked hyaluronic acid 20 mg/cc', 'Cross-linking ratio 10 %', 'Particle size 500 µm'],
    image: '/images/catalogue/gana-ha-body.webp',
    imageAlt: 'GANA HA body — carton and 50 ml prefilled vial',
    cataloguePages: '23–27',
    regIds: ['ru-2022-18121'],
    sections: [
      {
        title: 'HA filler for body augmentation',
        blocks: [
          { type: 'p', text: 'GANA HA body is a dermal filler made specifically for body contouring, for example breast augmentation and buttock augmentation. It is a monophasic HA filler with the same characteristics as GANA HA.' },
          { type: 'ol', items: haCharacteristics },
        ],
      },
      {
        title: 'Merits of HA filler for body augmentation',
        blocks: [
          {
            type: 'table',
            head: ['', 'Removal', 'Price', 'Safety', 'Procedure time', 'Minimally invasive'],
            rows: [
              ['HA dermal fillers', 'Yes', 'Expensive', 'Yes', 'Long', 'Yes'],
              ['Conventional fillers (PMMA, PAAG)', 'No', 'Expensive', 'Partly', 'Short', 'Yes'],
              ['Implants', 'Yes, but major surgery', 'Expensive', 'Partly', 'Long', 'No'],
              ['GANA HA body', 'Yes', 'Reasonable', 'Yes', 'Short', 'Yes'],
            ],
          },
        ],
      },
      {
        title: 'GANA HA body compared with existing HA fillers',
        blocks: [
          {
            type: 'table',
            head: ['', 'Monophasic', 'Biphasic', 'GANA HA body'],
            rows: [
              ['Cross-linking ratio', '6 %', '1–2 %', '10 %'],
              ['HA concentration (mg/cc)', '20–24', '20–24', '20'],
              ['Cross-linking agent', 'BDDE', 'BDDE', 'BDDE'],
              ['Duration (months)', '6–12', '6–18', '24'],
              ['Particle size', 'None', '100–2000 µm', '500 µm'],
              ['Viscosity (cPs)', '2–4 × 10⁶', '1–4 × 10⁶', '2–4 × 10⁶'],
              ['Package size', '1–3 ml', '1–3 ml', '50 ml'],
            ],
          },
        ],
      },
      {
        title: 'Specification',
        blocks: [
          {
            type: 'table',
            head: ['Test item', 'Standard', 'Result'],
            rows: [
              ['Appearance', 'Colourless, transparent; no visible foreign matter, no air bubbles', 'Qualified'],
              ['Hyaluronate content', '20 mg/ml', 'Qualified'],
              ['pH', '6.5–7.5', '7.3'],
              ['Osmotic pressure (mOsmol/L)', '0.9–1.1', '1'],
              ['Particle size distribution', 'Body: 500 µm, 23 G', 'Qualified'],
              ['Cross-linking agent (BDDE) residue', '≤ 2.0 µg/g', 'Qualified'],
              ['Protein', '≤ 0.1 %', 'Qualified'],
              ['Heavy metals', '≤ 20 ppm', 'Qualified'],
              ['Bacteria test', 'No bacterial growth', 'Qualified'],
              ['Bacterial endotoxin test', '≤ 0.5 EU/mL', 'Qualified'],
              ['Viscosity', '2–4 × 10⁶ cPs', 'Qualified'],
              ['Haemolysis', 'No haemolysis ring', 'Qualified'],
            ],
          },
          { type: 'p', text: 'The products were tested in conformity with the GANA R&D standard.' },
        ],
      },
      {
        title: 'How to use',
        blocks: [
          {
            type: 'ol',
            items: [
              'Remove the aluminium cap and rubber stopper.',
              'Withdraw GANA HA body with a 10 cc syringe: five syringes per vial.',
              'Anaesthetise the puncture site.',
              'Puncture with a 16 G or 18 G needle.',
              'Attach a 16 G or 18 G cannula to the prefilled 10 ml syringe.',
              'Inject GANA HA body into the breast or hip. In the hip the injection area is the subcutaneous fat layer; in the breast, just above the pectoralis major muscle, taking care not to damage the mammary glands.',
              'For each breast or hip the minimum dose is 50 ml; the maximum dose per breast is 200 ml.',
            ],
          },
          { type: 'p', text: 'How to withdraw: GANA HA body is a prefilled vial with high viscosity and needs a special technique. Prepare normal saline, an 18 G needle and six 10 ml syringes; open the caps of the saline and the body vial, withdraw 10 ml of normal saline, mix it with the body vial, and the product can then be withdrawn easily.' },
        ],
      },
      {
        title: 'Progress after the procedure',
        blocks: [
          {
            type: 'ol',
            items: [
              'For 3–4 days there may be swelling and pain.',
              'Prescribe a painkiller, antibiotics and an anti-inflammatory for 5 days.',
              'Swelling and pain are normal: with a cross-linking ratio of almost 10 % the product absorbs water and enlarges for a few days.',
              'A second session within a month is necessary. The injected filler can migrate to adjacent areas, so the practitioner corrects the shape in the second session.',
            ],
          },
        ],
      },
    ],
    dose: [
      'Partial breast augmentation: 50–100 ml each',
      'Full breast augmentation: 200 ml each',
      'Partial hip augmentation: 50–150 ml',
      'Full hip augmentation: 200–400 ml each',
    ],
  },
  {
    slug: 'gana-patch',
    category: 'wound-care',
    name: 'GANA PATCH',
    subtitle: 'Hydrogel occlusive wound dressing — bio-cellulose sheet with cross-linked hyaluronic acid',
    family: 'hydrogel',
    summary:
      'A bio-cellulose sheet carrying high-concentration cross-linked hyaluronic acid. Applied to an open wound it keeps the wound moist, absorbs exudate and protects against infection, and is changed once a week rather than every day.',
    // 카탈로그 94쪽 "KFDA and FDA approved product"는 싣지 않음 — MFDS 국내 허가(제인20-4997)·러시아 등재는 아래 등재 표가 대신하고, FDA는 확인되지 않음.
    // 시트 크기: 카탈로그 본문은 15 × 10 cm, 촬영본 상자 표기는 25 × 20 cm — 두 규격을 함께 적음.
    presentation: 'Sheet supplied in a sealed bottle, 1 bottle per carton. Sheet sizes 15 × 10 cm and 25 × 20 cm.',
    composition: ['Bio-cellulose (bacterial cellulose) sheet', 'Cross-linked hyaluronic acid, high concentration'],
    image: '/images/catalogue/gana-patch.webp',
    imageAlt: 'GANA PATCH — cartons and bottles in two sizes',
    cataloguePages: '94–96',
    regIds: ['kr-20-4997', 'ru-2024-22431', 'kr-15-4197'],
    sections: [
      {
        title: 'What GANA PATCH is',
        blocks: [
          { type: 'p', text: 'GANA PATCH is a bio-cellulose sheet containing cross-linked hyaluronic acid. Its main use is the covering of open wounds. Bacterial cellulose is non-allergenic and does not cause inflammation in the body.' },
          { type: 'p', text: 'Development objective: a wound-covering material for patients with widespread skin damage, who until now have been very hard to treat.' },
        ],
      },
      {
        title: 'What is different',
        blocks: [
          {
            type: 'ul',
            items: [
              'As soon as it is applied, GANA PATCH keeps the wound moist by preventing evaporation',
              'Prevents infection',
              'Mechanical and chemical protection',
              'Absorbs exudate',
              'Reduces pain',
              'Components of GANA PATCH stimulate collagen synthesis in the soft-tissue defect, so exudate stops',
              'The high-concentration cross-linked hyaluronic acid gel absorbs watery content from the wound',
              'Fills the soft-tissue defect immediately and keeps it moist',
              'No need to change the dressing every day: change GANA PATCH every week',
              'For major wounds with soft-tissue loss and epithelial damage, GANA PATCH includes active ingredients for epithelial-cell and soft-tissue regeneration',
            ],
          },
        ],
      },
      {
        title: 'Course of healing',
        blocks: [
          {
            type: 'ul',
            items: [
              'Skin graft not necessary: after immediate application, skin function recovers from burns or skin loss',
              'Regeneration of soft tissue and epithelium: the bio-cellulose itself replaces soft tissue mechanically',
              'No further wound dressing necessary: once applied, the wound is simply observed until it has healed',
              'Progress: bio-cellulose causes no immune side effect or other response in the body; epithelial cells migrate onto GANA PATCH, which may then be positioned under the epidermis',
            ],
          },
        ],
      },
      {
        title: 'The ideal wound dressing',
        blocks: [
          {
            type: 'ul',
            items: [
              'Able to resist infection',
              'Able to prevent water loss',
              'Able to withstand shear forces',
              'Cost-effective',
              'Widely available',
              'Long shelf life and easy to store',
              'Lack of antigenicity',
              'Flexible in thickness',
              'Durable, with long-term wound stability',
              'Conforms to irregular wound surfaces and is easy to secure and apply',
            ],
          },
        ],
      },
      {
        title: 'Bacterial cellulose',
        blocks: [
          { type: 'p', text: 'Bacterial cellulose is an organic compound with the formula (C₆H₁₀O₅)n produced by certain bacteria, principally of the genera Acetobacter, Sarcina ventriculi and Agrobacterium. It differs from plant cellulose in its high purity, strength, mouldability and increased water-holding ability, and by controlling the synthesis it can be tailored to specific properties. Historically limited to nata de coco, it is now used in textiles, cosmetics, food products and medical applications.' },
          { type: 'p', text: 'SEM findings: the aperture of bacterial cellulose is so small that cells and bacteria cannot pass through it, only water, and its surface area is so wide that the bio-cellulose holds a large amount of water. In conclusion, bio-cellulose protects against infection, absorbs exudate from the wound and lets water evaporate outward.' },
          { type: 'p', text: 'Hyaluronic acid (hyaluronan) is an anionic, non-sulfated glycosaminoglycan distributed widely through connective, epithelial and neural tissues. It is unique among glycosaminoglycans in being non-sulfated, forms in the plasma membrane instead of the Golgi apparatus, and can be very large, with a molecular weight often in the millions. As one of the chief components of the extracellular matrix it contributes to cell proliferation and migration. The average 70 kg person has roughly 15 g of hyaluronan in the body, one third of which is turned over every day.' },
        ],
      },
      {
        title: 'How to use',
        blocks: [
          {
            type: 'ol',
            items: [
              'Sterilise the wound',
              'Take the GANA PATCH sheet out of the bottle, using sterile technique',
              'Cover the wound with the GANA PATCH sheet',
              'Cover the sheet with sterile gauze',
              'Change GANA PATCH every week',
            ],
          },
          { type: 'p', text: 'The wound does not need to be cleaned every day; just check whether there is any sign of infection.' },
        ],
      },
    ],
  },
];

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** 등재 id → 그 등재가 속한 제품 (표·라인업에서 상세 페이지로 링크할 때) */
export function productForReg(regId: string): Product | undefined {
  return products.find((p) => p.regIds.includes(regId));
}

export type { Reg };
