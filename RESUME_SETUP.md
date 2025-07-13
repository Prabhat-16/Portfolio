# Adding Your Resume PDF

## Steps:

1. **Save your resume as a PDF file**
   - Convert your resume to PDF format
   - Name it `resume.pdf` (recommended)

2. **Place the PDF in the public folder**
   - Copy your `resume.pdf` file
   - Paste it into the `public` folder of your project
   - The path should be: `public/resume.pdf`

3. **The download button will automatically work**
   - The Resume component is already configured to link to `/resume.pdf`
   - When users click "Download Resume", it will open your PDF

## Alternative Names:
If you want to use a different filename, update the Resume component:
- Open `src/components/Resume.tsx`
- Find this line: `window.open('/resume.pdf', '_blank');`
- Change `resume.pdf` to your filename (e.g., `my-resume.pdf`)

## File Location:
Your PDF should be in: `Portfolio/public/resume.pdf` 