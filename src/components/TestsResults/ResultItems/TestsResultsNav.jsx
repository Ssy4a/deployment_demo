import React from 'react'
import { Link } from 'react-router-dom';
import ResultLink from './ResultLink';
import TitleElement from './../../UI/TitleElement';
import styles from "../../../styles/content.module.css"

const TestsResultsNav = ({ resultsWithMatchingId, test }) => {

    const getLink = () => {
        return `/myTests/${test._id}`
    }

    return (
        <div>
            <TitleElement text={`Результати тесту "${test.name}"`} />
            <div className={styles.linksRow}>
                {resultsWithMatchingId.length > 0 ?
                    resultsWithMatchingId.map(result => <ResultLink result={result} key={result._id} />)
                    : <div className={styles.message}>Цей тест поки що ніхто не пройшов, <Link to={getLink()}>активуйте його</Link> та поширте ідентифікатор або QR код.</div>
                }
            </div>
        </div>
    )
}

export default TestsResultsNav