import React from 'react'
import { useParams } from 'react-router-dom';
import TestConstructor from '../TestConstructor';

const EditTest = () => {

    let { testToEditId } = useParams()

    return (
        <TestConstructor testToEditId={testToEditId}/>
    )
}

export default EditTest