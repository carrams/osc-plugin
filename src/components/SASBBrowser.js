import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import CompanyMetrics from './CompanyMetrics.js';
import NavBar from './NavBar.js';
import SearchPage from './SearchPage.js';
import MetricComparison from './MetricComparison.js';


function SASBBrowser() {
    return (
        <Router>
            <NavBar />
                <Switch>
                    <Route exact path="/sasb-browser.html">
                        <SearchPage />
                    </Route>
                    <Route exact path="/search-page.html">
                        <SearchPage />
                    </Route>
                    <Route exact path="/company-metrics.html">
                        <CompanyMetrics />
                    </Route>
                    <Route exact path="/metric-comparison.html">
                        <MetricComparison />
                    </Route>
                </Switch>
        </Router>

    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nav_bar: {
        // position: 'relative',
        // left: '50%',
        // transform: 'translate(-50%, 0%)',
        // width: 'fit-content',
        marginBottom: '50px'
    }
}

export default SASBBrowser;