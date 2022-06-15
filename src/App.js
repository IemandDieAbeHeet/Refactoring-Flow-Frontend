import './App.css';
import Header from './components/GeneralComponents/Header';
import AboutUs from './components/AboutUs';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AssignmentsPage from './components/AssignmentComponents/AssignmentsPage';
import ProgressPage from './components/ProgressPage';
import UploadProjectPage from './components/CodeUploadComponents/UploadMethodList';
import HomePage from './components/HomePage';
import Footer from './components/GeneralComponents/Footer';
import AssignmentDetailPage from './components/AssignmentComponents/LearningOutcomes';
import UploadMethodList from './components/CodeUploadComponents/UploadMethodList';
import GitUpload from './components/CodeUploadComponents/GitUploadPage';
import FolderUpload from './components/CodeUploadComponents/FolderUploadPage';
import AssignmentInProgress from './components/AssignmentComponents/AssignmentsInProgress';
import Login from './components/LoginComponents/Login';
import SessionHandler from './SessionHandler/SessionHandler';
import Course from './components/CourseComponents/Course';
import CodeFeedbackPage from './components/CodeFeedbackComponents/CodeFeedbackPage';
import AssignmentWorkspace from './components/AssignmentComponents/AssignmentWorkspace';


function App() {
  if(SessionHandler.getStudentId() == null){
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<AboutUs/>}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
  else{
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/Course' element={<Course/>}/>
            <Route path='/assignments' element={<AssignmentsPage/>}/>
            <Route path='/upload' element={<UploadMethodList/>}/>
            <Route path='/upload/github' element={<GitUpload gitPlatform='GitHub'/>}/>
            <Route path='/upload/gitlab' element={<GitUpload gitPlatform='GitLab'/>}/>
            <Route path='/upload/folder' element={<FolderUpload/>}/>
            <Route path='/upload' element={<UploadProjectPage/>}/>
            <Route path='/progress' element={<ProgressPage/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/assignment-details' element={<AssignmentDetailPage/>}/>
            <Route path='/studentassignments' element={<AssignmentInProgress/>}/>
            <Route path='/assignment/:codeId' element={<AssignmentWorkspace/>}/>
            <Route path='/edit' element={<CodeFeedbackPage/>} />
            
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
