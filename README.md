# Zhongyan New Energy Website

International trade website for Zhejiang Zhongyan New Energy Co., Ltd., a manufacturer of flexible busbars, rigid busbars, and new energy conductive components.

## Features

- Multi-language support (English, French, Spanish, Arabic with RTL layout)
- Responsive design for all devices
- Product catalog with filtering and search
- Contact form with quote requests
- Company information and quality certifications

## Project Structure

```
/
├── index.html              # Homepage
├── products.html           # Product categories + grid
├── about.html              # Company info, history, certifications
├── contact.html            # Contact form + info
├── equipment.html          # Equipment & production capacity
├── quality.html            # Quality control & certifications
├── news.html               # Company news & updates
├── css/style.css          # All styles
├── js/main.js             # Shared functionality
└── README.md              # This file
```

## Setup

### Frontend Only (no backend needed)
Open `index.html` directly in a browser or serve with any static file server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js serve
npx serve .
```

### With Backend API (optional)
See `CLAUDE.md` for backend setup instructions.

## Design System

The site uses a consistent color palette and typography:

| Variable | Value | Purpose |
|----------|-------|---------|
| `--primary` | `#C41230` | Red accent |
| `--dark` | `#0a0a0a` | Primary background |
| `--light-gray` | `#f4f4f4` | Light sections |
| `--font` | `'Poppins', sans-serif` | Body font |
| `--font-ar` | `'Noto Sans Arabic', sans-serif` | Arabic font |

## Development

- All images use `object-fit: contain` to ensure full visibility without cropping
- Multilingual strings are managed in `js/main.js` within the `T` translation object
- Responsive breakpoints: 1100px, 900px, 640px

## Deployment

This site can be deployed as static files to any hosting service. For GitHub Pages:

1. Go to repository Settings → Pages
2. Select branch `master` and root folder
3. Save to deploy to `https://saladinjj.github.io/zhongyan/`

## License

© 2026 Zhejiang Zhongyan New Energy Co., Ltd. All rights reserved.