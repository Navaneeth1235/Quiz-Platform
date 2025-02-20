import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <div className="App container">
      <h1>Interactive Quiz Platform</h1>
      <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
        <h3>Instructions:</h3>
        <ol>
          <li>For multiple-choice questions, select the one best answer (A, B, C, or D).</li>
          <li>For integer-type questions, write your numerical answer clearly.</li>
          <li>No calculators unless specified.</li>
          <li>You have 30 seconds per question to complete this quiz.</li>
        </ol>
      </div>
      <Quiz />
    </div>
  );
}

export default App;