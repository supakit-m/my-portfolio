## Overview

Souldium is a server-driven party card game platform. All game logic runs on the backend — the frontend is purely a rendering layer that reacts to server broadcasts via WebSocket.

## Games Supported

- 🕵️ **Spyfall** — One player is the spy. Others know the location, the spy does not. Can you blend in?
- 🤔 **Who Am I?** — Guess who you are from yes/no questions only.
- 🐺 **Werewolf** — Classic social deduction. Villagers vs. Werewolves.

## Architecture

The frontend never holds game state. Every action (join room, start game, submit answer) goes to the server via WebSocket. The server validates, updates state, then broadcasts the new state to all connected clients.

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | FastAPI · Python · WebSocket |
| Frontend | Vue 3 · Pinia · Tailwind CSS |
| Deploy | Railway |
