# Hero Section Update - 2025-12-25

## Objective
Update the Hero section to replace the current media with a specific video file and remove the "TRAMONTI" branding text as per user request.

## User Story
As a user visiting the site, I want to see a specific video (1224.mp4) playing in the hero section that plays once and stops, without the "TRAMONTI" text overlaying it, to have a cleaner visual experience.

## Components
- `components/Hero.tsx`: Main component to be modified.

## Changes
1.  **Media**: Change video source to `/immagini/1224.mp4`. Ensure `loop` is disabled.
2.  **Content**: Remove `<h1>TRAMONTI</h1>` element.
3.  **Behavior**: Video will auto-play on load, mute (required for autoplay), and stop at the last frame or black screen (default HTML5 video behavior). Reloading the page will restart it.

## Verification
- **Manual**:
    - Load the page.
    - Check if `1224.mp4` plays.
    - Wait for video to end. Verify it stops and does not loop.
    - Verify "TRAMONTI" text is gone.
    - Reload page to verify video restarts.
