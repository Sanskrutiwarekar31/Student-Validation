import { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [gender, setGender] = useState('');
    const [course, setCourse] = useState('');
    const [semester, setSemester] = useState('');

    const [submittedStudent, setSubmittedStudent] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() === '') {
            alert('Please enter your name');
        }
        else if (roll.trim() === '') {
            alert('Please enter your roll number');
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email');
        }
        else if (!/^[0-9]{10}$/.test(phone)) {
            alert('Phone number must be 10 digits');
        }
        else if (gender === '') {
            alert('Please select your gender');
        }
        else if (course === '') {
            alert('Please select a course');
        }
        else if (semester === '') {
            alert('Please select your semester');
        }
        else {
            setSubmittedStudent({
                name,
                roll,
                email,
                phone,
                gender,
                course,
                semester
            });
        }
    }

    return (
        <div className="container">
            <h1>Student Registration Form</h1>
            <p className="subtitle">
                Client Side Validation Using ReactJS
            </p>

            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label>Roll Number</label>
                    <input
                        type="text"
                        placeholder="Enter Roll Number"
                        value={roll}
                        onChange={(e) => setRoll(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        placeholder="10 Digit Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label>Gender</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="field">
                    <label>Course</label>
                    <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    >
                        <option value="">Select Course</option>
                        <option value="AIML">AIML</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Cyber Security">Cyber Security</option>
                    </select>
                </div>

                <div className="field">
                    <label>Semester</label>
                    <select
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                    >
                        <option value="">Select Semester</option>
                        <option value="1">Semester 1</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                    </select>
                </div>

                <button type="submit">Register Now</button>
            </form>

            {submittedStudent && (
                <div className="result">
                    <h2>Registration Successful!</h2>

                    <p><b>Name:</b> {submittedStudent.name}</p>
                    <p><b>Roll Number:</b> {submittedStudent.roll}</p>
                    <p><b>Email:</b> {submittedStudent.email}</p>
                    <p><b>Phone:</b> {submittedStudent.phone}</p>
                    <p><b>Gender:</b> {submittedStudent.gender}</p>
                    <p><b>Course:</b> {submittedStudent.course}</p>
                    <p><b>Semester:</b> {submittedStudent.semester}</p>
                </div>
            )}
        </div>
    );
}

export default App;




















