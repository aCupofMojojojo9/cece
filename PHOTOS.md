# 📷 How to Update Site Photos

All photos on the site live in one place: **`public/site-photos/`**

You never need to touch any code. Just follow the steps below.

---

## Quick Steps

### To swap out a photo:

1. Add your new photo to the `public/site-photos/` folder
   - Use a simple name with no spaces (e.g. `kids-outside.jpg`)
2. Open the JSON file for the page you want to change (see map below)
3. Find the line with the old photo name and replace it with your new one
4. Save the file — done!

---

## Where Each Page's Photos Are Configured

| Page                             | JSON File                      |
| -------------------------------- | ------------------------------ |
| Home                             | `src/content/home.json`        |
| Our Story                        | `src/content/our-story.json`   |
| Our Team                         | `src/content/our-team.json`    |
| Contact Us                       | `src/content/contact-us.json`  |
| Children We Serve (slideshow)    | `src/content/sponsorship.json` |
| Donate strip (on multiple pages) | `src/content/donate.json`      |

---

## Photo Slots — Full Map

### Home Page (`src/content/home.json`)

```
hero.image               — Full-width banner at the top of the home page
intro.image              — Photo next to the "CECE's Dream" intro text
whatWeDo.difference.image — Photo next to "Making a Real Difference"
whatWeDo.focusAreas.image — Photo next to "Our Focus Areas"
bottomImage              — Large photo at the bottom of the home page
```

### Our Story (`src/content/our-story.json`)

```
hero.image               — Full-width banner at the top of Our Story
howItBegan.image         — Photo next to "How It All Began"
impact.image             — Photo next to "Our Impact"
```

### Our Team (`src/content/our-team.json`)

```
hero.image               — Full-width banner at the top of Our Team
members[N].image         — Each team member's headshot (don't change these)
```

### Contact Us (`src/content/contact-us.json`)

```
hero.image               — Full-width banner at the top of Contact Us
```

### Children We Serve (`src/content/sponsorship.json`)

```
gallery.photos           — The slideshow photos (add or remove lines to change)
```

To add a photo to the slideshow, add a new line inside the `"photos": [...]` array:

```json
"gallery": {
  "photos": [
    "/cece/site-photos/your-new-photo.jpg",
    "/cece/site-photos/scene-01.jpg",
    ...
  ]
}
```

### Donate strip (`src/content/donate.json`)

```
image                    — Photo on the donation call-to-action strip
```

---

## Tips

- **Portrait photos** (taken vertically on a phone) work great next to text sections
- **Landscape photos** (taken horizontally) work best for full-width banners
- Photo filenames must have **no spaces** — use hyphens instead: `david-with-kids.jpg` ✓, `david with kids.jpg` ✗
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- After adding a photo, the path in the JSON should start with `/cece/site-photos/your-photo.jpg`

---

## Current Trip Photos

These photos from the March 2026 Liberia trip are already available in `public/site-photos/`:

| File           | Approx. Time |
| -------------- | ------------ |
| `scene-01.jpg` | 1:54 PM      |
| `scene-02.jpg` | 2:00 PM      |
| `scene-03.jpg` | 2:03 PM      |
| `scene-04.jpg` | 2:09 PM      |
| `scene-05.jpg` | 2:22 PM      |
| `scene-06.jpg` | 2:28 PM      |
| `scene-07.jpg` | 2:35 PM      |
| `scene-08.jpg` | 2:45 PM      |
| `scene-09.jpg` | 2:52 PM      |
| `scene-10.jpg` | 3:00 PM      |
| `scene-11.jpg` | 3:08 PM      |
| `scene-12.jpg` | 3:35 PM      |

Want more trip photos available? Copy any photo from `public/photos/Photos From Trip/` into `public/site-photos/` with a simple name, then reference it in the JSON.
