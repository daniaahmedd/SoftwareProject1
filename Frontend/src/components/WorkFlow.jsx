// WorkflowForm.jsx
import React, { useState } from 'react';
//import styles from './WorkFlow.css';  // Updated import for CSS module

// Consider fetching these from your backend if they are dynamic
const categories = ["Software", "Hardware", "Network"]; // Example categories

const WorkflowForm = ({ addWorkflow }) => {
    const [category, setCategory] = useState(categories[0]);
    const [subcategory, setSubcategory] = useState('');
    const [solution, setSolution] = useState('');
    const [error, setError] = useState(''); // State for error handling

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!category || !subcategory || !solution) {
            // Provide specific feedback based on missing field
            setError(`Please fill in all fields: 
                      ${!category ? 'Category, ' : ''} 
                      ${!subcategory ? 'Subcategory, ' : ''} 
                      ${!solution ? 'Expected Solution' : ''}`);
            return;
        }
        addWorkflow({ category, subcategory, expectedSolution: solution });
        setCategory(categories[0]);
        setSubcategory('');
        setSolution('');
        setError(''); // Clear error on successful submission
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.heading}>Add a Workflow</h2>
                {error && <p className={styles.error}>{error.trim()}</p>} {/* Display error if exists */}
                <label className={styles.label}>
                    Category:
                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        className={styles.input}
                        required
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </label>
                <label className={styles.label}>
                    Subcategory:
                    <input
                        type="text"
                        value={subcategory}
                        onChange={(e) => setSubcategory(e.target.value)}
                        required
                        className={styles.input}
                    />
                </label>
                <label className={styles.label}>
                    Expected Solution:
                    <textarea
                        value={solution}
                        onChange={(e) => setSolution(e.target.value)}
                        required
                        className={styles.textarea}
                    ></textarea>
                </label>
                <button type="submit" className={styles.button}>Add Workflow</button>
            </form>
        </div>
    );
};

export default WorkFlow;