import MainLayout from "./Layouts/MainLayout/MainLayout";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import CreateNoteReminder from "./components/CreateTodoButton/CreateNoteReminder";
import BlanckPage from "./components/shared/BlanckPage";
import { Routes, Route } from "react-router-dom"
import NoteCategoryList from "./components/NoteCategory/NoteCategoryList";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import NoteList from "./components/Notes/NoteList";
import Home from "./pages/Home/Home";
import NoteContextProvider from "./context/NoteContext";
import TravelNoteForm from "./components/Forms/TravelNoteForm";
import FormSelectionList from "./components/CreateTodoButton/FormSelectionList";
import { useToggle } from "./hooks/useToggle";


function App() {

  const blanckPage = useToggle()
  //console.log(blanckPage.toggled)

  return (
    <NoteContextProvider>
      <MainLayout>
        <Routes >
          <Route path="/" element={<Home blanckPage={blanckPage} />} />
          <Route path="/notes" element={<NoteCategoryList blanckPage={blanckPage} />} />  
          <Route path="/notes/:category" element={<NoteList blanckPage={blanckPage} />} />      
        </Routes>
        
      </MainLayout>
    </NoteContextProvider>
  );

}

export default App;
