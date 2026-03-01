import {
  portfolioProjects,
  projectCategories,
} from "@/app/data/portfolio-projects";
import type {
  PortfolioProject,
  ProjectCategory,
} from "@/app/data/portfolio-projects";

describe("portfolio-projects data integrity", () => {
  it("has at least one project", () => {
    expect(portfolioProjects.length).toBeGreaterThan(0);
  });

  it("every project has all required fields", () => {
    for (const project of portfolioProjects) {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.shortDescription).toBeTruthy();
      expect(project.fullDescription).toBeTruthy();
      expect(project.category).toBeTruthy();
      expect(project.techTags.length).toBeGreaterThan(0);
      expect(project.impactMetric).toBeTruthy();
      expect(project.impactLabel).toBeTruthy();
      expect(typeof project.featured).toBe("boolean");
      expect(["live", "archived", "in-progress"]).toContain(project.status);
    }
  });

  it("all slugs are unique", () => {
    const slugs = portfolioProjects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has exactly 1 featured project per category", () => {
    const categoryIds = projectCategories.map((c) => c.id);

    for (const categoryId of categoryIds) {
      const featured = portfolioProjects.filter(
        (p: PortfolioProject) => p.category === categoryId && p.featured
      );
      expect(featured).toHaveLength(1);
    }
  });

  it("every project category matches a valid category id", () => {
    const validCategories = new Set<ProjectCategory>(
      projectCategories.map((c) => c.id)
    );

    for (const project of portfolioProjects) {
      expect(validCategories.has(project.category)).toBe(true);
    }
  });

  it("detailRoute values are valid paths or null", () => {
    for (const project of portfolioProjects) {
      if (project.detailRoute !== null) {
        expect(project.detailRoute).toMatch(/^\/solutions\//);
      }
    }
  });

  it("projectCategories has at least one entry", () => {
    expect(projectCategories.length).toBeGreaterThan(0);
  });

  it("every category has label and description", () => {
    for (const category of projectCategories) {
      expect(category.id).toBeTruthy();
      expect(category.label).toBeTruthy();
      expect(category.description).toBeTruthy();
    }
  });
});
