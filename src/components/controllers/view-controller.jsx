import React from 'react'
import { Label,CustomInput } from 'reactstrap'
import PropTypes from 'prop-types'

const ViewController = ({view,changeView})=>(
    <div className="d-flex">
        <Label for="list-view" className="mr-4">
            <CustomInput 
                type="radio"
                name="view"
                value="list"
                id="list-view"
                onChange={e=>{changeView(e)}}
                className="d-inline-block"
                checked={view==='list'}
            />
            List View
        </Label>
        <Label for="table-view" className="mr-4">
            <CustomInput 
                type="radio"
                name="view"
                value="table"
                id="table-view"
                onChange={e=>{changeView(e)}}
                className="d-inline-block"
                checked={view==='table'}
            />
            Table View 
        </Label>

    </div>
)
ViewController.propTypes = {
    view:PropTypes.string.isRequired,
    changeView:PropTypes.func.isRequired
}

export default ViewController