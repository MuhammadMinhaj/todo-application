import React from 'react'
import { Button,ButtonGroup } from 'reactstrap'
import PropTypes from 'prop-types'
const BulkController = ({clearSelected,clearCompleted,reset})=>(
    <ButtonGroup>
        <Button className="btn-warning" onClick={clearSelected}>
            ClearSelected
        </Button>

        <Button className="btn-warning" onClick={clearCompleted}>
            ClearCompleted 
        </Button>

        <Button className="btn-warning" onClick={reset}>
            Reset
        </Button>
    </ButtonGroup>
)

BulkController.propTypes = {
    clearSelected:PropTypes.func.isRequired ,
    clearSelected:PropTypes.func.isRequired ,
    reset:PropTypes.func.isRequired ,
}

export default BulkController 