import { PricingTierData } from "@/types/pricing";
import { FAQItem } from "@/types/faqItems";

export const TEST_MODE_ENABLED = ["true", "True", "TRUE"].includes(
  process.env.NEXT_PUBLIC_TEST_MODE_ENABLED ?? "",
);

export const CONTACT_EMAIL = "pear@trypear.ai";

const NEXT_PUBLIC_STRIPE_WAITLIST_PRICE_ID = "price_1PZ9X608N4O93LU5yqMbGDtu";
const NEXT_PUBLIC_STRIPE_WAITLIST_PRICE_ID_TEST =
  "price_1PZUT208N4O93LU5jItKoEYu";
const NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID = "price_1PZ9Lc08N4O93LU5wVOq1Pv7";
const NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID_TEST =
  "price_1PZUPg08N4O93LU5M8u2GimE";
const NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID = "price_1PZ9Sq08N4O93LU51Ugvig0y";
const NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID_TEST =
  "price_1PZUSi08N4O93LU5UVdlkfp2";

export const STRIPE_PRICE_IDS = {
  WAITLIST: TEST_MODE_ENABLED
    ? NEXT_PUBLIC_STRIPE_WAITLIST_PRICE_ID_TEST
    : NEXT_PUBLIC_STRIPE_WAITLIST_PRICE_ID,
  MONTHLY: TEST_MODE_ENABLED
    ? NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID_TEST
    : NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID,
  ANNUAL: TEST_MODE_ENABLED
    ? NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID_TEST
    : NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID,
};

export const PRICING_TIERS: PricingTierData[] = [
  {
    title: "Intern (Free)",
    price: "0",
    description:
      "You can download PearAI directly, and use your own API key 🤓",
    isFree: true,
  },
  {
    title: "Junior Engineer (Monthly)",
    price: "18",
    description:
      "Get the monthly subscription, and we'll take care of you... 😎",
    features: [
      "1000 chat + autocomplete requests per month (Claude 3.5 Sonnet + GPT4o)",
      "Direct customer support by the founders and contributors",
      "Private Discord channel",
    ],
    buttonText: "Get Started",
    priceId: STRIPE_PRICE_IDS.MONTHLY,
  },
  {
    title: "10x Engineer (Yearly)",
    price: "14",
    description: "Pay one lump sum yearly, and you'll be our VIP! 🤩",
    features: ["Everything from monthly", "Priority for new feature requests"],
    buttonText: "Get Started",
    priceId: STRIPE_PRICE_IDS.ANNUAL,
  },
];

export const faqData: FAQItem[] = [
  {
    question: "Why is it called PearAI?",
    answer: "Pear programming... Pair programming... PearAI Pair programming!",
  },
  {
    question: "What separates PearAI from Github Copilot?",
    answer:
      "PearAI will provide better quality responses, and also has a better UX. These are the 2 key factors in accelerating your coding workflow. For both of these factors, you can try the free trial, and you'll be able to see the proof for yourself.",
  },
  {
    question: "Why should I switch to PearAI?",
    answer: `PearAI is a fork of VSCode, and possess all of its functionalities, but also adds more to it by integrating AI functionalities to speed up your coding workflow. Current users have expressed that their coding workflow accelerated by at least 3-4x.\n\n By switching to PearAI, you can speed up your product development, and not lack behind in terms of AI tooling compared to your peers.`,
  },
  {
    question:
      "Why can't I just use ChatGPT, Claude, Gemini, or another LLM chat directly instead?",
    answer:
      "You can, and we used to as well. However, the convenience of the chat being integrated into the editor, along with easy access features within the chats such as including other files, applying changes directly, removing the need to copy paste code, prompting with code context, adding other websites or docs links in chat directly, all of this and more, means that you have a much more seamless coding experience, resulting in significant overall faster development. Try it yourself!",
  },
  {
    question: "Is PearAI an extension or an app?",
    answer:
      "PearAI is an app and requires you to download it. Being a VSCode extension severely limits the modifications we can do. In order to provide the best UX possible, we need full control of code changes within the app.",
  },
];
