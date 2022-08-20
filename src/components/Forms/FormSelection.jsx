import AnimatedForm from "./AnimatedForm";
import TravelNoteForm from "./TravelNoteForm";

const forms={
    "Travel": (props) => <TravelNoteForm {...props} />,

}

const FormSelection = ({ y, blanckPage, formType, setShowForm }) => {

    console.log(formType)
    const closeForm = () => {

        console.log("here")
        blanckPage.hide()
        setShowForm(false)
    }
    
    return (
        <AnimatedForm y={y} > { forms[formType]({ closeForm }) } </AnimatedForm>
    )
}

export default FormSelection