import CreateTodoButton from './CreateTodoButton'
import CentralizedBox from '../shared/CentralizedBox'
import Header from '../shared/Header'
import FormSelectionList from './FormSelectionList'
import BlanckPage from '../shared/BlanckPage'
import { AnimatePresence } from "framer-motion"
import { useState } from 'react'
import './createTodoButton.css'
import FormSelection from '../Forms/FormSelection'

const CreateNoteReminder = ({ blanckPage }) => {

    const [showFormSelectionList, setShowFormSelectionList] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [formType, setFormType] = useState("Travel")

    const onClick = () => setShowFormSelectionList(true)
    return (
        <>
            <CentralizedBox>
                <Header title="Add a Note" />
                <CreateTodoButton onClick={onClick} setShowFormSelectionList={setShowFormSelectionList} />
                <AnimatePresence>
                    { showFormSelectionList && <FormSelectionList 
                                                    setFormType={setFormType}
                                                    setShowForm={setShowForm} 
                                                    blanckPage={blanckPage}
                                                    setShowFormSelectionList={setShowFormSelectionList} /> }
                </AnimatePresence>
            </CentralizedBox>
            {
                blanckPage.toggled && <BlanckPage />
            }
            <AnimatePresence>
                { 
                    showForm && <FormSelection 
                                    formType={formType} 
                                    blanckPage={blanckPage}
                                    setShowForm={setShowForm} /> 
                }
            </AnimatePresence>
        </>
        
    )
}

export default CreateNoteReminder