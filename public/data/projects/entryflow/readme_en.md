## Overview

**EntryFlow** runs entirely in the browser — no server, no cloud. It uses TensorFlow.js with the COCO-SSD model to detect people in a live video stream, tracks each individual with a custom Centroid/IOU algorithm, and counts them as they cross a configurable virtual line.

## How It Works

1. **Detection** — COCO-SSD detects all `"person"` bounding boxes in each video frame at ~15-30 FPS.
2. **Tracking** — A custom Centroid tracker assigns a persistent ID to each detected person across frames using IoU overlap scoring.
3. **Counting** — When a tracked centroid crosses the virtual line, its direction (IN or OUT) is recorded and the counter updates.
4. **Logging** — Each entry/exit event is logged with a timestamp in the side panel.

## Key Features

- 🔒 **100% client-side** — no video data ever leaves the browser
- 🎯 **Adjustable detection threshold** — tune for your environment
- ↕️ **Bidirectional counting** — separate IN / OUT counters
- 📋 **Event log** — timestamped entry/exit history
- 📷 **Snapshot export** — capture frames as PNG

## Tech Stack

| Layer | Technology |
|---|---|
| ML Model | TensorFlow.js · COCO-SSD |
| Tracking | Custom Centroid / IOU |
| Frontend | Vue 3 · Tailwind CSS · Vite |
| Deploy | GitHub Pages |
