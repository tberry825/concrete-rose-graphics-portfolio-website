// Real price list for Concrete Rose Graphics.
// The /pricing page is noindexed and out of the nav, so this is only reachable
// via the direct URL — prices show when the link is shared.

export const PRICING_SECTIONS = [
  {
    key: "packages",
    title: "Packages",
    subtitle: "Bundled services at a flat rate.",
    items: [
      {
        name: "Flyer Package",
        price: "$250",
        includes: [
          "3 flyers",
          "2 revisions each",
          "Sized for print and/or square/Instagram",
        ],
      },
      {
        name: "Social Media Kit (6)",
        price: "$400",
        includes: [
          "6 social media posts",
          "2 revisions",
          "Sized square (1080×1080) & Instagram (1080×1350)",
        ],
      },
      {
        name: "Small Social Media Kit (3)",
        price: "$200",
        includes: [
          "3 social media posts",
          "2 revisions",
          "Sized square (1080×1080) & Instagram (1080×1350)",
        ],
      },
      {
        name: "Book Cover Design Package",
        price: "$450",
        includes: [
          "2 revisions",
          "1 flyer to promote the book",
          "2 social media templates",
        ],
      },
      {
        name: "Logo Package",
        price: "$400",
        includes: [
          "3 revisions — 1st chooses between 2 designed choices, next 2 finalize the chosen logo",
          "Client receives the Illustrator file & transparent logo version",
          "2 social media templates with logo",
        ],
      },
      {
        name: "Retractable Banner Package",
        price: "$600",
        includes: [
          "1 retractable banner (size is your preference)",
          "2 revisions of banner",
          "Once approved: 3 branded social media templates + 1 flyer creation",
        ],
      },
      {
        name: "Website Creation",
        price: "$2,500",
        includes: [
          "Up to 3 pages (Home, About, Contact/Prices)",
          "Tablet and mobile optimization",
          "Basic SEO setup",
          "Domain connection",
        ],
      },
    ],
  },
  {
    key: "per-item",
    title: "Per-Item Services",
    subtitle: "Single creations and updates.",
    items: [
      {
        name: "Flyer Creation",
        price: "$90 each",
        includes: [
          "2 revisions",
          "Sized for print and/or square/Instagram",
        ],
      },
      {
        name: "Flyer Updates",
        price: "$65 each",
        includes: ["2 revisions"],
      },
      {
        name: "Poster Creation",
        price: "$100 each",
        includes: [
          "2 revisions",
          "Sized 24×36",
        ],
      },
      {
        name: "Poster Updates",
        price: "$70 each",
        includes: ["2 revisions"],
      },
      {
        name: "Business Card Creation",
        price: "$150 / 500 cards",
        includes: [
          "2 revisions",
          "Sized for print and/or square/Instagram",
        ],
      },
      {
        name: "Website Updates",
        price: "Starts at $200",
        includes: ["Depending on the number of pages and updates needed"],
      },
    ],
  },
];

export const ADDONS = [
  { feature: "Extra pages", price: "$75 – $150 per page (depending on content)" },
  { feature: "Blog setup", price: "$150 – $300" },
  { feature: "Basic store setup", price: "$300 – $800" },
  { feature: "Logo / branding help", price: "$200 – $600" },
];

export const FUNERAL_PROGRAMS = {
  note: "Pricing varies based on quantity needed, paper quality, number of pages, and binding/folding style.",
  columns: ["Option", "Size / Format", "Description / Features", "Suggested Price"],
  rows: [
    {
      option: "Basic Program",
      size: "5″ × 7″, half-fold (4 pages)",
      paper: "Standard gloss/text paper (budget stock)",
      qty: "50",
      desc: "Minimal design, one photo, simple layout",
      price: "$75 ($1.50 each)",
    },
    {
      option: "Standard Program",
      size: "5″ × 7″, half-fold (4 pages)",
      paper: "Better quality paper, color on both sides",
      qty: "100",
      desc: "Includes photo, order of service, thank you note",
      price: "$150 ($1.50 each)",
    },
    {
      option: "Large Qty Discount",
      size: "5″ × 7″, half-fold",
      paper: "Same quality as Standard",
      qty: "250",
      desc: "Same layout as Standard",
      price: "$325 (~$1.30 each)",
    },
    {
      option: "Trifold / Graduated Fold",
      size: "8½″ × 11″ folded in thirds / special fold",
      paper: "Premium gloss or satin finish",
      qty: "100",
      desc: "More panels, more photos, more content",
      price: "$350–$400 ($3.50–$4.00 each)",
    },
    {
      option: "Booklet / Multi-Page",
      size: "8½″ × 11″, 8-page booklet (saddle-stitched)",
      paper: "Heavy cover + quality interior paper",
      qty: "50",
      desc: "More photos/bios, more content, nicer binding",
      price: "$300–$400 ($6–$8 each)",
    },
    {
      option: "Premium / Custom Design Add-On",
      size: "Any of the above",
      paper: "Upgraded paper, foil, special graphics, lamination, etc.",
      qty: "–",
      desc: "Custom graphic design, photo editing, etc.",
      price: "+$75–$200 flat, depending on scope",
    },
    {
      option: "Rush / Same-Day Service",
      size: "Any format",
      paper: "–",
      qty: "–",
      desc: "Expedited design & printing",
      price: "Additional 15–50% over standard rates",
    },
  ],
};

export const PRICING_NOTICE =
  "Every project is different. Final pricing is determined by scope, complexity, timeline, and project requirements.";