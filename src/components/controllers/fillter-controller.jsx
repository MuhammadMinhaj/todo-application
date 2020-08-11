import React from 'react'
import { Button,ButtonGroup } from 'reactstrap'
import PropTypes from 'prop-types'
const FillterController = ({handleFillter})=>(
    <ButtonGroup>
        <Button onClick={()=>{handleFillter('all')}}>
            All
        </Button>

        <Button onClick={()=>{handleFillter('running')}}>
            Running 
        </Button>

        <Button onClick={()=>{handleFillter('complited')}}>
            Complited
        </Button>
    </ButtonGroup>
)

FillterController.propTypes = {
    handleFillter:PropTypes.func.isRequired 
}

export default FillterController