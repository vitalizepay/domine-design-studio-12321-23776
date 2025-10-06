# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/46dfbe3a-edc6-4d7f-9b1d-0efa93963796

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/46dfbe3a-edc6-4d7f-9b1d-0efa93963796) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/46dfbe3a-edc6-4d7f-9b1d-0efa93963796) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## Design Studio Features

### Multi-View T-shirt Design

The DOMINE Design Studio now supports **multi-view T-shirt design** with the following features:

#### View Management
- **4 Views**: Front, Left, Right, Back
- Each view maintains its own canvas state and T-shirt color
- Switch between views using the View Switcher above the canvas
- All views can be exported individually

#### T-shirt Mockup & Recoloring
- White SVG T-shirt mockup by default (front view shown)
- **Recolor the T-shirt** using:
  - 6 preset colors (White, Black, Navy, Grey, Red, Olive)
  - Custom color picker with hex input
  - "Apply to all views" toggle option
- Colors update immediately in the active view

#### Grouped Templates
- Templates are **grouped collections** of elements (text, images, vectors)
- Click any template to insert it centered in the current view
- **Ungroup** templates to access individual elements via the Layers panel
- **Extract elements** from groups to save them to Assets for reuse

Sample templates include:
1. **Vintage Badge** - Text hierarchy with multiple layers
2. **Mountain Scene** - Illustration with caption overlay
3. **Stacked Typography** - Multiple text elements with decorative icon

#### Transform & Editing Tools

**Mouse Controls:**
- Click to select objects
- Drag to move
- Corner handles to scale/rotate
- Transform controls appear on selection

**Keyboard Shortcuts:**
- `Ctrl/Cmd + Z` - Undo
- `Ctrl/Cmd + Y` or `Ctrl/Cmd + Shift + Z` - Redo
- `Ctrl/Cmd + D` - Duplicate selected object
- `Delete` or `Backspace` - Remove selected object
- `Arrow Keys` - Nudge object 1px
- `Shift + Arrow Keys` - Nudge object 10px

**Layer Controls (Right Panel):**
- Visibility toggle (eye icon)
- Lock/unlock (lock icon)
- Z-order (up/down arrows)
- Duplicate (copy icon)
- Delete (trash icon)
- Ungroup (for grouped templates)

#### Save & Export

**Save Design:**
- Click "Save" to store your design with all views
- Each view's canvas state (Konva JSON) is saved separately
- T-shirt colors for each view are preserved

**Export Multi-View:**
- Click "Export" to download all 4 views
- Exports as separate PNG/SVG files per view
- Files are bundled into a single ZIP download

**Backend Integration:**
- Designs can be saved to the backend via Lovable Cloud
- Each design stores: `{ title, views: { front, left, right, back }, viewColors, previewUrls[] }`
- API routes: `POST /api/designs` (create) and `PUT /api/designs/:id` (update)

### Template Assets

Sample templates are located in:
- **Code**: `src/data/sampleTemplates.ts`
- **Documentation**: `public/sample-templates/README.md`

### Future Integrations

The project is ready for:
- **AI Generation**: OpenAI/DALL·E integration (add `OPENAI_API_KEY` to Lovable Cloud secrets)
- **Storage**: File uploads via Lovable Cloud storage
- **Database**: Design persistence using Lovable Cloud database

To enable AI features, navigate to Project Settings → Secrets and add your API keys.

### Acceptance Checklist

✅ White T-shirt SVG mockup loads by default (front view)  
✅ Dashed printable area shown on front/back views  
✅ View switcher toggles between Front/Left/Right/Back  
✅ Each view maintains independent canvas state and color  
✅ T-shirt color picker with presets and custom color  
✅ Clicking templates inserts grouped objects centered on canvas  
✅ Ungroup functionality splits groups into individual layers  
✅ Transform controls work (move/scale/rotate)  
✅ Keyboard shortcuts functional (Undo/Redo/Delete/Duplicate/Nudge)  
✅ Layers panel shows all objects with visibility/lock/z-order controls  
✅ Sample grouped templates visible and functional  
✅ Save/Export functionality ready for backend integration
