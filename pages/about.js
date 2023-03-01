import React from "react";
import styles from '../styles/about.module.css'
export default function (){
    return (
        <div className={styles.container}>
            <h1>About Hunting Coder</h1>
            <h2>Introduction</h2>
            <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper a urna id molestie. Etiam ultrices, neque vel rhoncus iaculis, augue magna gravida dui, et lacinia libero ligula eget ipsum. Duis ornare tempor metus, in venenatis eros tristique nec. Proin vel tortor nisi. Etiam scelerisque.</p>
            <h2>Services Offered 👇</h2>
            <p>We offers the services in : -</p>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
            </ul>
            <p className={styles.para}>Lorem ipsum dolo sit amet, consectetur adipiscing elit. Cras ullamcorper a urna id molestie. Etiam ultrices, neque vel rhoncus iaculis, augue magna gravida dui, et lacinia libero ligula eget ipsum. Duis ornare tempor metus, in venenatis eros tristique nec. Proin vel tortor nisi. Etiam scelerisque.</p>
            <h2>Contact Us</h2>
            <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper a urna id molestie. Etiam ultrices, neque vel rhoncus iaculis, augue magna gravida dui, et lacinia libero ligula eget ipsum. Duis ornare tempor metus, in venenatis eros tristique nec. Proin vel tortor nisi. Etiam scelerisque.</p>
        </div>
    )
}