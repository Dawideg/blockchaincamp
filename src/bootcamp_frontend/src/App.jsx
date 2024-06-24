import { useState } from "react";

function App() {
  const [count, SetCount] = useState(0);
  return (
    <main>
      <p>Siema</p>
      <button onClick={()=>SetCount(count+1)}>{count}</button>
    </main>
  );
}

export default App;
