import {PropTypes} from 'prop-types'

export const FullWidthLayout = ({ children }) => {
    return (
        <main className="flex h-auto bg-black flex-col px-2">
            {children}
        </main>
    )
}

FullWidthLayout.propTypes = {
    children: PropTypes.node.isRequired,
}