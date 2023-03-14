import { useState } from 'react'

export default function Index() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  const styles = { main: '', icon: '', result: ''}
  const onSubmit = () => {}

  return (
    <div>
    <main className={styles.main}>
      <img src="/dog.png" alt="dog icon" className={styles.icon} />
      <h3>Name my pet</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="animal"
          placeholder="Enter an animal"
          value={animalInput}
          onChange={(e) => setAnimalInput(e.target.value)}
        />
        <input type="submit" value="Generate names" />
      </form>
      <div className={styles.result}>{result}</div>
    </main>
  </div>
  );
}
