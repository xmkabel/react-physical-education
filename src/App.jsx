import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ExamCards from './components/ExamCards/ExamCards';
import Intro from './components/Intro';
import Video from './components/Video';
import FirstChapterRoutes from './components/routes/FirstChapterRoutes';
import SecondChapterRoutes from './components/routes/SecondChapterRoutes';
import ThirdChapterRoutes from './components/routes/ThirdChapterRoutes';
import FourthChapterRoutes from './components/routes/FourthChapterRoutes';
import FifthChapterRoutes from './components/routes/FifthChapterRoutes';
import SixthChapterRoutes from './components/routes/SixthChapterRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/exams" element={<ExamCards />} />
        <Route path="/home" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
        
        {/* Chapter Routes */}
        {FirstChapterRoutes}
        {SecondChapterRoutes}
        {ThirdChapterRoutes}
        {FourthChapterRoutes}
        {FifthChapterRoutes}
        {SixthChapterRoutes}
      </Routes>
    </>
  );
}

export default App;
