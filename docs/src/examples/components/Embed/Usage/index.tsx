import * as React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Usage = () => (
  <ExampleSection title="">
    <ComponentExample
      title="YouTube"
      description="An embed component can embed a YouTube video by iframe."
      examplePath="components/Embed/Usage/EmbedExampleYouTube"
    />
  </ExampleSection>
)

export default Usage
