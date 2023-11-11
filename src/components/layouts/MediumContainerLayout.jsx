import {PropTypes} from 'prop-types'

export const MediumContainerLayout = ({ children }) => {
    return (
        <main className="flex h-auto px-3 bg-black flex-col ">
            {children}
        </main>
    )
}

MediumContainerLayout.propTypes = {
    children: PropTypes.node.isRequired,
}