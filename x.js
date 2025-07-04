import { file, write } from "bun";
import path from "path";
import fs from "fs/promises";
import stoics from "./popup";

// Define the path to the stoics data file
// Assuming 'stoics.js' is in the same directory as this script.
// If your file is named 'popup.js', please rename it to 'stoics.js' or update this path.
const stoicsDataPath = "./popup.js";

// Function to format the date as YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Main function to generate the markdown files
async function generateDailyStoicFiles() {
  try {
    // Read the stoics data from the file
    // We need to execute the JS file to get the stoics array.
    // In a real Bun environment, you might use 'import' directly if it's an ES module.
    // For this demonstration, we'll assume it exports a 'stoics' constant.
    // If popup.js just defines a global 'stoics' variable, this approach works.

    const outputDir = "/home/prjctimg/workspace/me/data/blog/zen/";
    await fs.mkdir(outputDir, { recursive: true });
    console.log(`Output directory created: ${outputDir}`);

    const year = 2019;
    const startDate = new Date(year, 0, 1); // January 1st, 2024
    const endDate = new Date(year, 11, 31); // December 31st, 2024

    let currentStoicIndex = 0;

    for (
      let d = new Date(startDate);
      d <= endDate;
      d.setDate(d.getDate() + 1)
    ) {
      const formattedDate = formatDate(d);
      const filename = `${formattedDate}.mdx`;
      const filePath = path.join(outputDir, filename);

      // Get the stoic entry for the current day, cycling through the array
      const stoicEntry = stoics[currentStoicIndex % stoics.length];
      currentStoicIndex++;

      const frontmatter = `---
draft: false 
date: ${formattedDate}
title: 🍂• ${stoicEntry.title.toLowerCase()}
tags: [zen]
---`;

      const content = `> ${stoicEntry.quote.replace(/\n/g, "\n> ")}\n\n> *${stoicEntry.author.replace(/\b\w/g, (char) => char.toUpperCase()).replace("-", "•")}* - ${stoicEntry.date}`;

      const markdownContent = `${frontmatter}\n\n${content}`;

      await write(filePath, markdownContent);
      console.log(`Created ${filePath}`);
    }

    console.log(
      `Successfully created 365 markdown files for the year ${year}.`,
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Execute the function
generateDailyStoicFiles();
