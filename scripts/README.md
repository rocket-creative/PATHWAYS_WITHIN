# Team Data Management (CSV-driven CMS)

Both the Therapy and Wellness sites pull team member data from CSV files, making it easy to update staff information without modifying code.

## Quick Start

### To update team members:

1. **Edit the CSV file:**
   - Therapy team: `apps/therapy/data/team.csv`
   - Wellness team: `apps/wellness/data/team.csv`

2. **Rebuild the data:**
   ```bash
   # From project root:
   npm run build:team
   
   # Or from individual app directories:
   cd apps/therapy && npm run build:team
   cd apps/wellness && npm run build:team
   ```

3. **Restart dev server** (or rebuild for production)

---

## Adding Photos

1. **Add photo files** to the public folder:
   - Therapy: `apps/therapy/public/team/`
   - Wellness: `apps/wellness/public/team/`

2. **Reference in CSV** using just the filename:
   ```csv
   name,title,photo,specialties
   "Jane Doe, LCSW",Therapist,jane-doe.jpg,"Anxiety|Depression"
   ```

3. **Recommended photo specs:**
   - Square format (1:1 ratio)
   - Minimum 200x200px
   - JPG or PNG format
   - File naming: `firstname-lastname.jpg`

4. **Fallback:** If no photo or image fails to load, initials are displayed automatically.

---

## Flexible Schema

The system automatically handles ANY new columns you add to the CSV. Just add a new column header and data - it will flow through to the JSON and be available in the page.

### Special Field Types

**Array fields** (automatically converted from pipe-separated values):
- Any field named: `specialties`, `credentials`, `locations`, `languages`, `services`, `certifications`, `tags`, `modalities`, `insurance`
- Any field ending in 's' that contains pipes (e.g., `skills`)

**Boolean fields** (automatically converted):
- Any field starting with: `is_`, `accepting_`, `has_`, `can_`
- Values: `true`/`false`, `yes`/`no`, or `1`/`0`

### Common Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Full name (with credentials for therapy) |
| `title` | string | Job title |
| `photo` | string | Filename in `/public/team/` folder |
| `bio` | string | Biography paragraph |
| `specialties` | array | Areas of expertise (pipe-separated) |
| `credentials` | array | Certifications (pipe-separated) |
| `services` | array | Services offered (pipe-separated) |
| `locations` | array | Office locations (pipe-separated) |
| `email` | string | Contact email |
| `phone` | string | Contact phone |
| `linkedin` | string | LinkedIn profile URL |
| `languages` | array | Languages spoken (pipe-separated) |
| `accepting_new` | boolean | Accepting new clients? |
| `is_featured` | boolean | Feature on homepage? |

---

## CSV Format Examples

### Therapy Team

```csv
name,title,photo,specialties,locations,accepting_new,email
"Jane Doe, LCSW",Therapist,jane-doe.jpg,"Anxiety|Depression|Trauma","Smithtown|Garden City",true,jane@example.com
"John Smith, PhD",Clinical Supervisor,john-smith.jpg,"Research|Supervision","Smithtown",true,
```

### Wellness Team

```csv
name,title,photo,bio,credentials,services,email
Jane Doe,Massage Therapist,jane-doe.jpg,"Jane has 10 years of experience...","LMT|Deep Tissue Certified","Swedish Massage|Deep Tissue",jane@example.com
```

---

## Adding/Removing Team Members

| Action | How |
|--------|-----|
| **Add** | Add a new row to the CSV |
| **Remove** | Delete the row from the CSV |
| **Reorder** | Change row order (first = first displayed) |
| **Add new field** | Add a new column header |

Then run `npm run build:team` to regenerate the JSON.

---

## How It Works

```
CSV File                    Build Script               JSON File              Page
(human-editable)    →    (node script)    →    (auto-generated)    →    (imports JSON)

team.csv            →    build-team-data.js   →    team.json           →    page.tsx
```

1. The build script reads CSV files
2. Converts them to JSON with proper types
3. Next.js pages import the JSON directly
4. Build runs automatically during `npm run build`

---

## Notes

- Use double quotes around fields containing commas or line breaks
- Use pipe (`|`) to separate multiple items in array fields
- The JSON files are auto-generated — **don't edit them directly**
- Photos fallback to initials if not found
- Empty fields are handled gracefully
