# How to Update Team Member Information

## Quick Overview

Our website pulls team information from simple spreadsheet files (CSV format). You can edit these files in Excel, Google Sheets, or any spreadsheet program.

**File Locations:**
- Therapy team: `apps/therapy/data/team.csv`
- Wellness team: `apps/wellness/data/team.csv`

---

## Current Fields

### Therapy Team

| Column Name | What It Is | Example |
|-------------|------------|---------|
| name | Full name with credentials | Jane Doe, LCSW |
| title | Job title | Therapist |
| photo | Photo filename | jane-doe.jpg |
| specialties | Areas they work with (separate with \|) | Anxiety \| Depression \| Trauma |
| locations | Office locations (separate with \|) | Smithtown \| Garden City |
| accepting_new | Taking new clients? | true or false |
| email | Contact email | jane@pathwayswithin.com |

### Wellness Team

| Column Name | What It Is | Example |
|-------------|------------|---------|
| name | Full name | Jane Doe |
| title | Job title | Massage Therapist |
| photo | Photo filename | jane-doe.jpg |
| bio | Short paragraph about them | Jane has 10 years of experience... |
| credentials | Certifications (separate with \|) | Licensed Massage Therapist \| Deep Tissue Certified |
| services | What they offer (separate with \|) | Swedish Massage \| Deep Tissue |
| email | Contact email | jane@pathwayswithin.com |

---

## How to Make Updates

### Adding a New Team Member

1. Open the CSV file in Excel or Google Sheets
2. Add a new row at the bottom
3. Fill in each column
4. Save the file
5. Ask a developer to run the rebuild command

### Removing a Team Member

1. Open the CSV file
2. Delete their entire row
3. Save the file
4. Ask a developer to run the rebuild command

### Changing the Order

Team members appear on the website in the same order as the spreadsheet. To reorder:
1. Cut the row you want to move
2. Paste it in the new position
3. Save and rebuild

---

## Adding Photos

1. **Prepare the photo:**
   - Square shape (same width and height)
   - At least 200 x 200 pixels
   - Save as JPG or PNG

2. **Name the file:** Use lowercase with dashes
   - ✅ Good: `jane-doe.jpg`
   - ❌ Bad: `Jane Doe Photo.JPG`

3. **Send to developer** to add to the website folder

4. **Update the spreadsheet:** Put the filename in the "photo" column

**Note:** If no photo is provided, the website shows their initials instead.

---

## Adding a New Field

Want to track something new? Just add a new column!

### Example: Adding a LinkedIn Profile

1. Open the CSV file in your spreadsheet program
2. Add a new column header called `linkedin`
3. Fill in the LinkedIn URLs for each person
4. Save and ask for a rebuild

The new field will be available on the website (a developer may need to make it display).

### Tips for New Fields

- **For lists** (multiple items): Use the pipe symbol ( \| ) to separate items
  - Example: `English | Spanish | French`
  
- **For yes/no fields**: Use `true` or `false`
  - Example: `accepting_new` → `true`

- **Keep names simple**: Use lowercase with underscores
  - ✅ Good: `phone_number`, `start_date`
  - ❌ Bad: `Phone Number`, `Start Date!`

---

## Common Field Ideas

Here are some fields you might want to add:

| Field Name | What It's For | Example Value |
|------------|---------------|---------------|
| phone | Direct phone number | (516) 555-1234 |
| linkedin | LinkedIn profile URL | https://linkedin.com/in/janedoe |
| languages | Languages spoken | English \| Spanish |
| insurance | Insurance accepted | Aetna \| Blue Cross \| United |
| start_date | When they joined | January 2020 |
| is_featured | Show on homepage? | true |
| education | Degrees | NYU \| Columbia |

---

## After Making Changes

After you edit and save the spreadsheet, the website needs to be rebuilt:

1. Save your changes to the CSV file
2. Let a developer know
3. They will run the update command
4. Changes appear on the website within minutes

---

## Need Help?

- **Can't open the file?** Ask for access to the project folder
- **Not sure about formatting?** Look at existing entries as examples
- **Changes not showing?** The rebuild command may not have been run yet

---

*Last updated: December 2024*

