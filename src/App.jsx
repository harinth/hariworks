import React, { useState } from 'react';

import {concepts, examples} from './Coredata';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = (selectedTab) => {
    setSelectedTopic(selectedTab);
  };

  let topic = <p>Please select a topic</p>;
  if(selectedTopic) {
    topic = (<div id="tab-content">
      <h2>{examples[selectedTopic].title}</h2>
      <p>{examples[selectedTopic].description}</p>
      <pre>
        <code>
          {examples[selectedTopic].code}
        </code>
      </pre>
    </div>);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            {concepts.map((item) => {
              return <CoreConcepts key={item.id} {...item} />
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {topic}
        </section>
      </main>
    </div>
  );
}

export default App;
