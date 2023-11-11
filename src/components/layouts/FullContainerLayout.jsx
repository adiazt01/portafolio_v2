import {PropTypes} from 'prop-types'

export const FullContainerLayout = ({ children }) => {
    return (
        <main className="flex h-auto bg-black flex-col">
            {children}
        </main>
    )
}

FullContainerLayout.propTypes = {
    children: PropTypes.node.isRequired,
}