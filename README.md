# 🧠 Trivia Quiz App – React Native Interactive Quiz Application
A responsive and interactive **Trivia Quiz App** built using **React Native**. This application presents users with a series of multiple-choice questions, allows them to select answers, review their selections before submitting, and provides a final score summary. It uses `FlatList` for performance-efficient rendering, `TouchableOpacity` for intuitive answer selection, and `Tab Navigation` for smooth screen transitions between the quiz and summary screens.
---
## 📌 Project Overview
The Trivia Quiz App is designed as a mobile learning and testing tool. It guides users through a series of questions stored in a JSON file. The user interface is mobile-friendly and allows answer review before final submission. At the end of the quiz, a score summary is displayed based on the number of correct answers selected.
---
## 🎯 Key Features
- 📋 **Question Display:** Renders all questions efficiently using `FlatList`.
- 🧠 **Multiple Choice Selection:** Users select one of several answers using `TouchableOpacity` buttons.
- 🔄 **Answer Review:** Before submitting, users can revisit and change their answers.
- 📊 **Scoring System:** Tracks and calculates the number of correct responses in real time.
- 🧭 **Tab Navigation:** Seamless transition between the quiz screen and summary screen using `react-navigation`'s bottom tabs.
- 📁 **JSON-based Questions:** All quiz data (questions, choices, correct answers) are stored in a structured JSON file.
- 📱 **Responsive UI:** Fully functional and optimized for various screen sizes.
---
## 🛠️ Technologies Used
- **Framework:** React Native
- **Language:** JavaScript (ES6+)
- **Navigation:** `@react-navigation/bottom-tabs`
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Data Handling:** Local JSON file
- **UI Components:** FlatList, TouchableOpacity, View, Text
- **IDE:** Visual Studio Code
- **Testing:** Android Emulator, Physical Devices
---
## 📁 Project Structure
TriviaQuizApp/
├── App.js
├── data/
│ └── questions.json
├── screens/
│ ├── QuizScreen.js
│ └── SummaryScreen.js
├── components/
│ ├── QuestionCard.js
│ └── OptionButton.js
├── navigation/
│ └── TabNavigator.js
├── assets/
│ └── icons/ and images/
└── README.md
---
#ScreenShots
![image](https://github.com/user-attachments/assets/58d2d3ba-85db-42ec-b9c1-6ae56ca8a8c4)
![image](https://github.com/user-attachments/assets/4106c592-d5ae-46d8-89ed-eb0ddc14b142)
![image](https://github.com/user-attachments/assets/08d3a557-c887-400b-8de8-30510172b965)
![image](https://github.com/user-attachments/assets/19425d49-55b5-473d-9f8d-abab3337c644)
![image](https://github.com/user-attachments/assets/5317da75-7f27-4fd3-bdd6-504b66fe6d25)
![image](https://github.com/user-attachments/assets/8819ccdf-2c24-48ad-bad4-53227783d22b)
![image](https://github.com/user-attachments/assets/4a9f554b-c793-44a9-8193-4a2a8ead5cc1)
![image](https://github.com/user-attachments/assets/9d715621-1c0b-4b26-8326-fb5a240b2a1d)
---
🧠 Learning Outcomes
Built a real-time interactive quiz app using React Native.
Mastered list rendering and answer selection using FlatList and TouchableOpacity.
Designed and implemented a clean mobile UI with logical answer review flow.
Gained experience using React Navigation with tab navigators.
Strengthened understanding of component-based architecture and stateful logic.

📜 License
This project is for educational purposes only. Not intended for commercial distribution.
