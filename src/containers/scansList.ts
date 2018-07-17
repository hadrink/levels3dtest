import { connect } from 'react-redux'
import ScansList from '../components/ScansList'
import { getUserScansThunk, createScanThunk } from '../thunks/user'

/**
 * Map dispatch to props. Allow to dispatch actions from components.
 * @param dispatch 
 * @param props 
 */
const mapDispatchToProps = (dispatch, props) => ({
    getUserScans: () => dispatch(getUserScansThunk()),
    createScan: (name: string, room: string, comment: string) => {
        dispatch(createScanThunk(name, room, comment))
        .then(() => {
            dispatch(getUserScansThunk())
        })
    },
})


/**
 * Bind redux state to props.
 * @param state 
 */
const mapStateToProps = (state) => ({
    scans: state.user.get('scans')
})

export default connect(mapStateToProps, mapDispatchToProps)(ScansList)