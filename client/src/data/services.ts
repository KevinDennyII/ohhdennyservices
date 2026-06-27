import websiteIcon from "@assets/website_1773274389676.png";
import networkIcon from "@assets/network_1773274389678.png";
import troubleshootingIcon from "@assets/troubleshooting_1773274389677.png";
import onlineLearningIcon from "@assets/online-learning_2436874_1773274389677.png";
import securityPlusLogo from "@assets/SecurityPlus-Logo-Certified-5-e1543775013910_1773274389676.jpg";

export type CoreService = {
  title: string;
  image: string;
  homeDescription: string;
  description: string;
};

export const coreServices: CoreService[] = [
  {
    title: "Web Development",
    image: websiteIcon,
    homeDescription:
      "Over 20 years of website design and development experience building sites that work for your business.",
    description:
      "We have over 20 years of website design and development experience.",
  },
  {
    title: "Networking",
    image: networkIcon,
    homeDescription:
      "Cisco Certified Network Academy (CCNA) trained with hands-on experience consulting and implementing networking solutions.",
    description:
      "Cisco Certified Network Academy (CCNA) trained with hands-on experience in consulting and implementing networking system solutions for small businesses.",
  },
  {
    title: "Helpful Tech",
    image: troubleshootingIcon,
    homeDescription:
      "Classically-trained computer scientist with a knack for all things tech!",
    description:
      "Classically-trained computer scientist with a knack for all things tech!",
  },
  {
    title: "Basic Cyber Security",
    image: securityPlusLogo,
    homeDescription:
      "CompTIA Security+ certified professionals with a wealth of knowledge on Cyber Security.",
    description:
      "We have CompTIA Security+ certified professionals with a wealth of knowledge on Cyber Security. We are also avid followers of the TWIT.tv webcast, Security Now.",
  },
];

const servicesPageImageOverrides: Record<string, string> = {
  "Helpful Tech": onlineLearningIcon,
};

export function getServicePageImage(service: CoreService): string {
  return servicesPageImageOverrides[service.title] ?? service.image;
}
