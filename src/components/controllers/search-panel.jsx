import React from 'react'
import { Input,Button } from 'reactstrap'
import PropTypes from 'prop-types'

const SearchPanel = ({term,handleSearch,toggleForm})=>(
    <div className="d-flex">
        <Input
            placeholder="Enter search terms"
            className="mr-3"
            value={term}
            onChange={(e)=>{handleSearch(e.target.value)}}
        />
        <Button color="success" onClick={toggleForm}>
            New 
        </Button>
    </div>
)

SearchPanel.propTypes= {
    handleSearch:PropTypes.func.isRequired,
    toggleForm:PropTypes.func.isRequired 
}

export default SearchPanel