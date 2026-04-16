//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  // add variables here
  const name = 'Niloofar';
  const age = 34;
  const hobbies = ['Design', 'Coding', 'Traveling'];

  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>

      <p>
        Hi, my name is {name}. I am {age} years old and I love building apps and
        learning new things.
      </p>

      <h2>My Hobbies:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
