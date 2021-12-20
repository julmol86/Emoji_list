import React from "react";
import Entry from "./Entry";
import emojipedia from "./emoji";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>My most used emoji</h1>
      <div>{emojipedia.map(createEntry)}</div>
    </div>
  );
}

export default App;
