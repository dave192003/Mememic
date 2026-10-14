<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/16ff7bf0-ffcf-49b9-be7a-2de0aedd35e1" />


# Mememic

**Say the meme. Match the line. Become the meme.**

Mememic is a fun, interactive web game where players recreate famous lines from Filipino and global memes using their own voices. The game compares the player's spoken words with the original meme quote and calculates an accuracy score.

From iconic Pinoy meme lines to unforgettable internet moments, Mememic turns meme culture into a voice-powered guessing and performance challenge.

## Features

-  **Voice-Based Gameplay** — Speak famous meme lines using your microphone.
-  **Filipino Memes** — Recreate iconic lines from Filipino internet culture.
-  **Global Memes** — Challenge yourself with popular memes from around the world.
-  **Accuracy Scoring** — Get a score based on how closely your spoken line matches the original quote.
-  **Meme Challenges** — Test your ability to remember and deliver memorable lines.
-  **Competitive Gameplay** — Build toward leaderboards and score-based challenges as the project evolves..

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS

### Planned Technologies
- Express.js for backend services
- PostgreSQL for persistent data storage
- Speech-to-text processing for spoken-line transcription

*The planned technologies may change as development progresses.*

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dave192003/Mememic.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MemeMic
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually:

   ```text
   http://localhost:5173
   ```

##  How to Play

1. Choose a meme challenge (Local or Global).
2. Remember the famous memes.
3. Speak the line into your microphone.
4. Let the game process your speech.
5. View your accuracy score and try to beat your previous result.

*Gameplay steps may change as features are implemented.*

## Scoring System

The initial scoring approach focuses on **text accuracy, pitch accuracy, Timing accuracy, Energy accuracy**:

1. Convert the player's speech into text.
2. Calculate the pitch of a voice and compare it to original audio.
3. Analyze and calculate the timing and compare it to original audio.
4. Calculate the volume/energy accuracy
5. Compare the recognized transcript with the original meme line.
6. Calculate a similarity score.
7. Display the result to the player.


## Privacy and Security

- Microphone access should only be requested when needed for gameplay.


## Contributing

Contributions, suggestions, and bug reports are welcome. If you'd like to contribute, fork the repository, create a branch for your changes, and submit a pull request.

**Mememic — Where memes meet your voice.** 
