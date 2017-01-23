import { connect } from 'react-redux'

import SearchView from './SearchView'

function mapStateToProps (state) {
    return {
        connections: state.connections,
        activeTab: state.activeTab
    }
}

function mapDispatchToProps (dispatch) {
    return {
        setUrl (id, url) {
            dispatch({
                type: 'SET_URL',
                id,
                url: makeSureItsGotHttp(url)
            })
        }
    }
}

const Search = connect(mapStateToProps, mapDispatchToProps)(SearchView)

export default Search

function makeSureItsGotHttp (url) {
    const lowerCaseUrl = url.toLowerCase()
    const hasHttp = lowerCaseUrl.indexOf("http://") === 0
    const hasHttps = lowerCaseUrl.indexOf("https://") === 0
    let result
    if ( !hasHttps && !hasHttp )
        result = `http://${url}`
    else
        result = url
    return result
}
