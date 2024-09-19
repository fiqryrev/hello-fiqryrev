#!/bin/bash

# Create new directories
mkdir -p app/blog app/projects components public/images

# Create new files in app directory
touch app/blog/page.tsx
touch app/projects/page.tsx

# Create files in components directory
touch components/Header.tsx
touch components/Footer.tsx
touch components/HeroSection.tsx
touch components/WorkExperience.tsx
touch components/SkillsTechStacks.tsx
touch components/ProjectsSection.tsx

echo "Project structure updated successfully!"