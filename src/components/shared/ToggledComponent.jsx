

const ToggledComponent = ({ toggled, children }) => (

    <>
        { toggled ? children : null }
    </>
)

export default ToggledComponent