# Interactive Quiz Platform

A React-based interactive quiz platform built with Vite for the ReactJS Assignment 2. This app allows users to attempt quizzes with instant feedback, track their progress, and view attempt history, featuring both multiple-choice and integer-type questions.

## Features

- **Quiz Creation & Management**:
  - Displays a list of 10 questions (5 multiple-choice, 5 integer-type) from the provided `sample_quiz.pdf`.
  - Supports multiple attempts with attempt history tracking.

- **User Interaction**:
  - Instant feedback on answers (green for correct, red for wrong).
  - 30-second timer per question for a dynamic experience.

- **Progress Tracking**:
  - Scoreboard displayed at the end of each quiz, showing the number of correct answers.
  - Attempt history saved persistently using IndexedDB.

- **UI/UX Design**:
  - Modern, responsive design with card-based layouts, smooth transitions, and a clean color scheme.
  - Instructions provided inline for user guidance.

- **Bonus Features**:
  - Quiz history stored in IndexedDB for persistence across sessions.

- **Deployment**:
  - Deployed on Vercel with a mobile-friendly design.

## How to Run the App Locally

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository**:
   ```
   git clone https: https://github.com/Navaneeth1235/Quiz-Platform ( github link )
   cd quiz-platform ( navigate to the folder in terminal )
   ```
    ##Install Dependencies:
    ```
   npm install
    ```
    
    Run the Development Server:
   ```
    npm run dev
   ```
    
    Open the App:
   ```
    Open your browser and navigate to http://localhost:5173 to view the quiz platform.
    ```
    
    Tech Stack
    Frontend: React, Vite
    Storage: IndexedDB (via Dexie.js)
    Styling: Custom CSS with responsive design
    Deployment: Vercel
    
    Notes
    The quiz adheres to the assignment's 30-second-per-question timer (not the 30-minute total from the sample quiz instructions, per assignment requirements).
    No calculators are needed, as specified in the quiz instructions.
    Happy quizzing!


---

### Final Submission
- **GitHub Repo Link**:https://github.com/Navaneeth1235/Quiz-Platform
- **Deployed Link**:https://quiz-platform-rust.vercel.app/
