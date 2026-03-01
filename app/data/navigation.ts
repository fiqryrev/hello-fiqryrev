export interface NavMenuItem {
  icon: string;
  text: string;
  description: string;
  href: string;
}

export const solutionsItems: NavMenuItem[] = [
  { icon: "\u{1F4BB}", text: "Data and AI Products", description: "Build the ideal product from AI", href: "/solutions/data-ai-product" },
  { icon: "\u{1F527}", text: "Data Platform and Engineering", description: "Build robust data infrastructure and pipelines", href: "/solutions/data-platform-engineering" },
  { icon: "\u{1F50D}", text: "Search and Retrieval", description: "Implement efficient search systems for your data", href: "/solutions/search-retrieval" },
  { icon: "\u{1F4CA}", text: "Business Intelligence and Analytics", description: "Gain insights from your data with advanced analytics", href: "/solutions/bi-analytics" },
  { icon: "\u{1F512}", text: "Data Governance and Security", description: "Ensure data compliance and security across your organization", href: "/solutions/data-governance-security" },
  { icon: "\u{1F310}", text: "Web Development", description: "Create modern, responsive web applications", href: "/solutions/web-development" },
];

export const resourcesItems: NavMenuItem[] = [
  { icon: "\u{1F4DD}", text: "Blog", description: "Latest news, tips, and best practices", href: "/resources/blog" },
  { icon: "\u{1F393}", text: "Academics", description: "Academic publications and research", href: "/resources/academics" },
  { icon: "\u{1F3A4}", text: "Speakership Portfolio", description: "Speaking engagements and presentations", href: "/resources/speakership" },
  { icon: "\u{1F4A1}", text: "Case Studies", description: "Real-world implementation stories", href: "/resources/case-studies" },
];
