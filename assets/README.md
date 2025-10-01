Place images you want to reference directly from the app in this folder.

How to use

- Files placed here will be served at /assets/<filename> in the running Next.js app.
  - Example: if you add `logo.png` here, you can reference it with:

    <Image src="/assets/logo.png" alt="Logo" width={800} height={600} />

  - Or with a plain link: `/assets/photo.jpg`

Notes and recommendations

- Use web-friendly formats (JPEG/PNG/WebP/AVIF). WebP or AVIF are recommended for smaller size.
- Prefer reasonable dimensions for hero/product images (e.g., 1200–2000px wide). Scaled-down thumbnails are fine for small UI pieces.
- If you plan to use Next.js's `next/image`, supply width/height props or use `fill` with a positioned parent.
- If you want to reference these images from `src/lib/placeholder-images.ts`, update that file to point to `/assets/<filename>` instead of the built-in placeholder data.

Example replacement entry for `src/lib/placeholder-images.ts`:

  {
    id: "my-photo",
    imageUrl: "/assets/my-photo.jpg",
    imageHint: "Exterior view of product",
  }

If you want, I can also:
- Add a sample import/update to `src/lib/placeholder-images.ts` showing how to switch to your image files.
- Create a tiny script to validate filenames and sizes.

Place any images here and tell me which ones to wire into the product data and I will update the code to use them.
