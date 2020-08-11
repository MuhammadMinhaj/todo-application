import React from 'react'
import SearchPanel from './search-panel'
import PropTypes from 'prop-types'
import { Row,Col } from 'reactstrap'


import FillterController from './fillter-controller'
import BulkController from './bulk-controller'
import ViewController from './view-controller'

const Controller = ({
    term,
    view,
    changeView,
    handleSearch,
    toggleForm,
    handleFillter,
    clearSelected,
    clearCompleted,
    reset
})=>(
    <div>
        <SearchPanel 
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
        />
        <Row className="my-4"> 
            <Col md={{size:4}}>
                <FillterController handleFillter={handleFillter}/>
            </Col>
            <Col md={{size:4}}>
                <ViewController view={view} changeView={changeView}/>
            </Col>
            <Col md={{size:4}}>
                <div classNmae="d-flex">
                    <BulkController 
                        clearSelected={clearSelected}
                        clearCompleted={clearCompleted}
                        reset={reset}
                    />
                </div>
            </Col>
        </Row>
    </div>
)
Controller.propTypes= {
    handleSearch:PropTypes.func.isRequired,
    toggleForm:PropTypes.func.isRequired,

}
// Test the project
export default Controller