#!/usr/bin/env node
/**
 * Build Team Data Script
 * 
 * Converts team CSV files to JSON for use in the Next.js applications.
 * 
 * Usage:
 *   node scripts/build-team-data.js
 *   npm run build:team
 * 
 * FLEXIBLE SCHEMA - Add any columns you need!
 * 
 * Common fields:
 *   - name: Team member's name
 *   - title: Job title
 *   - photo: Filename or URL (e.g., "rachel.jpg" or "https://...")
 *   - bio: Biography text
 *   - specialties: Pipe-separated list (e.g., "Anxiety|Depression|Trauma")
 *   - credentials: Pipe-separated list
 *   - email: Contact email
 *   - phone: Contact phone
 *   - linkedin: LinkedIn URL
 *   - locations: Pipe-separated list of office locations
 *   - accepting_new: "true" or "false" for accepting new clients
 *   - languages: Pipe-separated list (e.g., "English|Spanish")
 * 
 * Array fields (automatically converted from pipe-separated):
 *   Any field ending in 's' that contains pipes will become an array
 *   Or explicitly: specialties, credentials, locations, languages, services, certifications
 * 
 * Boolean fields (automatically converted):
 *   Any field starting with 'is_' or 'accepting_' or 'has_'
 * 
 * Note: Use pipe (|) to separate multiple items in array fields
 */

const fs = require('fs');
const path = require('path');

// Fields that should always be treated as arrays (pipe-separated)
const ARRAY_FIELDS = [
  'specialties', 
  'credentials', 
  'locations', 
  'languages', 
  'services', 
  'certifications',
  'tags',
  'modalities',
  'insurance'
];

// Fields that should be treated as booleans
const BOOLEAN_PREFIXES = ['is_', 'accepting_', 'has_', 'can_'];

// Parse CSV line, handling quoted fields
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  
  return result;
}

// Determine if a field should be an array
function isArrayField(fieldName, value) {
  // Explicit array fields
  if (ARRAY_FIELDS.includes(fieldName.toLowerCase())) return true;
  // Fields ending in 's' that contain pipes
  if (fieldName.endsWith('s') && value && value.includes('|')) return true;
  return false;
}

// Determine if a field should be a boolean
function isBooleanField(fieldName) {
  return BOOLEAN_PREFIXES.some(prefix => fieldName.toLowerCase().startsWith(prefix));
}

// Parse a value based on its field type
function parseValue(fieldName, value) {
  if (!value || value === '') {
    // Return appropriate empty value
    if (isArrayField(fieldName, '')) return [];
    if (isBooleanField(fieldName)) return false;
    return '';
  }
  
  // Array fields
  if (isArrayField(fieldName, value)) {
    return value.split('|').map(v => v.trim()).filter(v => v);
  }
  
  // Boolean fields
  if (isBooleanField(fieldName)) {
    return value.toLowerCase() === 'true' || value === '1' || value.toLowerCase() === 'yes';
  }
  
  // Regular string
  return value;
}

// Parse full CSV content
function parseCSV(content) {
  const lines = content.split('\n').filter(line => line.trim());
  if (lines.length === 0) return [];
  
  const headers = parseCSVLine(lines[0]);
  const data = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const row = {};
    
    headers.forEach((header, index) => {
      const rawValue = values[index] || '';
      row[header] = parseValue(header, rawValue);
    });
    
    data.push(row);
  }
  
  return data;
}

// Build team data for a site
function buildTeamData(site) {
  const csvPath = path.join(__dirname, '..', 'apps', site, 'data', 'team.csv');
  const jsonPath = path.join(__dirname, '..', 'apps', site, 'data', 'team.json');
  
  // Check if CSV exists
  if (!fs.existsSync(csvPath)) {
    console.log(`⚠️  No CSV found for ${site}: ${csvPath}`);
    return false;
  }
  
  // Read and parse CSV
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const teamData = parseCSV(csvContent);
  
  // Write JSON
  const jsonContent = JSON.stringify(teamData, null, 2);
  fs.writeFileSync(jsonPath, jsonContent);
  
  console.log(`✅ ${site}: Built ${teamData.length} team members → ${jsonPath}`);
  return true;
}

// Main execution
console.log('\n🔧 Building Team Data from CSV...\n');

const sites = ['therapy', 'wellness'];
let success = true;

sites.forEach(site => {
  if (!buildTeamData(site)) {
    success = false;
  }
});

console.log('\n' + (success ? '✨ Done!' : '⚠️  Completed with warnings') + '\n');

// Also generate TypeScript type definitions
const typesContent = `// Auto-generated team data types
// Run "npm run build:team" to regenerate

export interface TherapyTeamMember {
  name: string;
  title: string;
  specialties: string[];
}

export interface WellnessTeamMember {
  name: string;
  title: string;
  bio: string;
  credentials: string[];
}
`;

const typesPath = path.join(__dirname, '..', 'packages', 'shared', 'lib', 'team-types.ts');
fs.writeFileSync(typesPath, typesContent);
console.log(`📝 Generated types: ${typesPath}\n`);

